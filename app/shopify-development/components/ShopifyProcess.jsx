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
    <section className="softles-section-primary" id="process">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              How We Work
            </span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Our Shopify Development Process
          </h2>
          <p className="softles-section-copy mx-auto">
            A structured workflow that delivers on time, on budget, and above expectations — every time.
          </p>
        </div>

        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
