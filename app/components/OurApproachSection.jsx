"use client";

import WordReveal from "./_components/WordReveal";
import { motion } from "framer-motion";
import ProcessSteps from "./_components/ProcessSteps";

export default function OurApproachSection() {

    // Shared shape with the service pages: num / title / desc.
    const processSteps = [
        { num: "01", title: "Discovery Session", desc: "We sit down to understand your business, your current site, and what a win actually looks like for you." },
        { num: "02", title: "Scope of Work", desc: "A written scope you can hold us to: what we'll deliver, by when, and how we'll both know it worked." },
        { num: "03", title: "Transparent Pricing", desc: "Fixed or value-based pricing agreed upfront, so there's no hourly meter and no surprise invoices later." },
        { num: "04", title: "Build & Delivery", desc: "We build it with regular check-ins so there are no surprises, and ship on the date we agreed." },
        { num: "05", title: "Support & Growth", desc: "We stick around after launch to fix things, make improvements, and help you grow." },
    ];

    return (
        <section id="approach" className="relative overflow-x-clip w-full py-12 md:py-32 px-0 flex flex-col justify-center place-content-between bg-panel border-t border-b border-line">
            {/* Indigo secondary glow — the two-tone system beyond the hero */}
            <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-[#6D5EF6]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#6D5EF6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="service-page-container relative mx-auto w-full flex flex-col">
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-ink">
                        <span className="block w-12 h-0.5 bg-[#6D5EF6] mr-[10px]" />
                        <p className="text-sm uppercase tracking-[0.2em] text-mute">
                            Our Approach
                        </p>
                    </div>
                    <WordReveal as="span" className="mt-2 mb-2 lg:mb-0 service-section-heading text-ink">From discovery to delivery</WordReveal>
                    <span className="text-sm sm:text-base text-mute mt-2 max-w-2xl leading-relaxed">
                        A clear process, so you know the scope, price, and timeline before we write any code.
                    </span>
                </div>

            <div className="mt-10">
                <ProcessSteps steps={processSteps} />
            </div>
            </div>
        </section>
    )
}
