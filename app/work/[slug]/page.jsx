import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import DeviceFrame from "../../components/_components/DeviceFrame";
import { projects, getProject } from "../projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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

function BrowserFrame({ src, alt, host }) {
  return (
    <div className="rounded-xl border border-[#2E3446] overflow-hidden bg-[#0b0d12] shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0F131A] border-b border-[#2E3446]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        {host && (
          <span className="ml-3 flex-1 truncate rounded-md bg-[#161C27] border border-[#2E3446] px-3 py-1 text-[11px] text-[#8A92A6]">
            {host}
          </span>
        )}
      </div>
      <div className="max-h-[560px] overflow-y-auto ws-scrollpanel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="w-full block" />
      </div>
    </div>
  );
}

export default function WorkDetail({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <main className="bg-[#0E1219] overflow-x-hidden sm:pt-[60px]">
        <section className="softles-section-primary">
          <div className="service-page-container">
            {/* Back */}
            <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[#C7CCD6] hover:text-[#FF4D57] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All work
            </Link>

            {/* Header */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#FF4D57]/10 border border-[#FF4D57]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF4D57]">
                {project.category}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#C7CCD6]/50 font-semibold">
                {project.stack} · {project.year}
              </span>
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.name}
            </h1>
            <p className="mt-4 text-[#C7CCD6] text-base sm:text-lg leading-relaxed max-w-2xl">
              {project.summary}
            </p>

            {/* Interactive device showcase */}
            <div className="mt-10">
              <DeviceFrame project={project} />
            </div>
          </div>
        </section>

        {/* Story + sidebar */}
        <section className="w-full py-12 md:py-16 bg-[#161C27] border-y border-[#2E3446]">
          <div className="service-page-container grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Overview</h2>
                <p className="text-[#C7CCD6] leading-relaxed">{project.overview}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">The challenge</h2>
                <p className="text-[#C7CCD6] leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">What we did</h2>
                <p className="text-[#C7CCD6] leading-relaxed">{project.solution}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[#C7CCD6] text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-[#2E3446] bg-[#0E1219] px-3 py-3 text-center">
                      <div className="text-lg font-black text-white">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#C7CCD6]/60 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="softles-card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#C7CCD6]/60 mb-3">Services</h3>
                <ul className="flex flex-col gap-2">
                  {project.services.map((s) => (
                    <li key={s} className="text-white text-sm">{s}</li>
                  ))}
                </ul>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#C7CCD6]/60 mt-5 mb-3">Stack &amp; tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="inline-block px-2.5 py-1 bg-[#FF4D57]/5 border border-[#FF4D57]/20 rounded text-[11px] text-[#FF4D57] font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Full-page gallery */}
        <section className="w-full py-12 md:py-20 bg-[#0E1219]">
          <div className="service-page-container">
            <div className="softles-eyebrow mb-3">
              <span className="softles-eyebrow-line" />
              <span className="softles-eyebrow-text">The designs</span>
            </div>
            <h2 className="service-section-heading text-white mb-8">Page by page</h2>

            <div className="flex flex-col gap-12">
              {project.pages.map((pg) => (
                <figure key={pg.label} className="flex flex-col gap-3">
                  <figcaption className="text-sm font-bold uppercase tracking-wider text-[#C7CCD6]/60">{pg.label}</figcaption>
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                    <BrowserFrame src={pg.d} alt={`${project.name} — ${pg.label} (desktop)`} host={project.name.toLowerCase().replace(/\s+/g, "")} />
                    <div className="hidden lg:block w-[190px] justify-self-center">
                      <div className="rounded-[1.6rem] border-[6px] border-[#0b0d12] bg-[#0b0d12] overflow-hidden shadow-2xl">
                        <div className="max-h-[460px] overflow-y-auto">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={pg.m} alt={`${project.name} — ${pg.label} (mobile)`} loading="lazy" className="w-full block" />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 md:py-20 bg-[#161C27] border-y border-[#2E3446]">
          <div className="service-page-container text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Want something like this?</h2>
            <p className="text-[#C7CCD6] mt-3 max-w-xl mx-auto">
              Tell us what you&apos;re building. We&apos;ll come back with a plan — usually within a day.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#book-call" className="softles-primary-button justify-center">
                Start a similar project
              </Link>
              <Link href="/#work" className="softles-secondary-button justify-center">
                See more work
              </Link>
            </div>
          </div>
        </section>

        {/* More work */}
        <section className="w-full py-12 md:py-16 bg-[#0E1219]">
          <div className="service-page-container">
            <h2 className="text-lg font-bold text-white mb-6">More projects</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {more.map((m) => (
                <Link key={m.slug} href={`/work/${m.slug}`} className="group softles-card overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1219]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.pages[0].d} alt={m.name} loading="lazy" className="w-full absolute top-0 left-0 transition-transform duration-[1200ms] ease-out group-hover:-translate-y-[40%]" />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D57]">{m.category}</span>
                    <h3 className="text-white font-bold mt-1">{m.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
