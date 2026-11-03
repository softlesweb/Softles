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
        <div className="text-center mb-12">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">How We Work</span>
          </div>
          <h2 className="service-section-heading mb-3">Our WordPress Development Process</h2>
          <p className="softles-section-copy mx-auto">
            A structured, transparent process that keeps WordPress projects moving from strategy to launch with clarity.
          </p>
        </div>

        <div className="relative hidden lg:flex gap-0 max-w-6xl mx-auto">
          <div className="absolute top-5 left-[10%] right-[10%] h-px bg-[#2E3446]/50 z-0" />

          <div className="flex w-full gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-xl bg-[#0E1219] border border-[#2E3446] flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:border-[#FF4D57]/30 group-hover:bg-[#FF4D57]/10">
                  <span className="font-bold text-[#C7CCD6]/80 text-sm transition-colors duration-300 group-hover:text-[#FF4D57]">
                    {step.num}
                  </span>
                </div>

                <div className="softles-card p-5 w-full flex-1">
                  <h3 className="font-bold text-white text-base mb-2.5 transition-colors duration-300 group-hover:text-[#FF4D57]">
                    {step.title}
                  </h3>
                  <p className="text-[#C7CCD6]/70 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, idx) => (
            <div key={step.num ?? idx} className="flex gap-4 sm:gap-5 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0E1219] border border-[#2E3446] flex items-center justify-center group-hover:bg-[#FF4D57]/10 group-hover:border-[#FF4D57]/30 transition-all duration-300">
                  <span className="font-bold text-[#C7CCD6]/80 text-xs sm:text-sm group-hover:text-[#FF4D57] transition-colors">
                    {step.num}
                  </span>
                </div>
                {idx < steps.length - 1 && <div className="w-px flex-1 min-h-[32px] bg-[#2E3446]/60 my-2" />}
              </div>

              <div className="flex-1 pb-8">
                <div className="softles-card p-5">
                  <h3 className="font-bold text-white text-base mb-2 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#C7CCD6]/70 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
