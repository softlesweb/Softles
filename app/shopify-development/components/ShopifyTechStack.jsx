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
    { icon: <SiShopify />, name: "Shopify", desc: "Core Platform" },
    { icon: <RiStarSFill />, name: "Shopify Plus", desc: "Enterprise Commerce" },
    { icon: <FiDroplet />, name: "Liquid", desc: "Template Language" },
    { icon: <FiCpu />, name: "Hydrogen", desc: "Headless Framework" },
    { icon: <SiReact />, name: "React", desc: "Storefront UI" },
    { icon: <SiNextdotjs />, name: "Next.js", desc: "Commerce Framework" },
    { icon: <SiGraphql />, name: "GraphQL", desc: "Storefront API" },
    { icon: <FiMail />, name: "Klaviyo", desc: "Email Automation" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Technology Stack
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Tools & Technologies
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Best-in-class Shopify technologies to build stores that are fast, flexible, and ready for whatever the market demands.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                overflow-hidden

                bg-[#181B23]
                border border-[#2a2e40]
                rounded-2xl
                p-7
                text-center

                transition-all duration-300 ease-out

                hover:-translate-y-2
                hover:border-[rgba(220,66,66,0.5)]
                hover:bg-[#1a1e2a]
                hover:shadow-[0_15px_40px_rgba(220,66,66,0.12)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top,rgba(220,66,66,0.15),transparent_60%)]
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">

                {/* Icon Box */}
                <div
                  className="
                    w-14 h-14
                    mx-auto
                    mb-4

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-[rgba(220,66,66,0.08)]
                    border border-[rgba(220,66,66,0.25)]

                    text-3xl
                    text-white

                    transition-all duration-300

                    group-hover:scale-110
                    group-hover:bg-[rgba(220,66,66,0.15)]
                    group-hover:border-[rgba(220,66,66,0.5)]
                    group-hover:text-[#DC4242]
                    group-hover:rotate-3
                  "
                >
                  {tech.icon}
                </div>


                <h4
                  className="
                    font-semibold
                    text-[#FFFFFF]
                    text-sm
                    mb-1

                    transition-colors duration-300

                    group-hover:text-[#DC4242]
                  "
                >
                  {tech.name}
                </h4>


                <p
                  className="
                    text-[#BCC1CA]/60
                    text-xs

                    transition-colors duration-300

                    group-hover:text-[#FFFFFF]/80
                  "
                >
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
