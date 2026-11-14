import LeakCheck from "./components/LeakCheck";
import BookCallLink from "./components/BookCallLink";
import BookingEmbed from "./components/BookingEmbed";
import RequestCta from "./components/RequestCta";
import HeroGreeting from "./components/HeroGreeting";
import StickyBar from "./components/StickyBar";
import Arrow from "./components/Arrow";
import { AuFooter, AuHeader } from "./components/AuChrome";

// Shakti's Google Calendar booking page (a public link, safe to keep in code).
// NEXT_PUBLIC_AU_BOOKING_URL overrides it per environment; Calendly and Cal.com links work too.
// If both are ever empty, the booking section falls back to a short request form.
const BOOKING_URL =
  process.env.NEXT_PUBLIC_AU_BOOKING_URL ||
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3sspYOc4N7rkVBDyfU9JD0RHO4Yr2JhvqGSpHtjFBg7hFUw4Uhi8Hi-6mw2IFaVbM0dqnKiv-A?gv=true";

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

// Already public on softles.in/work/brunswick-fur-food; the numbers are the ones shown there.
const WORK = {
  client: "Brunswick Fur Food",
  where: "Melbourne, 2025",
  site: "https://www.brunswickfurfood.com/",
  caseStudy: "/work/brunswick-fur-food",
  summary:
    "Fresh, gently cooked dog food, delivered across Melbourne. The old store didn't show how good the food is, the subscription confused people, and mobile shoppers left before checkout.",
  built: [
    "A custom Shopify theme built to convert",
    "A clearer trial and subscription flow",
    "Product pages designed for phones first",
  ],
  numbers: [
    { value: "2.5k+", label: "orders" },
    { value: "30%", label: "repeat rate" },
  ],
};

// Only real reviews, quoted word for word, from clients who agreed to be named.
// Mark's ends before his last sentence, which is about WordPress.
const REVIEWS = [
  {
    quote:
      "The UX/UI design system Softles built for us streamlined our workflow and improved our product's usability. The team is responsive and talented.",
    name: "Rahul Tyagi",
    role: "Founder, Brunswick Fur Food",
    img: "/C3.png",
  },
  {
    quote:
      "Worked into the early hours and turned around great work ahead of a large sales webinar. The team can receive a directional brief and with light touch supervision produce creative and professional work.",
    name: "Mark Jeffery",
    role: "Tennis coach",
    img: "/C1.jpg",
  },
];

// Icons for the three leaks, drawn like the main site's line icons.
const ICONS = {
  speed: (
    <>
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </>
  ),
  checkout: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </>
  ),
  ops: (
    <>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </>
  ),
};

const LEAKS = [
  {
    icon: "speed",
    where: "Product page",
    name: "Speed leak",
    line: "Every extra second on mobile costs you buyers you paid to bring in.",
    detail:
      "Heavy themes, full-size images and a stack of app scripts make the first screen wait. Someone tapping through from an ad won't.",
  },
  {
    icon: "checkout",
    where: "Cart and checkout",
    name: "Checkout leak",
    line: "Shoppers want to buy. The cart makes it hard.",
    detail:
      "Shipping costs that appear too late, fiddly variant pickers and a mobile cart that fights the thumb.",
  },
  {
    icon: "ops",
    where: "Back office",
    name: "Ops leak",
    line: "Your team copies orders between apps every Monday.",
    detail:
      "Hours of manual work that slow down fulfilment and let small mistakes reach customers.",
  },
];

// The main site's section opener: red line + uppercase label, then the heading.
function Eyebrow({ children }) {
  return (
    <p className="softles-eyebrow mb-2">
      <span className="softles-eyebrow-line" aria-hidden="true" />
      <span className="softles-eyebrow-text">{children}</span>
    </p>
  );
}

// The ◆ bullet from the main site's service cards.
function Diamond() {
  return (
    <span aria-hidden="true" className="mt-[0.35em] shrink-0 text-xs leading-none text-brand">
      ◆
    </span>
  );
}

