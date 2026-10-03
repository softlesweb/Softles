"use client";

import { useEffect, useRef, useState } from "react";

// A rebuild of the NeoLeaf preloader, matched beat for beat: the wordmark is a
// dim plate, a white wave rises through it over a fixed three seconds, the count
// in the corner tracks it, and then the plate goes solid white, blows up past the
// edges of the screen and fades, taking the overlay with it.
const VW = 1000; // wordmark viewBox — the reference box is 962x192, same ratio
const VH = 200;

const HOLD_MS = 1000; // gsap timeline delay: 1
const FILL_MS = 3000; // .to(progress, { duration: 3, ease: "none" })
const OUT_COUNTER_MS = 250; // .to(loadingProgress, { duration: .25 })
const OUT_SOLID_AT = 250; // then the plate fills solid
const OUT_SOLID_MS = 500; // gsap default duration
const OUT_BLOW_AT = 700; // "<90%" of that 0.5s tween
const OUT_BLOW_MS = 1000; // .to(logo, { duration: 1, opacity: 0, scale })
const OUT_FADE_AT = 1700;
const OUT_FADE_MS = 500;
const OUT_TOTAL = 2200;
// Longest we will wait at 100% for the route to commit. If a click is
// intercepted somewhere downstream the navigation never lands, and without this
// cap the overlay would sit on a scroll-locked page forever.
const MAX_WAIT_MS = 5000;

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);

