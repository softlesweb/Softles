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
        <section id="approach" className="relative overflow-hidden w-full py-16 md:py-24 px-0 flex flex-col justify-center place-content-between bg-surface-raised border-t border-b border-line">
            <div className="service-page-container relative mx-auto w-full flex flex-col">
                <div className="flex flex-col">
                    <div className="softles-eyebrow">
                        <span className="softles-eyebrow-line" />
                        <span className="softles-eyebrow-text">Our Approach</span>
                    </div>
                    <h2 className="mt-6 service-section-heading font-semibold text-ink">From discovery to delivery</h2>
                    <p className="softles-section-copy">
                        A clear process, so you know the scope, price, and timeline before we write any code.
                    </p>
                </div>

            {/* Mobile & Tablet View - Vertical Stack */}
            <div className="block xl:hidden w-full mt-12 md:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group softles-card flex flex-col p-6 md:p-8"
                        >
                            {/* Icon */}
                            <div className="softles-icon-box mb-5">
                                <Image
                                    src={step.image}
                                    alt={`Service icon for ${step.name}`}
                                    width={28}
                                    height={28}
                                />
                            </div>

                            {/* Step Number */}
                            <span className="text-xs text-brand font-semibold uppercase tracking-[0.2em]">
                                Step {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Title */}
                            <h3 className="mt-2 text-lg font-semibold text-ink leading-snug">
                                {step.name}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View - Original Layout */}
            <div className="w-full hidden xl:flex flex-wrap xl:flex-row justify-around xl:justify-between items-center gap-5 lg:gap-0 mt-12 md:mt-16 px-[10px] lg:px-0">
               {
                 processSteps.map((step, index) => (
                    <ServiceCard
                        key={index}
                        link={step.link}
                        bg={index % 2 === 0 ? "lg:bg-surface" : "lg:bg-surface"}
                        hover="hover:-translate-y-1 transition-all duration-300"
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
