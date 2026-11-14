"use client";

import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const EASE = [0.22, 1, 0.36, 1];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Chips state process facts, never performance claims we can't stand behind.
const deliverables = [
  {
    big: true,
    stat: "Mobile + desktop, every screen",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "The full screen set",
    desc: "Every page designed at both widths, plus the states that usually get discovered mid-build — empty, loading, error, and long-content overflow.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
    title: "A clickable prototype",
    desc: "One shareable link. Your team walks the real journey and leaves comments in place.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7L12 12l8.7-5M12 22V12" />
      </svg>
    ),
    title: "A component library",
    desc: "Reusable blocks with shared type, colour and spacing tokens — so page eleven looks like page one.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Build-ready specs",
    desc: "Spacing, breakpoints and interaction notes annotated, so a developer isn't guessing at intent.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
    title: "Two review rounds a stage",
    desc: "Defined up front, with a clear line between a revision and a new request — so nobody argues about it later.",
  },
  {
    big: true,
    stat: "Figma file + full edit access",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "The source, in your hands",
    desc: "On final payment the Figma file, source assets and edit access transfer to you — so a small change later never has to route through us.",
  },
];

export default function DesignDeliverables() {
  return (
    <section className="softles-section-primary" id="deliverables">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          <div className="max-w-xl">
            <motion.div {...enter(0)} className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">What you get</span>
            </motion.div>
            <WordReveal as="h2" className="service-section-heading text-ink mb-4">
              Exactly what lands in your hands
            </WordReveal>
            <motion.p {...enter(2)} className="softles-section-copy max-w-lg">
              No vague &ldquo;design deliverables.&rdquo; Here is the actual list, so you can compare it against anyone else you&apos;re speaking to.
            </motion.p>
          </div>

          <Link href="/#book-call" className="softles-primary-button group w-full sm:w-auto shrink-0">
            <span>Start a Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {deliverables.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
              className={`group relative overflow-hidden rounded-2xl border border-line/80 bg-gradient-to-b from-panel to-deep p-6 transition-colors duration-300 hover:border-brand/40 ${
                b.big ? "sm:col-span-2" : ""
              }`}
            >
              {b.big && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 bg-[radial-gradient(closest-side,rgba(255,77,87,0.12),transparent)]"
                />
              )}

              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-all duration-300 group-hover:border-brand/60">
                  {b.icon}
                </span>
                <h4 className="mt-4 text-base font-bold text-ink leading-snug">{b.title}</h4>
                <p className="mt-2 text-sm text-mute/75 leading-relaxed">{b.desc}</p>
                {b.stat && (
                  <span className="mt-4 inline-block rounded-lg border border-brand/30 bg-brand/[0.08] px-2.5 py-1.5 text-xs font-bold text-brand-2">
                    {b.stat}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
