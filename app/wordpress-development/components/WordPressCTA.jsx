"use client";

export default function WordPressCTA() {
  return (
    // Unified dark base weight background with global structural padding metrics
    <section
      id="cta"
      className="softles-section-secondary"
    >
      <div className="service-page-container">
        {/* Main Box - Clean layout geometry matching Shopify CTA structural cards */}
        <div className="relative overflow-hidden softles-card p-8 sm:p-12 lg:p-20 text-center shadow-2xl">
          
          <div className="relative z-10">
            {/* Header Tag */}
            <div className="softles-eyebrow justify-center mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">
                Let&apos;s Build Together
              </span>
            </div>

            {/* Heading with explicit tracking, font weights & WordPress theme variables */}
            <h2 className="service-section-heading text-[#FFFFFF] mb-4">
              Let&apos;s Build a Better<br className="hidden sm:block" />{" "}
              <span className="text-[#DC4242]">WordPress Experience</span>
            </h2>

            {/* Paragraph Content tailored for WordPress services */}
            <p className="text-[#BCC1CA]/80 max-w-xl mx-auto mb-8 lg:mb-10 text-sm sm:text-base leading-relaxed">
              Whether you need a custom website, WooCommerce store, or a headless WordPress solution, SoftLes can help you design, build, and scale a faster, smarter digital presence.
            </p>

            {/* Unified Action Controls with System Geometric Sync */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Call Action */}
              <a
                href="/#book-call"
                className="softles-primary-button w-full sm:w-auto group"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book Discovery Call</span>
              </a>

              {/* Secondary Mail Action */}
              <a
                href="mailto:info@softles.in"
                className="softles-secondary-button w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
