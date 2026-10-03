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

// Automation buyers arrive with a symptom, not a spec — so the page names the
// symptom before it names the service.
const symptoms = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
    title: "Someone is copy-pasting between tools",
    desc: "An order comes in, and a person retypes it into the CRM, the spreadsheet and the accounting tool. It works until they're on leave, or until they mistype a number nobody catches for a month.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
    title: "An automation broke and nobody noticed",
    desc: "A connector quietly stopped firing after an API change. You found out from a customer, three weeks and an unknown number of dropped leads later.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
      </svg>
    ),
    title: "A half-built setup you inherited",
    desc: "Someone started wiring things together — a freelancer, a former employee, you at 1am — and it half works. Nobody knows what runs, what it touches, or whether it's safe to turn off.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "You don't want to learn Zapier yourself",
    desc: "You could work it out. You'd rather spend that week running the business and have someone hand you a system that already works, with a note explaining what to do when it doesn't.",
  },
];

export default function IntegrationsPain() {
  return (
    <section className="softles-section-secondary" id="symptoms">
      <div className="service-page-container">
        <div className="mb-4">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Sound familiar?</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">
            The work nobody budgeted for
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy max-w-xl">
            Most teams don&apos;t go looking for &ldquo;integration services.&rdquo; They go looking because one of these started costing real hours.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {symptoms.map((item, idx) => (
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
