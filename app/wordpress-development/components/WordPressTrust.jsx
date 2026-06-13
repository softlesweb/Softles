"use client";

import { SiWordpress } from "react-icons/si";
import { FiSearch, FiLayers, FiEdit3 } from "react-icons/fi";

export default function WordPressTrust() {
  const advantages = [
    {
      icon: <SiWordpress />,
      title: "Flexible CMS",
      desc: "Manage any type of content — from blogs and portfolios to complex product catalogs — with a customisable admin interface your team can actually use.",
    },
    {
      icon: <FiSearch />,
      title: "SEO Friendly",
      desc: "Clean semantic markup, fast page speeds, schema support, and deep SEO plugin integrations make WordPress an ideal foundation for organic search growth.",
    },
    {
      icon: <FiLayers />,
      title: "Scalable Architecture",
      desc: "Start small and grow without rebuilding. WordPress scales from brochure sites to enterprise platforms with 100k+ products and millions of monthly visitors.",
    },
    {
      icon: <FiEdit3 />,
      title: "Easy Content Management",
      desc: "Empower your marketing team to publish, edit, and update content without developer involvement — no coding knowledge required after launch.",
    },
  ];

  return (
    // Clean global background weight matching your engineering theme system
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0D0F12] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        
        {/* Header - Kept identical typography structure layout */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Platform Advantages
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Why Businesses Choose WordPress
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl text-sm sm:text-base leading-relaxed">
            WordPress powers over 43% of the web for good reason — it&apos;s flexible,
            scalable, and built for long-term growth.
          </p>
        </div>

        {/* Unique Split Board Layout (Completely different from Shopify's standard Grid blocks) */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Side Performance Card Module */}
          <div className="w-full lg:w-[30%] bg-[#14161F] border border-[#2a2e40]/70 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-[0.03] text-white pointer-events-none">
              <SiWordpress className="w-40 h-40" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#DC4242] uppercase tracking-widest mb-2 font-bold">
                // Platform Metrics
              </div>
              <h3 className="text-[#FFFFFF] font-bold text-xl mb-4 tracking-tight">
                Open Source Power
              </h3>
              <p className="text-[#BCC1CA]/70 text-sm leading-relaxed mb-6">
                Engineered for complete digital ownership. Unrestricted customization with zero platform transaction tax loops.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2a2e40]/40 flex items-center justify-between text-[11px] text-[#BCC1CA]/40 font-mono">
              <span>GLOBAL DEPLOYMENT</span>
              <span className="text-white font-bold">43.0% +</span>
            </div>
          </div>

          {/* Core Advantages List (Linear horizontal rows layout structure) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#14161F] border border-[#2a2e40]/70 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-[#DC4242]/30"
              >
                {/* Horizontal item structure to differentiate UI layout */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.25)] rounded-lg flex items-center justify-center text-xl text-white transition-all duration-300 group-hover:bg-[#DC4242] group-hover:text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#FFFFFF] font-semibold text-base mb-1.5 group-hover:text-[#DC4242] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#BCC1CA]/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}