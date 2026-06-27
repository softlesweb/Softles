"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function ProjectCard({ project, isActive }) {
  return (
    <article
      className={`project-card h-full bg-[#181B23] border rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
        isActive
          ? "border-[rgba(220,66,66,0.45)] shadow-[0_20px_60px_rgba(220,66,66,0.12)]"
          : "border-[#2a2e40]"
      }`}
    >
      <div className="w-full h-28 sm:h-32 bg-gradient-to-br from-[#12131c] to-[#1a1e2a] border border-[#2a2e40] rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,66,66,0.12),transparent_70%)]" />
        <span className="relative z-10">{project.thumb}</span>
      </div>

      <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#DC4242] mb-2 sm:mb-3">
        {project.industry}
      </span>

      <h3 className="text-[#FFFFFF] font-semibold text-base sm:text-lg mb-2 sm:mb-3">
        {project.title}
      </h3>

      <p className="text-[#BCC1CA]/70 text-sm leading-relaxed mb-4">
        {project.challenge}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block px-2.5 sm:px-3 py-1 bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.2)] rounded-full text-[10px] sm:text-xs text-[#DC4242] font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-[#2a2e40] bg-[#12131c]/60 p-3 sm:p-4">
        <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed">
          <strong className="text-[#FFFFFF]">Result:</strong> {project.result}
        </p>
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 sm:mt-5 text-sm font-semibold text-[#DC4242] hover:text-[#ff4d50] transition-colors"
        >
          Visit live store
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      )}
    </article>
  );
}

export default function ProjectsSlider({ projects }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const goToSlide = (index) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (typeof swiper.slideTo === "function") {
      swiper.slideTo(index);
    }
  };

  const goPrev = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (typeof swiper.slidePrev === "function") {
      swiper.slidePrev();
    }
  };

  const goNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (typeof swiper.slideNext === "function") {
      swiper.slideNext();
    }
  };

  if (!isReady) {
    return (
      <div className="relative">
        <ProjectCard project={projects[0]} isActive />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#BCC1CA]">
          <span className="font-semibold text-[#FFFFFF]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous project"
            onClick={goPrev}
            className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#343844] bg-gradient-to-br from-[#0F1118] to-[#131623] text-[#F5F6FA] transition-all hover:border-[#DC4242] hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={goNext}
            className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#343844] bg-gradient-to-br from-[#0F1118] to-[#131623] text-[#F5F6FA] transition-all hover:border-[#DC4242] hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          speed={500}
          rewind
          watchOverflow
          observer
          observeParents
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              spaceBetween: 24,
            },
            1024: {
              spaceBetween: 28,
            },
          }}
          grabCursor
          className="projects-swiper w-full !overflow-hidden"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.title} className="!h-auto">
              <ProjectCard project={project} isActive={idx === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-8 bg-gradient-to-r from-[#DC4242] to-[#5A6BFF]"
                  : "w-1.5 bg-[#343844] hover:bg-[#5A6BFF]/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
