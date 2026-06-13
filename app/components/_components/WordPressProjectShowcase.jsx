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
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#12131c] via-[#1a1e2a] to-[#23263a] p-8 text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[rgba(220,66,66,0.4)] bg-[rgba(220,66,66,0.1)] flex items-center justify-center text-2xl sm:text-3xl mb-3">
        {project.placeholderIcon || "▶️"}
      </div>
      <p className="text-[#FFFFFF] font-bold text-lg sm:text-xl">{project.title}</p>
    </div>
  );
}

function ProjectSlide({ project, isActive }) {
  return (
    <article
      className={`bg-[#181B23] border rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive ? "border-[rgba(220,66,66,0.4)] shadow-[0_20px_60px_rgba(0,0,0,0.3)]" : "border-[#2a2e40]"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[320px] bg-[#12131c] border-b md:border-b-0 md:border-r border-[#2a2e40]">
          <ProjectImage project={project} />
          <div className="absolute top-4 left-4 z-[2]">
            <span className="inline-flex rounded-full border border-white/10 bg-[#191C26]/85 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5F6FA]">
              {project.industry}
            </span>
          </div>
          {project.badge && (
            <div className="absolute top-4 right-4 z-[2]">
              <span className="inline-flex rounded-full bg-[rgba(220,66,66,0.15)] border border-[rgba(220,66,66,0.3)] px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#DC4242]">
                {project.badge}
              </span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-2">{project.title}</h3>
          <p className="text-[#BCC1CA]/80 text-sm leading-relaxed mb-4">{project.summary}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.2)] rounded-full text-[10px] sm:text-xs text-[#DC4242] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.note && (
            <p className="text-[#BCC1CA]/60 text-xs leading-relaxed mb-4 border-l-2 border-[#DC4242]/40 pl-3">
              {project.note}
            </p>
          )}

          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-[#DC4242] text-white font-bold rounded-full hover:bg-[#ff4d50] transition-all text-sm"
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
      <div className="flex items-center justify-between mb-5 sm:mb-6 gap-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#BCC1CA]">
          <span className="font-semibold text-[#FFFFFF]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#343844] bg-[#131623] text-[#F5F6FA] hover:border-[#DC4242] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#343844] bg-[#131623] text-[#F5F6FA] hover:border-[#DC4242] transition-all"
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
                ? "bg-[#DC4242] border-[#DC4242] text-white"
                : "bg-transparent border-[#2a2e40] text-[#BCC1CA] hover:border-[#DC4242]/50"
            }`}
          >
            {project.shortName || project.title}
          </button>
        ))}
      </div>
    </div>
  );
}
