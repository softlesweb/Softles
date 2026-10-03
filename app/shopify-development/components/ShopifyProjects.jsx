"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProjectDeviceSlider from "../../components/_components/ProjectDeviceSlider";
import { projects } from "../../work/projects";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

// Reuse the homepage project data; the primary CTA points at the live store.
const brunswick = projects.find((p) => p.slug === "brunswick-fur-food");

const shopifyProjects = [
  {
    ...brunswick,
    url: "https://www.brunswickfurfood.com/",
    linkLabel: "Visit live store",
  },
];

export default function ShopifyProjects() {
  return (
    <section className="softles-section-primary" id="projects">
      <div className="service-page-container">
        <div>
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Featured Work</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">Brunswick Fur Food</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy max-w-3xl">
            A compact Shopify case study focused on premium storytelling, easier trial ordering, and stronger mobile conversion. Switch between desktop and mobile, and flip through the pages.
          </motion.p>
        </div>
      </div>

      <ProjectDeviceSlider projects={shopifyProjects} />
    </section>
  );
}
