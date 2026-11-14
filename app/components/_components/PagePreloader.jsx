"use client";

import { useEffect, useRef, useState } from "react";

// The quiet preloader for every page except home: the eyebrow types in, the
// page name rises word by word, and a hairline draws underneath with the count
// riding its tip. About 2.4 seconds door to door, then it slides up and away.
const TYPE_MS = 28; // per character
const WORDS_AT = 250; // when the name starts rising
const WORD_STAGGER = 0.08; // seconds between words
const FILL_AT = 500;
const FILL_MS = 1500;
const HOLD_MS = 120; // beat at 100% before leaving
const OUT_MS = 700;
// Longest we will wait at 100% for the route to commit. If a click is
// intercepted somewhere downstream the navigation never lands, and without
// this cap the overlay would sit on a scroll-locked page forever.
const MAX_WAIT_MS = 5000;

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);
const easeOut = (n) => 1 - Math.pow(1 - n, 3);

export default function PagePreloader({ eyebrow, title, ready = true, onDone }) {
  const [gone, setGone] = useState(false);
  const [typed, setTyped] = useState("");
  const [risen, setRisen] = useState(false);
  const rootRef = useRef(null);
  const fillRef = useRef(null);
  const countRef = useRef(null);
  // On a client-side navigation the overlay must outlast the route change: it
  // plays its own timeline but holds at 100% until the new page has committed.
  const readyRef = useRef(ready);
  const onDoneRef = useRef(onDone);
  readyRef.current = ready;
  onDoneRef.current = onDone;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      document.body.style.overflow = prev;
      window.scrollTo(0, 0);
      setGone(true);
      onDoneRef.current?.();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(eyebrow);
      setRisen(true);
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

    let chars = 0;
    const typer = setInterval(() => {
      chars += 1;
      setTyped(eyebrow.slice(0, chars));
      if (chars >= eyebrow.length) clearInterval(typer);
    }, TYPE_MS);
    const rise = setTimeout(() => setRisen(true), WORDS_AT);

    const start = performance.now();
    let raf;
    let waitFrom = null; // when we started holding at 100% for the route
    let waited = 0;
    let gaveUp = false; // waited out MAX_WAIT_MS — leave without the route
    const tick = (now) => {
      const t = now - start;
      const p = easeOut(clamp01((t - FILL_AT) / FILL_MS));
      if (fillRef.current) fillRef.current.style.width = `${p * 100}%`;
      if (countRef.current) {
        countRef.current.style.left = `${p * 100}%`;
        // Trails the tip once there is room; near 0% it sits inside the rail
        // instead of hanging off the left edge.
        countRef.current.style.transform = `translateX(-${Math.min(1, p * 10) * 100}%)`;
        countRef.current.textContent = `${Math.round(p * 100)}%`;
      }
      const leaveAt = FILL_AT + FILL_MS + HOLD_MS;
      if (t > leaveAt) {
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
        const e = t - leaveAt - waited;
        const k = easeOut(clamp01(e / OUT_MS));
        if (rootRef.current) rootRef.current.style.transform = `translateY(${-100 * k}%)`;
        if (e >= OUT_MS) {
          finish();
          stop();
        }
      }
    };
    const frame = () => {
      if (done) return;
      tick(performance.now());
      if (!done) raf = requestAnimationFrame(frame);
    };
    // rAF pauses in a background tab; the interval keeps the timeline moving so
    // the overlay can never be left sitting on a locked page.
    // Ticks regardless of visibility: rAF also stalls when a tab is throttled
    // or not compositing without document.hidden ever flipping.
    const keepAlive = setInterval(() => {
      if (!done) tick(performance.now());
    }, 150);
    function stop() {
      cancelAnimationFrame(raf);
      clearInterval(keepAlive);
      clearInterval(typer);
      clearTimeout(rise);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      stop();
      document.body.style.overflow = prev;
    };
  }, [eyebrow]);

  if (gone) return null;

  const words = title.split(" ");
  const typing = typed.length < eyebrow.length;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[130] flex select-none items-center justify-center bg-page will-change-transform"
    >
      <span className="sr-only">Loading {title}</span>
      <div aria-hidden="true" className="w-[min(86vw,760px)]">
        <div className="min-h-[14px] text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          {typed}
          {typing && <span className="ml-1 inline-block h-[11px] w-1.5 animate-pulse bg-brand align-[-1px]" />}
        </div>
        <div
          className="mb-6 mt-3.5 text-[clamp(36px,6.4vw,84px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink"
          style={{ fontFamily: "var(--font-display), var(--font-body), system-ui, sans-serif" }}
        >
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
              <span
                className="inline-block transition-transform [transition-duration:800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: risen ? "none" : "translateY(110%)",
                  transitionDelay: `${i * WORD_STAGGER}s`,
                }}
              >
                {w}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </div>
        <div className="relative h-px bg-ink/15">
          <span
            ref={fillRef}
            className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-brand to-brand-2 shadow-[0_0_12px_rgba(255,77,87,0.6)]"
          />
          <b
            ref={countRef}
            className="absolute -top-[30px] left-0 whitespace-nowrap text-xs font-semibold text-mute"
          >
            0%
          </b>
        </div>
      </div>
    </div>
  );
}
