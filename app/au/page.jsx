import LeakCheck from "./components/LeakCheck";
import BookCallLink from "./components/BookCallLink";
import BookingEmbed from "./components/BookingEmbed";
import RequestCta from "./components/RequestCta";
import HeroGreeting from "./components/HeroGreeting";
import StickyBar from "./components/StickyBar";

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

// A torn-off monthly app bill, with the apps we'd change struck through.
function AppBill() {
  const saved = APP_BILL.changes.reduce((sum, line) => sum + line.cost, 0);
  const kept = APP_BILL.apps - APP_BILL.changes.length;
  const rule = "border-t border-dashed border-[#0E1016]/30";

  return (
    <figure>
      <div className="au-receipt au-mono bg-[#F3EFE8] px-5 pb-10 pt-6 text-sm text-[#0E1016] sm:px-7">
        <p className="flex justify-between gap-4 font-medium">
          <span>Monthly app bill</span>
          <span className="text-[#545866]">AUD</span>
        </p>
        <p className={`mt-4 flex justify-between gap-4 pt-4 ${rule}`}>
          <span>{APP_BILL.apps} apps</span>
          <span>{dollars(APP_BILL.monthly)}</span>
        </p>

        <ul className={`mt-4 grid gap-4 pt-4 ${rule}`}>
          {APP_BILL.changes.map((line) => (
            <li key={line.app}>
              <p className="flex justify-between gap-4">
                <span>{line.app}</span>
                <span className="shrink-0">
                  <span className="sr-only">saves </span>
                  <s className="decoration-[#FF4D57] decoration-2">{dollars(line.cost)}</s>
                </span>
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-[#545866]">{line.note}</p>
            </li>
          ))}
        </ul>

        <dl className={`mt-4 grid gap-1.5 pt-4 ${rule}`}>
          <div className="flex justify-between gap-4">
            <dt>New monthly bill, {kept} apps</dt>
            <dd>{dollars(APP_BILL.monthly - saved)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Saved each month</dt>
            <dd>{dollars(saved)}</dd>
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <dt className="font-medium">Saved each year</dt>
            <dd className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              {dollars(saved * 12)}
            </dd>
          </div>
        </dl>
      </div>
      <figcaption className="mt-4 text-sm text-[#A9AFBC]">
        A worked example: {Math.round((saved / APP_BILL.monthly) * 100)}% off a {dollars(APP_BILL.monthly)}{" "}
        monthly bill. Your saving depends on the apps you run.
      </figcaption>
    </figure>
  );
}

// The store as shoppers see it: desktop home page, with the phone version over its corner.
function WorkShots() {
  return (
    <figure className="relative pb-10 pr-6 sm:pr-10">
      <div className="overflow-hidden rounded-[14px] border border-[#0E1016]/15 bg-white">
        <p className="au-mono border-b border-[#0E1016]/10 px-4 py-2 text-xs text-[#545866]">brunswickfurfood.com</p>
        <Photo
          src="/work/brunswick-hero.jpg"
          widths={[640, 828, 1080]}
          sizes="(min-width: 1200px) 640px, (min-width: 768px) 55vw, 100vw"
          width={1100}
          height={652}
          alt="Brunswick Fur Food home page on desktop"
          className="block h-auto w-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[34%] max-w-[200px] overflow-hidden rounded-[22px] border-[5px] border-[#0E1016] bg-[#0E1016] shadow-[0_24px_48px_-24px_rgba(14,16,22,0.55)]">
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

      {/* Proof: a store we rebuilt, and what clients say */}
      <section id="work" className="scroll-mt-4 bg-[#F3EFE8] py-20 text-[#0E1016] md:py-28">
        <div className={WRAP}>
          <h2 className={`${H2} max-w-[18ch]`}>
            A Shopify store we rebuilt in <span className="au-serif font-normal tracking-normal">Melbourne.</span>
          </h2>

          <div className="mt-12 grid items-start gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <WorkShots />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl font-bold">{WORK.client}</h3>
              <p className="mt-1 text-[#545866]">{WORK.where}</p>
              <p className="mt-5 text-lg leading-relaxed">{WORK.summary}</p>
              <ul className="mt-6 grid gap-2">
                {WORK.built.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4D57]" />
                    {item}
                  </li>
                ))}
              </ul>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#0E1016]/15 pt-6">
                {WORK.numbers.map((n) => (
                  <div key={n.label} className="flex flex-col-reverse">
                    <dt className="text-[#545866]">{n.label}</dt>
                    <dd className="font-display text-5xl font-bold tracking-[-0.03em]">{n.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
                <a
                  href={WORK.site}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-[#FF4D57] decoration-2 underline-offset-[6px]"
                >
                  Visit the live store
                </a>
                <a
                  href={WORK.caseStudy}
                  className="underline decoration-[#0E1016]/30 decoration-2 underline-offset-[6px] hover:decoration-[#0E1016]"
                >
                  Read the case study
                </a>
              </p>
            </div>
          </div>

          <h3 className="mt-20 text-2xl font-bold md:mt-28">What clients say</h3>
          <ul className="mt-8 grid gap-12 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <li key={review.name} className="border-t-2 border-[#0E1016] pt-6">
                <figure>
                  <blockquote className="au-serif text-[1.6rem] leading-[1.3] sm:text-[1.85rem]">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <Photo
                      src={review.img}
                      widths={[48, 96]}
                      sizes="48px"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span>
                      <span className="block font-semibold">{review.name}</span>
                      <span className="block text-sm text-[#545866]">{review.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The app bill: a smaller first job that pays for itself */}
      <section id="apps" className="scroll-mt-4 bg-[#171A22] py-20 md:py-28">
        <div className={`${WRAP} grid gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-14`}>
          <div className="md:col-span-6">
            <h2 className={H2}>
              Cut your app bill by{" "}
              <span className="au-serif whitespace-nowrap font-normal tracking-normal">a quarter.</span>
            </h2>
            <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-[#D6D9E0]">
              Apps get added one problem at a time and rarely come out. Each one bills you every month,
              and many load scripts on every page, which slows the store down. We go through the whole
              stack and tell you what to keep, what to swap and what to cut.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1">
            <div className="md:sticky md:top-8">
              <AppBill />
            </div>
          </div>

          <div className="md:col-span-6">
            <ol className="grid gap-6">
              {APP_STEPS.map((step, index) => (
                <li key={step.name} className="grid grid-cols-[2rem_1fr] gap-x-3">
                  <span aria-hidden="true" className="au-mono pt-0.5 text-[#FF4D57]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                    <p className="mt-1 leading-relaxed text-[#A9AFBC]">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-[#2A2E3A] pt-6 text-lg text-[#D6D9E0]">
              The {APP_AUDIT.name} is {APP_AUDIT.price} and takes {APP_AUDIT.time}.{" "}
              <a
                href="#offer"
                className="font-semibold text-white underline decoration-[#FF4D57] decoration-2 underline-offset-[6px]"
              >
                Compare the three ways to start
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Three ways to start */}
      <section id="offer" className="scroll-mt-4 bg-[#F3EFE8] py-20 text-[#0E1016] md:py-28">
        <div className={WRAP}>
          <h2 className={H2}>
            Three ways <span className="au-serif font-normal tracking-normal">to start.</span>
          </h2>
          <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-[#2A2E3A]">
            Each one is a fixed price in AUD and stands on its own. Not sure which fits?{" "}
            <BookCallLink
              placement="offer_intro"
              className="font-semibold text-[#0E1016] underline decoration-[#FF4D57] decoration-2 underline-offset-[5px]"
            >
              Book a call
            </BookCallLink>{" "}
            and Shakti will tell you, even if the answer is none of them.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {OFFERS.map((offer) => {
              const dark = offer.id === "leak";
              const label = `au-mono text-xs uppercase tracking-[0.08em] ${dark ? "text-[#A9AFBC]" : "text-[#545866]"}`;
              return (
                <article
                  key={offer.id}
                  className={`flex flex-col rounded-[18px] p-6 sm:p-8 ${
                    dark ? "bg-[#0E1016] text-white" : "border-2 border-[#0E1016]"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{offer.name}</h3>
                  <p className={`mt-3 text-lg leading-snug ${dark ? "text-white" : "text-[#0E1016]"}`}>
                    <span className={dark ? "text-[#A9AFBC]" : "text-[#545866]"}>Pick this if </span>
                    {offer.fit}
                  </p>
                  <p className="mt-6 font-display text-[clamp(2.25rem,3.4vw,2.75rem)] font-bold leading-none tracking-[-0.03em]">
                    {offer.from ? <span className="mr-2 text-lg font-semibold tracking-normal">From</span> : null}
                    {offer.price}
                  </p>
                  <dl className={`mt-6 grid gap-5 ${dark ? "text-[#D6D9E0]" : "text-[#2A2E3A]"}`}>
                    <div>
                      <dt className={label}>Time</dt>
                      <dd className="mt-1 text-lg">{offer.time}</dd>
                    </div>
                    <div>
                      <dt className={label}>You get</dt>
                      <dd>
                        <ul className="mt-1 grid gap-1.5">
                          {offer.gets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className={label}>Risk</dt>
                      <dd className="mt-1">{offer.risk}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 pt-2 lg:mt-auto">
                    {offer.id === "sprint" ? (
                      <BookCallLink
                        placement="offer_sprint"
                        className="inline-flex rounded-full bg-[#0E1016] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2A2E3A]"
                      >
                        Book a call
                      </BookCallLink>
                    ) : (
                      <RequestCta kind={offer.id} tone={dark ? "ink" : "paper"} />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <ul className="grid content-start gap-3 text-lg text-[#D6D9E0] md:col-span-4">
              <li>A named project lead for your store</li>
              <li>A Loom update every week</li>
              <li>Slack or email, whichever your team already uses</li>
              <li>Calls 1–5 pm AEDT</li>
            </ul>
            <ul className="grid grid-cols-3 gap-3 sm:gap-5 md:col-span-8">
              {TEAM.map((person) => (
                <li key={person.name}>
                  <Photo
                    src={person.img}
                    widths={[256, 384]}
                    sizes="(min-width: 1200px) 240px, (min-width: 768px) 20vw, 30vw"
                    width={714}
                    height={893}
                    className="aspect-[4/5] h-auto w-full rounded-[14px] object-cover"
                  />
                  <p className="mt-3 font-semibold leading-snug text-white">{person.name}</p>
                  <p className="text-sm text-[#A9AFBC]">{person.role}</p>
                </li>
              ))}
            </ul>
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

      {/* Book a call with Shakti: the main call to action */}
      <section id="book" className="scroll-mt-4 bg-[#171A22] py-20 md:py-28">
        <div className={`${WRAP} grid gap-12 md:grid-cols-12 md:gap-10`}>
          <div className="md:col-span-5">
            <div className="flex items-end gap-5">
              <Photo
                src="/shakti_singh.jpg"
                widths={[256, 384]}
                sizes="160px"
                width={714}
                height={893}
                alt="Shakti Singh"
                className="aspect-[4/5] h-auto w-32 rounded-[14px] object-cover sm:w-40"
              />
              <p className="pb-1">
                <span className="block font-semibold text-white">Shakti Singh</span>
                <span className="block text-sm text-[#A9AFBC]">Founder, Softles</span>
              </p>
            </div>
            <h2 className={`${H2} mt-10`}>
              Talk it through with <span className="au-serif font-normal tracking-normal">Shakti.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#D6D9E0]">
              Thirty minutes on a video call. Bring your store and we&apos;ll look at it together. You&apos;ll
              leave knowing where it leaks and which way to start, or hearing straight that we&apos;re not the
              right fit.
            </p>
            <ul className="mt-6 grid gap-2 text-[#A9AFBC]">
              <li>You talk to the founder, not a sales team</li>
              <li>Calls 1–5 pm AEDT</li>
              <li>
                Rather look at the numbers first?{" "}
                <a href="#hero" className="text-white underline underline-offset-4">
                  Run the free store check
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-7">
            {BOOKING_URL ? (
              <BookingEmbed url={BOOKING_URL} />
            ) : (
              <div className="rounded-[18px] border border-[#2A2E3A] bg-[#0E1016] p-6 sm:p-8">
                <h3 className="text-2xl font-bold">Pick a time</h3>
                <p className="mb-6 mt-2 text-[#A9AFBC]">
                  Leave your details and Shakti will email you a few times to choose from.
                </p>
                <RequestCta kind="call" inline />
              </div>
            )}
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