const H2 = "service-section-heading mt-2";
// softles-section-primary / -secondary, with one border between sections instead of two.
const SECTION = "w-full scroll-mt-16 border-t border-line bg-page py-12 md:py-20";
const SECTION_ALT = "w-full scroll-mt-16 border-t border-line bg-panel py-12 md:py-20";

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

// The three ways to start, smallest first. `fit` finishes the sentence "Pick this if…".
// Prices, times and risk lines are drafts until Shakti signs them off.
const OFFERS = [
  {
    id: "apps",
    name: "App Bill Audit",
    price: "AUD 750",
    time: "3 working days",
    fit: "your app bill keeps growing and nobody's sure what half the apps do.",
    gets: [
      "Every app, with what it costs and what your team uses it for",
      "Keep, swap or cut for each one, with the saving per month",
      "A 30-min walkthrough call",
    ],
    risk: "If the yearly saving we find is less than the fee, you don't pay.",
  },
  {
    id: "leak",
    name: "Revenue Leak Audit",
    price: "AUD 1,500",
    time: "5 working days",
    fit: "people reach your store, but too few of them buy.",
    gets: [
      "Speed, UX and ops teardown of your store",
      "A prioritised fix list, with the dollar impact of each fix",
      "Your apps reviewed too, the same way as the App Bill Audit",
      "A 30-min walkthrough call",
    ],
    risk: "100% of the fee is credited to the Sprint if you go ahead.",
  },
  {
    id: "sprint",
    name: "Conversion Sprint",
    from: true,
    price: "AUD 9,000",
    time: "4–6 weeks",
    fit: "you know what's broken and want it fixed, measured and shipped.",
    gets: ["The fixes, shipped to your live store", "Measured before and after", "A Loom update every week"],
    risk: "Speed-target guarantee: we keep working until it's met.",
  },
];

const APP_AUDIT = OFFERS.find((offer) => offer.id === "apps");

const APP_STEPS = [
  {
    name: "List every app",
    detail: "What it costs, what it adds to your theme, and what your team actually uses it for.",
  },
  {
    name: "Keep, swap or cut",
    detail:
      "Shopify now does some of the jobs you pay apps for. Some apps overlap. Some jobs can move to a tool you already pay for, connected directly.",
  },
  {
    name: "Price the new stack",
    detail: "The saving app by app, and the page weight each removal gives back.",
  },
  {
    name: "Make the changes, if you want us to",
    detail: "We swap and remove apps overnight, and clear out the code they leave behind in your theme.",
  },
];

const APP_BILL = {
  apps: 14,
  monthly: 1000,
  changes: [
    { app: "Filters and search", cost: 79, note: "Swap for Shopify Search & Discovery (free)" },
    { app: "Second upsell app", cost: 59, note: "Cut. Your other upsell app does the same job." },
    { app: "Pop-ups and sign-up forms", cost: 39, note: "Swap for Shopify Forms (free)" },
    { app: "Bundles", cost: 29, note: "Swap for Shopify Bundles (free)" },
    { app: "Order tagging", cost: 25, note: "Swap for a Shopify Flow rule (free)" },
    { app: "Back-in-stock alerts", cost: 19, note: "Cut. Klaviyo, which you already pay for, sends these." },
  ],
};

const OVERNIGHT = [
  { when: "3:00 pm", where: "Sydney", what: "You brief us with a Loom, a Slack message or an email." },
  { when: "Overnight", where: "Noida, India", what: "Our team builds it during our working day." },
  { when: "9:00 am", where: "Sydney", what: "It's ready for you to review, with a short Loom on what changed." },
];

