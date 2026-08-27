// Shared data for the homepage work showcase and the /work/[slug] detail pages.
// Page images are full-page captures of the live sites (desktop + mobile);
// dimensions drive a consistent, smooth auto-scroll speed.

export const projects = [
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
      { value: "5/5", label: "Rating" },
      { value: "30%", label: "Repeat rate" },
    ],
    services: ["Shopify theme development", "Subscriptions", "CRO", "Mobile UX"],
    tags: ["Shopify", "Subscriptions", "CRO"],
    pages: [
      { label: "Home", d: "/work/brunswick-p0-d.jpg", m: "/work/brunswick-p0-m.jpg", dW: 1100, dH: 6587, mW: 440, mH: 10123 },
      { label: "Subscription", d: "/work/brunswick-p1-d.jpg", m: "/work/brunswick-p1-m.jpg", dW: 1100, dH: 5722, mW: 440, mH: 12062 },
      { label: "About", d: "/work/brunswick-p2-d.jpg", m: "/work/brunswick-p2-m.jpg", dW: 1100, dH: 3235, mW: 440, mH: 5748 },
    ],
  },
  {
    slug: "wavelo",
    name: "Wavelo",
    category: "SaaS",
    stack: "Web app",
    year: "2025",
    summary:
      "A WhatsApp Business platform — campaigns, automations and a shared inbox in one workspace, wrapped in a crisp product-marketing site.",
    overview:
      "Wavelo turns WhatsApp into a reliable customer channel — campaigns, automations and a shared team inbox. We crafted the product-marketing site: a bold narrative, interactive dashboard visuals, and early-access capture throughout.",
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
      { label: "Home", d: "/work/wavelo-p0-d.jpg", m: "/work/wavelo-p0-m.jpg", dW: 1100, dH: 3457, mW: 440, mH: 9007 },
      { label: "Features", d: "/work/wavelo-p1-d.jpg", m: "/work/wavelo-p1-m.jpg", dW: 1100, dH: 2559, mW: 440, mH: 7607 },
      { label: "Pricing", d: "/work/wavelo-p2-d.jpg", m: "/work/wavelo-p2-m.jpg", dW: 1100, dH: 2325, mW: 440, mH: 5123 },
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
      { label: "Home", d: "/work/umang-p0-d.jpg", m: "/work/umang-p0-m.jpg", dW: 1100, dH: 7519, mW: 440, mH: 9012 },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
