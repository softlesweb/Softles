"use client";

import WordReveal from "../../components/_components/WordReveal";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const EASE = [0.22, 1, 0.36, 1];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Differentiators sit high on the page — buyers decide on these before they
// read the service list.
const advantages = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    title: "We design for the platform you're building on",
    desc: "WordPress blocks and Shopify sections have real constraints. We design inside them, so the layout doesn't fall apart the moment it hits the CMS and your team can still edit it later.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M9 8l3 3-3 3" />
      </svg>
    ),
    title: "You click through it before you approve it",
    desc: "Every project ends the design stage with a working prototype, not a PDF. You walk the real journey — navigation, forms, checkout variations — while changes still cost nothing.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
    title: "The states everyone forgets get designed too",
    desc: "Empty carts, loading skeletons, validation errors, and the 40-character product title that breaks the card. Designing them up front is what stops the build stalling on questions.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "The same team designs and builds",
    desc: "Nothing gets lost handing off to a different vendor who wasn't in the discovery call. If you'd rather your own developer builds it, the handoff includes a walkthrough with them.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7L12 12l8.7-5M12 22V12" />
      </svg>
    ),
    title: "Components, not one-off pages",
    desc: "Screens are built from a reusable library with shared tokens for type, colour and spacing — so your next ten pages stay consistent without coming back to us for each one.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </svg>
    ),
    title: "You own the file",
    desc: "On final payment the Figma file, source assets and full edit access transfer to you. No view-only links, no locked source, no dependency on us to make a small change.",
  },
];

export default function DesignTrust() {
  return (
    <section className="softles-section-secondary" id="why-us">
      <div className="service-page-container">
        <div className="mb-4">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Why this way</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">
            Design that survives the build
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy max-w-xl">
            Plenty of designs look great in a portfolio and fall apart in development. These are the habits that stop that happening.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
              className="group flex items-start gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF4D57]/30 bg-[#FF4D57]/10 text-[#FF4D57] transition-all duration-300 group-hover:border-[#FF4D57]/60 group-hover:bg-[#FF4D57]/15">
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-bold text-white leading-snug mb-2">{item.title}</h3>
                <p className="text-[#C7CCD6]/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
