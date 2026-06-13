"use client";

import { RiBrushLine, RiPlugLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FiLink2 } from "react-icons/fi";

export default function WordPressServices() {
  const services = [
    {
      icon: <RiBrushLine />,
      title: "Theme Design & Redesign",
      desc: "Pixel-perfect custom WordPress themes built from scratch — no bloated page builder templates, just clean and purposeful code.",
      featured: true,
      bullets: [
        "Custom Theme Development",
        "Website Redesign & Refresh",
        "UX Improvements & Conversion Audits",
        "Mobile Optimization",
      ],
    },
    {
      icon: <SiNextdotjs />,
      title: "Headless WordPress Development",
      desc: "Decouple your frontend from the WordPress backend for lightning-fast experiences and modern developer workflows.",
      featured: false,
      bullets: [
        "WordPress + React",
        "WordPress + Next.js",
        "REST API & GraphQL (WPGraphQL)",
        "Faster Performance & Core Web Vitals",
      ],
    },
    {
      icon: <RiPlugLine />,
      title: "Plugin Development",
      desc: "When off-the-shelf plugins don't cut it, we build fully custom WordPress plugins engineered for your exact business logic.",
      featured: false,
      bullets: [
        "Custom Plugin Architecture",
        "WooCommerce Extensions",
        "API Integrations",
        "Business Automation",
      ],
    },
    {
      icon: <FiLink2 />,
      title: "Integrations & Automation",
      desc: "Connect WordPress to your existing tech stack and automate repetitive workflows so your team can focus on what matters.",
      featured: false,
      bullets: [
        "HubSpot & WhatsApp Integration",
        "CRM Integration",
        "Mailchimp & Klaviyo",
        "Zapier Automation",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#2a2e40] bg-[#191C26]">
      <div className="service-page-container">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              What We Build
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            WordPress Services
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl text-sm sm:text-base leading-relaxed">
            End-to-end WordPress development tailored to your business — from
            brand-new builds to complex WooCommerce ecosystems.
          </p>
        </div>

        {/* Grid - 3 cols for first 3, then 2 cols for last 2 */}
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
