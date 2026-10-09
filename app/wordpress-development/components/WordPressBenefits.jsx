"use client";

import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";

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

// Linear-style bento: two featured cards carry a stat chip and span wider.
const benefits = [
  {
    big: true,
    stat: "< 2s load baseline",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Performance Focused",
    desc: "Every project is optimized for Core Web Vitals. We target sub-2s load times as a baseline, not a bonus.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "SEO Friendly Development",
    desc: "Structured data, semantic HTML, sitemap automation — SEO best practices baked in from day one.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Clean Code Standards",
    desc: "Modular, documented, standards-compliant code that any developer can maintain after us.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Business-Oriented Solutions",
    desc: "We ask 'why' before we ask 'how.' Every technical decision is tied to a measurable outcome.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Retainers keep your site updated, secure, and improving.",
  },
  {
    big: true,
    stat: "100 → 100k visitors",
    icon: (
      <svg {...iconProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Scalable Architecture",
    desc: "Systems designed to grow with you — from 100 visitors a month to 100,000 without a costly rebuild.",
  },
];

export default function WordPressBenefits() {
  return (
    <section className="softles-section-primary" id="why-softles">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          <div className="max-w-xl">
            <div className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">Why SoftLes</span>
            </div>
            <WordReveal as="h2" className="service-section-heading text-ink mb-4">
              Why Partner With SoftLes
            </WordReveal>
            <p className="softles-section-copy max-w-lg">
              We combine commercial thinking, platform expertise, and hands-on delivery to help brands grow faster with a more reliable digital experience.
            </p>
          </div>

          <Link href="/#book-call" className="softles-primary-button group w-full sm:w-auto shrink-0">
            <span>Start a Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Linear-style bento grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {benefits.map((b, idx) => (
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
              {/* Corner glow on the featured cards */}
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
