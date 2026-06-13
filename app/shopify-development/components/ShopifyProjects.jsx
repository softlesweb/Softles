"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2,500+", label: "Happy pups served" },
  { value: "5★", label: "Average rating" },
  { value: "100%", label: "Natural ingredients" },
  { value: "Melbourne", label: "Locally made & delivered" },
];

const deliverables = [
  {
    title: "Conversion-focused storefront",
    desc: "A warm, premium Shopify experience that communicates human-grade nutrition and builds trust from the first scroll.",
  },
  {
    title: "Subscription & trial flows",
    desc: "Starter pack checkout and subscribe-and-save journeys designed to turn first-time buyers into recurring customers.",
  },
  {
    title: "Mobile-first UX",
    desc: "Fast, thumb-friendly layouts so Melbourne pet parents can browse meals, build boxes, and subscribe on the go.",
  },
  {
    title: "Brand storytelling",
    desc: "Clear sections for benefits, recipes, FAQs, and social proof — helping BFF stand apart from generic pet food brands.",
  },
];

const tags = [
  "Shopify",
  "Custom Theme",
  "Subscriptions",
  "DTC",
  "Melbourne Delivery",
  "Mobile UX",
];

export default function ShopifyProjects() {
  return (
    <section className="softles-section-primary" id="projects">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Featured Work
            </span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Brunswick Fur Food
          </h2>
          <p className="softles-section-copy max-w-3xl">
            A real Shopify build for Melbourne&apos;s favourite fresh dog food brand — from trial packs to fortnightly subscriptions, delivered with a premium, mobile-first experience.
          </p>
        </div>

        {/* Unified Main Card Layout */}
        <div className="softles-card overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            
            {/* Image Container */}
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full bg-[#191C26] border-b lg:border-b-0 lg:border-r border-[#2a2e40]/70">
              <Image
                src="/brunswickfurfood.png"
                alt="Brunswick Fur Food Shopify storefront homepage"
                fill
                className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-flex items-center border border-[#2a2e40] bg-[#191C26]/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#F5F6FA]/90">
                  Pet Food / DTC
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#DC4242] mb-2">
                  Case Study
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Fresh dog food, built to convert on Shopify
                </h3>
                <p className="text-[#BCC1CA]/80 text-sm sm:text-base leading-relaxed">
                  <a
                    href="https://www.brunswickfurfood.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC4242] hover:underline transition-all font-semibold"
                  >
                    Brunswick Fur Food
                  </a>{" "}
                  delivers gently cooked, human-grade meals across Melbourne and Victoria. We helped shape a Shopify store that makes the brand&apos;s quality feel tangible online — and guides pet parents from trial box to subscription with confidence.
                </p>
              </div>

              {/* Stats Box - No full-rounded pills, crisp borders */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-[#2a2e40]/60 bg-[#191C26]/70 px-4 py-3"
                  >
                    <div className="text-xl font-extrabold text-white tracking-tight">{stat.value}</div>
                    <div className="text-[11px] text-[#BCC1CA]/60 mt-1.5 font-medium leading-tight uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags Box */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 bg-[#DC4242]/5 border border-[#DC4242]/20 rounded text-[11px] text-[#DC4242] font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit Live Store Link Style Synchronized */}
              <Link
                href="https://www.brunswickfurfood.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="softles-primary-button w-full sm:w-auto"
              >
                <span>Visit live store</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Symmetrical Challenges Grid */}
          <div className="border-t border-[#2a2e40]/70 p-6 sm:p-8 lg:p-10 xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[#181B23]">
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg tracking-tight mb-3">The Challenge</h4>
              <p className="text-[#BCC1CA]/75 text-sm leading-relaxed mb-4">
                BFF needed more than a product catalogue. They needed a store that could explain why fresh, locally made dog food matters, reduce friction for first-time buyers trying a starter pack, and support recurring fortnightly deliveries across Melbourne and wider Victoria.
              </p>
              <p className="text-[#BCC1CA]/75 text-sm leading-relaxed">
                The experience had to feel premium and trustworthy on mobile — where most pet parents discover the brand, compare meal options, and decide whether to subscribe.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-base sm:text-lg tracking-tight mb-3">What We Delivered</h4>
              <p className="text-[#BCC1CA]/75 text-sm leading-relaxed mb-4">
                We built a Shopify storefront aligned to BFF&apos;s warm, health-led brand — highlighting vet-approved nutrition, locally sourced ingredients, and the convenience of flexible subscriptions customers can pause or cancel anytime.
              </p>
              <p className="text-[#BCC1CA]/75 text-sm leading-relaxed">
                The result is a clearer path from discovery to repeat purchase: trial box → favourite meals → subscribe &amp; save — backed by social proof from thousands of happy Melbourne pups.
              </p>
            </div>
          </div>

          {/* Highlights Grid with Matching Cards Hover Structure */}
          <div className="border-t border-[#2a2e40]/70 p-6 sm:p-8 lg:p-10 xl:p-12">
            <h4 className="text-white font-bold text-base sm:text-lg tracking-tight mb-6">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="
                    group 
                    relative 
                    rounded-2xl 
                    p-6 
                    bg-[#191C26] 
                    border border-[#2a2e40]/70 
                    hover:border-[#DC4242]/50 
                    hover:shadow-[0_12px_30px_rgba(220,66,66,0.06)] 
                    transition-all 
                    duration-300
                  "
                >
                  <h5 className="text-white font-bold text-base tracking-tight mb-2 group-hover:text-[#DC4242] transition-colors duration-300">
                    {item.title}
                  </h5>
                  <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
