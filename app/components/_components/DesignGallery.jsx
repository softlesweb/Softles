"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion-presets";

// One capture inside a device screen. It drifts on its own, stops when you point
// at it, and after a moment hands the wheel over so you can read the page at your
// own pace — the scrollbar stays hidden either way.
function Capture({ src, alt, seconds, screenClass, compact = false }) {
  const boxRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [inView, setInView] = useState(false);

  // Hover intent: the wheel only belongs to the capture once you have settled on
  // it, so passing the cursor over on the way down the page never traps you.
  useEffect(() => {
    if (!hovered) {
      setEngaged(false);
      return;
    }
    const t = setTimeout(() => setEngaged(true), 260);
    return () => clearTimeout(t);
  }, [hovered]);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || hovered || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    let last = performance.now();
    let dir = el.scrollTop > 0 && el.scrollTop >= el.scrollHeight - el.clientHeight - 1 ? -1 : 1;

    const step = (now) => {
      const dt = Math.min(64, now - last);
      last = now;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0) {
        let next = el.scrollTop + dir * ((max / seconds) * (dt / 1000));
        if (next >= max) {
          next = max;
          dir = -1;
        } else if (next <= 0) {
          next = 0;
          dir = 1;
        }
        el.scrollTop = next;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hovered, inView, seconds]);

  return (
    <div
      ref={boxRef}
      className={`dg-cap ${screenClass} ${engaged ? "dg-cap-live" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- full-page capture, scrolled inside the screen */}
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
      <span
        aria-hidden="true"
        className={`pointer-events-none sticky bottom-0 left-0 z-10 block bg-gradient-to-t from-[#0b0d12]/85 to-transparent ${
          compact ? "-mt-16 h-16" : "-mt-24 h-24"
        }`}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none sticky bottom-3.5 left-1/2 z-20 block -mt-8 text-center text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/75"
      >
        {/* The phone screen is too narrow for the long line */}
        {engaged ? (compact ? "Scroll" : "Scroll to explore") : hovered ? "Paused" : compact ? "Auto-scrolling" : "Scrolling · hover to take over"}
      </span>
      <style jsx>{`
        .dg-cap {
          position: relative;
          overflow-y: hidden;
          background: #fff;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .dg-cap::-webkit-scrollbar {
          display: none;
        }
        /* The wheel only reaches the capture once the pointer has settled on it */
        .dg-cap-live {
          overflow-y: auto;
        }
        .dg-screen {
          height: 420px;
        }
        @media (min-width: 1280px) {
          .dg-screen { height: 480px; }
        }
        .dg-phone {
          height: 420px;
        }
        @media (min-width: 640px) {
          .dg-phone { height: 470px; }
        }
        @media (min-width: 1024px) {
          .dg-phone { height: 400px; }
        }
      `}</style>
    </div>
  );
}

export default function DesignGallery({ project }) {
  const pages = project.pages;
  const [active, setActive] = useState(0);

  const page = pages[active];
  const host = `${project.name.toLowerCase().replace(/\s+/g, "")}.com`;

  return (
    <div className="grid gap-10 lg:grid-cols-[292px_1fr] lg:gap-12 items-start">
      <div>
        {pages.length > 1 && (
          <ol className="flex flex-col gap-0.5">
            {pages.map((pg, i) => {
              const on = i === active;
              return (
                <li key={pg.label}>
                  <button
                    onClick={() => setActive(i)}
                    aria-current={on ? "true" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors duration-200 ${
                      on
                        ? "border-[#FF4D57]/30 bg-gradient-to-r from-[#FF4D57]/12 to-transparent"
                        : "border-transparent hover:bg-[#161C27]/70"
                    }`}
                  >
                    <span className={`text-[10.5px] font-black tracking-[0.1em] ${on ? "text-[#FF4D57]" : "text-[#C7CCD6]/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`truncate text-[13.5px] font-bold ${on ? "text-white" : "text-[#C7CCD6]"}`}>{pg.label}</span>
                    {pg.note && <span className="hidden truncate text-[11.5px] text-[#C7CCD6]/50 xl:block">{pg.note}</span>}
                  </button>
                </li>
              );
            })}
          </ol>
        )}

        {/* The same page on a phone, standing on the same floor as the laptop */}
        <div className="mt-8 lg:mt-10">
          <div className="relative mx-auto w-[220px] rounded-[2rem] border-[7px] border-[#2f3747] bg-[#2f3747] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_26px_50px_rgba(0,0,0,0.5)] sm:w-[250px] lg:w-[205px]">
            <span aria-hidden="true" className="absolute -left-[9px] top-16 h-6 w-[3px] rounded-l-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute -right-[9px] top-20 h-10 w-[3px] rounded-r-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute left-1/2 top-2 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#0b0d12] ring-1 ring-[#2E3446]" />
            <Capture
              key={`m-${active}`}
              src={page.m}
              alt={`${project.name} — ${page.label} (mobile)`}
              seconds={Math.min(34, Math.max(12, Math.round((page.mH / page.mW) * 5)))}
              screenClass="dg-phone rounded-[1.5rem]"
              compact
            />
          </div>
          <div aria-hidden="true" className="relative mx-auto mt-3 h-3.5 w-[60%]">
            <div className="absolute inset-x-[14%] inset-y-0 rounded-[50%] bg-black/60 blur-md" />
            <div className="absolute -inset-x-5 top-1 h-3.5 rounded-[50%] bg-black/35 blur-xl" />
          </div>
          <div aria-hidden="true" className="mx-auto mt-1 h-px w-[74%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)]" />
          <p className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#C7CCD6]/45">
            {page.label} · Mobile
          </p>
        </div>
      </div>

      {/* Desktop capture: unreadable on a phone, so the laptop starts at lg */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Lid */}
            <div className="rounded-t-xl border border-[#4a5266] border-b-0 bg-gradient-to-b from-[#333b4d] to-[#161b26] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 px-1 pb-2 pt-0.5">
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </span>
                <span className="ml-1 flex min-w-0 max-w-[60%] flex-1 items-center gap-1.5 rounded-md border border-[#2E3446]/70 bg-[#161C27] px-2.5 py-1 text-[10px] font-medium text-[#7c8394]">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="truncate">{host}</span>
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#C7CCD6]/45">
                  <i className="h-1.5 w-1.5 rounded-full bg-[#28C840] shadow-[0_0_10px_#28C840]" />
                  Live build
                </span>
              </div>
              <Capture
                key={`d-${active}`}
                src={page.d}
                alt={`${project.name} — ${page.label} (desktop)`}
                seconds={Math.min(34, Math.max(12, Math.round((page.dH / page.dW) * 5)))}
                screenClass="dg-screen rounded-md"
              />
            </div>
            {/* Base, contact shadow and floor line — same object language as the hero */}
            <div className="relative mx-auto -ml-[6%] h-4 w-[112%] rounded-b-xl rounded-t-[3px] border border-[#2E3446] bg-gradient-to-b from-[#3a4150] to-[#1a1e27]">
              <span className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-lg bg-[#0b0d12]/70" />
            </div>
            <div aria-hidden="true" className="relative mx-auto mt-2 h-4 w-[74%]">
              <div className="absolute inset-x-[14%] inset-y-0 rounded-[50%] bg-black/60 blur-md" />
              <div className="absolute -inset-x-6 top-1.5 h-4 rounded-[50%] bg-black/35 blur-xl" />
            </div>
            <div aria-hidden="true" className="mx-auto mt-1 h-px w-[88%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)]" />
            <p className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#C7CCD6]/45">
              {page.label} · Desktop
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
