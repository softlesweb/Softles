import Image from "next/image";
import Link from "next/link";
import LeadForm from "./components/LeadForm";
import WhatsappButton from "./components/WhatsappButton";
import StickyCta from "./components/StickyCta";
import MetaPixel from "./components/MetaPixel";

export const metadata = {
  title: "Shopify Store Redesign & Migration in 21 Days | SoftLes",
  description:
    "Get a faster, higher-converting Shopify store in 21 days. Redesign or migrate with zero downtime and no SEO loss. Talk to a Shopify expert at SoftLes.",
  // Dedicated ad landing page — keep out of the index so it doesn't compete with the main site.
  robots: { index: false, follow: true },
};

const PROOF_STORES = [
  { img: "/brunswickfurfood.png", name: "Brunswick Fur Food", result: "Faster storefront, smoother checkout" },
  { img: "/enviroguru.png", name: "EnviroGuru", result: "Conversion-focused redesign" },
  { img: "/bnpsinternational.png", name: "BNPS International", result: "Mobile-first rebuild" },
  { img: "/prideandjustice.png", name: "Pride & Justice", result: "Brand-led storefront" },
];

const RESULTS = [
  { stat: "+32%", label: "avg. conversion lift" },
  { stat: "1.8s", label: "avg. load time" },
  { stat: "50+", label: "stores shipped" },
  { stat: "21 days", label: "to launch" },
];

const PAINS = [
  "Slow load times quietly killing your sales",
  "A theme that looks fine but just doesn't convert",
  "Scared to migrate — worried about downtime & lost SEO",
  "Your current setup can't keep up as you scale",
];

const GETS = [
  { title: "Conversion-focused design", desc: "Every section built to turn visitors into buyers — not just look pretty." },
  { title: "Lightning fast", desc: "Optimised for Core Web Vitals so pages load in seconds on mobile." },
  { title: "Safe migration", desc: "Move to Shopify with zero downtime and your SEO rankings preserved." },
  { title: "Built to scale", desc: "Clean, Shopify Plus-ready foundations that grow with your brand." },
];

const TIMELINE = [
  { days: "Days 1–3", title: "Audit & strategy", desc: "We review your store, goals, and data, then map the rebuild." },
  { days: "Days 4–10", title: "Design", desc: "Conversion-focused, on-brand designs for every key page." },
  { days: "Days 11–17", title: "Build & migrate", desc: "We develop and migrate products, content, and SEO safely." },
  { days: "Days 18–21", title: "QA & launch", desc: "Cross-device testing, speed tuning, and a smooth go-live." },
];

const FAQS = [
  { q: "Will I lose my SEO rankings?", a: "No. We preserve URLs where possible and set up proper redirects so your rankings carry over." },
  { q: "Will my store have downtime?", a: "No. We build and test on a staging store, then switch over — your live store stays up until launch." },
  { q: "What about my products and data?", a: "We migrate your products, collections, customers, and content. Nothing gets left behind." },
  { q: "Do you work with Shopify Plus?", a: "Yes. Our builds are Plus-ready, so you can scale without re-platforming later." },
  { q: "What does it cost?", a: "It depends on your store's scope. Share your details and we'll send a tailored quote — no obligation." },
];

function Eyebrow({ children, center }) {
  return (
    <div className={`softles-eyebrow mb-3 ${center ? "justify-center" : ""}`}>
      <span className="softles-eyebrow-line" />
      <span className="softles-eyebrow-text">{children}</span>
    </div>
  );
}

