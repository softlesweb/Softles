"use client";

import WordPressProjectShowcase from "../../components/_components/WordPressProjectShowcase";

const projects = [
  {
    title: "Pride & Justice Associates",
    shortName: "Pride & Justice",
    url: "https://prideandjustice.in/",
    image: "/prideandjustice.png",
    industry: "Legal / Law Firm",
    summary:
      "A trust-driven WordPress experience for a growing law firm, combining strong practice-area navigation, team credibility, and conversion-focused enquiry flows.",
    content:
      "Built with a custom information architecture that helps visitors quickly understand the firm’s expertise, locate the right legal services, and book consultations with confidence.",
    results: ["Practice area clarity", "Faster consultation intent", "Stronger trust signals"],
    tags: ["WordPress", "Custom Theme", "Legal", "SEO"],
  },
  {
    title: "Enviro Guru Consultancy Services",
    shortName: "Enviro Guru",
    url: "https://enviroguru.in/",
    image: "/enviroguru.png",
    industry: "Environmental / Consulting",
    summary:
      "A professional corporate website designed to present environmental compliance services clearly while turning visitor interest into qualified leads.",
    content:
      "The site structure emphasizes service credibility, testimonials, and lead capture modules so decision-makers can evaluate the consultancy quickly.",
    results: ["Lead-focused UX", "Service clarity", "Higher conversion intent"],
    tags: ["WordPress", "Corporate", "Lead Forms", "SEO"],
  },
  {
    title: "BNPS International",
    shortName: "BNPS International",
    url: "https://bnpsinternational.com/",
    image: "/bnpsinternational.png",
    industry: "Education / Study Abroad",
    summary:
      "A polished WordPress platform for an education consultancy with strong storytelling, partner credibility, and high-intent student enquiry journeys.",
    content:
      "Designed to support both informational browsing and action-oriented conversion through clear callouts for counselling, university partnerships, and success stories.",
    results: ["Student enquiry flow", "Partner credibility", "Clear education messaging"],
    tags: ["WordPress", "Education", "Lead Generation"],
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
