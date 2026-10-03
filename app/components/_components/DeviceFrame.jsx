"use client";

import { useState, useEffect, useRef } from "react";

// Interactive device mockup: toggle desktop/mobile (never overlapping),
// swap between captured pages, and auto-scroll the screenshot smoothly —
// starting from the top only once the frame scrolls into view.
export default function DeviceFrame({ project, defaultDevice = "desktop", tall = false, eager = false }) {
  const pages = project.pages;
  const [device, setDevice] = useState(defaultDevice);
  const [page, setPage] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  // Latches the first time the device is on screen, so the wake-up plays once.
  const [woken, setWoken] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setWoken(true);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const p = pages[page];
  const isDesktop = device === "desktop";
  const img = isDesktop ? p.d : p.m;
  const ratio = isDesktop ? p.dH / p.dW : p.mH / p.mW;
  // Consistent pace: scroll time scales with page height, but stays snappy.
  const dur = Math.min(26, Math.max(8, Math.round(ratio * 4)));
  // Remount the image whenever the view/page/device changes so the
  // scroll animation always restarts cleanly from the top.
  const imgKey = `${device}-${page}-${inView}`;

  return (
    <div ref={ref} className="w-full">
      {/* Device — hovering pauses the screenshot auto-scroll. A soft focus ring
          and grounding shadow make it read as a real object on the stage,
          not just a flat screenshot. */}
      <div
        className="group/df relative rounded-xl transition-transform duration-500 lg:hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      {isDesktop ? (
        <div className="mx-auto w-full max-w-[900px]">
          <div className="rounded-t-xl border border-[#4a5266] border-b-0 bg-gradient-to-b from-[#333b4d] to-[#161b26] p-2 sm:p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_60px_rgba(0,0,0,0.5)]">
            {/* Browser chrome: traffic lights + address pill */}
            <div className="flex items-center gap-2 px-1 pb-2 pt-0.5">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </span>
              <span className="ml-1 flex min-w-0 flex-1 max-w-[65%] items-center gap-1.5 rounded-md border border-[#2E3446]/70 bg-[#161C27] px-2.5 py-1 text-[10px] font-medium text-[#7c8394]">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="truncate">{project.name}</span>
              </span>
            </div>
            <div className={`df-screen relative overflow-hidden rounded-md bg-[#0E1219] ${tall ? "df-tall" : ""} ${woken ? "df-wake" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- tall scrolling capture; kept as a plain img on purpose */}
              <img
                key={imgKey}
                src={img}
                alt={`${project.name} — ${p.label} (desktop)`}
                loading={eager ? "eager" : "lazy"}
                className="df-scroll w-full"
                style={{ animationDuration: `${dur}s`, animationPlayState: inView && !hovered ? "running" : "paused" }}
              />
              {/* Tells you why the auto-scroll just stopped, instead of it silently freezing */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
              >
                <span className="flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                  Paused
                </span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-3 sm:h-4 w-[112%] -ml-[6%] rounded-b-xl rounded-t-[3px] bg-gradient-to-b from-[#3a4150] to-[#1a1e27] border border-[#2E3446]">
            <span className="absolute left-1/2 top-0 h-1.5 w-16 sm:w-24 -translate-x-1/2 rounded-b-lg bg-[#0b0d12]/70" />
          </div>
          {/* Contact shadow, ambient pool and a floor line — together they lift the
              laptop off the card instead of letting it float in the dark. */}
          <div aria-hidden="true" className="relative mx-auto mt-2 h-4 w-[74%]">
            <div className="absolute inset-x-[14%] inset-y-0 rounded-[50%] bg-black/60 blur-md" />
            <div className="absolute -inset-x-6 top-1.5 h-4 rounded-[50%] bg-black/35 blur-xl" />
          </div>
          <div aria-hidden="true" className="mx-auto mt-1 h-px w-[88%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)]" />
        </div>
      ) : (
        <div className="mx-auto w-[240px] sm:w-[280px]">
          <div className="relative rounded-[2rem] border-[7px] border-[#2f3747] bg-[#2f3747] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_26px_50px_rgba(0,0,0,0.5)]">
            {/* Side buttons */}
            <span aria-hidden="true" className="absolute -left-[9px] top-16 h-6 w-[3px] rounded-l-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute -left-[9px] top-[6.5rem] h-6 w-[3px] rounded-l-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute -right-[9px] top-20 h-10 w-[3px] rounded-r-sm bg-[#2a2f3a]" />
            <span className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[#0b0d12] ring-1 ring-[#2E3446]" />
            <div className={`df-screen-m relative overflow-hidden rounded-[1.5rem] bg-[#0E1219] ${woken ? "df-wake" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- tall scrolling capture; kept as a plain img on purpose */}
              <img
                key={imgKey}
                src={img}
                alt={`${project.name} — ${p.label} (mobile)`}
                loading={eager ? "eager" : "lazy"}
                className="df-scroll w-full"
                style={{ animationDuration: `${dur}s`, animationPlayState: inView && !hovered ? "running" : "paused" }}
              />
              {/* Glass reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_28%,transparent_45%)]"
              />
              {/* Tells you why the auto-scroll just stopped, instead of it silently freezing */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
              >
                <span className="flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                  Paused
                </span>
              </div>
            </div>
          </div>
          {/* Contact shadow and floor line, same idea as the laptop */}
          <div aria-hidden="true" className="relative mx-auto mt-3 h-3.5 w-[64%]">
            <div className="absolute inset-x-[14%] inset-y-0 rounded-[50%] bg-black/60 blur-md" />
            <div className="absolute -inset-x-5 top-1 h-3.5 rounded-[50%] bg-black/35 blur-xl" />
          </div>
          <div aria-hidden="true" className="mx-auto mt-1 h-px w-[78%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)]" />
        </div>
      )}
      </div>

      {/* Controls — collapsed to zero height until you hover the card, so no empty
          space is reserved by default. Touch devices can't hover, so they keep the
          row expanded always (otherwise there'd be no way to reach it on mobile). */}
      <div className="grid transition-[grid-template-rows] duration-300 ease-out grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover/card:grid-rows-[1fr]">
        <div className="overflow-hidden">
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#2E3446] opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100 transition-opacity duration-200">
        {/* Desktop/Mobile toggle — sliding highlight tracks the active option exactly,
            since both buttons occupy equal grid columns. */}
        <div className="relative inline-grid grid-cols-2 rounded-full border border-[#2E3446] bg-[#161C27] p-1">
          <span
            aria-hidden="true"
            className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D] shadow-[0_2px_12px_rgba(255,77,87,0.45)] transition-transform duration-300 ease-out"
            style={{ transform: device === "mobile" ? "translateX(100%)" : "translateX(0%)" }}
          />
          <button
            onClick={() => setDevice("desktop")}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors duration-300 ${
              device === "desktop" ? "text-white" : "text-[#C7CCD6] hover:text-white"
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            Desktop
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors duration-300 ${
              device === "mobile" ? "text-white" : "text-[#C7CCD6] hover:text-white"
            }`}
          >
            <svg width="10" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
            Mobile
          </button>
        </div>

        {pages.length > 1 && (
          <div className="flex items-center gap-2">
            {/* Page label with clickable dots — jump straight to any page */}
            <div className="flex items-center gap-2.5 rounded-full border border-[#2E3446] bg-[#161C27] pl-3 pr-2.5 py-1.5">
              <span className="text-[11px] font-semibold text-[#C7CCD6] whitespace-nowrap">{p.label}</span>
              <div className="flex items-center gap-1">
                {pages.map((pg, i) => (
                  <button
                    key={pg.label}
                    onClick={() => setPage(i)}
                    aria-label={`Go to ${pg.label}`}
                    aria-current={i === page ? "true" : undefined}
                    className="p-0.5"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === page ? "w-4 bg-[#FF4D57]" : "w-1.5 bg-[#3a4150] hover:bg-[#5a6479]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setPage((page - 1 + pages.length) % pages.length)}
              aria-label="Previous page"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2E3446] bg-[#161C27] text-white transition-all duration-300 hover:border-[#FF4D57] hover:bg-[#FF4D57]/15 hover:scale-105"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => setPage((page + 1) % pages.length)}
              aria-label="Next page"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2E3446] bg-[#161C27] text-white transition-all duration-300 hover:border-[#FF4D57] hover:bg-[#FF4D57]/15 hover:scale-105"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        )}
      </div>
        </div>
      </div>

      <style jsx>{`
        .df-screen {
          --sh: 300px;
          height: var(--sh);
        }
        .df-screen-m {
          --sh: 440px;
          height: var(--sh);
        }
        @media (min-width: 1024px) {
          .df-screen { --sh: 350px; }
          .df-screen-m { --sh: 420px; }
        }
        /* Hero stage: the lid gets close to a real 16:10 screen instead of a
           letterbox strip, so it reads as a laptop and not a wide banner. */
        .df-screen.df-tall { --sh: 215px; }
        @media (min-width: 640px) { .df-screen.df-tall { --sh: 355px; } }
        @media (min-width: 1024px) { .df-screen.df-tall { --sh: 430px; } }
        .df-scroll {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          animation-name: dfScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        @keyframes dfScroll {
          0%, 2% { transform: translateY(0); }
          98%, 100% { transform: translateY(calc(-100% + var(--sh))); }
        }
        /* Wake-up: the first time the device is on screen the capture lifts out of
           the dark and a light sweeps across the glass, so the eye lands on it. */
        .df-wake {
          animation: dfWake 1s ease-out both;
        }
        @keyframes dfWake {
          from { filter: brightness(0.4) saturate(0.75); }
          to { filter: brightness(1) saturate(1); }
        }
        .df-wake::after {
          content: "";
          position: absolute;
          inset: -30%;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.4) 50%, transparent 62%);
          transform: translateX(-130%);
          animation: dfSheen 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        @keyframes dfSheen {
          to { transform: translateX(130%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .df-scroll { animation: none !important; }
          .df-wake, .df-wake::after { animation: none !important; }
          .df-wake::after { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
