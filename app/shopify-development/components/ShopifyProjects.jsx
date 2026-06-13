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
    <section className="py-12 sm:py-16 lg:py-28 bg-[#191C26]" id="projects">
      <div className="service-page-container">
        <div className="mb-8 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Featured Work
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Brunswick Fur Food
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-3xl text-sm sm:text-base leading-relaxed">
            A real Shopify build for Melbourne&apos;s favourite fresh dog food brand — from trial packs to fortnightly subscriptions, delivered with a premium, mobile-first experience.
          </p>
        </div>

        <div className="bg-[#181B23] border border-[#2a2e40] rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Image */}
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full bg-[#12131c] border-b lg:border-b-0 lg:border-r border-[#2a2e40]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,66,66,0.08),transparent_55%)]" />
              <Image
                src="/brunswickfurfood.png"
                alt="Brunswick Fur Food Shopify storefront homepage"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-[#191C26]/80 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5F6FA]">
                  Pet Food / DTC
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col">
              <div className="mb-5 sm:mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#DC4242] mb-2">
                  Case Study
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFFFF] leading-tight mb-3">
                  Fresh dog food, built to convert on Shopify
                </h3>
                <p className="text-[#BCC1CA]/80 text-sm sm:text-base leading-relaxed">
                  <a
                    href="https://www.brunswickfurfood.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC4242] hover:text-[#ff4d50] transition-colors font-medium"
                  >
                    Brunswick Fur Food
                  </a>{" "}
                  delivers gently cooked, human-grade meals across Melbourne and Victoria. We helped shape a Shopify store that makes the brand&apos;s quality feel tangible online — and guides pet parents from trial box to subscription with confidence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#2a2e40] bg-[#12131c]/70 px-3 py-3 sm:px-4 sm:py-4"
                  >
                    <div className="text-lg sm:text-xl font-bold text-[#FFFFFF]">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-[#BCC1CA]/70 mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.2)] rounded-full text-[10px] sm:text-xs text-[#DC4242] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="https://www.brunswickfurfood.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#DC4242] text-white font-bold rounded-full hover:bg-[#ff4d50] transition-all duration-300 text-sm sm:text-base"
              >
                Visit live store
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Details */}
          <div className="border-t border-[#2a2e40] p-6 sm:p-8 lg:p-10 xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h4 className="text-[#FFFFFF] font-semibold text-base sm:text-lg mb-3">The challenge</h4>
              <p className="text-[#BCC1CA]/75 text-sm sm:text-base leading-relaxed mb-4">
                BFF needed more than a product catalogue. They needed a store that could explain why fresh, locally made dog food matters, reduce friction for first-time buyers trying a starter pack, and support recurring fortnightly deliveries across Melbourne and wider Victoria.
              </p>
              <p className="text-[#BCC1CA]/75 text-sm sm:text-base leading-relaxed">
                The experience had to feel premium and trustworthy on mobile — where most pet parents discover the brand, compare meal options, and decide whether to subscribe.
              </p>
            </div>

            <div>
              <h4 className="text-[#FFFFFF] font-semibold text-base sm:text-lg mb-3">What we delivered</h4>
              <p className="text-[#BCC1CA]/75 text-sm sm:text-base leading-relaxed mb-4">
                We built a Shopify storefront aligned to BFF&apos;s warm, health-led brand — highlighting vet-approved nutrition, locally sourced ingredients, and the convenience of flexible subscriptions customers can pause or cancel anytime.
              </p>
              <p className="text-[#BCC1CA]/75 text-sm sm:text-base leading-relaxed">
                The result is a clearer path from discovery to repeat purchase: trial box → favourite meals → subscribe &amp; save — backed by social proof from thousands of happy Melbourne pups.
              </p>
            </div>
          </div>

          <div className="border-t border-[#2a2e40] p-6 sm:p-8 lg:p-10 xl:p-12">
            <h4 className="text-[#FFFFFF] font-semibold text-base sm:text-lg mb-5 sm:mb-6">Key highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#2a2e40] bg-[#12131c]/50 p-5 sm:p-6 hover:border-[#3a4052] transition-colors duration-300"
                >
                  <h5 className="text-[#FFFFFF] font-semibold text-sm sm:text-base mb-2">{item.title}</h5>
                  <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
