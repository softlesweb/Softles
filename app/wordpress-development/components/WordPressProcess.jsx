"use client";

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
    <section className="softles-section-primary">
      <div className="service-page-container">
        
        {/* Header - Keeping identical line markers and font typography hierarchies */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              How We Work
            </span>
          </div>
          <h2 className="service-section-heading mb-3">
            Our Development Process
          </h2>
          <p className="softles-section-copy mx-auto">
            A structured, transparent process that keeps projects on time and on
            budget — every time.
          </p>
        </div>

        {/* Unique Pipeline Flow Infrastructure (Completely separated from Shopify) */}
        <div className="relative max-w-5xl mx-auto flex flex-col gap-6">
          
          {/* Vertical Engineering Timeline Path Line for Desktop Layout */}
          <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-[#2a2e40]/50 hidden md:block" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row items-start gap-4 md:gap-8 softles-card p-5 sm:p-6 lg:p-8"
            >
              {/* Symmetrical Left Column - Process Step Tracking Node */}
              <div className="flex items-center gap-4 shrink-0 z-10">
                <div className="w-20 h-10 rounded-xl bg-[#191C26] border border-[#2a2e40] flex items-center justify-center text-xs font-bold tracking-widest text-[#BCC1CA] group-hover:border-[#DC4242] group-hover:text-[#DC4242] transition-colors duration-300">
                  STEP// {step.num}
                </div>
              </div>

              {/* Symmetrical Right Column - Process Core Text Data Module */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-[#DC4242] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#BCC1CA]/70 text-sm leading-relaxed max-w-3xl">
                  {step.desc}
                </p>
              </div>

              {/* Step Flow System Meta Tag */}
              <div className="absolute right-4 top-4 hidden sm:block text-[9px] text-[#BCC1CA]/40 uppercase tracking-widest">
                {`Stage_0${idx + 1} // Active`}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
