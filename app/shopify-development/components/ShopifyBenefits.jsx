"use client";

import Link from "next/link";
import { FiTarget, FiStar, FiZap, FiLayers, FiCode } from "react-icons/fi";
import { RiShakeHandsLine } from "react-icons/ri";

export default function ShopifyBenefits() {
  const benefits = [
    {
      icon: <FiTarget className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Conversion Focused",
      desc: "Every design and development decision is informed by CRO best practices and your specific customer journey data.",
    },
    {
      icon: <FiStar className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Shopify Plus Experience",
      desc: "Hands-on experience with Scripts, Flow, Launchpad, B2B Commerce, Markets, and multi-storefront architecture.",
    },
    {
      icon: <FiZap className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Performance Optimization",
      desc: "Sub-2s page loads and strong Core Web Vitals scores as a baseline on every project — not optional extras.",
    },
    {
      icon: <FiLayers className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow from launch to 100k daily orders without expensive platform migrations or rebuilds.",
    },
    {
      icon: <FiCode className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Clean Dev Standards",
      desc: "Documented, maintainable Liquid and React code that any developer can confidently continue after our engagement ends.",
    },
    {
      icon: <RiShakeHandsLine className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />,
      title: "Long-Term Support",
      desc: "We don't disappear after launch. Flexible retainers provide ongoing development, security patches, and growth support.",
    },
  ];

  return (
    <section className="softles-section-secondary" id="why-softles">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Text Block */}
          <div className="flex-1 lg:sticky lg:top-24">
            <div className="softles-eyebrow mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading text-[#FFFFFF]">
              Why Partner With SoftLes
            </h2>
            <p className="softles-section-copy mb-8 max-w-md">
              We bring commercial thinking to every Shopify engagement. Your store&apos;s revenue metrics are our KPIs — not just the number of tickets closed.
            </p>
            
            {/* Unified Button Style */}
            <Link
              href="/#book-call"
              className="softles-primary-button group"
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
                className="transition-transform group-hover:translate-x-1 shrink-0"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                // Matching cards language from previous components
                className="
                  group
                  flex flex-col
                  p-6
                  softles-card
                "
              >
                {/* Clean Custom Icon Box */}
                <div
                  className="
                    w-10 h-10
                    rounded-lg
                    flex items-center justify-center
                    bg-[#191C26]
                    border border-[#2a2e40]
                    group-hover:bg-[#DC4242]/10
                    group-hover:border-[#DC4242]/30
                    mb-4
                    transition-all
                    duration-300
                  "
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h4 className="font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#DC4242] transition-colors duration-300">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-[#BCC1CA] text-sm leading-relaxed">
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
