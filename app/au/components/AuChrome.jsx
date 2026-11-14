import BookCallLink from "./BookCallLink";

// Header and footer for /au and /au/thanks, drawn like the main site's Navbar and Footer.
// The main components use framer-motion and next/link, which would break the 100 KB JS
// budget, so these are static copies of their look.

const LINK =
  "text-mute/85 underline underline-offset-[5px] decoration-ink/15 transition-colors duration-200 hover:text-ink hover:decoration-brand/70";

function Wordmark({ size }) {
  return (
    <span className={`select-none font-display font-bold leading-none tracking-tight text-ink ${size}`}>
      SoftLes<span className="text-brand">.</span>
    </span>
  );
}

// Like the main Navbar: clear over the page at the top, frosted once you scroll (au.css).
// `overlay` lets the hero run up under the bar, as the home page hero does.
export function AuHeader({ homeHref = "/", bookHref = "#book", showCta = true, overlay = false }) {
  return (
    <header className={`au-header sticky top-0 z-40 ${overlay ? "-mb-[60px] lg:-mb-[64px]" : ""}`}>
      <div className="service-page-container flex h-[60px] items-center justify-between lg:h-[64px]">
        <a href={homeHref} aria-label="Softles home" className="flex shrink-0 items-center">
          <Wordmark size="text-[22px]" />
        </a>
        {showCta ? (
          <BookCallLink
            placement="header"
            href={bookHref}
            className="relative inline-flex h-10 shrink-0 overflow-hidden rounded-full p-[1px]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-[20px] text-sm font-medium text-white backdrop-blur-3xl">
              Book a call
            </span>
          </BookCallLink>
        ) : null}
      </div>
    </header>
  );
}

export function AuFooter({ onPage = true }) {
  const base = onPage ? "" : "/au";
  const pageLinks = [
    { label: "Free store check", href: `${base}#hero` },
    { label: "Proof of work", href: `${base}#work` },
    { label: "Ways to start", href: `${base}#offer` },
    { label: "Book a call", href: `${base}#book` },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-page text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none">
        <span className="block whitespace-nowrap text-center font-display text-[16vw] font-bold leading-[0.78] tracking-tight text-ink/[0.03]">
          SoftLes
        </span>
      </div>

      <div className="service-page-container relative z-[1] grid grid-cols-2 items-start gap-x-8 gap-y-10 py-12 md:grid-cols-12 md:py-14">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-6 lg:pr-10">
          <a href="/" className="w-fit" aria-label="Softles home">
            <Wordmark size="text-[30px]" />
          </a>
          <p className="max-w-md text-sm leading-relaxed text-mute/80">
            A small Shopify and WordPress team in Noida, India. We build overnight while Australia
            sleeps, so your changes are ready by morning.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-dim">On this page</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={LINK}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-dim">Contact</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="mailto:info@softles.in" className={LINK}>
                info@softles.in
              </a>
            </li>
            <li>
              <a href="/" className={LINK}>
                softles.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-[1] border-t border-line">
        <div className="service-page-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-dim md:flex-row">
          <p>&copy; {new Date().getFullYear()} SoftLes. Noida, India.</p>
          <div className="flex gap-5">
            <a href="/privacy" className={LINK}>
              Privacy Policy
            </a>
            <a href="/terms" className={LINK}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
