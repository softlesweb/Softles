import LeakCheck from "./components/LeakCheck";
import BookCallLink from "./components/BookCallLink";
import AuditCta from "./components/AuditCta";
import AgencyForm from "./components/AgencyForm";
import HeroGreeting from "./components/HeroGreeting";
import StickyBar from "./components/StickyBar";

const TITLE = "Shopify Speed & Conversion Experts for Australian Brands | Softles";
const DESCRIPTION =
  "Find where your Shopify store leaks sales. Free mobile speed check, a 5-day Revenue Leak Audit for AUD 1,500, and fixes built overnight while Australia sleeps.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/au" },
  openGraph: {
    type: "website",
    siteName: "Softles",
    locale: "en_AU",
    url: "https://softles.in/au",
    title: "Your Shopify store is leaking sales.",
    description: "Free leak check for Australian Shopify brands. We find the leaks and fix them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Shopify store is leaking sales.",
    description: "Free leak check for Australian Shopify brands. We find the leaks and fix them.",
  },
};

// Proof is held back until the client confirms the numbers and agrees to be named.
// Fill this in (and the quote, word for word) to show the case study section.
const CASE_STUDY = null;
// Example shape:
// { client: "…", summary: "…", before: [["Mobile score", "…"]], after: [["Mobile score", "…"]],
//   quote: "…", quoteBy: "…, Founder" }

const WRAP = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";
const H2 = "font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.025em]";

const LEAKS = [
  {
    where: "Product page",
    name: "Speed leak",
    line: "Every extra second on mobile costs you buyers you paid to bring in.",
    detail:
      "Heavy themes, full-size images and a stack of app scripts make the first screen wait. Someone tapping through from an ad won't.",
  },
  {
    where: "Cart and checkout",
    name: "Checkout leak",
    line: "Shoppers want to buy. The cart makes it hard.",
    detail:
      "Shipping costs that appear too late, fiddly variant pickers and a mobile cart that fights the thumb.",
  },
  {
    where: "Back office",
    name: "Ops leak",
    line: "Your team copies orders between apps every Monday.",
    detail:
      "Hours of manual work that slow down fulfilment and let small mistakes reach customers.",
  },
];

const STAGES = [
  {
    n: "01",
    name: "Speed",
    does: [
      "Cut the app scripts you don't need, and load the rest only when they're used",
      "Resize and compress images, and fix theme code that holds up the first screen",
      "Tune Core Web Vitals on the pages your ads send people to",
    ],
    notice: "Product pages show up before the shopper loses interest.",
  },
  {
    n: "02",
    name: "UX & checkout",
    does: [
      "Rework product pages around the questions buyers actually ask",
      "Simplify the mobile cart: shipping shown early, fewer taps, express pay up front",
      "Test every change on real phones before it goes live",
    ],
    notice: "More of the people who add to cart finish paying.",
  },
  {
    n: "03",
    name: "Automation",
    does: [
      "Shopify Flow rules for order tagging, stock alerts and fraud checks",
      "Klaviyo flows triggered by what actually happens in your store",
      "Connect the apps your team copies data between",
    ],
    notice: "Monday mornings stop being data entry.",
  },
];

const OFFERS = [
  {
    id: "audit",
    name: "Revenue Leak Audit",
    price: "AUD 1,500",
    time: "5 working days",
    gets: [
      "Speed, UX and ops teardown of your store",
      "A prioritised fix list, with the dollar impact of each fix",
      "A 30-min walkthrough call",
    ],
    risk: "100% of the fee is credited to the Sprint if you go ahead.",
  },
  {
    id: "sprint",
    name: "Conversion Sprint",
    price: "From AUD 9,000",
    time: "4–6 weeks",
    gets: [
      "The fixes, shipped to your live store",
      "Measured before and after",
      "A Loom update every week",
    ],
    risk: "Speed-target guarantee: we keep working until it's met.",
  },
];

