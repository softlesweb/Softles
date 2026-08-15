import Image from "next/image";

// Real, live builds. The Shopify flagship (Brunswick) is the deep-dive feature
// directly above this grid, so it's intentionally left out here to avoid repeating it.
const projects = [
  {
    name: "Pride & Justice Associates",
    host: "prideandjustice.in",
    url: "https://prideandjustice.in/",
    image: "/prideandjustice.png",
    industry: "Legal · Law firm",
    outcome:
      "A trust-driven site with clear practice areas and enquiry flows that turn visitors into consultations.",
    tags: ["WordPress", "Custom theme", "SEO"],
  },
  {
    name: "Enviro Guru",
    host: "enviroguru.in",
    url: "https://enviroguru.in/",
    image: "/enviroguru.png",
    industry: "Environmental · Consulting",
    outcome:
      "A corporate site that turns service credibility into qualified leads with clear calls to action.",
    tags: ["WordPress", "Corporate", "Lead forms"],
  },
  {
    name: "BNPS International",
    host: "bnpsinternational.com",
    url: "https://bnpsinternational.com/",
    image: "/bnpsinternational.png",
    industry: "Education · Study abroad",
    outcome:
      "Storytelling and partner credibility paired with high-intent student enquiry journeys.",
    tags: ["WordPress", "Education", "Lead gen"],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="w-full py-12 md:py-20 bg-[#0E1219]">
      <div className="service-page-container">
        <div className="softles-eyebrow mb-3">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Selected work</span>
        </div>
        <h2 className="service-section-heading text-[#FFFFFF]">More sites we&apos;ve shipped</h2>
        <p className="softles-section-copy max-w-2xl">
          Real, live builds across WordPress and Shopify — designed to look sharp and built to convert.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block softles-card overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#FF4D57]/40 hover:shadow-2xl hover:shadow-[#FF4D57]/10"
            >
              {/* Browser frame */}
              <div className="relative">
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0F131A] border-b border-[#2E3446]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-[#161C27] border border-[#2E3446] px-3 py-1 text-[11px] text-[#8A92A6]">
                    {p.host}
                  </span>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1219]">
                  <Image
                    src={p.image}
                    alt={`${p.name} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0E1219]/90 via-[#0E1219]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="m-4 inline-flex items-center gap-2 rounded-full bg-[#FF4D57] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                      Visit site
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M7 17L17 7M17 7H8M17 7v9" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF4D57] mb-1.5">
                  {p.industry}
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight">{p.name}</h3>
                <p className="text-[#C7CCD6]/80 text-sm mt-2 leading-relaxed">{p.outcome}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
