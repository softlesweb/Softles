"use client";

import WordReveal from "../../components/_components/WordReveal";
import SpotlightServiceCard from "../../components/_components/SpotlightServiceCard";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function WordPressServices() {
  const services = [
    {
      icon: (
        <svg {...iconProps}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
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
      icon: (
        <svg {...iconProps}>
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
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
      icon: (
        <svg {...iconProps}>
          <path d="M12 22v-5" />
          <path d="M9 8V2" />
          <path d="M15 8V2" />
          <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
        </svg>
      ),
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
      icon: (
        <svg {...iconProps}>
          <path d="M9 17H7A5 5 0 0 1 7 7h2" />
          <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
      ),
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
    <section className="softles-section-primary" id="services">
      <div className="service-page-container">
        
        {/* Header - Keeping the original exact line elements and text styling */}
        <div className="mb-10 sm:mb-16">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              What We Build
            </span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">
            WordPress Services
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            End-to-end WordPress development tailored to your business — from
            brand-new builds to complex WooCommerce ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {services.map((service, idx) => (
            <SpotlightServiceCard
              key={service.title}
              idx={idx}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              bullets={service.bullets}
              badge={service.featured ? "Core Expert" : undefined}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