const OVERNIGHT = [
  { when: "3:00 pm", where: "Sydney", what: "You brief us with a Loom, a Slack message or an email." },
  { when: "Overnight", where: "Noida, India", what: "Our team builds it during our working day." },
  { when: "9:00 am", where: "Sydney", what: "It's ready for you to review, with a short Loom on what changed." },
];

const TEAM = [
  { name: "Shakti Singh", role: "Strategy lead", img: "/Shakti_Singh.jpeg" },
  { name: "Neeraj Kumar", role: "Shopify developer", img: "/neeraj_kumar.png" },
  { name: "Shahad Hassan", role: "Full-stack developer", img: "/Shahad_Hassan.jpeg" },
];

const FAQS = [
  {
    q: "Do you work with Shopify Plus?",
    a: "Yes. We work on standard Shopify and Shopify Plus stores. Plus gives us more room to change checkout, and we'll use it if you have it.",
  },
  {
    q: "Will you touch my theme during BFCM?",
    a: "No. We respect your code freeze. Over Black Friday and Cyber Monday we audit, plan and build on a copy of your theme, and ship once the freeze lifts.",
  },
  {
    q: "How do payments work?",
    a: "Everything is quoted and invoiced in AUD. The audit is paid upfront. A Sprint starts with a 50% deposit.",
  },
  {
    q: "What access do you need?",
    a: "A collaborator account, which you approve in your Shopify admin. We never ask for your password, and you can remove our access at any time.",
  },
  {
    q: "What if speed doesn't improve?",
    a: "Every Sprint has a speed target we agree with you before we start. If we don't hit it, we keep working until we do.",
  },
  {
    q: "Can we start in January?",
    a: "Yes. A deposit locks in your start date. You can also run the audit now, so the fix list is ready when you're back.",
  },
];

// This page avoids next/image and next/link: importing either ships their client
// code (~13 KB) and breaks the PRD's 100 KB JS budget. The optimiser URL below is
// the one next/image would write (64 and 128 are in its default imageSizes).
const optimised = (src, width) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

function Portrait({ src }) {
  return (
    <img
      src={optimised(src, 128)}
      srcSet={`${optimised(src, 64)} 1x, ${optimised(src, 128)} 2x`}
      alt=""
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      className="h-16 w-16 rounded-full object-cover"
    />
  );
}

