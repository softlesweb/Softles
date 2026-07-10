import Image from "next/image";
import Link from "next/link";

// Single featured case study under the hero — one strong story beats a wall of thumbnails.
const STATS = [
  { value: "2.5k+", label: "Orders" },
  { value: "5/5", label: "Rating" },
  { value: "30%", label: "Repeat rate" },
];

export default function FeaturedCaseStudy() {
  return (
    <section className="w-full py-12 md:py-20 bg-[#12131c] border-y border-[#2a2e40]">
      <div className="service-page-container">
        <div className="softles-eyebrow mb-3">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Featured work</span>
        </div>

        <div className="softles-card overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Store visual */}
          <div className="relative min-h-[260px] lg:min-h-[380px] bg-[#0f111a]">
            <Image
              src="/brunswickfurfood.png"
              alt="Brunswick Fur Food Shopify storefront"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181B23] via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#DC4242] font-bold mb-3">
              Case study · Pet food, D2C
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Brunswick Fur Food — fresh dog food, built to convert
            </h2>
            <p className="text-[#BCC1CA]/80 text-sm md:text-base leading-relaxed mt-4">
              A Shopify experience that turns product quality into clear trust —
              premium storefront, smoother subscriptions, and mobile-first UX for
              a growing Melbourne brand.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-7">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-[#2a2e40] bg-[#181B23] px-3 py-4 text-center">
                  <div className="text-xl md:text-2xl font-black text-white">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#BCC1CA]/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="https://www.brunswickfurfood.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="softles-primary-button !px-6 !py-3 text-sm"
              >
                Visit live store
              </a>
              <Link
                href="/shopify-development"
                className="text-sm font-bold text-[#DC4242] hover:underline"
              >
                See how we build Shopify stores →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
