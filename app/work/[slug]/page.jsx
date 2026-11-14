import RollingNumber from "../../components/_components/RollingNumber";
import WordReveal from "../../components/_components/WordReveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/_components/Reveal";
import Footer from "../../components/Footer";
import DeviceFrame from "../../components/_components/DeviceFrame";
import CaseHeroStage from "../../components/_components/CaseHeroStage";
import DesignGallery from "../../components/_components/DesignGallery";
import { projects, getProject } from "../projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// The project list is a static array, so anything outside it is a dead URL —
// a retired slug, a typo, a stale link. Without this the router still renders
// the segment and notFound() comes back as a soft 404: the right page, but a
// 200, which search engines index as a real page.
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.category} case study | SoftLes`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.name} — SoftLes work`,
      description: p.summary,
      url: `https://softles.in/work/${p.slug}`,
    },
  };
}

export default function WorkDetail({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <main className="bg-page overflow-x-clip sm:pt-[60px]">
        {/* Hero: everything centred on one axis, the build on a lit stage below */}
        <section className="softles-section-primary relative overflow-hidden pt-5 md:pt-8">
          {/* Beam behind the headline, so the eye starts at the top of the column */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-40 h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,77,87,0.14),transparent_70%)] blur-3xl"
          />
          <div className="service-page-container relative">
            {/* Breadcrumb sits where a breadcrumb belongs: top-left, right under the header */}
            <Reveal index={0} className="mb-6 md:mb-8">
              <Link href="/work" className="inline-flex items-center gap-2 text-sm text-mute hover:text-brand transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                All work
              </Link>
            </Reveal>

            <div className="flex flex-col items-center text-center">
              <Reveal index={1} className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-mute/50 font-semibold">
                  {/* The stack is only worth repeating when it says something the category didn't */}
                  {project.stack && project.stack.toLowerCase() !== project.category?.toLowerCase() ? `${project.stack} · ${project.year}` : project.year}
                </span>
              </Reveal>

              <WordReveal as="h1" className="mt-3 text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-extrabold text-ink tracking-tight leading-[1.08] max-w-[16ch]">
                {project.name}
              </WordReveal>

              <Reveal index={3}>
                <p className="mt-4 text-mute text-base sm:text-lg leading-relaxed max-w-2xl">
                  {project.summary}
                </p>
              </Reveal>

              {project.metrics && (
                <Reveal index={4} className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="min-w-[116px] rounded-xl border border-line bg-panel px-4 py-3 text-center">
                      <div className="text-lg md:text-xl font-black text-ink"><RollingNumber value={m.value} /></div>
                      <div className="text-[10px] uppercase tracking-wider text-mute/60 mt-1">{m.label}</div>
                    </div>
                  ))}
                </Reveal>
              )}

            </div>

            {/* Device on its stage: straightens and grows as you scroll in.
                Controls stay exactly as they are on the work cards. */}
            <CaseHeroStage>
              <DeviceFrame project={project} tall eager />
            </CaseHeroStage>

            {/* Actions come after the build — title, device, then what to do about it */}
            <Reveal index={2} className="mt-10 flex flex-col sm:flex-row justify-center gap-3 lg:mt-12">
              <Link href="/#book-call" className="softles-primary-button justify-center whitespace-nowrap !px-5 !py-3 !text-xs md:!text-sm">
                Start a similar project
              </Link>
              <a href="#designs" className="softles-secondary-button justify-center whitespace-nowrap !px-5 !py-3 !text-xs md:!text-sm">
                See every page
              </a>
            </Reveal>
          </div>
        </section>

        {/* Story: a sticky rail carries the facts while the narrative scrolls
            beside it — the pattern Stripe uses on its customer stories, so the
            reading column stays one clean measure instead of a grid of boxes */}
        <section className="w-full py-12 md:py-20 bg-panel border-y border-line">
          <div className="service-page-container">
            <Reveal index={0} className="softles-eyebrow mb-2">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">The story</span>
            </Reveal>
            <Reveal index={1}>
              <WordReveal as="h2" className="service-section-heading text-ink">From brief to launch</WordReveal>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[286px_1fr] lg:gap-16">
              {/* Facts rail — sticks alongside the story on desktop */}
              <Reveal index={2} className="lg:h-full">
                <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-panel to-deep p-6 lg:sticky lg:top-24">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand to-brand-2" />

                  <dl className="flex flex-col gap-5">
                    <div>
                      <dt className="text-[10.5px] font-black uppercase tracking-[0.18em] text-mute/45">Delivered</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.services.map((sv) => (
                          <span key={sv} className="inline-flex items-center rounded-full border border-line bg-panel px-2.5 py-1 text-[11.5px] font-semibold text-ink">{sv}</span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10.5px] font-black uppercase tracking-[0.18em] text-mute/45">Built on</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span key={t} className="inline-flex items-center rounded-full border border-brand/25 bg-brand/5 px-2.5 py-1 text-[11.5px] font-semibold text-brand">{t}</span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <Link href="/#book-call" className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-bold text-brand transition-colors hover:text-brand-2">
                    Start a similar project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                </div>
              </Reveal>

              {/* The narrative: one column, one measure, hairlines between beats */}
              <div>
                <Reveal index={0}>
                  <p className="max-w-[64ch] text-[18px] leading-[1.7] text-ink/90 sm:text-[19px]">
                    {project.overview}
                  </p>
                </Reveal>

                {[
                  { n: "01", label: "The challenge", body: project.challenge },
                  { n: "02", label: "What we did", body: project.solution },
                ].map((b, i) => (
                  <Reveal key={b.n} index={i + 1} className="mt-10 border-t border-line pt-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-black tracking-[0.2em] text-brand">{b.n}</span>
                      <h3 className="text-[12.5px] font-black uppercase tracking-[0.18em] text-ink">{b.label}</h3>
                    </div>
                    <p className="mt-4 max-w-[64ch] text-[16.5px] leading-[1.75] text-mute">{b.body}</p>
                  </Reveal>
                ))}

                {project.highlights && (
                  <Reveal index={3} className="mt-10 border-t border-line pt-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-black tracking-[0.2em] text-brand">03</span>
                      <h3 className="text-[12.5px] font-black uppercase tracking-[0.18em] text-ink">What shipped</h3>
                    </div>
                    <ul className="mt-5 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[15.5px] text-mute">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 6L9 17l-5-5" /></svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Full-page gallery */}
        <section id="designs" className="w-full py-12 md:py-20 bg-page">
          <div className="service-page-container">
            <div className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">The designs</span>
            </div>
            <WordReveal as="h2" className="service-section-heading text-ink mb-8">Page by page</WordReveal>

            <DesignGallery project={project} />
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 md:py-20 bg-panel border-y border-line">
          <Reveal className="service-page-container text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">Want something like this?</h2>
            <p className="text-mute mt-3 max-w-xl mx-auto">
              Tell us what you&apos;re building. We&apos;ll come back with a plan — usually within a day.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#book-call" className="softles-primary-button justify-center">
                Start a similar project
              </Link>
              <Link href="/work" className="softles-secondary-button justify-center">
                See more work
              </Link>
            </div>
          </Reveal>
        </section>

        {/* More work */}
        <section className="w-full py-12 md:py-20 bg-page">
          <div className="service-page-container">
            <Reveal className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">More work</span>
            </Reveal>
            <Reveal index={1}>
              <WordReveal as="h2" className="service-section-heading text-ink mb-8">Other projects</WordReveal>
            </Reveal>
            <Reveal index={2} className="grid sm:grid-cols-3 gap-6">
              {more.map((m) => (
                <Link key={m.slug} href={`/work/${m.slug}`} className="group softles-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-page">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.pages[0].d} alt={m.name} loading="lazy" className="w-full absolute top-0 left-0 transition-transform [transition-duration:1200ms] ease-out group-hover:-translate-y-[40%]" />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{m.category}</span>
                    <h3 className="text-ink font-bold mt-1">{m.name}</h3>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
