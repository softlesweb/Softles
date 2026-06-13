"use client";

import {
  SiShopify,
  SiReact,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { FiDroplet, FiCpu, FiMail } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";

export default function ShopifyTechStack() {
  const techs = [
    { icon: <SiShopify className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Shopify", desc: "Core Platform" },
    { icon: <RiStarSFill className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Shopify Plus", desc: "Enterprise Commerce" },
    { icon: <FiDroplet className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Liquid", desc: "Template Language" },
    { icon: <FiCpu className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Hydrogen", desc: "Headless Framework" },
    { icon: <SiReact className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "React", desc: "Storefront UI" },
    { icon: <SiNextdotjs className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Next.js", desc: "Commerce Framework" },
    { icon: <SiGraphql className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "GraphQL", desc: "Storefront API" },
    { icon: <FiMail className="w-5 h-5 text-zinc-400 group-hover:text-[#DC4242] transition-colors duration-300" />, name: "Klaviyo", desc: "Email Automation" },
  ];

  return (
    // Maintained exact desktop padding parameters (py-12 sm:py-16 lg:py-28) & background consistency
    <section className="py-12 sm:py-16 lg:py-28 bg-[#0D0F12] border-t border-[#2a2e40]" id="tech-stack">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Best-in-class Shopify technologies to build stores that are fast, flexible, and ready for whatever the market demands.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              // Symmetrical hover and styles with previous sections (No fake radial glows)
              className="
                group
                relative
                rounded-xl
                p-6
                text-center
                flex
                flex-col
                items-center
                justify-center
                bg-[#14161F]
                border border-[#2a2e40]/70
                hover:border-[#DC4242]/50
                hover:shadow-[0_12px_30px_rgba(220,66,66,0.06)]
                transition-all
                duration-300
              "
            >
              <div className="relative z-10 w-full flex flex-col items-center">

                {/* Unified Icon Box Shape */}
                <div
                  className="
                    w-10 h-10
                    mb-4
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#0D0F12]
                    border border-[#2a2e40]
                    group-hover:bg-[#DC4242]/10
                    group-hover:border-[#DC4242]/30
                    transition-all
                    duration-300
                  "
                >
                  {tech.icon}
                </div>

                {/* Title */}
                <h4 className="font-bold text-base text-white tracking-tight mb-1 group-hover:text-[#DC4242] transition-colors duration-300">
                  {tech.name}
                </h4>

                {/* Description */}
                <p className="text-[#BCC1CA]/60 text-xs tracking-wide">
                  {tech.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}