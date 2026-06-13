"use client";

import { RiBrushLine, RiPlug2Line } from "react-icons/ri";
import { FiZap, FiLink2 } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";

export default function ShopifyServices() {
  const services = [
    {
      icon: <RiBrushLine />,
      title: "Theme Design & Redesign",
      desc: "Conversion-focused, custom Shopify themes built for brand impact, speed, and seamless mobile performance.",
      featured: true,
      bullets: [
        "Custom Theme Development",
        "Shopify 2.0 Sections",
        "Pixel-perfect UX/UI",
        "Mobile Optimization",
      ],
    },
    {
      icon: <SiNextdotjs />,
      title: "Headless Shopify Development",
      desc: "Decoupled storefronts with Next.js and Hydrogen for faster performance and total flexibility.",
      featured: false,
      bullets: [
        "Hydrogen & Headless",
        "Next.js Commerce",
        "API-first Architecture",
        "PWA Experiences",
      ],
    },
    {
      icon: <RiPlug2Line />,
      title: "Shopify App Development",
      desc: "Custom apps built to extend Shopify with workflow automation, storefront integrations, and business logic.",
      featured: false,
      bullets: [
        "Embedded Apps",
        "Private App Builds",
        "Store Automation",
        "API Integrations",
      ],
    },
    {
      icon: <FiLink2 />,
      title: "Integrations & Automation",
      desc: "Connect Shopify to your CRM, email platform, and business systems so your store runs like clockwork.",
      featured: false,
      bullets: [
        "Klaviyo & Mailchimp",
        "CRM Sync",
        "Zapier Workflows",
        "Order Automation",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#2a2e40] bg-[#191C26]" id="services">
      <div className="service-page-container">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              What We Build
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Shopify Development Services
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl text-sm sm:text-base leading-relaxed">
            End-to-end Shopify solutions — from brand-new stores and Shopify Plus builds to headless architectures and full ecosystem automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl p-5 sm:p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(220,66,66,0.15)] ${
              service.featured
                ? "border-[rgba(220,66,66,0.35)] bg-gradient-to-br from-[rgba(220,66,66,0.08)] to-[#181B23]"
                : "bg-[#181B23] border-[#2a2e40] hover:border-[rgba(220,66,66,0.35)] hover:bg-gradient-to-br hover:from-[rgba(220,66,66,0.08)] hover:to-[#181B23]"
            }`}
          >
            {/* Top Red Bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300 ${
                service.featured
                  ? "bg-[#DC4242] opacity-100"
                  : "bg-[#DC4242] opacity-0 group-hover:opacity-100"
              }`}
            />

            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-xl text-white transition-all duration-300 ${
                service.featured
                  ? "bg-[#DC4242] text-white"
                  : "bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.25)] group-hover:bg-[#DC4242] group-hover:text-white"
              }`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className={`font-bold text-base mb-2 transition-colors duration-300 ${
                service.featured
                  ? "text-[#DC4242]"
                  : "text-[#FFFFFF] group-hover:text-[#DC4242]"
              }`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#BCC1CA]/70 text-sm leading-relaxed mb-5">
              {service.desc}
            </p>

            {/* Bullets */}
            <ul className="space-y-2">
              {service.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#BCC1CA]/70 font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#DC4242] mt-1.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
