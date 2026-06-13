"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section className="relative min-h-screen lg:min-h-[92vh] w-full flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#111319]">
      
      {/* ─── STRUCTURAL BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#191C26]/40 to-[#DC4242]/10" />
      </div>

      {/* Dynamic Mouse Tracking Ambient Glow */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed z-0 hidden lg:block"
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
        }}
        aria-hidden="true"
      />

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="service-page-container flex flex-col items-center justify-center w-full h-full z-10 lg:my-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-10 lg:gap-20">
          
          {/* Left Content Column */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left">
            
            {/* Unified Structural Badge Layer */}
            <div className="softles-eyebrow mb-2 md:mb-6">
              <span className="softles-eyebrow-line" />
              <span className="text-base text-[#BCC1CA] font-normal">
                Certified Shopify Development Experts
              </span>
            </div>

            {/* Title */}
            <h1 className="relative font-extrabold text-3xl sm:text-[56px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#F5F6FA]">
              Build High-Converting<br className="hidden sm:block" />
              Shopify Stores That <span className="text-[#DC4242]">Scale</span>
              <span className="ml-1 text-[#DC4242]">.</span>
            </h1>

            <p className="text-[#BCC1CA] mt-4 mb-5 md:mb-12 max-w-xl text-base lg:text-lg leading-relaxed font-normal">
              We design and develop conversion-focused Shopify experiences that help brands increase sales, improve customer experience, and scale efficiently.
            </p>

            {/* Premium Button Action Container */}
            <div className="flex flex-col items-center lg:items-start w-full relative">
              <div className="relative w-full sm:w-auto">
                <a
                  href="/#book-call"
                  className="softles-primary-button w-full sm:w-auto group"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </div>
              
              {showTooltip && (
                <div className="absolute left-1/2 lg:left-0 -bottom-10 -translate-x-1/2 lg:translate-x-0 bg-[#23263a] text-white text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap hidden sm:block">
                  ✨ 30-minute free strategy session
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Premium High-End Image/Illustration Container */}
          <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-xl">
            <div className="w-full relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden group">
              
              {/* Subtle Glowing Underlay Border matching our aesthetic */}
              <div className="absolute inset-0 rounded-2xl border border-[#2a2e40]/70 group-hover:border-[#DC4242]/30 transition-all duration-500 z-20 pointer-events-none" />
              
              {/* Image Frame Wrapper */}
              <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#14161F]/40 flex items-center justify-center">
                <Image 
                  src="/shopify-hero.png"
                  alt="Shopify High-End Architecture Illustration Overview"
                  fill
                  className="object-contain p-2 sm:p-4 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  priority
                />
                
                {/* Premium Dark Gradient Overlay to blend vector edges smoothly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111319]/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}