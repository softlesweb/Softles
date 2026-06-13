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
      bullets: [
        "WordPress + React & Next.js",
        "REST API & GraphQL (WPGraphQL)",
        "Faster Performance & Core Web Vitals",
        "Decoupled Architecture Security",
      ],
    },
    {
      icon: <RiPlugLine />,
      title: "Plugin Development",
      desc: "When off-the-shelf plugins don't cut it, we build fully custom WordPress plugins engineered for your exact business logic.",
      bullets: [
        "Custom Plugin Architecture",
        "WooCommerce System Extensions",
        "Secure Third-Party API Integrations",
        "Core Business Automation Modules",
      ],
    },
    {
      icon: <FiLink2 />,
      title: "Integrations & Automation",
      desc: "Connect WordPress to your existing tech stack and automate repetitive workflows so your team can focus on what matters.",
      bullets: [
        "HubSpot & CRM Stack Sync",
        "Marketing Automation Channels",
        "Custom Data Webhook Endpoints",
        "Automated Flow Protocols",
      ],
    },
  ];

  return (
    <section className="softles-section-primary">
      <div className="service-page-container">
        
        {/* Header - Keeping the original exact line elements and text styling */}
        <div className="mb-10">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              What We Build
            </span>
          </div>
          <h2 className="service-section-heading mb-3">
            WordPress Services
          </h2>
          <p className="softles-section-copy">
            End-to-end WordPress development tailored to your business — from
            brand-new builds to complex WooCommerce ecosystems.
          </p>
        </div>

        {/* 2-Column High-Density Grid Architecture (Different from Shopify's Bento Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative softles-card p-5 sm:p-8"
            >
              {/* Icon Container with subtle system transitions */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(220,66,66,0.08)] border border-[rgba(220,66,66,0.25)] flex items-center justify-center mb-5 text-xl text-white group-hover:bg-[#DC4242]/10 group-hover:text-[#DC4242] transition-all duration-300">
                {service.icon}
              </div>

              {/* Title - Keeping the original typography hierarchy intact */}
              <h3 className="font-bold text-xl mb-3 leading-tight text-[#FFFFFF] group-hover:text-[#DC4242] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description Body */}
              <p className="text-[#BCC1CA] text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Symmetrical Internal Separator */}
              <div className="h-px bg-[#2a2e40]/40 w-full mb-5" />

              {/* Bullet Matrix Structure */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
