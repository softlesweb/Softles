"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import DeviceFrame from "./_components/DeviceFrame";
import { projects } from "../work/projects";

const CATEGORIES = ["All", "E-commerce", "SaaS", "Web app", "Website"];

const EASE = [0.22, 1, 0.36, 1];

// Header pieces cascade in one after another.
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: EASE },
  }),
};

export default function WorkShowcase() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const shown = projects.filter((p) => active === "All" || p.category === active);

  const slideTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i];
    if (!slide) return;
    const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const target =
      track.scrollLeft +
      slide.getBoundingClientRect().left -
      track.getBoundingClientRect().left -
      padLeft;
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  // Track which slide sits closest to the viewport centre.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    [...track.children].forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setIndex(best);
  };

  const changeFilter = (c) => {
    setActive(c);
    setIndex(0);
    requestAnimationFrame(() => trackRef.current?.scrollTo({ left: 0 }));
  };

  return (
    <section id="work" className="w-full py-14 md:py-24 bg-[#0E1219] overflow-hidden">
      <div className="service-page-container">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={0} className="softles-eyebrow mb-3">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Selected work</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={1} className="service-section-heading text-[#FFFFFF]">Work worth showing off</motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={2} className="softles-section-copy max-w-2xl">
          Real, live builds — e-commerce, SaaS products and business sites. Switch between desktop and mobile, flip through the pages, and hover to pause.
        </motion.p>

        {/* Category filter */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={3} className="mt-7 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => changeFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide border transition-colors ${
                active === c
                  ? "bg-[#FF4D57] border-[#FF4D57] text-white"
                  : "bg-transparent border-[#2E3446] text-[#C7CCD6] hover:border-[#FF4D57]/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Slider */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        custom={4}
        className="mt-12 service-page-container"
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shown.map((p) => (
            <div key={p.slug} className="snap-start shrink-0 w-full">
              <div className="h-full rounded-3xl border border-[#2E3446] bg-gradient-to-b from-[#161C27] to-[#10141D] p-5 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Devices on a soft stage glow */}
                  <div className="group relative">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-8 bg-[radial-gradient(55%_45%_at_50%_55%,rgba(255,77,87,0.08),transparent_70%)] blur-2xl"
                    />
                    <div className="relative">
                      <DeviceFrame project={p} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-[#FF4D57]/10 border border-[#FF4D57]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF4D57]">
                        {p.category}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#C7CCD6]/50 font-semibold">
                        {p.stack}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-[#C7CCD6]/85 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
                      {p.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[#C7CCD6] text-sm">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    {p.metrics && (
                      <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                        {p.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl border border-[#2E3446] bg-[#161C27] px-3 py-3 text-center">
                            <div className="text-lg md:text-xl font-black text-white">{m.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-[#C7CCD6]/60 mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs — keep visitors on-site */}
                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link href={`/work/${p.slug}`} className="softles-primary-button justify-center sm:justify-start">
                        <span>View project</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                      <Link href="/#book-call" className="softles-secondary-button justify-center sm:justify-start">
                        Start a similar project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls: counter + progress + arrows */}
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-sm font-bold text-white tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative h-0.5 w-32 sm:w-48 overflow-hidden rounded-full bg-[#2E3446]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D] transition-all duration-500 ease-out"
                style={{ width: `${((index + 1) / Math.max(shown.length, 1)) * 100}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-[#7c8394] tabular-nums">
              {String(shown.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => slideTo(index - 1)}
              disabled={index === 0}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2E3446] text-white transition-all duration-300 hover:border-[#FF4D57] hover:bg-[#FF4D57]/10 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-[#2E3446] disabled:hover:bg-transparent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => slideTo(index + 1)}
              disabled={index >= shown.length - 1}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2E3446] text-white transition-all duration-300 hover:border-[#FF4D57] hover:bg-[#FF4D57]/10 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:border-[#2E3446] disabled:hover:bg-transparent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
