"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProjectDeviceSlider from "../../components/_components/ProjectDeviceSlider";
import { projects } from "../../work/projects";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

// Reuse the homepage project data — these three lead with design work.
const shown = ["sandeshsetu", "ayla-solutions", "umang-aatray"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean);

export default function DesignProjects() {
  return (
    <section className="softles-section-secondary" id="projects">
      <div className="service-page-container">
        <div>
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Design Work</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-ink">
            Designs that made it to production
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy max-w-3xl">
            Not concept art — every screen here is live. Switch between desktop and mobile, and flip through the pages.
          </motion.p>
        </div>
      </div>

      <ProjectDeviceSlider projects={shown} />
    </section>
  );
}
