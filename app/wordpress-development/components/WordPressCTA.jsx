"use client";

import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WordPressCTA() {
  return (
    <section
      id="cta"
      className="softles-section-secondary"
    >
      <div className="service-page-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-[#2E3446] bg-gradient-to-b from-[#161C27] to-[#10141D] p-8 sm:p-12 lg:p-20 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.35)]"
        >
          {/* Thin accent hairline along the top edge */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4D57]/60 to-transparent" />
          {/* Soft light from above — no colour, just depth */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

          <div className="relative z-10">
            {/* Header Tag */}
            <div className="softles-eyebrow justify-center mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">
                Let&apos;s Build Together
              </span>
            </div>

            {/* Heading with explicit tracking, font weights & WordPress theme variables */}
            <WordReveal as="h2" className="service-section-heading text-[#FFFFFF] mb-4">
              Let&apos;s Build a Better<br className="hidden sm:block" />{" "}
              WordPress Experience
            </WordReveal>

            {/* Paragraph Content tailored for WordPress services */}
            <p className="text-[#C7CCD6]/80 max-w-xl mx-auto mb-8 lg:mb-10 text-sm sm:text-base leading-relaxed">
              Whether you need a custom website, WooCommerce store, or a headless WordPress solution, SoftLes can help you design, build, and scale a faster, smarter digital presence.
            </p>

            {/* Unified Action Controls with System Geometric Sync */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Call Action */}
              <Link
                href="/#book-call"
                className="softles-primary-button w-full sm:w-auto group"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book Discovery Call</span>
              </Link>

              {/* Secondary Mail Action */}
              <a
                href="mailto:info@softles.in"
                className="softles-secondary-button w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
