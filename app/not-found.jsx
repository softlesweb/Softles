import WordReveal from "./components/_components/WordReveal";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata = {
  title: "Page not found — SoftLes",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-[#0E1219] overflow-x-hidden">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-[#2E3446]">
        <div className="absolute -top-16 -left-16 w-[26rem] h-[26rem] bg-[#FF4D57]/[0.12] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-[30rem] h-[30rem] bg-[#6D5EF6]/[0.10] rounded-full blur-3xl" />

        <div className="service-page-container relative z-10 py-28 text-center flex flex-col items-center">
          <span aria-hidden="true" className="select-none text-[120px] sm:text-[160px] font-black leading-none text-white/[0.05]">
            404
          </span>
          <div className="softles-eyebrow justify-center -mt-6 mb-3">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Page not found</span>
          </div>
          <WordReveal as="h1" className="service-section-heading text-white max-w-2xl">
            That page has moved, or never shipped.
          </WordReveal>
          <p className="softles-section-copy mx-auto text-center max-w-md">
            The link may be out of date. Everything we do is one click from here.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="softles-primary-button group">
              <span>Back to home</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/work" className="softles-secondary-button">
              See our work
            </Link>
          </div>

          <nav aria-label="Services" className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {[
              ["Design & Prototyping", "/design-prototyping"],
              ["WordPress", "/wordpress-development"],
              ["Shopify", "/shopify-development"],
              ["Integrations & Automation", "/integrations-automation"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-[#C7CCD6] border-b border-[#2E3446] pb-0.5 transition-colors hover:text-white hover:border-[#FF4D57]">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
