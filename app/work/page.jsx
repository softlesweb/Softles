import WordReveal from "../components/_components/WordReveal";
import Link from "next/link";
import Footer from "../components/Footer";
import { projects } from "./projects";

export const metadata = {
  title: "Our Work — SoftLes",
  description:
    "Live WordPress, Shopify and web-app builds by SoftLes. Real projects, real screens — browse the case studies.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — SoftLes",
    description: "Live WordPress, Shopify and web-app builds. Browse the case studies.",
    url: "https://softles.in/work",
  },
};

// Every case study in one place. The homepage slider only shows one at a
// time, and the detail pages need a crawlable index to be found from.
export default function WorkIndex() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden">
      <section className="softles-section-primary pt-32 md:pt-40">
        <div className="service-page-container">
          <div className="softles-eyebrow mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Selected work</span>
          </div>
          <WordReveal as="h1" className="service-section-heading text-[#FFFFFF]">Work worth showing off</WordReveal>
          <p className="softles-section-copy max-w-2xl">
            Real, live builds — e-commerce, SaaS products and business sites. Open any one for the full page-by-page walkthrough.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group softles-card overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1219]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.pages[0].d}
                    alt={p.name}
                    loading="lazy"
                    className="w-full absolute top-0 left-0 transition-transform [transition-duration:1200ms] ease-out group-hover:-translate-y-[40%]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#12161F] to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#FF4D57]/10 border border-[#FF4D57]/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF4D57]">
                      {p.category}
                    </span>
                    {p.stack && p.stack.toLowerCase() !== p.category.toLowerCase() && (
                      <span className="text-[10px] uppercase tracking-wider text-[#C7CCD6]/50 font-semibold">{p.stack}</span>
                    )}
                  </div>
                  <h2 className="mt-3 text-lg font-extrabold text-white tracking-tight leading-tight group-hover:text-[#FF4D57] transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-[#C7CCD6]/80 leading-relaxed flex-1">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF4D57]">
                    View case study
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
