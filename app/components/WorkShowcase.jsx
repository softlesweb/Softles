"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Content column: parent staggers its children.
const contentParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const contentItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function WorkShowcase() {
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="work" className="w-full py-14 md:py-24 bg-[#0E1219]">
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
              onClick={() => setActive(c)}
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

        {/* Rows */}
        <div className="mt-12 flex flex-col gap-20 md:gap-28">
          <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4, ease: EASE } }}
              exit={{ opacity: 0, y: 24, transition: { duration: 0.25, ease: "easeIn" } }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Devices — slide in from their own side, on a soft stage glow */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 48 : -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className={`group relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-8 bg-[radial-gradient(55%_45%_at_50%_55%,rgba(255,77,87,0.08),transparent_70%)] blur-2xl"
                />
                <div className="relative">
                  <DeviceFrame project={p} />
                </div>
              </motion.div>

              {/* Content — cascades in element by element */}
              <motion.div
                variants={contentParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <motion.div variants={contentItem} className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-[#FF4D57]/10 border border-[#FF4D57]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF4D57]">
                    {p.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C7CCD6]/50 font-semibold">
                    {p.stack}
                  </span>
                </motion.div>

                <motion.h3 variants={contentItem} className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {p.name}
                </motion.h3>
                <motion.p variants={contentItem} className="text-[#C7CCD6]/85 text-sm md:text-base leading-relaxed mt-3 max-w-xl">
                  {p.summary}
                </motion.p>

                {/* Highlights */}
                <motion.ul variants={contentItem} className="mt-5 flex flex-col gap-2.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[#C7CCD6] text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </motion.ul>

                {/* Metrics */}
                {p.metrics && (
                  <motion.div variants={contentItem} className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-[#2E3446] bg-[#161C27] px-3 py-3 text-center">
                        <div className="text-lg md:text-xl font-black text-white">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-[#C7CCD6]/60 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Tags */}
                <motion.div variants={contentItem} className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                </motion.div>

                {/* CTAs — keep visitors on-site */}
                <motion.div variants={contentItem} className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href={`/work/${p.slug}`} className="softles-primary-button justify-center sm:justify-start">
                    <span>View project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <Link href="/#book-call" className="softles-secondary-button justify-center sm:justify-start">
                    Start a similar project
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
