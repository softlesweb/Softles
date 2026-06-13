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
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading mb-4">
              Why Work With SoftLes
            </h2>
            <p className="text-[#BCC1CA]/80 mb-6 sm:mb-8 max-w-md text-sm sm:text-base leading-relaxed">
              We&apos;re not just developers — we&apos;re a strategic partner committed to
              your long-term business success.
            </p>
            <a
              href="/#book-call"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-4 bg-[#DC4242] text-white font-bold rounded-full hover:bg-[#ff4d50] transition-all duration-300 text-base whitespace-nowrap shadow-[inset_0_0_0_2px_transparent] group"
            >
              Start a Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Benefits Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="
                  group
                  flex flex-col gap-3
                  p-5
                  rounded-xl
                  border border-transparent
                  bg-[#181B23]/40

                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:bg-[#181B23]
                  hover:border-[#2a2e40]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              >

                <div
                  className="
                    w-fit
                    text-2xl
                    text-white

                    transition-all duration-300

                    group-hover:scale-110
                    group-hover:-translate-y-1
                    group-hover:text-[#DC4242]
                  "
                >
                  {benefit.icon}
                </div>


                <h4
                  className="
                    text-[#FFFFFF]
                    font-semibold
                    text-sm

                    transition-colors duration-300

                    group-hover:text-[#DC4242]
                  "
                >
                  {benefit.title}
                </h4>


                <p
                  className="
                    text-[#BCC1CA]/70
                    text-sm
                    leading-relaxed

                    transition-colors duration-300

                    group-hover:text-[#FFFFFF]/80
                  "
                >
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
