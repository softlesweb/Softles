"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import dynamic from "next/dynamic";

const Swiper = dynamic(
    () => import("swiper/react").then((mod) => mod.Swiper),
    { ssr: false }
);

const team = [
  {
    image: "/Shakti_Singh.jpeg",
    name: "Shakti Singh",
    role: "Strategy Lead",
    bio: "Drives vision and strategic clarity, connecting market insight, execution, and leadership to long-term, sustainable business growth.",
    hue: "from-[#DC4242]/80 via-[#DC4242]/40 to-[#191C26]/80",
    quote: "Strong strategy is not about ideas—it's about making the right decisions consistently.",
    tone: "from-[#1F1F27]/80 to-[#0F1118]",
    accent: "#DC4242",
  },
  {
    image: "/Shahad_Hassan.jpeg",
    name: "Shahad Hassan",
    role: "FullStack Developer",
    bio: "Engineers robust, scalable applications with a focus on performance, security, and maintainable architecture across frontend and backend systems.",
    hue: "from-[#00D1A0]/70 via-[#1F4E47]/60 to-[#191C26]/80",
    quote: "Clean architecture today prevents production fires tomorrow.",
    tone: "from-[#17312C]/80 to-[#0F1118]",
    accent: "#00D1A0",
  },
  {
    image: "/neeraj_kumar.png",
    name: "Neeraj Kumar",
    role: "Shopify Developer",
    bio: "Builds and optimizes high-converting Shopify stores with a strong emphasis on performance, scalability, and seamless customer journeys.",
    hue: "from-[#FFC857]/80 via-[#5B4A1F]/60 to-[#191C26]/80",
    quote: "E-commerce success lives at the intersection of speed, clarity, and trust.",
    tone: "from-[#2E2617]/80 to-[#0F1118]",
    accent: "#FFC857",
  },
];

export default function OurTeamSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      setIsMobile(width < 880);
      setIsTablet(width >= 880 && width < 1280);
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  // Mobile: one slide per member
  const mobileSlides = [...team];

  // Tablet: 2 slides (2 + 1)
  const tabletSlideGroups = [
    team.slice(0, 2),
    team.slice(2, 3)
  ];

  // Desktop: all three on one slide
  const desktopSlideGroups = [
    team.slice(0, 3)
  ];

  // Determine which slide groups to use and calculate maxIndex
  const slideGroups = isMobile ? mobileSlides : (isTablet ? tabletSlideGroups : desktopSlideGroups);
  const maxIndex = Math.max(0, slideGroups.length - 1);

  // Helper function to render a team member card
  const renderTeamMemberCard = (member, key) => (
    <article
      key={key}
      className="group relative mx-auto w-full min-h-[380px] max-w-[300px] shrink-0 transition-all duration-500 sm:max-w-xs md:max-w-[360px]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(10,12,18,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.32)] xs:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)] opacity-70" />
        <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${member.hue} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-30`} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative mt-6 flex items-center gap-4">
          <div className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br ${member.tone} p-[2px]`}>
            <div className="h-full w-full overflow-hidden rounded-[18px]">
              {member.image ? (
                <Image src={member.image} alt={member.name} width={96} height={96} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#10131C] text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="text-xl font-semibold text-[#F5F6FA]">
              {member.name}
            </h4>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-[#BCC1CA]">
              {member.role}
            </p>
          </div>
        </div>

        <p className="relative mt-5 text-sm leading-relaxed text-[#D5D8E1]/90">
          {member.bio}
        </p>

        <div className="relative mt-5 rounded-2xl border border-white/10 bg-[#0D1018]/80 p-3">
          <div className="flex items-start gap-2">
            <div className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: member.accent }} />
            <p className="text-sm leading-relaxed text-[#D9DDE7]">
              {member.quote}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#DC4242] via-[#5A6BFF] to-[#00D1A0] transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );

  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-20 border-t border-[#2a2e40] bg-[#191C26]" 
    >
      {/* Background effects */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#DC4242]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#5A6BFF]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D1A0]/05 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1118]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,66,66,0.08),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(90,107,255,0.05),transparent_50%)]" />
      </div> */}

      <div className="service-page-container mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col">
            <div className="flex items-center text-base font-normal text-[#FFFFFF]">
            <Image src={"/Separator.png"} alt="separator"  width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[2px] w-auto mr-[10px]" />
            <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
              Meet the team
            </p>
          </div>
          <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">
            The minds behind your growth
          </span>
          <span className="text-sm sm:text-base text-[#BCC1CA]/80 mt-2 max-w-2xl leading-relaxed">
            A small senior team — strategy, engineering, and Shopify expertise working
            directly with you. No layers, no hand-offs.
          </span>
        </div>
        {/* Carousel */}
        <div className="relative py-10 md:py-0">
          {/* Controls (hidden when everything fits on one slide) */}
          <div className={`mb-5 items-center justify-between ${maxIndex > 0 ? "hidden lg:flex" : "hidden"}`}>
            <div></div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#343844] bg-gradient-to-br from-[#0F1118] to-[#131623] text-[#F5F6FA] transition-all hover:border-[#DC4242] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#343844] bg-gradient-to-br from-[#0F1118] to-[#131623] text-[#F5F6FA] transition-all hover:border-[#DC4242] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            spaceBetween={10}
            slidesPerView={1.1}
            breakpoints={{
              880: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            grabCursor={true}
            modules={[Navigation]}
            className="relative overflow-visible"
          >
            {isMobile ? (
              // Mobile: Individual slides (1 item per slide)
              mobileSlides.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className="flex justify-center items-stretch">
                    {renderTeamMemberCard(member, member.name)}
                  </div>
                </SwiperSlide>
              ))
            ) : (
              // Tablet & Desktop: Grouped slides (multiple items per slide)
              slideGroups.map((group, groupIndex) => (
                <SwiperSlide key={groupIndex}>
                  <div className="flex gap-1 md:gap-6 justify-center items-stretch p-0">
                    {group.map((member) => renderTeamMemberCard(member, member.name))}
            </div>
            </SwiperSlide>
              ))
            )}
          </Swiper>

          {/* Dots Indicator (hidden when there is only one slide) */}
          <div className={`mt-8 justify-center ${maxIndex > 0 ? "flex" : "hidden"}`}>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-8 bg-gradient-to-r from-[#DC4242] to-[#5A6BFF]"
                      : "w-1.5 bg-[#343844] hover:bg-[#5A6BFF]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}