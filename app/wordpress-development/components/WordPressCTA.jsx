"use client";

export default function WordPressCTA() {
  return (
    // Unified dark base weight background with global structural padding metrics
    <section
      id="cta"
      className="py-12 sm:py-16 lg:py-28 bg-[#0D0F12] border-t border-b border-[#2a2e40]"
    >
      <div className="service-page-container">
        {/* Main Box - Clean layout geometry matching Shopify CTA structural cards */}
        <div className="relative overflow-hidden bg-[#14161F] border border-[#2a2e40]/70 rounded-xl p-8 sm:p-12 lg:p-20 text-center shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          
          <div className="relative z-10">
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0D0F12] border border-[#2a2e40] mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
                Let&apos;s Build Together
              </span>
            </div>

            {/* Heading with explicit tracking, font weights & WordPress theme variables */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
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
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#DC4242] hover:bg-[#c23535] text-white font-bold rounded-lg transition-colors duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#DC4242]/10 group"
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
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#0D0F12] border border-[#2a2e40] text-[#BCC1CA]/90 hover:text-white hover:border-[#DC4242]/50 transition-colors duration-300 text-sm font-bold uppercase tracking-wider rounded-lg"
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