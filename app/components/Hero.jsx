"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const clientLogos = ["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_4.png", "/logo_5.png", "/logo_6.png", "/logo_7.png", "/logo_8.png", "/logo_9.png"];

export default function Hero() {
    const blobRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!blobRef.current) return;
            const { clientX, clientY } = e;
            // Animate the blob to follow the cursor with a springy effect
            blobRef.current.animate(
                {
                    left: `${clientX - 150}px`,
                    top: `${clientY - 150}px`
                },
                {
                    duration: 600,
                    fill: "forwards",
                    easing: "cubic-bezier(.22,1.12,.58,1)"
                }
            );
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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
            className="snap-start relative min-h-screen lg:min-h-[92vh] w-full flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#111319]"
        >
            {/* Animated awe-struck blob */}
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
                    transition: "opacity 0.3s"
                }}
                aria-hidden="true"
            />
            <div className="service-page-container flex flex-col items-center justify-center w-full lg:my-10">
                <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full mx-auto gap-2 lg:gap-20 z-10 px-0">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left max-h-min min-h-10">
                        {/* Creative Ideas Label (updated copy) */}
                        <div className="flex items-center mb-2 md:mb-6">
                            <span className="block w-12 h-0.5 bg-[#F5F6FA] mr-4" />
                            <span className="text-base text-[#BCC1CA] font-normal">We&apos;re a small agency which</span>
                        </div>
                        {/* Main Heading */}
                        {/* <h1 className="font-extrabold md:mb-2 leading-3 md:leading-tight tracking-wide relative text-[clamp(2.2rem,6vw,3.5rem)] text-[#F5F6FA]">
                            Bespoke<br className="block" /> Business <br className="hidden sm:block" />
                            Solutions
                            <span className="text-[#DC4242] align-super text-5xl ml-1">.</span>
                        </h1> */}
                        <h1 className="relative font-extrabold text-3xl sm:text-[56px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#F5F6FA]">
                            Bespoke
                            <br />
                            <span className="text-[#DC4242]">Business</span>
                            <br className="hidden sm:block" />
                            Solutions
                            <span className="ml-1 text-[#DC4242]">.</span>
                        </h1>
                        {/* Supporting Line */}
                        <p className="text-[#BCC1CA] mt-4 mb-5 md:mb-12 max-w-xl block text-base lg:text-lg leading-relaxed" style={{maxWidth: '40ch', lineHeight: 1.5}}>
                            We create new design for your online business with the support of our wonderful team of professionals.
                        </p>
                        {/* CTAs on one line */}
                        <div className="flex justify-center lg:justify-start w-full max-w-xs">
                            <div onClick={e => handleClick(e, "book-call")} className="relative">
                                <button
                                    className="flex items-center text-lg whitespace-nowrap group relative shadow-[inset_0_0_0_2px_#616467] text-[#DC4242] px-4 md:px-8 py-2 md:py-4 rounded-full uppercase font-bold bg-transparent hover:bg-[#616467] transition duration-300"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <span>Book a Free Discovery Call</span>
                                    <span className="hidden sm:inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#DC4242]"><path d="M5 12h14M15 8l4 4-4 4"/></svg>
                                    </span>
                                </button>
                                {showTooltip && (
                                    <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-[#23263a] text-white text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap animate-fade-in">
                                        30-minute free strategy session
                                    </span>
                                )}
                            </div>
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

                <div className="overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[#191C26] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[#191C26] after:to-transparent after:z-10">
                    <div className="flex animate-logo-rail whitespace-nowrap w-max gap-12 md:gap-20 items-center" style={{ animation: "logo-rail 18s linear infinite" }}>
                    {clientLogos.concat(clientLogos).map((logo, idx) => (
                        <div key={idx} className="group h-14 md:h-16 px-5 md:px-7 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#DC4242]/50 hover:shadow-[0_10px_30px_rgba(220,66,66,0.15)]">
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
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-[#BCC1CA] text-sm animate-pulse">
                    Scroll to explore our services
                    </span>
                    <div className="w-6 h-10 rounded-full border border-[#3a4052] flex justify-center pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC4242] animate-bounce" />
                    </div>
                </div>

                </div>
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC4242]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC4242]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#191C26]/40 to-[#DC4242]/10 pointer-events-none -z-10" />
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2.5s infinite;
                }
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 16px #DC4242, 0 0 32px #DC4242; }
                    50% { text-shadow: 0 0 32px #fff, 0 0 64px #DC4242; }
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
                    100% { transform: translateX(-51%); }
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
