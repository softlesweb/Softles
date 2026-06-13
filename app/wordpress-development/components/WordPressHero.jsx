"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Next.js Image tag import kiya hai optimized rendering ke liye

export default function WordPressHero() {
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
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0D0F12]">
      
      {/* ─── STRUCTURAL BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03] lg:opacity-[0.04]" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ambient Tracking Glow */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed z-0 opacity-10 hidden lg:block"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #DC4242 0%, transparent 70%)",
          filter: "blur(80px)",
          left: "50vw",
          top: "50vh",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="service-page-container flex flex-col items-center justify-center w-full h-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-12 lg:gap-16">
          
          {/* Left Content Column */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left">
            
            {/* Sync Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-6">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC4242] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#DC4242]"></span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
                Enterprise WordPress Architects
              </span>
            </div>

            {/* Title */}
            <h1 className="font-extrabold tracking-tight text-white leading-[1.1] text-3xl sm:text-5xl lg:text-[54px] mb-4">
              Build High-Performing<br className="hidden sm:block" />
              WordPress Sites That <span className="text-[#DC4242]">Scale</span>
            </h1>

            <p className="text-[#BCC1CA]/80 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              We engineer secure, blazing-fast custom WordPress frameworks and headless configurations designed to maximize engagement and eliminate technical limits.
            </p>

            {/* Action Button */}
            <div className="flex flex-col items-center lg:items-start w-full relative">
              <div className="relative w-full sm:w-auto">
                <a
                  href="/#book-call"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#DC4242] hover:bg-[#c23535] text-white font-bold rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#DC4242]/10 group"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </div>
              
              {showTooltip && (
                <div className="absolute left-1/2 lg:left-0 -bottom-10 -translate-x-1/2 lg:translate-x-0 bg-[#14161F] border border-[#2a2e40] text-[#BCC1CA]/80 text-[11px] font-medium px-2.5 py-1.5 rounded shadow-xl z-20 tracking-wide hidden sm:block">
                  ✨ 30-minute free strategy session
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Premium Illustration/Image Frame */}
          <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-xl">
            <div className="w-full bg-[#14161F] border border-[#2a2e40]/70 rounded-xl p-2 shadow-[0_12px_40px_rgba(0,0,0,0.4)] aspect-[4/3] relative overflow-hidden group transition-all duration-300 hover:border-[#DC4242]/30">
              
              {/* Inner Decorative Tech Lines on Corners */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#2a2e40] group-hover:border-[#DC4242]/40 transition-colors" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#2a2e40] group-hover:border-[#DC4242]/40 transition-colors" />
              
              {/* Main Illustration Wrapper */}
              <div className="w-full h-full relative rounded-lg overflow-hidden bg-[#0D0F12]/60 flex items-center justify-center">
                
                {/* 
                  [Developer Note]: Yahan aap apna custom high-end vector svg file path 
                  src me input kar sakte hain (e.g., src="/images/wp-architecture-illustration.svg")
                */}
                <Image 
                  src="/wordpress-hero.png"
                  alt="WordPress Enterprise Architecture Illustration Graphic"
                  fill
                  className="object-contain p-6 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  priority
                />

                {/* Subtle overlay gradient to blend image nicely with dark layout theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161F]/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}