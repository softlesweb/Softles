"use client";

import ProcessSteps from "../../components/_components/ProcessSteps";

export default function WordPressProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understanding your business goals, target audience, and technical requirements through structured workshops.",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Defining architecture, technology choices, milestones, and deliverables with a detailed project roadmap.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Crafting wireframes and high-fidelity mockups aligned to your brand — reviewed and approved before a single line of code is written.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Building with clean, standards-compliant code in iterative sprints with regular progress check-ins.",
    },
    {
      num: "05",
      title: "Testing & Launch",
      desc: "Cross-browser QA, performance testing, SEO checks, and a smooth launch process with post-go-live support.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#191C26]">
      <div className="service-page-container">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              How We Work
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Our Development Process
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A structured, transparent process that keeps projects on time and on
            budget — every time.
          </p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
