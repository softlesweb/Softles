"use client";

import { useEffect, useRef, useState } from "react";

export default function ShopifyHero() {
  const [showTooltip, setShowTooltip] = useState(false);
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      const { clientX, clientY } = e;
      blobRef.current.animate(
        {
          left: `${clientX - 150}px`,
          top: `${clientY - 150}px`,
        },
        {
          duration: 600,
          fill: "forwards",
          easing: "cubic-bezier(.22,1.12,.58,1)",
        }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-24 pb-12 w-full sm:h-[calc(100vh-60px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#111319]">
      <div
        ref={blobRef}
        className="pointer-events-none fixed z-0"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle at 60% 40%, #DC4242 0%, #191C26 100%)",
          filter: "blur(80px)",
          opacity: 0.35,
          left: "50vw",
          top: "50vh",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s",
        }}
        aria-hidden="true"
      />

      <div className="service-page-container flex flex-col items-center justify-center w-full h-full z-10">
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full h-full gap-8 lg:gap-10">
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center mb-3 md:mb-6 gap-2 sm:gap-0">
              <span className="hidden sm:block w-12 h-0.5 bg-[#F5F6FA] sm:mr-4 shrink-0" />
              <span className="text-xs sm:text-base text-[#BCC1CA] font-normal text-center lg:text-left">Certified Shopify Development Experts</span>
            </div>

            <h1 className="font-extrabold md:mb-2 leading-[1.1] sm:leading-tight tracking-tight text-3xl sm:text-[56px] text-[#F5F6FA]">
              Build High-Converting<br className="hidden sm:block" />
              Shopify Stores That <span className="text-[#DC4242]">Scale</span>
            </h1>

            <p className="text-[#BCC1CA] mt-4 mb-5 md:mb-12 max-w-xl block text-base lg:text-lg leading-relaxed" style={{ maxWidth: "40ch", lineHeight: 1.5 }}>
              We design and develop conversion-focused Shopify experiences that help brands increase sales, improve customer experience, and scale efficiently.
            </p>

            <div className="flex justify-center lg:justify-start w-full max-w-sm sm:max-w-md relative">
              <a
                href="/#book-call"
                className="flex items-center justify-center text-center text-xs sm:text-base md:text-lg group relative shadow-[inset_0_0_0_2px_#616467] text-[#DC4242] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full uppercase font-bold bg-transparent hover:bg-[#616467] transition duration-300"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span>Book a Free Discovery Call</span>
                <span className="hidden sm:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#DC4242]"><path d="M5 12h14M15 8l4 4-4 4"/></svg>
                </span>
              </a>
              {showTooltip && (
                <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-[#23263a] text-white text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap">
                  30-minute free strategy session
                </span>
              )}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl lg:mt-0 relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[1/.85] bg-[#181B23] border border-[#2a2e40] rounded-2xl overflow-hidden flex items-center justify-center p-5 sm:p-8">
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 30%, rgba(220,66,66,0.15) 0%, transparent 60%)" }} />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-[rgba(220,66,66,0.15)] border-2 border-[rgba(220,66,66,0.4)] rounded-full flex items-center justify-center mx-auto mb-5">
                  <div className="text-3xl font-bold text-[#DC4242]">S+</div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                  {["Shopify Plus", "Hydrogen", "Custom Themes", "Headless Commerce", "Liquid", "Next.js Commerce", "Klaviyo", "Speed ⚡"].map((tag, i) => (
                    <span key={i} className="px-3 py-2 bg-[#23263a]/40 border border-[#2a2e40] rounded-full text-xs text-[#F3F4F6]/70 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC4242]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC4242]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
