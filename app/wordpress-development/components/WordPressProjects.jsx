"use client";

import WordReveal from "../../components/_components/WordReveal";
import ProjectDeviceSlider from "../../components/_components/ProjectDeviceSlider";
import { motion } from "framer-motion";
import { enter } from "@/app/components/_components/motion-presets";

// Same data shape as the homepage "Selected work" showcase.
const projects = [
  {
    slug: "pride-justice",
    name: "Pride & Justice Associates",
    category: "Website",
    stack: "WordPress",
    url: "https://prideandjustice.in/",
    summary:
      "A trust-driven WordPress experience for a growing law firm, combining strong practice-area navigation, team credibility, and conversion-focused enquiry flows.",
    highlights: [
      "Clear practice-area navigation",
      "Team credibility front-and-centre",
      "Conversion-focused consultation flows",
    ],
    tags: ["WordPress", "Custom Theme", "Legal", "SEO"],
    pages: [
      { label: "Home", d: "/work/prideandjustice-p0-d.jpg", m: "/work/prideandjustice-p0-m.jpg", dW: 1100, dH: 7165, mW: 440, mH: 14267 },
    ],
  },
  {
    slug: "enviro-guru",
    name: "Enviro Guru Consultancy Services",
    category: "Website",
    stack: "WordPress",
    url: "https://enviroguru.in/",
    summary:
      "A professional corporate website designed to present environmental compliance services clearly while turning visitor interest into qualified leads.",
    highlights: [
      "Lead-focused UX and enquiry flows",
      "Clear service and credibility structure",
      "Testimonials and trust signals up front",
    ],
    tags: ["WordPress", "Corporate", "Lead Forms", "SEO"],
    pages: [
      { label: "Home", d: "/work/enviroguru-p0-d.webp", m: "/work/enviroguru-p0-m.webp", dW: 3760, dH: 9192, mW: 750, mH: 10548 },
    ],
  },
  {
    slug: "vvn-assandh",
    name: "Vivekanand Vidya Niketan",
    category: "Website",
    stack: "WordPress",
    url: "https://vvnassandh.com/",
    summary:
      "A CBSE school website for Vivekanand Vidya Niketan, Assandh — presenting academics, admissions, and campus life with clarity and warmth.",
    highlights: [
      "Admissions-focused structure",
      "Academic streams and programs clearly presented",
      "Sports, activities, and alumni success showcased",
    ],
    tags: ["WordPress", "Education", "School", "Admissions"],
    pages: [
      { label: "Home", d: "/work/vvnassandh-p0-d.jpg", m: "/work/vvnassandh-p0-m.jpg", dW: 1100, dH: 8394, mW: 440, mH: 10647 },
    ],
  },
];

export default function WordPressProjects() {
  return (
    <section className="softles-section-secondary" id="projects">
      <div className="service-page-container">
        <div className="mb-0">
          <motion.div {...enter(0)} className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Featured Work</span>
          </motion.div>
          <WordReveal as="h2" className="service-section-heading mb-3">
            WordPress Projects We&apos;re Proud Of
          </WordReveal>
          <motion.p {...enter(2)} className="softles-section-copy">
            Real WordPress builds for consulting and education. Switch between desktop and mobile, and watch the pages scroll.
          </motion.p>
        </div>
      </div>

      <ProjectDeviceSlider projects={projects} />
    </section>
  );
}
