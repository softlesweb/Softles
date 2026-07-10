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
            description: "We sit down to understand your business, your current site, and what a win actually looks like for you."
        },
        {
            link: "#",
            image: Define,
            name: "Scope of Work",
            zIndex: 30,
            alt: "Scope of work process step icon",
            description: "A written scope you can hold us to: what we'll deliver, by when, and how we'll both know it worked."
        },
        {
            link: "#",
            image: Ideate,
            name: "Transparent Pricing",
            zIndex: 20,
            alt: "Transparent pricing process step icon",
            description: "Fixed or value-based pricing agreed upfront, so there's no hourly meter and no surprise invoices later."
        },
        {
            link: "#",
            image: Prototype,
            name: "Build & Delivery",
            zIndex: 10,
            alt: "Build and delivery process step icon",
            description: "We build it with regular check-ins so there are no surprises, and ship on the date we agreed."
        },
        {
            link: "#",
            image: Test,
            name: "Support & Growth",
            zIndex: 0,
            alt: "Support and growth process step icon",
            description: "We stick around after launch to fix things, make improvements, and help you grow."
        }
    ]

    return (
        <section id="approach" className="relative overflow-hidden w-full py-12 md:py-32 px-0 flex flex-col justify-center place-content-between bg-[#161C27] border-t border-b border-[#2E3446]">
            {/* Indigo secondary glow — the two-tone system beyond the hero */}
            <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-[#6D5EF6]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#6D5EF6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="service-page-container relative mx-auto w-full flex flex-col">
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                        <span className="block w-12 h-0.5 bg-[#6D5EF6] mr-[10px]" />
                        <p className="text-sm uppercase tracking-[0.2em] text-[#C7CCD6]">
                            Our Approach
                        </p>
                    </div>
                    <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">From discovery to delivery</span>
                    <span className="text-sm sm:text-base text-[#C7CCD6] mt-2 max-w-2xl leading-relaxed">
                        A clear process, so you know the scope, price, and timeline before we write any code.
                    </span>
                </div>

            {/* Mobile & Tablet View - Vertical Stack */}
            <div className="block xl:hidden w-full mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden flex flex-col gap-3 p-5 rounded-2xl bg-[#181B23] border border-[#2E3446] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D57]/40 hover:bg-[#1a1e2a]"
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,87,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">

                                {/* Icon */}
                                <div className="w-12 h-12 mb-3 rounded-xl flex items-center justify-center bg-[rgba(255,77,87,0.08)] border border-[rgba(255,77,87,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF4D57]/50">
                                    <Image
                                        src={step.image}
                                        alt={`Service icon for ${step.name}`}
                                        width={32}
                                        height={32}
                                    />
                                </div>


                                {/* Step Number */}
                                <span className="text-xs text-[#FF4D57] font-semibold uppercase tracking-wider">
                                    Step {String(index + 1).padStart(2, "0")}
                                </span>


                                {/* Title */}
                                <h3 className="mt-1 text-lg font-semibold text-white leading-snug group-hover:text-[#FF4D57] transition-colors duration-300">
                                    {step.name}
                                </h3>


                                {/* Description */}
                                <p className="mt-2 text-sm text-[#C7CCD6] leading-relaxed">
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
                        bg={index % 2 === 0 ? "lg:bg-[#0E1219]" : "lg:bg-[#111319]"}
                        hover="hover:ring-2 hover:ring-[#FF4D57]/40 hover:scale-105 transition-all duration-200"
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