const TEAM = [
  { name: "Shakti Singh", role: "Founder", img: "/shakti_singh.jpg" },
  { name: "Neeraj Kumar", role: "Shopify developer", img: "/neeraj_kumar.jpg" },
  { name: "Shahad Hassan", role: "Full-stack developer", img: "/shahad_hassan.jpg" },
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
    a: "Everything is quoted and invoiced in AUD. Audits are paid upfront. A Sprint starts with a 50% deposit.",
  },
  {
    q: "What access do you need?",
    a: "A collaborator account, which you approve in your Shopify admin. We never ask for your password, and you can remove our access at any time.",
  },
  {
    q: "Will removing apps break anything?",
    a: "We check what each app touches before it goes: theme code, checkout, emails and the way your team works. Changes are made on a copy of your theme first, and only go live once you've checked them.",
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
// the one next/image would write. Widths must be in Next's default imageSizes or
// deviceSizes (48, 96, 256, 384, 640, 828, 1080…), or the optimiser refuses them.
const optimised = (src, width) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

function Photo({ src, widths, sizes, width, height, alt = "", className }) {
  return (
    <img
      src={optimised(src, widths[widths.length - 1])}
      srcSet={widths.map((w) => `${optimised(src, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

const dollars = (n) => `$${n.toLocaleString("en-AU")}`;

// A monthly app bill, with the apps we'd change struck through.
function AppBill() {
  const saved = APP_BILL.changes.reduce((sum, line) => sum + line.cost, 0);
  const kept = APP_BILL.apps - APP_BILL.changes.length;
  const rule = "border-t border-dashed border-line-2";

  return (
    <figure>
      <div className="rounded-2xl border border-line bg-gradient-to-br from-raise to-panel p-5 text-sm tabular-nums text-ink shadow-[var(--shadow-card)] sm:p-7">
        <p className="flex justify-between gap-4 font-bold">
          <span>Monthly app bill</span>
          <span className="font-normal text-dim">AUD</span>
        </p>
        <p className={`mt-4 flex justify-between gap-4 pt-4 text-mute ${rule}`}>
          <span>{APP_BILL.apps} apps</span>
          <span>{dollars(APP_BILL.monthly)}</span>
        </p>

        <ul className={`mt-4 grid gap-4 pt-4 ${rule}`}>
          {APP_BILL.changes.map((line) => (
            <li key={line.app}>
              <p className="flex justify-between gap-4">
                <span className="font-semibold">{line.app}</span>
                <span className="shrink-0 text-mute">
                  <span className="sr-only">saves </span>
                  <s className="decoration-brand decoration-2">{dollars(line.cost)}</s>
                </span>
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-mute/75">{line.note}</p>
            </li>
          ))}
        </ul>

        <dl className={`mt-4 grid gap-1.5 pt-4 text-mute ${rule}`}>
          <div className="flex justify-between gap-4">
            <dt>New monthly bill, {kept} apps</dt>
            <dd>{dollars(APP_BILL.monthly - saved)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Saved each month</dt>
            <dd>{dollars(saved)}</dd>
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4 text-ink">
            <dt className="font-bold">Saved each year</dt>
            <dd className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              <span className="softles-gradient-text">{dollars(saved * 12)}</span>
            </dd>
          </div>
        </dl>
      </div>
      <figcaption className="mt-4 text-sm text-mute/80">
        A worked example: {Math.round((saved / APP_BILL.monthly) * 100)}% off a {dollars(APP_BILL.monthly)}{" "}
        monthly bill. Your saving depends on the apps you run.
      </figcaption>
    </figure>
  );
}

// The store as shoppers see it, in the same browser frame as the main site's hero:
// desktop home page, with the phone version over its corner. The frame stays dark in both themes.
function WorkShots() {
  return (
    <figure className="relative pb-10 pr-6 sm:pr-10">
      <div className="rounded-2xl border border-white/20 bg-[#0b0d12] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 px-1 pb-2">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-white/10 bg-[#161C27] px-2.5 py-1 text-[10px] font-medium text-[#7C8394]">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="truncate text-white/90">brunswickfurfood.com</span>
          </span>
        </div>
        <div className="overflow-hidden rounded-xl bg-white">
          <Photo
            src="/work/brunswick-hero.jpg"
            widths={[640, 828, 1080]}
            sizes="(min-width: 1440px) 700px, (min-width: 1024px) 55vw, 100vw"
            width={1100}
            height={652}
            alt="Brunswick Fur Food home page on desktop"
            className="block h-auto w-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[34%] max-w-[200px] overflow-hidden rounded-[22px] border-[5px] border-[#0b0d12] bg-[#0b0d12] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)]">
        <Photo
          src="/work/brunswick-p0-m-top.jpg"
          widths={[256, 384]}
          sizes="200px"
          width={440}
          height={880}
          alt="The same page on a phone"
          className="block h-auto w-full rounded-[17px]"
        />
      </div>
    </figure>
  );
}

const LABEL = "text-xs font-bold uppercase tracking-[0.18em] text-dim";
const TEXT_LINK = "font-semibold text-ink underline decoration-brand decoration-2 underline-offset-[5px]";

export default function AuLandingPage() {
  return (
    <main className="overflow-x-clip pb-24 md:pb-0">
      <AuHeader overlay />

      {/* Hero: copy on the left, the free check on the main site's colour canvas.
          Top padding includes the 60/64px header that sits over it. */}
      <section id="hero" className="relative scroll-mt-16 overflow-hidden bg-page pb-16 pt-[108px] md:pt-[124px] lg:pb-24 lg:pt-[144px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(135deg,#FF4D57_0%,#FF6A3D_38%,#6D5EF6_100%)] opacity-[0.92] [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62vw] lg:[clip-path:polygon(22%_0,100%_0,100%_78%,0_100%)]"
        >
          <span className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.32),transparent_60%)]" />
        </div>
        {/* Veil so the copy keeps its contrast over the canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgb(var(--c-page)/0.2),rgb(var(--c-page))_92%)] [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62vw] lg:bg-[linear-gradient(90deg,rgb(var(--c-page))_0%,rgb(var(--c-page)/0.55)_34%,transparent_62%)] lg:[clip-path:polygon(22%_0,100%_0,100%_78%,0_100%)]"
        />

        <div className="service-page-container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-2xl">
              <HeroGreeting>
                <Eyebrow>Shopify for Australian brands</Eyebrow>
              </HeroGreeting>
              <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[54px] lg:leading-[1.07] xl:text-[60px]">
                Your store is <br className="hidden sm:block" />
                <span className="softles-gradient-text">leaking sales.</span>
              </h1>
              <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-mute lg:text-lg">
                Slow pages, clunky mobile checkout and manual ops cost you the traffic you already paid
                for. We find the leaks and fix them.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <BookCallLink placement="hero" className="softles-primary-button group w-full whitespace-nowrap sm:w-auto">
                  <span>Book a call with Shakti</span>
                  <Arrow />
                </BookCallLink>
                <a href="#work" className="softles-secondary-button w-full whitespace-nowrap sm:w-auto">
                  See our work
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
                {["Shopify specialists, with a named project lead", "Prices in AUD", "Calls 1–5 pm AEDT"].map(
                  (item) => (
                    <li key={item} className="flex gap-2">
                      <Diamond />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="w-full lg:max-w-[560px] lg:justify-self-end">
              <LeakCheck id="store-url" placement="hero" prefillFromRef />
            </div>
          </div>
        </div>
      </section>

      {/* The leak */}
      <section className={SECTION_ALT}>
        <div className="service-page-container">
          <Eyebrow>Where sales go</Eyebrow>
          <h2 className={`${H2} max-w-[22ch]`}>Three places paid traffic drains out of a Shopify store</h2>
          <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
            {LEAKS.map((leak) => (
              <li key={leak.name} className="softles-card group flex flex-col p-6 xl:p-7">
                <span className="softles-icon-box" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[leak.icon]}
                  </svg>
                </span>
                <p className={`mt-5 ${LABEL}`}>{leak.where}</p>
                <h3 className="mt-2 text-lg font-bold leading-tight text-ink xl:text-xl">{leak.name}</h3>
                <p className="mt-3 font-medium leading-snug text-soft">{leak.line}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-mute/75">{leak.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we fix it: three stages of one sprint */}
      <section className={SECTION}>
        <div className="service-page-container">
          <Eyebrow>How we fix it</Eyebrow>
          <h2 className={H2}>
            One sprint, <span className="softles-gradient-text">three stages.</span>
          </h2>
          <p className="softles-section-copy">
            Speed, UX and automation aren&apos;t three separate products. They&apos;re three stages of the
            same job, done in this order.
          </p>
          <ol className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
            {STAGES.map((stage) => (
              <li key={stage.n} className="softles-card flex flex-col p-6 xl:p-7">
                <p aria-hidden="true" className="font-display text-4xl font-bold leading-none">
                  <span className="softles-gradient-text">{stage.n}</span>
                </p>
                <h3 className="mt-4 text-lg font-bold leading-tight text-ink xl:text-xl">
                  <span className="sr-only">Stage {stage.n}: </span>
                  {stage.name}
                </h3>
                <ul className="mt-4 flex flex-col">
                  {stage.does.map((item) => (
                    <li key={item} className="flex gap-3 border-t border-line py-3 text-sm leading-relaxed text-mute">
                      <Diamond />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-line pt-4 text-sm leading-relaxed text-ink">
                  <span className="text-dim">You notice: </span>
                  {stage.notice}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof: a store we rebuilt, and what clients say */}
      <section id="work" className={SECTION_ALT}>
        <div className="service-page-container">
          <Eyebrow>Proof of work</Eyebrow>
          <h2 className={`${H2} max-w-[20ch]`}>
            A Shopify store we rebuilt in <span className="softles-gradient-text">Melbourne.</span>
          </h2>

          <div className="mt-10 grid items-start gap-12 md:mt-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <WorkShots />
            </div>
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-bold text-ink">{WORK.client}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{WORK.where}</p>
              <p className="mt-5 leading-relaxed text-mute">{WORK.summary}</p>
              <ul className="mt-6 flex flex-col">
                {WORK.built.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-line py-3 text-sm leading-relaxed text-mute">
                    <Diamond />
                    {item}
                  </li>
                ))}
              </ul>
              <dl className="mt-4 grid grid-cols-2 gap-5">
                {WORK.numbers.map((n) => (
                  <div key={n.label} className="flex flex-col-reverse rounded-2xl border border-line bg-page p-5">
                    <dt className="mt-1 text-sm text-mute">{n.label}</dt>
                    <dd className="font-display text-4xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">{n.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={WORK.caseStudy} className="softles-secondary-button whitespace-nowrap">
                  Read the case study
                </a>
                <a href={WORK.site} target="_blank" rel="noopener" className={TEXT_LINK}>
                  Visit the live store
                </a>
              </div>
            </div>
          </div>

          <h3 className="mt-16 text-2xl font-bold text-ink md:mt-20">What clients say</h3>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <li key={review.name} className="softles-card p-6 md:p-8">
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 text-base font-medium italic leading-relaxed text-soft md:text-lg">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                    <Photo
                      src={review.img}
                      widths={[64, 128]}
                      sizes="56px"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full border-4 border-page object-cover shadow-md"
                    />
                    <span>
                      <span className="block font-semibold text-ink">{review.name}</span>
                      <span className="block text-sm text-mute">{review.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The app bill: a smaller first job that pays for itself */}
      <section id="apps" className={SECTION}>
        <div className="service-page-container grid gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          <div className="lg:col-span-6">
            <Eyebrow>{APP_AUDIT.name}</Eyebrow>
            <h2 className={H2}>
              Cut your app bill by <span className="softles-gradient-text whitespace-nowrap">a quarter.</span>
            </h2>
            <p className="softles-section-copy">
              Apps get added one problem at a time and rarely come out. Each one bills you every month,
              and many load scripts on every page, which slows the store down. We go through the whole
              stack and tell you what to keep, what to swap and what to cut.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <div className="lg:sticky lg:top-24">
              <AppBill />
            </div>
          </div>

          <div className="lg:col-span-6">
            <ol className="flex flex-col">
              {APP_STEPS.map((step, index) => (
                <li
                  key={step.name}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <span aria-hidden="true" className="font-display text-xl font-bold leading-snug text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink sm:text-lg">{step.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute/80 sm:text-base">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-line pt-6 text-mute">
              The {APP_AUDIT.name} is <span className="font-semibold text-ink">{APP_AUDIT.price}</span> and
              takes {APP_AUDIT.time}.{" "}
              <a href="#offer" className={TEXT_LINK}>
                Compare the three ways to start
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Three ways to start */}
      <section id="offer" className={SECTION_ALT}>
        <div className="service-page-container">
          <Eyebrow>Ways to start</Eyebrow>
          <h2 className={H2}>
            Three ways <span className="softles-gradient-text">to start.</span>
          </h2>
          <p className="softles-section-copy">
            Each one is a fixed price in AUD and stands on its own. Not sure which fits?{" "}
            <BookCallLink placement="offer_intro" className={TEXT_LINK}>
              Book a call
            </BookCallLink>{" "}
            and Shakti will tell you, even if the answer is none of them.
          </p>

          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3">
            {OFFERS.map((offer) => {
              const featured = offer.id === "leak";
              return (
                <article
                  key={offer.id}
                  className={`flex flex-col p-6 sm:p-8 ${
                    featured
                      ? "rounded-2xl border border-brand/50 bg-gradient-to-br from-brand-tint to-panel shadow-[var(--shadow-card-hover)]"
                      : "softles-card"
                  }`}
                >
                  <h3 className="text-xl font-bold text-ink sm:text-2xl">{offer.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                    <span className="text-dim">Pick this if </span>
                    {offer.fit}
                  </p>
                  <p className="mt-6 font-display text-[clamp(2.25rem,3.4vw,2.75rem)] font-bold leading-none tracking-[-0.03em] text-ink">
                    {offer.from ? (
                      <span className="mr-2 text-base font-semibold tracking-normal text-mute">From</span>
                    ) : null}
                    {offer.price}
                  </p>
                  <dl className="mt-6 grid gap-5 text-sm text-mute sm:text-base">
                    <div>
                      <dt className={LABEL}>Time</dt>
                      <dd className="mt-1.5 text-ink">{offer.time}</dd>
                    </div>
                    <div>
                      <dt className={LABEL}>You get</dt>
                      <dd>
                        <ul className="mt-1.5 flex flex-col gap-2">
                          {offer.gets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <Diamond />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className={LABEL}>Risk</dt>
                      <dd className="mt-1.5">{offer.risk}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 pt-2 lg:mt-auto">
                    {offer.id === "sprint" ? (
                      <BookCallLink placement="offer_sprint" className="softles-secondary-button w-full">
                        Book a call
                      </BookCallLink>
                    ) : (
                      <RequestCta kind={offer.id} variant={featured ? "primary" : "secondary"} />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How working with us runs */}
      <section className={SECTION}>
        <div className="service-page-container">
          <Eyebrow>How we work</Eyebrow>
          <h2 className={`${H2} max-w-[18ch]`}>
            We build while <span className="softles-gradient-text">Australia sleeps.</span>
          </h2>
          <p className="softles-section-copy">
            We&apos;re in Noida, India, five and a half hours behind Sydney. Your afternoon brief becomes
            our working day.
          </p>

          <ol className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
            {OVERNIGHT.map((step) => (
              <li key={step.when} className="softles-card p-6 xl:p-7">
                <p className="font-display text-3xl font-bold text-ink">{step.when}</p>
                <p className="mt-1 text-sm font-semibold text-brand">{step.where}</p>
                <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{step.what}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-mute">Working with us</h3>
              <ul className="mt-4 flex flex-col">
                {[
                  "A named project lead for your store",
                  "A Loom update every week",
                  "Slack or email, whichever your team already uses",
                  "Calls 1–5 pm AEDT",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-t border-line py-3 text-mute">
                    <Diamond />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid grid-cols-3 gap-3 sm:gap-5 lg:col-span-8">
              {TEAM.map((person) => (
                <li key={person.name} className="softles-card group overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-raise to-deep">
                    <Photo
                      src={person.img}
                      widths={[256, 384]}
                      sizes="(min-width: 1440px) 250px, (min-width: 1024px) 20vw, 30vw"
                      width={714}
                      height={893}
                      alt={person.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center sm:p-4">
                    <p className="text-sm font-bold leading-snug text-ink sm:text-base">{person.name}</p>
                    <p className="mt-1 text-xs text-mute/80 sm:text-sm">{person.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={SECTION_ALT}>
        <div className="service-page-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className={H2}>Questions</h2>
          </div>
          <div className="divide-y divide-line border-y border-line lg:col-span-8">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-brand transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[40rem] text-sm leading-relaxed text-mute/80 sm:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Book a call with Shakti: the main call to action */}
      <section id="book" className={SECTION}>
        <div className="service-page-container grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Book a call</Eyebrow>
            <h2 className={H2}>
              Talk it through with <span className="softles-gradient-text">Shakti.</span>
            </h2>
            <p className="softles-section-copy">
              Thirty minutes on a video call. Bring your store and we&apos;ll look at it together. You&apos;ll
              leave knowing where it leaks and which way to start, or hearing straight that we&apos;re not the
              right fit.
            </p>
            <ul className="mt-6 flex flex-col">
              <li className="flex gap-3 border-t border-line py-3 text-mute">
                <Diamond />
                You talk to the founder, not a sales team
              </li>
              <li className="flex gap-3 border-t border-line py-3 text-mute">
                <Diamond />
                Calls 1–5 pm AEDT
              </li>
              <li className="flex gap-3 border-y border-line py-3 text-mute">
                <Diamond />
                <span>
                  Rather look at the numbers first?{" "}
                  <a href="#hero" className={TEXT_LINK}>
                    Run the free store check
                  </a>
                </span>
              </li>
            </ul>

            {/* Phones get a small portrait; wider screens the main site's photo card. */}
            <div className="mt-8 flex items-center gap-4 lg:hidden">
              <Photo
                src="/shakti_singh.jpg"
                widths={[128, 256]}
                sizes="64px"
                width={64}
                height={64}
                alt="Shakti Singh"
                className="h-16 w-16 rounded-full border-4 border-panel object-cover object-top shadow-md"
              />
              <span>
                <span className="block font-bold text-ink">Shakti Singh</span>
                <span className="block text-sm text-mute">Founder, Softles</span>
              </span>
            </div>
            <figure className="relative mt-10 hidden aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-raise to-deep lg:block">
              <Photo
                src="/shakti_singh.jpg"
                widths={[384, 640]}
                sizes="280px"
                width={714}
                height={893}
                alt="Shakti Singh"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="block font-bold text-ink">Shakti Singh</span>
                <span className="block text-sm text-mute">Founder, Softles</span>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7">
            {BOOKING_URL ? (
              <BookingEmbed url={BOOKING_URL} />
            ) : (
              <div className="softles-card p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-ink">Pick a time</h3>
                <p className="mb-6 mt-2 text-mute">
                  Leave your details and Shakti will email you a few times to choose from.
                </p>
                <RequestCta kind="call" inline />
              </div>
            )}
          </div>
        </div>
      </section>

      <AuFooter />

      <StickyBar />
    </main>
  );
}
