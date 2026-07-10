import Footer from "../components/Footer";

export const metadata = {
  title: "Blog — Coming Soon | SoftLes",
  description:
    "Guides and insights on Shopify and WordPress from the SoftLes team — launching soon.",
};

export default function BlogPage() {
  return (
    <>
      <section className="softles-section-primary min-h-[72vh] flex items-center" id="blog">
        <div className="service-page-container w-full">
          <div className="softles-card max-w-2xl mx-auto text-center px-6 py-16 sm:py-20">
            <div className="softles-eyebrow justify-center mb-4">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">From the blog</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Coming soon
            </h1>

            <p className="softles-section-copy mx-auto mt-4">
              We&apos;re putting together practical guides on Shopify, WordPress, and
              growing online — written from real projects, not fluff. Check back shortly.
            </p>

            <a href="/#book-call" className="softles-primary-button mt-8 inline-flex">
              Talk to us in the meantime
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
