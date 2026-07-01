"use client";

import { RiBrushLine, RiPlugLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FiLink2 } from "react-icons/fi";
import { Check } from "lucide-react";

export default function WordPressServices() {
  const services = [
    {
      icon: <RiBrushLine className="w-5 h-5 text-[#DC4242]" />,
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
      icon: <SiNextdotjs className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Headless WordPress Development",
      desc: "Decouple your frontend from the WordPress backend for lightning-fast experiences and modern developer workflows.",
      featured: false,
      bullets: [
        "WordPress + React & Next.js",
        "REST API & GraphQL (WPGraphQL)",
        "Faster Performance & Core Web Vitals",
        "Decoupled Architecture Security",
      ],
    },
    {
      icon: <RiPlugLine className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Plugin Development",
      desc: "When off-the-shelf plugins don't cut it, we build fully custom WordPress plugins engineered for your exact business logic.",
      featured: false,
      bullets: [
        "Custom Plugin Architecture",
        "WooCommerce System Extensions",
        "Secure Third-Party API Integrations",
        "Core Business Automation Modules",
      ],
    },
    {
      icon: <FiLink2 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Integrations & Automation",
      desc: "Connect WordPress to your existing tech stack and automate repetitive workflows so your team can focus on what matters.",
      featured: false,
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
        <div className="mb-10 sm:mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative softles-card p-6 flex flex-col justify-between ${
                service.featured ? "shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      service.featured
                        ? "bg-[#DC4242]/10 border border-[#DC4242]/30"
                        : "bg-[#191C26] border border-[#2a2e40] group-hover:bg-[#DC4242]/10 group-hover:border-[#DC4242]/30"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {service.featured && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#DC4242]/10 border border-[#DC4242]/30 text-[#DC4242]">
                      Core Expert
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#DC4242] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#BCC1CA] text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2a2e40]/40">
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#F3F4F6] font-medium">
                      <Check className="w-3.5 h-3.5 shrink-0 text-[#DC4242]" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
