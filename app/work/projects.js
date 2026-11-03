// Shared data for the homepage work showcase and the /work/[slug] detail pages.
// Page images are full-page captures of the live sites (desktop + mobile);
// dimensions drive a consistent, smooth auto-scroll speed.

export const projects = [
  {
    slug: "ssf-global",
    name: "SSF Global",
    category: "Website",
    stack: "Next.js",
    year: "2026",
    summary:
      "Cross-border medical care, coordinated — a bilingual EN/FR site that makes an intimidating journey feel followable.",
    overview:
      "SSF — Santé Sans Frontière coordinates medical journeys from Africa, the Middle East and beyond to accredited hospitals in India, Morocco, Türkiye and China, from dual headquarters in New Delhi and Kinshasa. We built the site that carries the whole operation: the 21-step patient journey, 26 centers of excellence, the DRC virtual health portal and the global office network — in English and French throughout.",
    challenge:
      "Choosing treatment abroad is a high-stakes decision, usually made in a second language. SSF is a facilitator, not a hospital — a distinction that is both a legal requirement and the heart of their credibility — and most of the patients they serve read French.",
    solution:
      "A calm, institutional design that signals clinical seriousness without ever posing as a provider. The journey is laid out step by step, specialties and document checklists become browsable reference, accreditations and the office network carry the trust-building, and every page exists in full in both languages with the facilitator disclaimer always in view.",
    highlights: [
      "Full EN/FR parity across every page",
      "21-step patient journey, made legible",
      "26 centers of excellence directory",
      "Compliance-first: facilitator, never provider",
    ],
    metrics: [
      { value: "780+", label: "Patients served" },
      { value: "30+", label: "Source countries" },
      { value: "12+", label: "Country offices" },
    ],
    services: ["Multi-page website", "Bilingual EN/FR build", "UI/UX design", "Content architecture"],
    tags: ["Healthcare", "Bilingual", "Corporate"],
    pages: [
      { label: "Home", d: "/work/ssf-p0-d.jpg", m: "/work/ssf-p0-m.jpg", dW: 1100, dH: 10953, mW: 440, mH: 24113 },
      { label: "Patient journey", d: "/work/ssf-p1-d.jpg", m: "/work/ssf-p1-m.jpg", dW: 1100, dH: 6071, mW: 440, mH: 8276 },
      { label: "Specialties", d: "/work/ssf-p2-d.jpg", m: "/work/ssf-p2-m.jpg", dW: 1100, dH: 3952, mW: 440, mH: 11065 },
      { label: "Global presence", d: "/work/ssf-p3-d.jpg", m: "/work/ssf-p3-m.jpg", dW: 1100, dH: 3226, mW: 440, mH: 6395 },
    ],
  },
  {
    slug: "brunswick-fur-food",
    name: "Brunswick Fur Food",
    category: "E-commerce",
    stack: "Shopify",
    year: "2025",
    summary:
      "Fresh, human-grade dog food for Melbourne — a Shopify store rebuilt to turn product quality into trust and repeat orders.",
    overview:
      "Brunswick Fur Food delivers gently cooked, human-grade meals across Melbourne and Victoria. We rebuilt their Shopify store to make the quality obvious, the subscription effortless, and the whole experience feel premium on mobile.",
    challenge:
      "The old store didn't reflect the quality of the food. The subscription was confusing, and mobile shoppers dropped off before checkout.",
    solution:
      "A conversion-focused custom theme, a clearer trial-and-subscription flow, and a mobile-first product experience — so more visitors become first orders, and more first orders become repeat customers.",
    highlights: [
      "Conversion-focused custom theme",
      "Streamlined subscription & trial flow",
      "Mobile-first product discovery",
    ],
    metrics: [
      { value: "2.5k+", label: "Orders" },
      { value: "30%", label: "Repeat rate" },
    ],
    services: ["Shopify theme development", "Subscriptions", "CRO", "Mobile UX"],
    tags: ["Shopify", "Subscriptions", "CRO"],
    pages: [
      { label: "Home", d: "/work/brunswick-p0-d.jpg", m: "/work/brunswick-p0-m.jpg", dW: 1100, dH: 6692, mW: 440, mH: 8843 },
      { label: "Subscription", d: "/work/brunswick-p1-d.jpg", m: "/work/brunswick-p1-m.jpg", dW: 1100, dH: 5867, mW: 440, mH: 10828 },
      { label: "About", d: "/work/brunswick-p2-d.jpg", m: "/work/brunswick-p2-m.jpg", dW: 1100, dH: 3227, mW: 440, mH: 4922 },
    ],
  },
  {
    slug: "sandeshsetu",
    name: "SandeshSetu",
    category: "SaaS",
    stack: "Web app",
    year: "2025",
    summary:
      "A WhatsApp Business platform — campaigns, automations and a shared inbox in one workspace, wrapped in a crisp product-marketing site.",
    overview:
      "SandeshSetu turns WhatsApp into a reliable customer channel — campaigns, automations and a shared team inbox, all running on Meta's official Business Platform. We crafted the product-marketing site: a bold narrative, interactive dashboard visuals, and early-access capture throughout.",
    challenge:
      "A pre-launch SaaS needed to look established and explain a multi-feature platform without overwhelming visitors.",
    solution:
      "A bold, modern narrative with interactive dashboard visuals, a clean feature and pricing structure, and early-access lead capture on every page.",
    highlights: [
      "Bold, modern product narrative",
      "Interactive dashboard visuals",
      "Early-access lead capture",
    ],
    metrics: null,
    services: ["Product marketing site", "UI/UX design", "Multi-page build"],
    tags: ["SaaS", "Product", "Landing"],
    pages: [
      { label: "Home", d: "/work/sandeshsetu-p0-d.jpg", m: "/work/sandeshsetu-p0-m.jpg", dW: 1100, dH: 3637, mW: 440, mH: 8056 },
      { label: "Features", d: "/work/sandeshsetu-p1-d.jpg", m: "/work/sandeshsetu-p1-m.jpg", dW: 1100, dH: 2839, mW: 440, mH: 7314 },
      { label: "Pricing", d: "/work/sandeshsetu-p2-d.jpg", m: "/work/sandeshsetu-p2-m.jpg", dW: 1100, dH: 2577, mW: 440, mH: 4941 },
    ],
  },
  {
    slug: "recobee",
    name: "RecoBee",
    category: "Web app",
    stack: "Web app",
    year: "2025",
    summary:
      "Movie reviews, ratings and watchlists across OTTs — a discovery platform designed to feel cinematic and effortless.",
    overview:
      "RecoBee helps people find what to watch across every OTT — reviews, ratings, watchlists and an editorial blog. We designed a cinematic, media-rich interface built around fast discovery.",
    challenge:
      "Discovery products live or die on how effortless browsing feels. The interface had to be rich and cinematic without getting in the way.",
    solution:
      "A dark, media-forward UI, strong search and discovery flows, personal watchlists across OTTs, and an editorial blog to drive organic interest.",
    highlights: [
      "Cinematic, media-rich interface",
      "Search & discovery flows",
      "Editorial blog for organic reach",
    ],
    metrics: null,
    services: ["Product design", "Web app UI", "Editorial / blog"],
    tags: ["Web app", "Entertainment", "Product"],
    pages: [
      { label: "Home", d: "/work/recobee-p0-d.jpg", m: "/work/recobee-p0-m.jpg", dW: 1100, dH: 3609, mW: 440, mH: 7370 },
      { label: "Blog", d: "/work/recobee-p1-d.jpg", m: "/work/recobee-p1-m.jpg", dW: 1100, dH: 6071, mW: 440, mH: 12671 },
    ],
  },
  {
    slug: "librarysetu",
    name: "LibrarySetu",
    category: "SaaS",
    stack: "Web app",
    year: "2025",
    summary:
      "Study-library management software — seats, students, fees and dues in one calm dashboard built for Indian study libraries.",
    overview:
      "LibrarySetu helps study-library owners run seats, students, monthly fees and overdue payments from one simple dashboard. We designed and built the marketing site that tells that story and turns visitors into sign-ups.",
    challenge:
      "Library owners juggle registers and WhatsApp. The product needed a site that made a modern alternative instantly understandable and trustworthy.",
    solution:
      "Clear product storytelling, a calm and confident visual system, and a fast, responsive marketing site with focused calls to register.",
    highlights: [
      "Clear product storytelling",
      "Confident SaaS visual system",
      "Fast and responsive on every device",
    ],
    metrics: null,
    services: ["Product marketing site", "UI/UX design", "Responsive build"],
    tags: ["SaaS", "Product", "Marketing site"],
    pages: [
      { label: "Home", d: "/work/librarysetu-p0-d.jpg", m: "/work/librarysetu-p0-m.jpg", dW: 1100, dH: 3326, mW: 440, mH: 7671 },
    ],
  },
  {
    slug: "umang-aatray",
    name: "Umang Aatray",
    category: "Website",
    stack: "Website",
    year: "2025",
    summary:
      "Personal-brand site for a commercial & criminal lawyer in New Delhi — editorial, trustworthy, and built to book intro calls.",
    overview:
      "Umang Aatray is a commercial and criminal lawyer in New Delhi. We built an editorial personal-brand site that signals credibility and makes booking an intro call effortless.",
    challenge:
      "A solo practitioner needs to feel established and trustworthy online, and to convert visits into consultations.",
    solution:
      "An editorial personal brand, credentials and practice areas front-and-centre, and clear consultation CTAs throughout.",
    highlights: [
      "Editorial personal brand",
      "Credentials front-and-centre",
      "Clear consultation CTAs",
    ],
    metrics: null,
    services: ["Personal brand site", "UI/UX design", "Responsive build"],
    tags: ["Website", "Legal", "Personal brand"],
    pages: [
      { label: "Home", d: "/work/umang-p0-d.jpg", m: "/work/umang-p0-m.jpg", dW: 1100, dH: 7555, mW: 440, mH: 7840 },
    ],
  },
  {
    slug: "ayla-solutions",
    name: "Ayla Solutions",
    category: "Website",
    stack: "Headless",
    year: "2025",
    summary:
      "A data & AI consultancy site — corporate credibility and clear service storytelling, built headless for speed.",
    overview:
      "Ayla Solutions helps organisations unlock value from their data — strategy, analytics and automation, including their Arth AI financial product. We built a fast, corporate headless site that makes complex services feel clear and credible.",
    challenge:
      "Data consultancies must signal deep expertise without drowning visitors in jargon. The site needed authority, clarity, and speed.",
    solution:
      "A confident corporate design, structured service and solution storytelling, testimonial-driven credibility, and a headless build tuned for performance.",
    highlights: [
      "Corporate, credibility-first design",
      "Clear service & solution storytelling",
      "Fast headless build",
    ],
    metrics: null,
    services: ["Headless website", "UI/UX design", "Corporate identity"],
    tags: ["Headless", "Corporate", "Data & AI"],
    pages: [
      { label: "Home", d: "/work/ayla-p0-d.jpg", m: "/work/ayla-p0-m.jpg", dW: 1100, dH: 3200, mW: 440, mH: 5649 },
    ],
  },
  {
    slug: "tuitionly",
    name: "Tuitionly",
    category: "Website",
    stack: "Website",
    year: "2025",
    summary:
      "An online tuition service for all age groups — a bright, trustworthy site built to turn parents into booked demo sessions.",
    overview:
      "Tuitionly offers personalised online tuition across IB, IGCSE, CBSE and AP curricula. We designed and built a bright, reassuring marketing site that explains the approach and drives free-demo bookings.",
    challenge:
      "Parents choosing a tutor need to trust it fast. The site had to feel warm and credible while making the curricula and process clear.",
    solution:
      "A friendly, confident visual system, a clear approach and pricing breakdown, curriculum-specific pages, and demo-booking CTAs throughout.",
    highlights: [
      "Warm, trustworthy visual system",
      "Curriculum-specific pages (IB, IGCSE, CBSE, AP)",
      "Demo-booking CTAs throughout",
    ],
    metrics: null,
    services: ["Marketing site", "UI/UX design", "Multi-page build"],
    tags: ["Website", "Education", "Lead gen"],
    pages: [
      { label: "Home", d: "/work/tuitionly-p0-d.jpg", m: "/work/tuitionly-p0-m.jpg", dW: 1100, dH: 4563, mW: 440, mH: 9010 },
      { label: "IB curriculum", d: "/work/tuitionly-p1-d.jpg", m: "/work/tuitionly-p1-m.jpg", dW: 1100, dH: 3317, mW: 440, mH: 7239 },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
