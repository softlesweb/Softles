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

const services = [
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
      </svg>
    ),
    title: "Discovery & UX Structure",
    desc: "Sitemap, user flows and page-level wireframes agreed before a single pixel gets styled.",
    featured: true,
    bullets: [
      "Sitemap & information architecture",
      "User flows for every key journey",
      "Low-fidelity wireframes",
      "Competitor & current-site audit",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "UI Design in Figma",
    desc: "High-fidelity screens for mobile and desktop, built from a reusable component library rather than one-off pages.",
    bullets: [
      "Mobile & desktop for every screen",
      "Empty, loading and error states",
      "Type scale, colour and spacing system",
      "Two review rounds per stage",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 8l3 3-3 3" />
      </svg>
    ),
    title: "Interactive Prototypes",
    desc: "Your screens wired into a clickable prototype you can navigate, share and test before the build is quoted.",
    bullets: [
      "Clickable end-to-end journeys",
      "Shareable link for your whole team",
      "Comments collected in one place",
      "Optional usability testing",
    ],
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Design System & Handoff",
    desc: "Tokens, components, spacing and interaction states documented so the built site matches the design.",
    bullets: [
      "Reusable component library",
      "Design tokens & spec annotations",
      "Figma-to-WordPress / Shopify handoff",
      "Walkthrough call with your developer",
    ],
  },
];

export default function DesignServices() {
  return (
    <section className="softles-section-primary" id="services">
      <div className="service-page-container mx-auto w-full flex flex-col">
        <div className="flex flex-col mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">What&apos;s included</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            From first sketch to build-ready
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            Four stages that take you from a vague idea to files a developer can build from without guessing.
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
              badge={service.featured ? "Start here" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
