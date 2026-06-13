"use client";

import ProcessSteps from "../../components/_components/ProcessSteps";

export default function ShopifyProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We align with your brand, audience, and growth goals before defining the right Shopify roadmap.",
    },
    {
      num: "02",
      title: "UX Planning",
      desc: "Wireframes, user journeys, and conversion-focused layout planning set the foundation for better results.",
    },
    {
      num: "03",
      title: "Store Design",
      desc: "High-fidelity designs that reflect your brand and optimize every shopping interaction across devices.",
    },
    {
      num: "04",
      title: "Development & Integration",
      desc: "Clean Liquid, React, and API integrations deliver a fast, maintainable Shopify experience.",
    },
    {
      num: "05",
      title: "Launch & Optimization",
      desc: "QA, performance tuning, and post-launch support ensure your store converts from day one.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#191C26]" id="process">
      <div className="service-page-container">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              How We Work
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Our Shopify Development Process
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A structured workflow that delivers on time, on budget, and above expectations — every time.
          </p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
