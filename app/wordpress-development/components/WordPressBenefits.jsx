"use client";

import Link from "next/link";
import { FiZap, FiSearch, FiLayers } from "react-icons/fi";
import { AiOutlineCode } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";

export default function WordPressBenefits() {
  const benefits = [
    {
      icon: <FiZap className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "Performance Focused",
      desc: "Every project is optimized for Core Web Vitals. We target sub-2s load times as a baseline, not a bonus.",
    },
    {
      icon: <FiSearch className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "SEO Friendly Development",
      desc: "Structured data, semantic HTML, sitemap automation — SEO best practices are baked in from day one.",
    },
    {
      icon: <AiOutlineCode className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "Clean Code Standards",
      desc: "Modular, documented, WordPress Coding Standards–compliant code that any developer can maintain after us.",
    },
    {
      icon: <MdBusinessCenter className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "Business-Oriented Solutions",
      desc: "We ask 'why' before we ask 'how.' Every technical decision is connected to a measurable business outcome.",
    },
    {
      icon: <RiShakeHandsLine className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "Long-Term Support",
      desc: "We don't disappear after launch. Retainer plans keep your site updated, secure, and continuously improving.",
    },
    {
      icon: <FiLayers className="w-5 h-5 text-zinc-400 group-hover:text-[#FF4D57] transition-colors duration-300" />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow with you — from 100 visitors a month to 100,000 without a costly rebuild.",
    },
  ];

  return (
    <section className="softles-section-primary" id="why-softles">
      <div className="service-page-container">
        <div className="p-2 sm:p-3 lg:p-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
            <div className="max-w-xl">
              <div className="softles-eyebrow mb-3">
                <span className="softles-eyebrow-line" />
                <span className="softles-eyebrow-text">Why SoftLes</span>
              </div>
              <h2 className="service-section-heading text-[#FFFFFF] mb-4">
                Why Partner With SoftLes
              </h2>
              <p className="softles-section-copy max-w-lg">
                We combine commercial thinking, platform expertise, and hands-on delivery to help brands grow faster with a more reliable digital experience.
              </p>
            </div>

            <Link href="/#book-call" className="softles-primary-button group w-full sm:w-auto">
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
                className="transition-transform group-hover:translate-x-1 shrink-0"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group flex flex-col p-5 sm:p-6 rounded-2xl border border-[#2E3446]/60 bg-[#0E1219]/60 hover:border-[#FF4D57]/30 hover:bg-[#1b1f2b] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#13161f] border border-[#2E3446] group-hover:bg-[#FF4D57]/10 group-hover:border-[#FF4D57]/30 mb-4 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-lg text-white mb-2.5 leading-tight group-hover:text-[#FF4D57] transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-[#C7CCD6] text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
