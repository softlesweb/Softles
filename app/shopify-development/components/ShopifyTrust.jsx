"use client";

import { FiZap, FiLock, FiTrendingUp, FiEdit2 } from "react-icons/fi";

export default function ShopifyTrust() {
  const advantages = [
    {
      icon: <FiZap className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Fast & Reliable Infrastructure",
      desc: "Shopify's global CDN and enterprise-ready uptime keep your store fast and available during every launch and sale.",
    },
    {
      icon: <FiLock className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Secure Payment Ecosystem",
      desc: "PCI-compliant checkout, Shop Pay optimization, and secure payments so customers can buy with confidence.",
    },
    {
      icon: <FiTrendingUp className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Scalable Commerce Platform",
      desc: "Grow from a single storefront to Shopify Plus, multi-country stores, and headless commerce without a rewrite.",
    },
    {
      icon: <FiEdit2 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Easy Store Management",
      desc: "A polished admin experience and smart workflows make product, order, and campaign management simple.",
    },
  ];

  return (
    // Kept your precise desktop padding parameters (py-12 sm:py-16 lg:py-28) & background consistency
    <section className="py-12 sm:py-16 lg:py-28 bg-[#0D0F12] border-t border-b border-[#2a2e40]" id="why-shopify">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
              Platform Advantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Why Leading Brands Choose Shopify
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Shopify powers over 4.6 million stores worldwide. It&apos;s the platform built to convert browsers into buyers — and to scale without friction.
          </p>
        </div>

        {/* Unified Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              // Consistent with pichla section: No scaling, no rotations, unified hover response
              className="
                group 
                relative 
                rounded-xl 
                p-6 
                flex 
                flex-col 
                bg-[#14161F] 
                border 
                border-[#2a2e40]/70 
                hover:border-[#DC4242]/50 
                hover:shadow-[0_12px_30px_rgba(220,66,66,0.06)] 
                transition-all 
                duration-300
              "
            >
              {/* Minimal Clean Icon Container */}
              <div
                className="
                  w-10 h-10 
                  rounded-lg 
                  flex 
                  items-center 
                  justify-center 
                  mb-5 
                  bg-[#0D0F12] 
                  border 
                  border-[#2a2e40] 
                  group-hover:bg-[#DC4242]/10 
                  group-hover:border-[#DC4242]/30 
                  transition-all 
                  duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title with matching transitions */}
              <h3 className="font-bold text-base text-white tracking-tight mb-2.5 group-hover:text-[#DC4242] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}