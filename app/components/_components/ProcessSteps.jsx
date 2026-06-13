"use client";

export default function ProcessSteps({ steps }) {
  return (
    <>
      {/* Mobile & tablet: vertical timeline */}
      <div className="flex flex-col gap-0 lg:hidden">
        {steps.map((step, idx) => (
          <div key={step.num ?? idx} className="flex gap-4 sm:gap-5">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#181B23] border-2 border-[#2a2e40] flex items-center justify-center group-hover:border-[#DC4242] transition-all duration-300">
                <span className="font-bold text-[#BCC1CA]/70 text-xs sm:text-sm">
                  {step.num}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="w-0.5 flex-1 min-h-[24px] bg-gradient-to-b from-[#2a2e40] to-transparent my-2" />
              )}
            </div>

            <div className="flex-1 pb-8 sm:pb-10">
              <div className="bg-[#181B23] border border-[#2a2e40] rounded-2xl p-5 sm:p-6 group-hover:border-[#3a4052] group-hover:bg-[#1a1e2a] transition-all duration-300">
                <h3 className="font-semibold text-[#FFFFFF] text-sm sm:text-base mb-2">
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
        <div className="absolute top-7 left-[calc(10%+9px)] right-[calc(10%+9px)] h-0.5 bg-gradient-to-r from-transparent via-[#2a2e40] to-transparent z-0" />

        <div className="flex w-full gap-0 relative z-10">
          {steps.map((step, idx) => (
            <div key={step.num ?? idx} className="flex-1 flex flex-col items-center text-center px-3 group">
            
            {/* Number Circle */}
            <div
              className="
                w-14 h-14 rounded-full 
                bg-[#181B23] 
                border-2 border-[#2a2e40]
                flex items-center justify-center
                mb-6 relative z-10
                transition-all duration-300 ease-out
                group-hover:border-[#DC4242]
                group-hover:bg-[rgba(220,66,66,0.12)]
                group-hover:scale-110
                group-hover:shadow-[0_0_25px_rgba(220,66,66,0.35)]
              "
            >
              <span
                className="
                  font-bold text-[#BCC1CA]/70 text-sm
                  transition-all duration-300
                  group-hover:text-[#DC4242]
                  group-hover:scale-110
                "
              >
                {step.num}
              </span>
            </div>


            {/* Card */}
            <div
              className="
                bg-[#181B23]
                border border-[#2a2e40]
                rounded-2xl
                p-6
                w-full
                transition-all duration-300 ease-out

                group-hover:-translate-y-2
                group-hover:border-[#DC4242]/50
                group-hover:bg-[#1a1e2a]
                group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              "
            >

              <h3
                className="
                  font-semibold 
                  text-[#FFFFFF]
                  text-sm
                  mb-2
                  transition-colors duration-300
                  group-hover:text-[#DC4242]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-[#BCC1CA]/70
                  text-xs
                  leading-relaxed
                  transition-colors duration-300
                  group-hover:text-[#FFFFFF]
                "
              >
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