export default function ShopifyLandingPage() {
  return (
    <main className="bg-[#0E1219] text-white overflow-x-hidden pb-24 lg:pb-0">
      <MetaPixel />

      {/* Minimal header */}
      <header className="sticky top-0 z-40 bg-[#0E1219]/95 backdrop-blur border-b border-[#2E3446]">
        <div className="service-page-container h-[60px] flex items-center justify-between">
          <Link href="/">
            <Image src="/SoftLes.png" alt="SoftLes" width={120} height={38} className="h-[34px] w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex">
              <WhatsappButton className="softles-secondary-button !px-4 !py-2 text-sm" />
            </span>
            <a href="#lead" className="softles-primary-button !px-4 sm:!px-5 !py-2 text-xs sm:text-sm whitespace-nowrap">
              <span className="hidden sm:inline">Talk to a Shopify Expert</span>
              <span className="sm:hidden">Talk to Expert</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="softles-section-primary !pt-10 md:!pt-16">
        <div className="service-page-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Eyebrow>Shopify Redesign &amp; Migration</Eyebrow>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Get a faster, higher-converting Shopify store —{" "}
              <span className="text-[#FF4D57]">in 21 days.</span>
            </h1>
            <p className="text-[#C7CCD6]/85 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
              For growing brands stuck with a slow, low-converting store. We redesign
              and migrate to a fast, conversion-focused Shopify build — no downtime,
              no SEO loss.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a href="#lead" className="softles-primary-button w-full sm:w-auto justify-center">
                Talk to a Shopify Expert
              </a>
              <WhatsappButton />
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-[#C7CCD6]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#FF4D57]">★★★★★</span> 4.9 rating
              </span>
              <span>50+ stores shipped</span>
              <span>Avg. +32% conversion</span>
            </div>
          </div>

          {/* Lead form (above the fold on desktop) */}
          <div id="lead" className="scroll-mt-24">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Logo rail */}
      <section className="border-y border-[#2E3446] bg-[#161C27] py-8">
        <div className="service-page-container">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[#C7CCD6]/60 mb-6">
            Brands we&apos;ve built for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
            {["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_4.png", "/logo_5.png", "/logo_6.png"].map((l, i) => (
              <Image key={i} src={l} alt="Client logo" width={120} height={40} className="h-7 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="softles-section-primary">
        <div className="service-page-container">
          <Eyebrow center>Sound familiar?</Eyebrow>
          <h2 className="service-section-heading text-center">Your store is costing you sales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
            {PAINS.map((p) => (
              <div key={p} className="softles-card p-5 flex items-start gap-3">
                <span className="text-[#FF4D57] mt-0.5 shrink-0">✕</span>
                <span className="text-[#E5E7EF]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#161C27] border-y border-[#2E3446] py-12 md:py-20">
        <div className="service-page-container">
          <Eyebrow center>What you get</Eyebrow>
          <h2 className="service-section-heading text-center">A store built to convert &amp; scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {GETS.map((g) => (
              <div key={g.title} className="softles-card p-6">
                <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                <p className="text-[#C7CCD6]/80 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work showcase */}
      <section className="softles-section-primary">
        <div className="service-page-container">
          <Eyebrow center>Recent work</Eyebrow>
          <h2 className="service-section-heading text-center">Stores we&apos;ve shipped</h2>
          <p className="softles-section-copy mx-auto text-center">
            A few of the brands we&apos;ve designed, built, and launched.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {PROOF_STORES.map((s) => (
              <div key={s.name} className="softles-card group overflow-hidden">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#0f111a]">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold">{s.name}</h3>
                  <p className="text-[#C7CCD6]/75 text-sm mt-1">{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results band */}
      <section className="bg-[#FF4D57]/[0.06] border-y border-[#FF4D57]/20 py-12 md:py-16">
        <div className="service-page-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {RESULTS.map((r) => (
              <div key={r.label}>
                <div className="text-3xl md:text-5xl font-black text-white">{r.stat}</div>
                <div className="text-[#C7CCD6]/80 text-sm mt-2">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 21-day timeline */}
      <section className="softles-section-primary">
        <div className="service-page-container">
          <Eyebrow center>How we deliver in 21 days</Eyebrow>
          <h2 className="service-section-heading text-center">A clear, fast process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {TIMELINE.map((t, i) => (
              <div key={t.title} className="softles-card p-6 relative">
                <span className="text-[#FF4D57] text-xs font-bold uppercase tracking-widest">{t.days}</span>
                <div className="text-2xl font-black text-white/15 absolute top-5 right-5">0{i + 1}</div>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{t.title}</h3>
                <p className="text-[#C7CCD6]/80 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer + guarantee + FAQ */}
      <section className="bg-[#161C27] border-y border-[#2E3446] py-12 md:py-20">
        <div className="service-page-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Our promise</Eyebrow>
            <h2 className="service-section-heading">On-time, or we keep going</h2>
            <div className="softles-card p-6 mt-6 border-[#FF4D57]/30">
              <p className="text-xl font-bold text-white">
                Live in 21 days, or we keep working at no extra cost.
              </p>
              <p className="text-[#C7CCD6]/80 text-sm mt-3 leading-relaxed">
                We commit to your timeline. If your store isn&apos;t live in 21 days,
                we keep building until it is — you don&apos;t pay more.
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>FAQ</Eyebrow>
            <div className="mt-2 divide-y divide-[#2E3446]">
              {FAQS.map((f) => (
                <details key={f.q} className="py-4 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold">
                    {f.q}
                    <span className="text-[#FF4D57] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[#C7CCD6]/80 text-sm mt-2 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="softles-section-primary">
        <div className="service-page-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Let&apos;s build it</Eyebrow>
            <h2 className="service-section-heading">
              Ready for a store that actually converts?
            </h2>
            <p className="softles-section-copy">
              Tell us about your store and goals. A Shopify expert will get back to
              you on WhatsApp within hours — with a clear plan and quote.
            </p>
            <div className="mt-6 hidden lg:block">
              <WhatsappButton />
            </div>
          </div>
          <LeadForm ctaLabel="Talk to a Shopify Expert" />
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-[#2E3446] bg-[#161C27] py-8">
        <div className="service-page-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#C7CCD6]/70">
          <Image src="/SoftLes.png" alt="SoftLes" width={100} height={30} className="h-7 w-auto object-contain" />
          <span>© {new Date().getFullYear()} SoftLes. All rights reserved.</span>
          <a href="mailto:info@softles.in" className="hover:text-[#FF4D57] transition">info@softles.in</a>
        </div>
      </footer>

      <StickyCta />
    </main>
  );
}
