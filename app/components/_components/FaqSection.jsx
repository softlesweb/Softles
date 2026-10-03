"use client";

import WordReveal from "./WordReveal";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Editorial two-column FAQ: sticky intro + help card on the left,
// numbered accordion rows on the right. Shared across service pages.
export default function FaqSection({ eyebrow = "Common Questions", title, copy, faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  // FAQPage structured data — this is what search and AI answer engines lift
  // when they cite a page, so every FAQ block on the site emits it.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="softles-section-primary" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="service-page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* Intro + help card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="lg:sticky lg:top-24"
          >
            <div className="softles-eyebrow mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">{eyebrow}</span>
            </div>
            <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">{title}</WordReveal>
            <p className="softles-section-copy mt-3 max-w-md">{copy}</p>

            <div className="mt-9 rounded-2xl border border-[#2E3446] bg-gradient-to-b from-white/[0.03] to-white/[0.008] p-6">
              <p className="text-[15px] font-bold text-white">Still have a question?</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#8b93a5]">
                We reply fast — usually within a few hours on WhatsApp, always within a day by email.
              </p>
              <Link href="/#book-call" className="softles-primary-button mt-5 !px-6 !py-3 text-xs">
                Talk to us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Numbered accordion */}
          <div className="border-t border-[#232a3a]">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: EASE }}
                  className="border-b border-[#232a3a] transition-colors duration-300 hover:bg-white/[0.015]"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 sm:gap-5 px-1 py-5 sm:py-6 text-left group"
                  >
                    <span
                      className={`text-xs font-bold tracking-[0.15em] tabular-nums min-w-[26px] transition-colors duration-300 ${
                        isOpen ? "text-[#FF4D57]" : "text-[#5b6478]"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`flex-1 text-[15px] sm:text-base font-semibold leading-snug transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#e8eaf0] group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-base font-light transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-transparent bg-gradient-to-r from-[#FF4D57] to-[#FF6A3D] text-white"
                          : "border-[#2E3446] text-[#C7CCD6] group-hover:border-[#FF4D57]/50"
                      }`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mx-1 mb-6 ml-[46px] sm:ml-[50px] max-w-2xl border-l-2 border-[#FF4D57] pl-4 sm:pl-5 text-sm leading-relaxed text-[#aab0be]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
