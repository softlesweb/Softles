"use client";

import WordReveal from "../../components/_components/WordReveal";
import {
  SiWordpress,
  SiWoocommerce,
  SiPhp,
  SiMysql,
  SiElementor,
  SiGutenberg,
  SiWpengine,
  SiCloudflare,
} from "react-icons/si";
import TechMarquee from "../../components/_components/TechMarquee";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function WordPressTechStack() {
  // Each logo keeps its real brand colour so it reads as a recognizable mark.
  const techs = [
    { icon: <SiWordpress className="w-6 h-6" />, color: "#3858E9", name: "WordPress", desc: "Core CMS Platform" },
    { icon: <SiWoocommerce className="w-6 h-6" />, color: "#873EFF", name: "WooCommerce", desc: "E-commerce Engine" },
    { icon: <SiPhp className="w-6 h-6" />, color: "#777BB4", name: "PHP", desc: "Server-side Logic" },
    { icon: <SiMysql className="w-6 h-6" />, color: "#4479A1", name: "MySQL", desc: "Database Layer" },
    { icon: <SiElementor className="w-6 h-6" />, color: "#FF4D57", name: "Elementor", desc: "Visual Page Builder" },
    { icon: <SiGutenberg className="w-6 h-6" />, color: "#0087BE", name: "Gutenberg", desc: "Block Editor" },
    { icon: <SiWpengine className="w-6 h-6" />, color: "#0ECAD4", name: "WP Engine", desc: "Managed Hosting" },
    { icon: <SiCloudflare className="w-6 h-6" />, color: "#F38020", name: "Cloudflare", desc: "CDN & Security" },
  ];

  return (
    <section className="softles-section-secondary" id="tech-stack">
      <div className="service-page-container">
        <div className="text-center mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Technology Stack</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">Tools & Technologies</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            We use battle-tested, best-in-class technologies to build WordPress solutions that are fast, secure, and future-proof.
          </motion.p>
        </div>

        <TechMarquee techs={techs} />
      </div>
    </section>
  );
}
