"use client";
import { useState } from "react";
import Image from "next/image";
import CursorSpotlight from "./_components/CursorSpotlight";

const clientLogos = ["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_4.png", "/logo_5.png", "/logo_6.png", "/logo_7.png", "/logo_8.png", "/logo_9.png"];

export default function Hero() {
    const [showTooltip, setShowTooltip] = useState(false);

    // Smooth scroll handler for navbar links
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="snap-start relative min-h-screen lg:min-h-[92vh] w-full flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-surface via-surface-overlay to-surface"
        >
            <CursorSpotlight />
            <div className="service-page-container flex flex-col items-center justify-center w-full lg:my-10">
                <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full mx-auto gap-2 lg:gap-20 z-10 px-0">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left max-h-min min-h-10">
                        {/* Tagline eyebrow */}
                        <div className="flex items-center mb-2 md:mb-6">
                            <span className="block w-12 h-0.5 bg-ink mr-4" />
                            <span className="text-base text-ink-muted font-normal">Design-led. AI-accelerated.</span>
                        </div>
                        {/* Main Heading */}
                        <h1 className="relative font-extrabold text-[2rem] leading-[1.18] sm:text-5xl sm:leading-[1.14] lg:text-[52px] xl:text-[58px] lg:leading-[1.16] tracking-[-0.03em] text-ink">
                            We build businesses on{" "}
                            <span className="softles-gradient-text">WordPress</span>
                            <br className="hidden sm:block" /> &amp;{" "}
                            <span className="softles-gradient-text">Shopify</span>
                            <span className="text-brand">.</span>
                        </h1>
                        {/* Supporting Line */}
                        <p className="text-ink-muted mt-5 mb-6 md:mb-10 text-base lg:text-lg leading-relaxed" style={{maxWidth: '46ch', lineHeight: 1.55}}>
                            We design and build custom WordPress and Shopify sites — fast storefronts, headless builds, apps, and the integrations that keep them running. AI helps us move quicker; it doesn&apos;t replace the craft.
                        </p>
                        {/* Primary CTA */}
                        <div className="relative" onClick={e => handleClick(e, "book-call")}>
                            <button
                                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-[#E83A45] hover:shadow-brand/40 hover:-translate-y-0.5"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <span>Book a Free Discovery Call</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                            </button>
                            {showTooltip && (
                                <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-surface-overlay text-white text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap animate-fade-in">
                                    30-minute free strategy session
                                </span>
                            )}
                        </div>
                    </div>
                    {/* Right Illustration with diagonal divider */}
                    <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl lg:mt-0 relative">
                        {/* Diagonal divider */}
                        <svg className="hidden lg:block absolute -left-24 top-0 h-full w-48 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 100,100 0,100" fill="#23263a" opacity="0.7" />
                        </svg>
                        <Image
                            src={"/Container.png"}
                            alt="Creative design and development illustration"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-72 h-[281px] md:w-[414px] md:h-[353px] drop-shadow-2xl animate-float relative z-20"
                            priority
                        />
                    </div>
                </div>
                {/* Client Logo Rail - responsive */}
                <div className="w-full mt-5 md:mt-14 z-20 flex flex-col gap-6 md:gap-8">

                <div
                    className="overflow-hidden w-full"
                    style={{
                        maskImage: "linear-gradient(to right, transparent 0, black 7%, black 93%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0, black 7%, black 93%, transparent 100%)",
                    }}
                >
                    {/* Two identical lists; each list carries the same gap as trailing padding so the loop seam is spaced evenly. Track translates exactly -50%. */}
                    <div className="flex animate-logo-rail w-max items-center">
                    {[0, 1].map((listIdx) => (
                        <div key={listIdx} className="flex items-center shrink-0 gap-14 md:gap-20 pr-14 md:pr-20" aria-hidden={listIdx === 1}>
                            {clientLogos.map((logo, idx) => (
                                <div key={idx} className="group h-14 md:h-16 flex items-center justify-center shrink-0">
                                    <Image
                                        src={logo}
                                        alt={`Client Logo ${idx + 1}`}
                                        width={120}
                                        height={48}
                                        className="h-8 md:h-10 w-auto opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-ink-muted text-sm animate-pulse">
                    Scroll to explore our services
                    </span>
                    <div className="w-6 h-10 rounded-full border border-line-strong flex justify-center pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-bounce" />
                    </div>
                </div>

                </div>
            </div>
            {/* Decorative Background Elements — warm accent + cool secondary glow */}
            <div className="absolute -top-10 -left-10 w-[26rem] h-[26rem] bg-brand/25 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#6D5EF6]/25 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-brand/12 rounded-full blur-3xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.06] via-transparent to-[#6D5EF6]/[0.10] pointer-events-none -z-10" />
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2.5s infinite;
                }
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 16px #FF4D57, 0 0 32px #FF4D57; }
                    50% { text-shadow: 0 0 32px #fff, 0 0 64px #FF4D57; }
                }
                .animate-glow {
                    animation: glow 2.5s infinite alternate;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce {
                    animation: bounce 1.5s infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes logo-rail {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-logo-rail {
                    animation: logo-rail 18s linear infinite;
                    will-change: transform;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
