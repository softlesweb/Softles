import Image from "next/image";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import Separator from "@/public/Separator.png";
import ServiceCard from "./_components/ServiceCard";

export default function OurApproachSection() {

    const processSteps = [
        {
            link: "#",
            image: Empathize,
            name: "Discovery Session",
            zIndex: 40,
            alt: "Discovery session process step icon",
            description: "A focused session to understand your business, current store or site, and what success looks like."
        },
        {
            link: "#",
            image: Define,
            name: "Scope of Work",
            zIndex: 30,
            alt: "Scope of work process step icon",
            description: "A clear written scope — deliverables, timeline, and success criteria you can hold us to."
        },
        {
            link: "#",
            image: Ideate,
            name: "Transparent Pricing",
            zIndex: 20,
            alt: "Transparent pricing process step icon",
            description: "Fixed-cost or value-based pricing agreed upfront. No hourly surprises, no scope creep."
        },
        {
            link: "#",
            image: Prototype,
            name: "Build & Delivery",
            zIndex: 10,
            alt: "Build and delivery process step icon",
            description: "Design-led build with regular reviews, delivered on the committed timeline."
        },
        {
            link: "#",
            image: Test,
            name: "Support & Growth",
            zIndex: 0,
            alt: "Support and growth process step icon",
            description: "We stay on after launch — support, improvements, and growth as your long-term partner."
        }
    ]

    return (
        <section id="approach" className="w-full py-12 md:py-32 px-0 flex flex-col justify-center place-content-between bg-[#12131c] border-t border-b border-[#2a2e40]">
            <div className="service-page-container mx-auto w-full flex flex-col">
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                        <Image src={Separator} alt="separator" width={0} height={0} sizes="(max-width: 768px) 20vw, (max-width: 1024px) 10vw, 6vw" className="object-cover overflow-hidden h-[2px] w-auto mr-[10px]"/>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
                            Our Approach
                        </p>
                    </div>
                    <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">From discovery to delivery</span>
                    <span className="text-sm sm:text-base text-[#BCC1CA]/80 mt-2 max-w-2xl leading-relaxed">
                        A clear engagement process — you know the scope, the price, and the timeline before we write a line of code.
                    </span>
                </div>

            {/* Mobile & Tablet View - Vertical Stack */}
            <div className="block xl:hidden w-full mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden flex flex-col gap-3 p-5 rounded-2xl bg-[#181B23] border border-[#2a2e40] transition-all duration-300 hover:-translate-y-1 hover:border-[#DC4242]/40 hover:bg-[#1a1e2a]"
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,66,66,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">

                                {/* Icon */}
                                <div className="w-12 h-12 mb-3 rounded-xl flex items-center justify-center bg-[rgba(220,66,66,0.08)] border border-[rgba(220,66,66,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#DC4242]/50">
                                    <Image
                                        src={step.image}
                                        alt={`Service icon for ${step.name}`}
                                        width={32}
                                        height={32}
                                    />
                                </div>


                                {/* Step Number */}
                                <span className="text-xs text-[#DC4242] font-semibold uppercase tracking-wider">
                                    Step {String(index + 1).padStart(2, "0")}
                                </span>


                                {/* Title */}
                                <h3 className="mt-1 text-lg font-semibold text-white leading-snug group-hover:text-[#DC4242] transition-colors duration-300">
                                    {step.name}
                                </h3>


                                {/* Description */}
                                <p className="mt-2 text-sm text-[#BCC1CA] leading-relaxed">
                                    {step.description}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View - Original Layout */}
            <div className="w-full hidden xl:flex flex-wrap xl:flex-row justify-around xl:justify-between items-center gap-5 lg:gap-0 mt-9 px-[10px] lg:px-0">
               {
                 processSteps.map((step, index) => (
                    <ServiceCard
                        key={index}
                        link={step.link}
                        bg={index % 2 === 0 ? "lg:bg-[#191C26]" : "lg:bg-[#111319]"}
                        hover="hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200"
                        zIndex={step.zIndex}
                        source={step.image}
                        name={step.name}
                        alt={step.alt}
                        description={step.description}
                    />
                 ))
               }
            </div>
            </div>
        </section>
    )
}
