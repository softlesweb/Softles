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
    <section className="softles-section-secondary" id="tech-stack">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Technology Stack
            </span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Tools & Technologies
          </h2>
          <p className="softles-section-copy mx-auto">
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
                softles-card
                p-6
                text-center
                flex
                flex-col
                items-center
                justify-center
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
                    bg-[#191C26]
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
                <h4 className="font-bold text-base text-white mb-1 group-hover:text-[#DC4242] transition-colors duration-300">
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
