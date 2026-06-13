"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Zap, Layers, Cpu, ShieldCheck } from "lucide-react";

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

  const expertiseTags = [
    { name: "Shopify Plus", icon: <Sparkles className="w-3.5 h-3.5 text-[#DC4242]" /> },
    { name: "Hydrogen", icon: <Cpu className="w-3.5 h-3.5 text-[#DC4242]" /> },
    { name: "Custom Themes", icon: <Layers className="w-3.5 h-3.5 text-zinc-400" /> },
    { name: "Speed ⚡", icon: <Zap className="w-3.5 h-3.5 text-[#DC4242]" /> },
    { name: "Headless Commerce", icon: <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> },
  ];

  return (
    // Base weight background matching perfect system layout alignment
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0D0F12]">
      
      {/* ─── STRUCTURAL BACKGROUND LAYER ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Continuous Solid Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] lg:opacity-[0.04]" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Dynamic Mouse Tracking Ambient Glow - Subtle and Integrated */}
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
            
            {/* Unified Structural Badge Layer */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-6">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC4242] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#DC4242]"></span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
                Certified Shopify Development Experts
              </span>
            </div>

            {/* Title with single clean font weights & strict colors */}
            <h1 className="font-extrabold tracking-tight text-white leading-[1.1] text-3xl sm:text-5xl lg:text-[54px] mb-4">
              Build High-Converting<br className="hidden sm:block" />
              Shopify Stores That <span className="text-[#DC4242]">Scale</span>
            </h1>

            <p className="text-[#BCC1CA]/80 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              We design and develop conversion-focused Shopify experiences that help brands increase sales, improve customer experience, and scale efficiently.
            </p>

            {/* Premium Button Action Container */}
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

          {/* Right Symmetrical Bento Mockup Column */}
          <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-xl relative">
            <div className="relative w-full bg-[#14161F] border border-[#2a2e40]/70 rounded-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.3)] group hover:border-[#DC4242]/40 transition-all duration-500">
              
              {/* Mockup Card Header */}
              <div className="flex items-center justify-between w-full pb-4 border-b border-[#2a2e40]/40">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-[#DC4242]/60" />
                  <div className="w-2 h-2 rounded-sm bg-[#2a2e40]" />
                  <div className="w-2 h-2 rounded-sm bg-[#2a2e40]" />
                </div>
                <span className="text-[10px] text-[#BCC1CA]/40 uppercase tracking-widest font-semibold">Engine Architecture</span>
              </div>

              {/* Main Visual Centerpiece */}
              <div className="relative z-10 text-center my-8 py-2">
                <div className="w-16 h-16 bg-[#0D0F12] border border-[#2a2e40] rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#DC4242]/10 group-hover:border-[#DC4242]/30">
                  <div className="text-2xl font-extrabold text-white tracking-tighter">S<span className="text-[#DC4242]">+</span></div>
                </div>
                
                {/* Responsive Symmetrical Tag Layout */}
                <div className="flex flex-wrap gap-2 justify-center max-w-sm mx-auto">
                  {expertiseTags.map((tag, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0D0F12] border border-[#2a2e40] rounded-lg text-xs text-[#F5F6FA]/90 font-medium transition-all duration-300 hover:border-[#DC4242]/30"
                    >
                      {tag.icon}
                      <span>{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Bar */}
              <div className="pt-4 border-t border-[#2a2e40]/40 flex justify-between items-center text-[11px] text-[#BCC1CA]/50 font-semibold tracking-wider">
                <span>CONVERSION BASELINE</span>
                <span className="text-emerald-400 font-bold tracking-normal">+34.2% 🔥</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}