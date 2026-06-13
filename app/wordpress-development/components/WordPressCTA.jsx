"use client";

export default function WordPressCTA() {
  return (
    <section
      id="cta"
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-[#191C26]"
    >
      <div className="service-page-container">
        <div className="relative z-10 bg-gradient-to-br from-[#181B23] to-[#12131c] border border-[#2a2e40] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-20 text-center">
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(220,66,66,0.1), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
                Let&apos;s Build Together
              </span>
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            </div>

            <h2 className="service-section-heading mb-4 sm:mb-6">
              Let&apos;s Build a Better<br className="hidden sm:block" />
              <span className="text-[#DC4242]">WordPress Experience</span>
            </h2>

            <p className="text-[#BCC1CA]/80 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
              Whether you need a custom website, WooCommerce store, or a headless
              WordPress solution, our team can help you design, build, and scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href="/#book-call"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-4 bg-[#DC4242] text-white font-bold rounded-full hover:bg-[#ff4d50] transition-all duration-300 text-sm sm:text-base"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Discovery Call
              </a>
              <a
                href="mailto:info@softles.in"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-4 border-2 border-[#616467] text-[#FFFFFF] font-bold rounded-full hover:bg-[#616467] transition-all duration-300 text-sm sm:text-base shadow-[inset_0_0_0_2px_#616467]"
              >
                Contact Us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC4242]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC4242]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
