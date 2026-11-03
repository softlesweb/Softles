"use client";

import RollingNumber from "./_components/RollingNumber";
import WordReveal from "./_components/WordReveal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DeviceFrame from "./_components/DeviceFrame";
import { projects } from "../work/projects";

const AUTOPLAY_MS = 7500;

const EASE = [0.22, 1, 0.36, 1];

// Each slide's content plays its own cascade — on first view, and again every
// time that slide becomes the active one.
const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// The device never fully disappears — it just settles as its slide arrives.
const cardDevice = {
  hidden: { opacity: 0.5, scale: 0.985 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Bumped on every manual interaction/resume so the autoplay timer (and the
  // pill's fill animation) restart from zero.
  const [cycle, setCycle] = useState(0);
  const trackRef = useRef(null);
  const navRef = useRef(null);
  const indexRef = useRef(0);
  const inView = useInView(trackRef, { once: true, margin: "-80px" });
  const shown = projects;

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
    indexRef.current = best;
    setIndex(best);
  };

  // Auto-advance. Restarts whenever the slide changes or the user interacts
  // (index/cycle deps); paused while the pointer is over the slider.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      if (document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const next = (indexRef.current + 1) % projects.length;
      const slide = track.children[next];
      const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      if (slide) track.scrollTo({ left: slide.offsetLeft - padLeft, behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, cycle, paused]);

  // Keep the active name pill in view on small screens.
  useEffect(() => {
    const nav = navRef.current;
    const btn = nav?.children[index];
    if (!nav || !btn) return;
    if (nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({
      left: btn.offsetLeft - (nav.clientWidth - btn.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section id="work" className="w-full py-12 md:py-20 bg-page overflow-hidden">
      <div className="service-page-container">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={0} className="softles-eyebrow mb-3">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Selected work</span>
        </motion.div>
        <WordReveal as="h2" className="service-section-heading text-ink">Work worth showing off</WordReveal>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={2} className="softles-section-copy max-w-2xl">
          Real, live builds — e-commerce, SaaS products and business sites. Switch between desktop and mobile, flip through the pages, and hover to pause.
        </motion.p>

        {/* Project name navigation — full width, click to jump */}
        <motion.div ref={navRef} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} custom={3} className="mt-5 flex w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => {
                setCycle((c) => c + 1);
                slideTo(i);
              }}
              className={`relative overflow-hidden shrink-0 lg:flex-1 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold border transition-colors ${
                index === i
                  ? "border-brand text-ink bg-brand/25"
                  : "bg-transparent border-line text-mute hover:border-brand/50 hover:text-ink"
              }`}
            >
              {/* Autoplay progress fill on the active pill */}
              {index === i && !paused && (
                <span
                  key={`${index}-${cycle}`}
                  aria-hidden="true"
                  className="absolute inset-0 origin-left bg-brand animate-[pillFill_7.5s_linear_forwards]"
                />
              )}
              <span className="relative">{p.name}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Slider — the card frame is the stage; its contents do the arriving */}
      <div className="mt-4 service-page-container">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setCycle((c) => c + 1);
          }}
          className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 -mx-6 scroll-pl-6 pt-4 -mt-4 pb-16 -mb-14"
        >
          {shown.map((p, slideIdx) => {
            const live = inView && index === slideIdx ? "show" : "hidden";
            return (
            <div key={p.slug} className="snap-start shrink-0 w-full">
              <div className="group/card h-full rounded-3xl border border-line bg-gradient-to-b from-panel to-deep p-4 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-brand/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_56px_rgba(0,0,0,0.4)]">
                <div className="grid lg:grid-cols-[1.4fr_0.85fr] gap-6 lg:gap-8 items-center">
                  {/* Devices on a two-tone stage glow — brightens further on card hover */}
                  <motion.div variants={cardDevice} initial="hidden" animate={live} className="relative">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-10 sm:-inset-16 bg-[radial-gradient(55%_50%_at_50%_45%,rgba(255,77,87,0.22),transparent_70%)] blur-2xl opacity-80 transition-opacity duration-500 group-hover/card:opacity-100"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-10 sm:-inset-16 bg-[radial-gradient(40%_35%_at_78%_78%,rgba(109,94,246,0.16),transparent_70%)] blur-3xl opacity-80 transition-opacity duration-500 group-hover/card:opacity-100"
                    />
                    {/* Key light from the top left, so the metal edge catches it and the device reads as raised */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-10 sm:-inset-16 bg-[radial-gradient(45%_40%_at_22%_10%,rgba(255,255,255,0.10),transparent_70%)] blur-2xl"
                    />
                    <div className="relative px-2 sm:px-5">
                      <DeviceFrame project={p} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    variants={cardStagger}
                    initial="hidden"
                    animate={live}
                    className="relative h-full flex flex-col justify-center pl-5"
                  >
                    {/* Accent rail — anchors the column and ties it to the brand */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-brand via-brand/40 to-brand/5"
                    />

                    {/* Ghost slide numeral — brightens on card hover */}
                    <motion.span
                      variants={cardItem}
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute bottom-0 right-0 text-[88px] lg:text-[104px] font-black leading-none text-ink/[0.04] transition-colors duration-500 group-hover/card:text-ink/[0.07]"
                    >
                      {String(slideIdx + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.div variants={cardItem} className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                        {p.category}
                      </span>
                      {p.stack && p.stack.toLowerCase() !== p.category.toLowerCase() && (
                        <span className="text-[11px] uppercase tracking-wider text-mute/50 font-semibold">
                          {p.stack}
                        </span>
                      )}
                    </motion.div>

                    <motion.h3 variants={cardItem} className="text-xl md:text-2xl font-extrabold text-ink tracking-tight leading-tight">
                      {p.name}
                    </motion.h3>
                    <motion.p variants={cardItem} className="text-mute/85 text-sm leading-relaxed mt-2 max-w-xl">
                      {p.summary}
                    </motion.p>

                    {/* Highlights — plain checkmarked list, no boxed pills, so it reads light */}
                    <motion.ul variants={cardItem} className="mt-4 flex flex-col gap-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[13px] text-mute transition-colors duration-300 group-hover/card:text-ink/90">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </motion.ul>

                    {/* Metrics */}
                    {p.metrics && (
                      <motion.div variants={cardItem} className="mt-4 hidden lg:grid grid-flow-col auto-cols-fr gap-2.5 max-w-sm">
                        {p.metrics.map((m) => (
                          <div key={m.label} className="relative overflow-hidden rounded-xl border border-line bg-panel px-2.5 py-2.5 text-center">
                            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand to-brand-2" />
                            <div className="text-base md:text-lg font-black text-ink"><RollingNumber value={m.value} play={live === "show"} /></div>
                            <div className="text-[10px] uppercase tracking-wider text-mute/60 mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* CTAs — keep visitors on-site */}
                    <motion.div variants={cardItem} className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Link href={`/work/${p.slug}`} className="softles-primary-button justify-center sm:justify-start whitespace-nowrap !px-5 !py-3 !text-xs md:!text-sm">
                        <span>View project</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                      <Link href="/#book-call" className="softles-secondary-button justify-center sm:justify-start whitespace-nowrap !px-5 !py-3 !text-xs md:!text-sm">
                        Start a similar project
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Controls: counter + progress + arrows */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={4}
          className="mt-5 flex items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-sm font-bold text-ink tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative h-0.5 w-32 sm:w-48 overflow-hidden rounded-full bg-line">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand to-brand-2 transition-all duration-500 ease-out"
                style={{ width: `${((index + 1) / Math.max(shown.length, 1)) * 100}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-dim tabular-nums">
              {String(shown.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { setCycle((c) => c + 1); slideTo((index - 1 + shown.length) % shown.length); }}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-brand hover:bg-brand/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => { setCycle((c) => c + 1); slideTo((index + 1) % shown.length); }}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-brand hover:bg-brand/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