export default function AuLandingPage() {
  return (
    <main className="overflow-x-clip pb-24 md:pb-0">
      <header className="border-b border-[#2A2E3A]">
        <div className={`${WRAP} flex h-16 items-center justify-between`}>
          <a href="/" aria-label="Softles home">
            <img src="/SoftLes.png" alt="Softles" width={101} height={40} className="h-8 w-auto" />
          </a>
          <BookCallLink
            placement="header"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Book a call
          </BookCallLink>
        </div>
      </header>

      {/* Hero: the full stop in "sales." drips toward the check below it. */}
      <section id="hero" className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className={WRAP}>
          <HeroGreeting>
            <p className="au-mono min-h-[2.5rem] text-sm uppercase tracking-[0.08em] text-[#A9AFBC] sm:min-h-0">
              Shopify specialists for Australian brands
            </p>
          </HeroGreeting>

          <h1 className="mt-4 font-display text-[clamp(2.6rem,10vw,7.25rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            <span className="block">Your store is</span>
            <span className="block">
              leaking{" "}
              <span className="au-serif tracking-normal">
                sales<span className="au-stop">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="max-w-[34rem] text-lg leading-relaxed text-[#D6D9E0] md:text-xl">
                Slow pages, clunky mobile checkout and manual ops cost you the traffic you already paid
                for. We find the leaks and fix them.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-[#A9AFBC]">
                <li>Shopify specialists, with a named project lead</li>
                <li>Prices in AUD</li>
                <li>Calls 1–5 pm AEDT</li>
              </ul>
              <BookCallLink
                placement="hero"
                className="mt-6 hidden font-semibold text-white underline decoration-[#FF4D57] decoration-2 underline-offset-[6px] md:inline-block"
              />
            </div>
            <div className="md:col-span-7">
              <LeakCheck id="store-url" placement="hero" prefillFromRef />
              <BookCallLink
                placement="hero"
                className="mt-5 inline-block font-semibold text-white underline decoration-[#FF4D57] decoration-2 underline-offset-[6px] md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The leak */}
      <section className="bg-[#F3EFE8] py-20 text-[#0E1016] md:py-28">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[18ch]`}>Three places paid traffic drains out of a Shopify store</h2>
          <div className="mt-14 md:mt-16">
            <ol className="au-pipe">
              {LEAKS.map((leak) => (
                <li key={leak.name} className="au-pipe-node">
                  <span className="au-joint" aria-hidden="true" />
                  <span className="au-drop" aria-hidden="true" />
                  <p className="au-mono text-xs uppercase tracking-[0.08em] text-[#545866]">{leak.where}</p>
                  <h3 className="mt-2 text-2xl font-bold">{leak.name}</h3>
                  <p className="mt-3 text-lg font-medium leading-snug">{leak.line}</p>
                  <p className="mt-3 leading-relaxed text-[#545866]">{leak.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How we fix it: the same pipe, patched stage by stage */}
      <section className="py-20 md:py-28">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[20ch]`}>
            How we fix it: one sprint, <span className="au-serif font-normal tracking-normal">three stages</span>
          </h2>
          <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-[#A9AFBC]">
            Speed, UX and automation aren&apos;t three separate products. They&apos;re three stages of the
            same job, done in this order.
          </p>
          <div className="mt-14 md:mt-16">
            <ol className="au-pipe au-pipe--fixed">
              {STAGES.map((stage) => (
                <li key={stage.n} className="au-pipe-node">
                  <span className="au-stage au-mono" aria-hidden="true">
                    {stage.n}
                  </span>
                  <h3 className="text-2xl font-bold">
                    <span className="sr-only">Stage {stage.n}: </span>
                    {stage.name}
                  </h3>
                  <ul className="mt-4 grid gap-3 text-[#D6D9E0]">
                    {stage.does.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4D57]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-[#2A2E3A] pt-4 text-white">
                    <span className="text-[#A9AFBC]">You notice: </span>
                    {stage.notice}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The offer */}
      <section id="offer" className="scroll-mt-4 bg-[#F3EFE8] py-20 text-[#0E1016] md:py-28">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[20ch]`}>Start with the audit. It&apos;s credited in full if you go ahead.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {OFFERS.map((offer) => {
              const dark = offer.id === "audit";
              return (
                <article
                  key={offer.id}
                  className={`flex flex-col rounded-[18px] p-6 sm:p-8 ${
                    dark ? "bg-[#0E1016] text-white" : "border-2 border-[#0E1016]"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{offer.name}</h3>
                  <p className="mt-4 font-display text-[clamp(2.25rem,5vw,3rem)] font-bold leading-none tracking-[-0.03em]">
                    {offer.price}
                  </p>
                  <dl className={`mt-6 grid gap-5 ${dark ? "text-[#D6D9E0]" : "text-[#2A2E3A]"}`}>
                    <div>
                      <dt className={`au-mono text-xs uppercase tracking-[0.08em] ${dark ? "text-[#A9AFBC]" : "text-[#545866]"}`}>
                        Time
                      </dt>
                      <dd className="mt-1 text-lg">{offer.time}</dd>
                    </div>
                    <div>
                      <dt className={`au-mono text-xs uppercase tracking-[0.08em] ${dark ? "text-[#A9AFBC]" : "text-[#545866]"}`}>
                        You get
                      </dt>
                      <dd>
                        <ul className="mt-1 grid gap-1.5">
                          {offer.gets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className={`au-mono text-xs uppercase tracking-[0.08em] ${dark ? "text-[#A9AFBC]" : "text-[#545866]"}`}>
                        Risk
                      </dt>
                      <dd className="mt-1">{offer.risk}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 pt-2 md:mt-auto">
                    {dark ? (
                      <AuditCta />
                    ) : (
                      <BookCallLink
                        placement="offer_sprint"
                        className="inline-flex rounded-full bg-[#0E1016] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2A2E3A]"
                      >
                        Book a call
                      </BookCallLink>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {CASE_STUDY ? (
        <section className="py-20 md:py-28">
          <div className={WRAP}>
            <h2 className={H2}>{CASE_STUDY.client}</h2>
            <p className="mt-5 max-w-[40rem] text-lg text-[#A9AFBC]">{CASE_STUDY.summary}</p>
            {CASE_STUDY.quote ? (
              <blockquote className="mt-10 max-w-[40rem]">
                <p className="au-serif text-3xl leading-snug">“{CASE_STUDY.quote}”</p>
                <footer className="mt-4 text-[#A9AFBC]">{CASE_STUDY.quoteBy}</footer>
              </blockquote>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* How working with us runs */}
      <section className="py-20 md:py-28">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[16ch]`}>
            We build while <span className="au-serif font-normal tracking-normal">Australia sleeps.</span>
          </h2>
          <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-[#A9AFBC]">
            We&apos;re in Noida, India, five and a half hours behind Sydney. Your afternoon brief becomes
            our working day.
          </p>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-[#2A2E3A] bg-[#2A2E3A] md:grid-cols-3">
            {OVERNIGHT.map((step) => (
              <li key={step.when} className="bg-[#0E1016] p-6">
                <p className="font-display text-3xl font-bold">{step.when}</p>
                <p className="au-mono mt-1 text-sm text-[#A9AFBC]">{step.where}</p>
                <p className="mt-4 leading-relaxed text-[#D6D9E0]">{step.what}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <ul className="grid content-start gap-3 text-lg text-[#D6D9E0]">
              <li>A named project lead for your store</li>
              <li>A Loom update every week</li>
              <li>Slack or email, whichever your team already uses</li>
              <li>Calls 1–5 pm AEDT</li>
            </ul>
            <ul className="grid gap-5">
              {TEAM.map((person) => (
                <li key={person.name} className="flex items-center gap-4">
                  <Portrait src={person.img} />
                  <div>
                    <p className="font-semibold text-white">{person.name}</p>
                    <p className="text-sm text-[#A9AFBC]">{person.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* For agencies */}
      <section className="au-on-coral bg-[#FF4D57] py-14 text-[#0E1016] md:py-16">
        <div className={`${WRAP} grid items-start gap-8 md:grid-cols-12`}>
          <div className="md:col-span-7">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Australian Shopify agency? We&apos;re your overflow dev team, white-label at partner rates.
            </h2>
          </div>
          <div className="md:col-span-5">
            <AgencyForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className={`${WRAP} grid gap-10 md:grid-cols-12`}>
          <h2 className={`${H2} md:col-span-4`}>Questions</h2>
          <div className="md:col-span-8">
            {FAQS.map((item) => (
              <details key={item.q} className="group border-b border-[#2A2E3A] py-5 first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="au-mono text-xl text-[#FF4D57] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[40rem] leading-relaxed text-[#A9AFBC]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section id="check" className="border-t border-[#2A2E3A] py-20 md:py-28">
        <div className={`${WRAP} grid gap-10 md:grid-cols-12`}>
          <div className="md:col-span-5">
            <h2 className={H2}>
              Find out where your store <span className="au-serif font-normal tracking-normal">leaks.</span>
            </h2>
            <p className="mt-5 text-lg text-[#A9AFBC]">Free, about 30 seconds, no email needed.</p>
            <BookCallLink
              placement="final"
              className="mt-6 inline-block font-semibold text-white underline decoration-[#FF4D57] decoration-2 underline-offset-[6px]"
            />
          </div>
          <div className="md:col-span-7">
            <LeakCheck id="store-url-final" placement="final" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2A2E3A] py-8 text-sm text-[#A9AFBC]">
        <div className={`${WRAP} flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`}>
          <p>© {new Date().getFullYear()} Softles · Noida, India</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:info@softles.in" className="hover:text-white">
              info@softles.in
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
          </nav>
        </div>
      </footer>

      <StickyBar />
    </main>
  );
}
