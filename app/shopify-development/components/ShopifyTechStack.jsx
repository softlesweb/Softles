"use client";

import WordReveal from "../../components/_components/WordReveal";
import {
  SiShopify,
  SiReact,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { FiDroplet, FiCpu, FiMail } from "react-icons/fi";
import { RiVipCrownFill } from "react-icons/ri";
import TechMarquee from "../../components/_components/TechMarquee";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function ShopifyTechStack() {
  // Each logo keeps its real brand colour so it reads as a recognizable mark.
  const techs = [
    { icon: <SiShopify className="w-6 h-6" />, color: "#36F4A4", name: "Shopify", desc: "Core Platform" },
    { icon: <RiVipCrownFill className="w-6 h-6" />, color: "#C9A227", name: "Shopify Plus", desc: "Enterprise Commerce" },
    { icon: <FiDroplet className="w-6 h-6" />, color: "#7AB55C", name: "Liquid", desc: "Template Language" },
    { icon: <FiCpu className="w-6 h-6" />, color: "#5BB98B", name: "Hydrogen", desc: "Headless Framework" },
    { icon: <SiReact className="w-6 h-6" />, color: "#61DAFB", name: "React", desc: "Storefront UI" },
    { icon: <SiNextdotjs className="w-6 h-6" />, color: "#FFFFFF", name: "Next.js", desc: "Commerce Framework" },
    { icon: <SiGraphql className="w-6 h-6" />, color: "#E10098", name: "GraphQL", desc: "Storefront API" },
    { icon: <FiMail className="w-6 h-6" />, color: "#FFFFFF", name: "Klaviyo", desc: "Email Automation" },
  ];

  return (
    <section className="softles-section-secondary" id="tech-stack">
      <div className="service-page-container">
        <div className="text-center mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Technology Stack</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading text-[#FFFFFF]">Tools & Technologies</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            Best-in-class Shopify technologies to build stores that are fast, flexible, and ready for whatever the market demands.
          </motion.p>
        </div>

        <TechMarquee techs={techs} />
      </div>
    </section>
  );
}
