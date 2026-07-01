"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2.5k+", label: "Orders" },
  { value: "5/5", label: "Rating" },
  { value: "30%", label: "Repeat rate" },
];

const deliverables = [
  {
    title: "Premium storefront",
    desc: "A polished Shopify experience that feels premium and easy to trust from the first scroll.",
  },
  {
    title: "Subscription flow",
    desc: "Cleaner trial-pack and recurring-order journeys designed to improve repeat purchases.",
  },
  {
    title: "Mobile-first UX",
    desc: "Thumb-friendly layouts that keep product discovery smooth on smaller screens.",
  },
];

const tags = ["Shopify", "Custom Theme", "Subscriptions", "Mobile UX"];

export default function ShopifyProjects() {
  return (
    <section className="softles-section-primary" id="projects">
      <div className="service-page-container">
        <div className="mb-8 sm:mb-10">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Featured Work</span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">Brunswick Fur Food</h2>
          <p className="softles-section-copy max-w-3xl">
            A compact Shopify case study focused on premium storytelling, easier trial ordering, and stronger mobile conversion.
          </p>
        </div>

        <div className="softles-card overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-full bg-[#191C26] border-b lg:border-b-0 lg:border-r border-[#2a2e40]/70">
              <Image
                src="/brunswickfurfood.png"
                alt="Brunswick Fur Food Shopify storefront homepage"
                fill
                className="object-cover object-top opacity-90 transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-flex items-center border border-[#2a2e40] bg-[#191C26]/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#F5F6FA]/90">
                  Pet Food / DTC
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 lg:p-8 xl:p-9 flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#DC4242] mb-2">
                  Case Study
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  Fresh dog food, built to convert
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
                  delivers gently cooked, human-grade meals across Melbourne and Victoria. We shaped a Shopify experience that turns product quality into clear trust and smoother subscriptions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-[#2a2e40]/60 bg-[#191C26]/70 px-3 py-3"
                  >
                    <div className="text-lg font-extrabold text-white tracking-tight">{stat.value}</div>
                    <div className="text-[10px] text-[#BCC1CA]/60 mt-1 font-medium leading-tight uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 bg-[#DC4242]/5 border border-[#DC4242]/20 rounded text-[11px] text-[#DC4242] font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="https://www.brunswickfurfood.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="softles-primary-button w-full sm:w-auto justify-center sm:justify-start"
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

          <div className="border-t border-[#2a2e40]/70 p-5 sm:p-6 lg:p-7 bg-[#181B23]">
            <div className="grid gap-3 sm:grid-cols-3">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#2a2e40]/70 bg-[#191C26]/80 p-4"
                >
                  <h4 className="text-white font-semibold text-sm tracking-tight mb-2">
                    {item.title}
                  </h4>
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
