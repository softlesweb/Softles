"use client";

import WordReveal from "../../components/_components/WordReveal";
import {
  SiFigma,
  SiFramer,
  SiWebflow,
  SiMiro,
  SiStorybook,
  SiLottiefiles,
  SiMaze,
  SiHotjar,
} from "react-icons/si";
import TechMarquee from "../../components/_components/TechMarquee";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

export default function DesignTechStack() {
  // Brand colours verified against each vendor's own assets. Framer's logo is
  // monochrome by brand rule, so it uses their sanctioned Framer Blue accent.
  const techs = [
    { icon: <SiFigma className="w-6 h-6" />, color: "#F24E1E", name: "Figma", desc: "Design & Prototyping" },
    { icon: <SiFramer className="w-6 h-6" />, color: "#0055FF", name: "Framer", desc: "Motion Prototypes" },
    { icon: <SiMiro className="w-6 h-6" />, color: "#FFDD33", name: "Miro", desc: "Flows & Workshops" },
    { icon: <SiStorybook className="w-6 h-6" />, color: "#FF4785", name: "Storybook", desc: "Component Library" },
    { icon: <SiLottiefiles className="w-6 h-6" />, color: "#00DDB3", name: "LottieFiles", desc: "Motion & Animation" },
    { icon: <SiMaze className="w-6 h-6" />, color: "#0568FD", name: "Maze", desc: "Usability Testing" },
    { icon: <SiHotjar className="w-6 h-6" />, color: "#FF3C00", name: "Hotjar", desc: "Behaviour Insight" },
    { icon: <SiWebflow className="w-6 h-6" />, color: "#146EF5", name: "Webflow", desc: "Visual Build" },
  ];

  return (
    <section className="softles-section-secondary" id="tech-stack">
      <div className="service-page-container">
        <div className="text-center mb-10">
          <motion.div {...enter(0)} className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Tools we design in</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">Our design stack</WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy mx-auto">
            Figma is home. The rest earn their place when a project needs motion, testing or a documented component library.
          </motion.p>
        </div>

        <TechMarquee techs={techs} />
      </div>
    </section>
  );
}
