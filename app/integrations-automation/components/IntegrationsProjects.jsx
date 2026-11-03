"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProjectDeviceSlider from "../../components/_components/ProjectDeviceSlider";
import { projects } from "../../work/projects";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

// Reuse the homepage project data — these three lean on wiring systems together.
const shown = ["sandeshsetu", "librarysetu", "brunswick-fur-food"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean);

export default function IntegrationsProjects() {
  return (
    <section className="softles-section-secondary" id="projects">
      <div className="service-page-container">
        <div>
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Connected Builds</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Systems that talk to each other
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy max-w-3xl">
            Products where the integration work is the product — messaging platforms, operations software, and subscription commerce.
          </motion.p>
        </div>
      </div>

      <ProjectDeviceSlider projects={shown} />
    </section>
  );
}
