"use client";

import Link from "next/link";
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
    <section className="softles-section-primary">
      <div className="service-page-container">
        
        {/* Full Width Top Row Content Block (Different from Shopify Column Setup) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="softles-eyebrow mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading mb-3">
              Why Work With SoftLes
            </h2>
            <p className="softles-section-copy">
              We&apos;re not just developers — we&apos;re a strategic partner committed to
              your long-term business success.
            </p>
          </div>
          
          {/* Action Button - Converted to strict system rounded corners geometry */}
          <div className="shrink-0 pt-2 w-full sm:w-auto">
            <Link
              href="/#book-call"
              className="softles-primary-button w-full sm:w-auto group"
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
            </Link>
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
                softles-card
              "
            >
              {/* Technical Indicator Header Tag */}
              <div className="flex justify-between items-center mb-1">
                <div className="text-xl text-white group-hover:text-[#DC4242] transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="text-[10px] text-[#BCC1CA]/40 uppercase tracking-widest">
                  {`// Core_0${idx + 1}`}
                </div>
              </div>

              {/* Title Element - Intact Original Typography parameters */}
              <h4 className="text-[#FFFFFF] font-bold text-base group-hover:text-[#DC4242] transition-colors duration-300">
                {benefit.title}
              </h4>

              {/* Description Body */}
              <p className="text-[#BCC1CA] text-sm leading-relaxed">
                {benefit.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
