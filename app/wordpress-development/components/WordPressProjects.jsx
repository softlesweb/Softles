"use client";

import { FaYoutube } from "react-icons/fa";
import WordPressProjectShowcase from "../../components/_components/WordPressProjectShowcase";

const projects = [
  {
    title: "Pride & Justice Associates",
    shortName: "Pride & Justice",
    url: "https://prideandjustice.in/",
    image: "/prideandjustice.png",
    industry: "Legal / Law Firm",
    summary:
      "WordPress website for a Gurugram-based law firm — practice areas, team profiles, pan-India network, blog, and appointment booking.",
    tags: ["WordPress", "Custom Theme", "Legal", "SEO"],
  },
  {
    title: "Enviro Guru Consultancy Services",
    shortName: "Enviro Guru",
    url: "https://enviroguru.in/",
    image: "/enviroguru.png",
    industry: "Environmental / Consulting",
    summary:
      "Corporate WordPress site for pollution control and environmental compliance services — services, testimonials, and lead forms.",
    tags: ["WordPress", "Corporate", "Lead Forms", "SEO"],
  },
  {
    title: "BNPS International",
    shortName: "BNPS International",
    url: "https://bnpsinternational.com/",
    image: "/bnpsinternational.png",
    industry: "Education / Study Abroad",
    summary:
      "Study abroad consultancy website with counselling CTAs, university partners, success stories, and student enquiry forms.",
    tags: ["WordPress", "Education", "Lead Generation"],
  },
  {
    title: "Gaam Guhaand",
    shortName: "Gaam Guhaand",
    url: "https://www.youtube.com/@gaamguhaand",
    linkLabel: "Watch on YouTube",
    image: null,
    placeholderIcon: <FaYoutube />,
    industry: "Media / Regional News",
    badge: "Redeploying soon",
    summary:
      "Regional Hindi media platform for western UP, Delhi & Haryana. The WordPress site featured latest YouTube videos and category-wise video sections.",
    tags: ["WordPress", "YouTube API", "Hindi CMS", "Media"],
  },
];

export default function WordPressProjects() {
  return (
    <section className="softles-section-secondary" id="projects">
      <div className="service-page-container">
        <div className="mb-8 sm:mb-10">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Featured Work
            </span>
          </div>
          <h2 className="service-section-heading mb-3">
            WordPress Projects We&apos;re Proud Of
          </h2>
          <p className="softles-section-copy">
            Real WordPress builds for law, consulting, education, and regional media.
          </p>
        </div>

        <WordPressProjectShowcase projects={projects} />
      </div>
    </section>
  );
}
