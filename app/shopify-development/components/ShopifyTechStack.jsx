"use client";

import {
  SiShopify,
  SiReact,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { FiDroplet, FiCpu, FiMail } from "react-icons/fi";
import { RiVipCrownFill } from "react-icons/ri";

export default function ShopifyTechStack() {
  // Each logo keeps its real brand color so it reads as a recognizable mark.
  const techs = [
    { icon: <SiShopify className="w-6 h-6" />, color: "#95BF47", name: "Shopify", desc: "Core Platform" },
    { icon: <RiVipCrownFill className="w-6 h-6" />, color: "#C9A227", name: "Shopify Plus", desc: "Enterprise Commerce" },
    { icon: <FiDroplet className="w-6 h-6" />, color: "#7AB55C", name: "Liquid", desc: "Template Language" },
    { icon: <FiCpu className="w-6 h-6" />, color: "#5BB98B", name: "Hydrogen", desc: "Headless Framework" },
    { icon: <SiReact className="w-6 h-6" />, color: "#61DAFB", name: "React", desc: "Storefront UI" },
    { icon: <SiNextdotjs className="w-6 h-6" />, color: "#FFFFFF", name: "Next.js", desc: "Commerce Framework" },
    { icon: <SiGraphql className="w-6 h-6" />, color: "#E10098", name: "GraphQL", desc: "Storefront API" },
    { icon: <FiMail className="w-6 h-6" />, color: "#F5A623", name: "Klaviyo", desc: "Email Automation" },
  ];

  const loopedTechs = [...techs, ...techs];

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

        <div className="overflow-hidden rounded-2xl border border-[#2a2e40]/70 bg-[#191C26]/70 py-4 sm:py-5">
          <div className="flex w-max items-center gap-3 sm:gap-4 animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused]">
            {loopedTechs.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="group min-w-[170px] sm:min-w-[190px] rounded-xl border border-[#2a2e40]/70 bg-[#181B23]/90 px-4 py-4 sm:px-5 sm:py-5 text-center shadow-sm transition-all duration-300 hover:border-[#DC4242]/40 hover:bg-[#1E222D]"
              >
                <div
                  className="mb-3 mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#2a2e40] bg-[#0F1118] transition-all duration-300 group-hover:border-[#DC4242]/30"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <h4 className="mb-1 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#DC4242]">
                  {tech.name}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#BCC1CA]/60">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
