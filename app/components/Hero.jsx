"use client";
import Image from "next/image";

const clientLogos = ["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_4.png", "/logo_5.png", "/logo_6.png", "/logo_7.png", "/logo_8.png", "/logo_9.png"];

export default function Hero() {
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-surface pt-28 pb-20 md:pt-36 md:pb-28"
        >
            {/* Calm atmosphere: one faint brand glow + a whisper-fine grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
                style={{
                    background:
                        "radial-gradient(60% 50% at 50% -10%, rgba(255,77,87,0.10), transparent 70%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage: "radial-gradient(75% 60% at 50% 40%, black, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(75% 60% at 50% 40%, black, transparent 100%)",
                }}
            />

            <div className="service-page-container w-full">
                {/* Eyebrow */}
                <div className="hero-reveal flex items-center gap-3" style={{ animationDelay: "0ms" }}>
                    <span className="block w-8 h-px bg-brand" />
                    <span className="text-eyebrow uppercase text-ink-muted">Design-led · AI-accelerated</span>
                </div>

                {/* Headline — near-monochrome, one red accent (the period) */}
                <h1
                    className="hero-reveal mt-7 max-w-[16ch] text-ink font-semibold tracking-[-0.03em] text-[clamp(2.75rem,1rem+7vw,5.25rem)] leading-[0.98]"
                    style={{ animationDelay: "80ms" }}
                >
                    We build businesses on{" "}
                    <span className="font-[family-name:var(--font-hand)] font-bold text-brand tracking-normal text-[1.12em] leading-none">WordPress</span>{" "}
                    &amp;{" "}
                    <span className="font-[family-name:var(--font-hand)] font-bold text-brand tracking-normal text-[1.12em] leading-none">Shopify</span><span className="text-brand">.</span>
                </h1>

                {/* Subhead */}
                <p
                    className="hero-reveal mt-7 max-w-[52ch] text-ink-muted text-lg md:text-xl leading-relaxed"
                    style={{ animationDelay: "160ms" }}
                >
                    Custom storefronts, headless builds, and the integrations that keep them
                    running. AI helps us move quicker — it doesn&apos;t replace the craft.
                </p>

                {/* CTAs — restrained: one solid, one quiet ghost */}
                <div className="hero-reveal mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={{ animationDelay: "240ms" }}>
                    <a
                        href="#book-call"
                        onClick={(e) => handleClick(e, "book-call")}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5"
                    >
                        Book a discovery call
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => handleClick(e, "services")}
                        className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-ink border border-line-strong transition-all duration-300 hover:border-ink/40 hover:bg-white/[0.03]"
                    >
                        See our work
                    </a>
                </div>

                {/* Quiet social proof */}
                <div className="hero-reveal mt-20 md:mt-28" style={{ animationDelay: "360ms" }}>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">
                        Trusted by teams building on the web
                    </p>
                    <div
                        className="overflow-hidden w-full"
                        style={{
                            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                        }}
                    >
                        <div className="flex animate-logo-rail w-max items-center">
                            {[0, 1].map((listIdx) => (
                                <div key={listIdx} className="flex items-center shrink-0 gap-16 pr-16" aria-hidden={listIdx === 1}>
                                    {clientLogos.map((logo, idx) => (
                                        <Image
                                            key={idx}
                                            src={logo}
                                            alt={`Client ${idx + 1}`}
                                            width={120}
                                            height={40}
                                            className="h-7 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes hero-reveal {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-reveal {
                    opacity: 0;
                    animation: hero-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                @keyframes logo-rail {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-logo-rail {
                    animation: logo-rail 32s linear infinite;
                    will-change: transform;
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-reveal { animation: none; opacity: 1; }
                    .animate-logo-rail { animation: none; }
                }
            `}</style>
        </section>
    );
}
