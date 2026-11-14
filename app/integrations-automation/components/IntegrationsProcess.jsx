"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProcessSteps from "../../components/_components/ProcessSteps";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

const steps = [
  { num: "01", title: "Process Audit", desc: "We map what your team does by hand, then work out what's worth automating." },
  { num: "02", title: "Integration Plan", desc: "Systems, data direction, what happens on failure, and the monthly running cost." },
  { num: "03", title: "Build in Staging", desc: "Everything built against a sandbox or dev store first — never against live orders." },
  { num: "04", title: "Test & Go Live", desc: "Refunds, partial stock, duplicates and timeouts tested, then a switch with rollback ready." },
  { num: "05", title: "Monitor & Maintain", desc: "Failure alerts from day one, plus scheduled checks that an API change hasn't broken it." },
];

export default function IntegrationsProcess() {
  return (
    <section className="softles-section-primary" id="process">
      <div className="service-page-container">
        <div className="mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">How it runs</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Audit first, live orders last
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            Automation work goes wrong in predictable ways. This order is what stops your real customers being the test data.
          </motion.p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
