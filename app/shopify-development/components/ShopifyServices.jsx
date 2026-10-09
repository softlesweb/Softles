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

export default function ShopifyServices() {
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
      icon: (
        <svg {...iconProps}>
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
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
      icon: (
        <svg {...iconProps}>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
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
      icon: (
        <svg {...iconProps}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
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
    <section className="softles-section-primary" id="services">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Capabilities
            </span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Shopify Development Services
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            End-to-end Shopify solutions — from brand-new stores and Shopify Plus builds to headless architectures and full ecosystem automation.
          </motion.p>
        </div>

        {/* Homepage spotlight-card language */}
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
