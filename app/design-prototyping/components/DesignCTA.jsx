"use client";

import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DesignCTA() {
  return (
    <section id="cta" className="softles-section-secondary">
      <div className="service-page-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-[#2E3446] bg-gradient-to-b from-[#161C27] to-[#10141D] p-8 sm:p-12 lg:p-20 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4D57]/60 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

          <div className="relative z-10">
            <div className="softles-eyebrow justify-center mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">Let&apos;s design it first</span>
            </div>

            <WordReveal as="h2" className="service-section-heading text-[#FFFFFF] mb-4">
              See your site before<br className="hidden sm:block" /> you commit to building it
            </WordReveal>

            <p className="softles-section-copy mx-auto text-center max-w-2xl">
              Bring us a rough idea or an existing site that isn&apos;t working. We&apos;ll walk you through how we&apos;d structure it, what the design stage would cover, and what it would cost — on a call, not in a proposal PDF.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#book-call" className="softles-primary-button group">
                <span>Book a free discovery call</span>
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
