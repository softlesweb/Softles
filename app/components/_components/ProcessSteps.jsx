"use client";

export default function ProcessSteps({ steps }) {
  return (
    <>
      {/* Mobile & tablet: vertical timeline */}
      <div className="flex flex-col gap-0 lg:hidden">
        {steps.map((step, idx) => (
          <div key={step.num ?? idx} className="flex gap-4 sm:gap-5 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#191C26] border border-[#2a2e40] flex items-center justify-center group-hover:bg-[#DC4242]/10 group-hover:border-[#DC4242]/30 transition-all duration-300">
                <span className="font-bold text-[#BCC1CA]/80 text-xs sm:text-sm group-hover:text-[#DC4242] transition-colors">
                  {step.num}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="w-px flex-1 min-h-[32px] bg-[#2a2e40]/60 my-2" />
              )}
            </div>

            <div className="flex-1 pb-8">
              <div className="softles-card p-5">
                <h3 className="font-bold text-white text-base mb-2 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="relative hidden lg:flex gap-0">
        {/* Continuous Solid Structural Guide Line */}
        <div className="absolute top-5 left-[10%] right-[10%] h-px bg-[#2a2e40]/50 z-0" />

        <div className="flex w-full gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={step.num ?? idx} className="flex-1 flex flex-col items-center text-center group">
              
              {/* Number Container aligned with the grid language */}
              <div
                className="
                  w-10 h-10 rounded-xl 
                  bg-[#191C26] 
                  border border-[#2a2e40]
                  flex items-center justify-center
                  mb-6 relative z-10
                  transition-all duration-300
                  group-hover:border-[#DC4242]/30
                  group-hover:bg-[#DC4242]/10
                "
              >
                <span
                  className="
                    font-bold text-[#BCC1CA]/80 text-sm
                    transition-colors duration-300
                    group-hover:text-[#DC4242]
                  "
                >
                  {step.num}
                </span>
              </div>

              {/* Card - Symmetrical hover response with prior sections */}
              <div
                className="
                  softles-card
                  p-5
                  w-full
                  flex-1
                "
              >
                <h3
                  className="
                    font-bold 
                    text-white
                    text-base
                    mb-2.5
                    transition-colors duration-300
                    group-hover:text-[#DC4242]
                  "
                >
                  {step.title}
                </h3>

                <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
