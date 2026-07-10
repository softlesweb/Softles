"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} website`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#161C27] via-[#1a1e2a] to-[#23263a] p-8 text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[rgba(255,77,87,0.4)] bg-[rgba(255,77,87,0.1)] flex items-center justify-center text-2xl sm:text-3xl mb-3">
        {project.placeholderIcon || "▶️"}
      </div>
      <p className="text-[#FFFFFF] font-bold text-lg sm:text-xl">{project.title}</p>
    </div>
  );
}

function ProjectSlide({ project, isActive }) {
  return (
    <article
      className={`bg-gradient-to-br from-[#23263a] to-[#181B23] border rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive ? "border-[rgba(255,77,87,0.4)] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" : "border-[#2E3446]"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[320px] bg-[#161C27] border-b md:border-b-0 md:border-r border-[#2E3446]">
          <ProjectImage project={project} />
          <div className="absolute top-4 left-4 z-[2]">
            <span className="inline-flex rounded-full border border-white/10 bg-[#0E1219]/85 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5F6FA]">
              {project.industry}
            </span>
          </div>
          {project.badge && (
            <div className="absolute top-4 right-4 z-[2]">
              <span className="inline-flex rounded-full bg-[rgba(255,77,87,0.15)] border border-[rgba(255,77,87,0.3)] px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#FF4D57]">
                {project.badge}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4D57] mb-2">
            Featured Project
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-2">{project.title}</h3>
          <p className="text-[#C7CCD6]/80 text-sm leading-relaxed mb-4">{project.summary}</p>

          {project.content && (
            <p className="text-[#C7CCD6]/70 text-sm leading-relaxed mb-4 border-l-2 border-[#FF4D57]/40 pl-3">
              {project.content}
            </p>
          )}

          {project.results && project.results.length > 0 && (
            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C7CCD6]/60 mb-2">
                Key Outcomes
              </p>
              <div className="flex flex-wrap gap-2">
                {project.results.map((result) => (
                  <span
                    key={result}
                    className="rounded-full border border-[#2E3446] bg-[#0E1219]/80 px-2.5 py-1 text-[11px] font-medium text-[#F5F6FA]"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[rgba(255,77,87,0.1)] border border-[rgba(255,77,87,0.2)] rounded-full text-[10px] sm:text-xs text-[#FF4D57] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.note && (
            <p className="text-[#C7CCD6]/60 text-xs leading-relaxed mb-4 border-l-2 border-[#FF4D57]/40 pl-3">
              {project.note}
            </p>
          )}

          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="softles-primary-button w-full sm:w-auto"
            >
              {project.linkLabel || "Visit live website"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function WordPressProjectShowcase({ projects }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <ProjectSlide project={projects[0]} isActive />;
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C7CCD6]">
          <span className="font-semibold text-[#FFFFFF]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
          <span className="hidden sm:inline">projects</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#343844] bg-[#0E1219] text-[#F5F6FA] hover:border-[#FF4D57] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#343844] bg-[#0E1219] text-[#F5F6FA] hover:border-[#FF4D57] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        rewind
        observer
        observeParents
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        grabCursor
        className="w-full !overflow-hidden"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={project.title} className="!h-auto">
            <ProjectSlide project={project} isActive={idx === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => swiperRef.current?.slideTo(i)}
            className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold transition-all border ${
              i === activeIndex
                ? "bg-[#FF4D57] border-[#FF4D57] text-white"
                : "bg-transparent border-[#2E3446] text-[#C7CCD6] hover:border-[#FF4D57]/50"
            }`}
          >
            {project.shortName || project.title}
          </button>
        ))}
      </div>
    </div>
  );
}