// The reference draws this on a canvas; the same curve works as an SVG path.
// y = v*e - sin(0.02t + m) * sin(0.01t + m) * sin(0.05t + m) * amp, plotted at x = 3t.
function wavePath(p, phase, widthPx, amp) {
  const s = VW / (widthPx || VW); // viewBox units per CSS pixel
  const ampV = amp * s;
  const vV = VH + 1.75 * ampV; // canvas is taller than the box so the crest never clips
  const level = vV * (1 - p) - 0.875 * ampV; // canvas is centred, so half the extra sits above
  const bottom = VH + 0.875 * ampV;
  const steps = 96;
  let d = `M 0 ${bottom.toFixed(1)}`;
  for (let i = 0; i <= steps; i += 1) {
    const x = (VW / steps) * i;
    const t = x / s / 3; // the reference plots sample t at x = 3t
    const y =
      level -
      Math.sin(0.02 * t + phase) * Math.sin(0.01 * t + phase) * Math.sin(0.05 * t + phase) * ampV;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${d} L ${VW} ${bottom.toFixed(1)} L 0 ${bottom.toFixed(1)} Z`;
}

export default function BrandPreloader({ ready = true, onDone }) {
  const [gone, setGone] = useState(false);
  const rootRef = useRef(null);
  const boxRef = useRef(null);
  const pathRef = useRef(null);
  const solidRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  // On a client-side navigation the overlay holds at 100% until the new page
  // has committed, then plays its exit.
  const readyRef = useRef(ready);
  const onDoneRef = useRef(onDone);
  readyRef.current = ready;
  onDoneRef.current = onDone;

  useEffect(() => {
    // The page must not scroll underneath the overlay.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 1025;
    const amp = isDesktop ? 50 : 25; // the reference's wave height
    const start = performance.now();
    let raf;
    let shown = -1;
    let done = false;
    let waitFrom = null; // when we started holding at 100% for the route
    let waited = 0;
    let gaveUp = false; // waited out MAX_WAIT_MS — leave without the route

    const finish = () => {
      if (done) return;
      done = true;
      document.body.style.overflow = prev;
      window.scrollTo(0, 0);
      setGone(true);
      onDoneRef.current?.();
    };

    if (reduced) {
      const from = performance.now();
      const t = setInterval(() => {
        if (readyRef.current || performance.now() - from > MAX_WAIT_MS) {
          clearInterval(t);
          finish();
        }
      }, 120);
      return () => {
        clearInterval(t);
        document.body.style.overflow = prev;
      };
    }

    // rAF is paused in a background tab, so a slow interval keeps the timeline
    // moving when the page is hidden — otherwise a visitor who opens the site in
    // a background tab comes back to a frozen overlay and a locked page.
    const tick = (now) => {
      const t = now - start;
      const widthPx = boxRef.current?.offsetWidth || 0;
      const p = clamp01((t - HOLD_MS) / FILL_MS);

      if (pathRef.current) {
        pathRef.current.setAttribute("d", wavePath(p, (t / 1000) * 1.8, widthPx, amp));
      }
      const value = Math.round(p * 100);
      if (value !== shown && counterRef.current) {
        shown = value;
        counterRef.current.textContent = String(value);
      }

      if (t > HOLD_MS + FILL_MS) {
        // Once we have given up, stay given up — re-entering the wait on every
        // later frame would freeze the exit half-played.
        if (!readyRef.current && !gaveUp) {
          if (waitFrom === null) waitFrom = now;
          if (now - waitFrom < MAX_WAIT_MS) return;
          gaveUp = true; // the route is not coming; leave rather than hold the page
        }
        if (waitFrom !== null) {
          waited += now - waitFrom;
          waitFrom = null;
        }
        const e = t - (HOLD_MS + FILL_MS) - waited;
        if (progressRef.current) {
          progressRef.current.style.opacity = String(1 - clamp01(e / OUT_COUNTER_MS));
        }
        if (solidRef.current) {
          solidRef.current.style.opacity = String(clamp01((e - OUT_SOLID_AT) / OUT_SOLID_MS));
        }
        if (boxRef.current) {
          const k = clamp01((e - OUT_BLOW_AT) / OUT_BLOW_MS);
          const target = (window.innerWidth / (widthPx || 1)) * (isDesktop ? 2 : 1.5);
          boxRef.current.style.transform = `scale(${1 + (target - 1) * k})`;
          boxRef.current.style.opacity = String(1 - k);
        }
        if (rootRef.current) {
          rootRef.current.style.opacity = String(1 - clamp01((e - OUT_FADE_AT) / OUT_FADE_MS));
        }
        if (e >= OUT_TOTAL) {
          finish();
          stop();
        }
      }
    };

    const frame = () => {
      if (done) return;
      tick(performance.now());
      // Only queue the next frame if this one did not end the timeline, or the
      // loop would keep running (and keep yanking the page back to the top).
      if (!done) raf = requestAnimationFrame(frame);
    };
    // Ticks regardless of visibility: rAF also stalls when a tab is throttled
    // or not compositing without document.hidden ever flipping.
    const keepAlive = setInterval(() => {
      if (!done) tick(performance.now());
    }, 150);
    function stop() {
      cancelAnimationFrame(raf);
      clearInterval(keepAlive);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      stop();
      document.body.style.overflow = prev;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[130] flex select-none items-center justify-center bg-[#0E1219] text-center text-white"
    >
      <span className="sr-only">Loading SoftLes</span>
      <div className="relative w-full max-w-[80%] md:max-w-[70%] lg:max-w-[740px] xl:max-w-[900px]">
        <div ref={boxRef} className="relative w-full will-change-transform">
          <svg viewBox={`0 0 ${VW} ${VH}`} className="block w-full overflow-visible" aria-hidden="true">
            <defs>
              <clipPath id="sl-wordmark">
                <text
                  x={VW / 2}
                  y={162}
                  textAnchor="middle"
                  fontSize="176"
                  fontWeight="700"
                  letterSpacing="-6"
                  textLength={VW - 16}
                  lengthAdjust="spacingAndGlyphs"
                  style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                >
                  SoftLes
                </text>
              </clipPath>
            </defs>
            <g clipPath="url(#sl-wordmark)">
              {/* The dim plate the wordmark is cut out of */}
              <rect x="0" y="-120" width={VW} height={VH + 240} fill="#AAAAAA" opacity="0.3" />
              {/* The wave */}
              <path ref={pathRef} d={wavePath(0, 0, VW, 50)} fill="#FFFFFF" />
              {/* Goes solid just before the wordmark blows up */}
              <rect
                ref={solidRef}
                x="0"
                y="-120"
                width={VW}
                height={VH + 240}
                fill="#FFFFFF"
                style={{ opacity: 0 }}
              />
            </g>
          </svg>
        </div>
        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute right-0 top-full mt-1 text-[11px] font-medium sm:text-sm"
        >
          loading...{" "}
          <span ref={counterRef} className="inline-block text-right tabular-nums">
            0
          </span>
          %
        </div>
      </div>
    </div>
  );
}
