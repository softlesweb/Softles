"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProcessSteps from "../../components/_components/ProcessSteps";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function WordPressProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understanding your goals, audience, and technical needs through workshops.",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Defining architecture, milestones, and deliverables in a clear roadmap.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Wireframes and mockups aligned to your brand — approved before we code.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Clean, standards-compliant code in iterative sprints with check-ins.",
    },
    {
      num: "05",
      title: "Testing & Launch",
      desc: "Cross-browser QA, performance and SEO checks, and a smooth launch.",
    },
  ];

  return (
    <section className="softles-section-primary" id="process">
      <div className="service-page-container">
        <div className="text-center mb-12">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">How We Work</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">Our WordPress Development Process</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            A structured, transparent process that keeps WordPress projects moving from strategy to launch with clarity.
          </motion.p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
