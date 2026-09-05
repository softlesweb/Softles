"use client";

import { useState, useEffect, useRef } from "react";

// Interactive device mockup: toggle desktop/mobile (never overlapping),
// swap between captured pages, and auto-scroll the screenshot smoothly —
// starting from the top only once the frame scrolls into view.
export default function DeviceFrame({ project, defaultDevice = "desktop" }) {
  const pages = project.pages;
  const [device, setDevice] = useState(defaultDevice);
  const [page, setPage] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
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
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="inline-flex rounded-full border border-[#2E3446] bg-[#161C27] p-1">
          {[
            { k: "desktop", label: "Desktop" },
            { k: "mobile", label: "Mobile" },
          ].map((d) => (
            <button
              key={d.k}
              onClick={() => setDevice(d.k)}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-colors ${
                device === d.k ? "bg-[#FF4D57] text-white" : "text-[#C7CCD6] hover:text-white"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {pages.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {pages.map((pg, i) => (
              <button
                key={pg.label}
                onClick={() => setPage(i)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                  i === page
                    ? "bg-[#FF4D57]/15 border-[#FF4D57]/50 text-[#FF4D57]"
                    : "border-[#2E3446] text-[#C7CCD6]/70 hover:text-white hover:border-[#FF4D57]/40"
                }`}
              >
                {pg.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Device */}
      {isDesktop ? (
        <div className="mx-auto w-full max-w-[640px]">
          <div className="rounded-t-xl border border-[#2E3446] border-b-0 bg-[#0b0d12] p-2 sm:p-2.5 shadow-2xl">
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
            <div className="df-screen relative overflow-hidden rounded-md bg-[#0E1219]">
              <img
                key={imgKey}
                src={img}
                alt={`${project.name} — ${p.label} (desktop)`}
                loading="lazy"
                className="df-scroll w-full"
                style={{ animationDuration: `${dur}s`, animationPlayState: inView ? "running" : "paused" }}
              />
            </div>
          </div>
          <div className="relative mx-auto h-3 sm:h-4 w-[112%] -ml-[6%] rounded-b-xl rounded-t-[3px] bg-gradient-to-b from-[#3a4150] to-[#1a1e27] border border-[#2E3446]">
            <span className="absolute left-1/2 top-0 h-1.5 w-16 sm:w-24 -translate-x-1/2 rounded-b-lg bg-[#0b0d12]/70" />
          </div>
        </div>
      ) : (
        <div className="mx-auto w-[220px] sm:w-[250px]">
          <div className="relative rounded-[2rem] border-[7px] border-[#0b0d12] bg-[#0b0d12] shadow-2xl">
            {/* Side buttons */}
            <span aria-hidden="true" className="absolute -left-[9px] top-16 h-6 w-[3px] rounded-l-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute -left-[9px] top-[6.5rem] h-6 w-[3px] rounded-l-sm bg-[#2a2f3a]" />
            <span aria-hidden="true" className="absolute -right-[9px] top-20 h-10 w-[3px] rounded-r-sm bg-[#2a2f3a]" />
            <span className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[#0b0d12] ring-1 ring-[#2E3446]" />
            <div className="df-screen-m relative overflow-hidden rounded-[1.5rem] bg-[#0E1219]">
              <img
                key={imgKey}
                src={img}
                alt={`${project.name} — ${p.label} (mobile)`}
                loading="lazy"
                className="df-scroll w-full"
                style={{ animationDuration: `${dur}s`, animationPlayState: inView ? "running" : "paused" }}
              />
              {/* Glass reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_28%,transparent_45%)]"
              />
            </div>
          </div>
        </div>
      )}

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
          .df-screen { --sh: 372px; }
          .df-screen-m { --sh: 470px; }
        }
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
        @media (prefers-reduced-motion: reduce) {
          .df-scroll { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
