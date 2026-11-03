"use client";

import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntegrationsCTA() {
  return (
    <section id="cta" className="softles-section-secondary">
      <div className="service-page-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-panel to-deep p-8 sm:p-12 lg:p-20 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

          <div className="relative z-10">
            <div className="softles-eyebrow justify-center mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">Start with the audit</span>
            </div>

            <WordReveal as="h2" className="service-section-heading text-ink mb-4">
              Tell us what your team<br className="hidden sm:block" /> still does by hand
            </WordReveal>

            <p className="softles-section-copy mx-auto text-center max-w-2xl">
              Bring us the manual process, the half-finished automation, or the two systems that refuse to talk. We&apos;ll map what&apos;s connectable, what it would cost to run each month, and whether it&apos;s even worth automating — before you commit to anything.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#book-call" className="softles-primary-button group">
                <span>Book a free scoping call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/#work" className="softles-secondary-button">
                See our work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
