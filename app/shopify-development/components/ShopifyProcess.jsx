"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProcessSteps from "../../components/_components/ProcessSteps";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function ShopifyProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We align on your brand, audience, and goals to define the right Shopify roadmap.",
    },
    {
      num: "02",
      title: "UX Planning",
      desc: "Wireframes and conversion-focused layouts set the foundation for results.",
    },
    {
      num: "03",
      title: "Store Design",
      desc: "High-fidelity designs that reflect your brand and optimize every interaction.",
    },
    {
      num: "04",
      title: "Build & Integration",
      desc: "Clean Liquid, React, and API integrations for a fast, maintainable store.",
    },
    {
      num: "05",
      title: "Launch & Optimize",
      desc: "QA, performance tuning, and support so your store converts from day one.",
    },
  ];

  return (
    <section className="softles-section-primary" id="process">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              How We Work
            </span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Our Shopify Development Process
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            A structured workflow that delivers on time, on budget, and above expectations — every time.
          </motion.p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
