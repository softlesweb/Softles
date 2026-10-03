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
    title: "Performance Optimization",
    desc: "Sub-2s page loads and strong Core Web Vitals scores as a baseline on every project — not optional extras.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Conversion Focused",
    desc: "Every design and development decision informed by CRO best practices and your customer journey data.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Shopify Plus Experience",
    desc: "Hands-on experience with Scripts, Flow, Launchpad, B2B Commerce, Markets, and multi-storefronts.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Clean Dev Standards",
    desc: "Documented, maintainable Liquid and React code that any developer can continue after us.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Retainers provide ongoing development and growth support.",
  },
  {
    big: true,
    stat: "Launch → 100k daily orders",
    icon: (
      <svg {...iconProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Scalable Architecture",
    desc: "Systems designed to grow from launch to 100k daily orders without expensive platform migrations or rebuilds.",
  },
];

export default function ShopifyBenefits() {
  return (
    <section className="softles-section-secondary" id="why-softles">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          <div className="max-w-xl">
            <div className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">Why SoftLes</span>
            </div>
            <WordReveal as="h2" className="service-section-heading text-[#FFFFFF] mb-4">
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
              className={`group relative overflow-hidden rounded-2xl border border-[#2E3446]/80 bg-gradient-to-b from-[#161C27] to-[#10141D] p-6 transition-colors duration-300 hover:border-[#FF4D57]/40 ${
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
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF4D57]/30 bg-[#FF4D57]/10 text-[#FF4D57] transition-all duration-300 group-hover:border-[#FF4D57]/60">
                  {b.icon}
                </span>
                <h4 className="mt-4 text-base font-bold text-white leading-snug">{b.title}</h4>
                <p className="mt-2 text-sm text-[#C7CCD6]/75 leading-relaxed">{b.desc}</p>
                {b.stat && (
                  <span className="mt-4 inline-block rounded-lg border border-[#FF4D57]/30 bg-[#FF4D57]/[0.08] px-2.5 py-1.5 text-xs font-bold text-[#FF6A3D]">
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
