"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProcessSteps from "../../components/_components/ProcessSteps";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const steps = [
  { num: "01", title: "Discovery", desc: "A working session on goals, audience and what the site actually has to do." },
  { num: "02", title: "Structure", desc: "Sitemap, user flows and wireframes — the skeleton agreed before colour." },
  { num: "03", title: "Design", desc: "High-fidelity screens in Figma at mobile and desktop, in two review rounds." },
  { num: "04", title: "Prototype", desc: "Screens linked into a clickable journey your team can walk and comment on." },
  { num: "05", title: "Handoff", desc: "Components, tokens and specs packaged for build, plus a walkthrough call." },
];

export default function DesignProcess() {
  return (
    <section className="softles-section-primary" id="process">
      <div className="service-page-container">
        <div className="mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">How it runs</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">
            Five stages, no surprises
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            You see something at the end of every stage, and nothing moves forward until you&apos;ve signed off on the one before it.
          </motion.p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
