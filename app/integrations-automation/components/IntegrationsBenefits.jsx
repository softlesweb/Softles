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

// Chips describe how we work, not results we can't substantiate.
const benefits = [
  {
    big: true,
    stat: "Sandbox first, always",
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Your live checkout is never the test environment",
    desc: "Every build runs against a development store or sandbox account first. Real customers and real money only meet the automation once the ugly edge cases already passed.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
    title: "Broken automations tell you",
    desc: "Failure alerts and retry logic ship with every build — so a dead sync doesn't quietly drop leads for weeks.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "We'll tell you when no-code is wrong",
    desc: "Per-task pricing is cheap until your volume climbs. We run the numbers on your actual usage before recommending a platform.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "You own the accounts",
    desc: "Automations live in your Zapier, Make or n8n workspace under your credentials. Nothing is hostage to ours.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8" />
      </svg>
    ),
    title: "A written map of what runs",
    desc: "One page per project: what triggers each automation, what it touches, and what to do when it fails.",
  },
  {
    big: true,
    stat: "One team, both sides",
    icon: (
      <svg {...iconProps}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "We work on the platform too",
    desc: "A theme update or plugin change doesn't need a second vendor and a three-way email thread — we build the WordPress and Shopify side as well as the wiring between them.",
  },
];

export default function IntegrationsBenefits() {
  return (
    <section className="softles-section-primary" id="why-softles">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
          <div className="max-w-xl">
            <motion.div {...enter(0)} className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">Why SoftLes</span>
            </motion.div>
            <WordReveal as="h2" className="service-section-heading text-[#FFFFFF] mb-4">
              Built to survive the API changing
            </WordReveal>
            <motion.p {...enter(2)} className="softles-section-copy max-w-lg">
              Anyone can wire two apps together on a good day. These are the habits that decide what happens on a bad one.
            </motion.p>
          </div>

          <Link href="/#book-call" className="softles-primary-button group w-full sm:w-auto shrink-0">
            <span>Book a scoping call</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

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
