"use client";

import { FiZap, FiSearch, FiLayers } from "react-icons/fi";
import { AiOutlineCode } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";

export default function WordPressBenefits() {
  const benefits = [
    {
      icon: <FiZap />,
      title: "Performance Focused",
      desc: "Every project is optimized for Core Web Vitals. We target sub-2s load times as a baseline, not a bonus.",
    },
    {
      icon: <FiSearch />,
      title: "SEO Friendly Development",
      desc: "Structured data, semantic HTML, sitemap automation — SEO best practices are baked in from day one.",
    },
    {
      icon: <AiOutlineCode />,
      title: "Clean Code Standards",
      desc: "Modular, documented, WordPress Coding Standards–compliant code that any developer can maintain after us.",
    },
    {
      icon: <MdBusinessCenter />,
      title: "Business-Oriented Solutions",
      desc: "We ask 'why' before we ask 'how.' Every technical decision is connected to a measurable business outcome.",
    },
    {
      icon: <RiShakeHandsLine />,
      title: "Long-Term Support",
      desc: "We don't disappear after launch. Retainer plans keep your site updated, secure, and continuously improving.",
    },
    {
      icon: <FiLayers />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow with you — from 100 visitors a month to 100,000 without a costly rebuild.",
    },
  ];

  return (
    // Base structural layout wrapper matching the exact system theme padding
    <section className="py-12 sm:py-16 lg:py-28 bg-[#0D0F12] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        
        {/* Full Width Top Row Content Block (Different from Shopify Column Setup) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading mb-3">
              Why Work With SoftLes
            </h2>
            <p className="text-[#BCC1CA]/80 text-sm sm:text-base leading-relaxed">
              We&apos;re not just developers — we&apos;re a strategic partner committed to
              your long-term business success.
            </p>
          </div>
          
          {/* Action Button - Converted to strict system rounded corners geometry */}
          <div className="shrink-0 pt-2 w-full sm:w-auto">
            <a
              href="/#book-call"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#DC4242] hover:bg-[#c23535] text-white font-bold rounded-lg transition-all duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#DC4242]/10 group"
            >
              <span>Start a Project</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5 shrink-0"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3-Column Balanced System Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="
                group
                flex flex-col gap-3
                p-6 sm:p-7
                rounded-xl
                border border-[#2a2e40]/70
                bg-[#14161F]
                transition-all duration-300 ease-out
                hover:border-[#DC4242]/30
              "
            >
              {/* Technical Indicator Header Tag */}
              <div className="flex justify-between items-center mb-1">
                <div className="text-xl text-white group-hover:text-[#DC4242] transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="font-mono text-[10px] text-[#BCC1CA]/30 uppercase tracking-widest">
                  // Core_0{idx + 1}
                </div>
              </div>

              {/* Title Element - Intact Original Typography parameters */}
              <h4 className="text-[#FFFFFF] font-semibold text-sm group-hover:text-[#DC4242] transition-colors duration-300">
                {benefit.title}
              </h4>

              {/* Description Body */}
              <p className="text-[#BCC1CA]/70 text-sm leading-relaxed">
                {benefit.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}