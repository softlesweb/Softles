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
    <section className="w-full py-16 md:py-24 bg-surface-raised border-y border-line">
      <div className="service-page-container">
        <div className="softles-eyebrow">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Featured work</span>
        </div>

        <div className="softles-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-16">
          {/* Store visual */}
          <div className="relative min-h-[260px] lg:min-h-[380px] bg-surface">
            <Image
              src="/brunswickfurfood.png"
              alt="Brunswick Fur Food Shopify storefront"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span className="text-eyebrow uppercase tracking-[0.2em] text-brand font-semibold mb-4">
              Case study · Pet food, D2C
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink leading-tight tracking-[-0.02em]">
              Brunswick Fur Food — fresh dog food, built to convert
            </h2>
            <p className="text-ink-muted text-sm md:text-base leading-relaxed mt-5 max-w-xl">
              We rebuilt the Shopify store for this Melbourne pet-food brand — a cleaner
              storefront, a smoother subscription flow, and a mobile experience that
              actually holds up. Sales and repeat orders followed.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-surface px-3 py-4 text-center">
                  <div className="text-xl md:text-2xl font-semibold text-ink">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-faint mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-9">
              <a
                href="https://www.brunswickfurfood.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5"
              >
                Visit live store
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <Link
                href="/shopify-development"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                See how we build Shopify stores
                <span className="text-brand transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
