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
  {
    image: "/Manish_Rana.png",
    name: "Manish Rana",
    role: "UX/UI Expert",
    bio: "Shapes intuitive user experiences and scalable design systems that balance aesthetics, usability, and conversion across digital products.",
    hue: "from-[#5A6BFF]/80 via-[#343B6F]/60 to-[#191C26]/80",
    quote: "Good design feels invisible—until it starts driving results.",
    tone: "from-[#202435]/80 to-[#0F1118]",
    accent: "#5A6BFF",
  },
  {
    image: "/Divy.jpg",
    name: "Divyansh Veermanya",
    role: "Product Lead",
    bio: "Owns product vision and execution by translating business goals and user insights into clear roadmaps, priorities, and shipped outcomes.",
    hue: "from-[#6B8CFF]/80 via-[#2E356B]/60 to-[#191C26]/80",
    quote: "Great products are built by aligning teams around the right problems.",
    tone: "from-[#1B2140]/80 to-[#0F1118]",
    accent: "#6B8CFF",
  },
];

const moreMembersCard = {
  isSpecial: true,
  name: "More members",
  count: "+3"
};

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

  // Mobile: 6 slides with 1 item each (individual slides)
  const mobileSlides = [...team, moreMembersCard];

  // Tablet: 3 slides with 2 items each
  const tabletSlideGroups = [
    team.slice(0, 2),
    team.slice(2, 4),
    [...team.slice(4, 5), moreMembersCard]
  ];

  // Desktop: 2 slides with 3 items each (current structure)
  const desktopSlideGroups = [
    team.slice(0, 3),
    [...team.slice(3, 5), moreMembersCard]
  ];

  // Determine which slide groups to use and calculate maxIndex
  const slideGroups = isMobile ? mobileSlides : (isTablet ? tabletSlideGroups : desktopSlideGroups);
  const maxIndex = Math.max(0, slideGroups.length - 1);

  // Helper function to render a team member card
  const renderTeamMemberCard = (member, key) => (
    <article
      key={key}
      className="group relative w-full max-w-[300px] min-h-[350px] sm:max-w-xs md:max-w-[385px] shrink-0 transition-transform duration-500 mx-auto"
    >
      <div className="relative h-full overflow-hidden rounded-md border border-[#242836]/50 bg-gradient-to-br from-[#0F1118]/80 via-[#131623]/60 to-[#0B0C12]/90 p-3 xs:p-6 transition-all duration-500 hover:scale-[1.02] hover:border-[#DC4242]/40 hover:shadow-2xl hover:shadow-[#DC4242]/10">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className={`absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${member.hue} blur-3xl`}
          />
        </div>

        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#DC4242]/30 to-transparent"></div>

        {/* Profile Header */}
        <div className="relative mb-6">
          <div className="flex items-center gap-4 max-w-[280px] sm:max-w-auto">
            {/* Avatar */}
            <div className={`relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br ${member.tone} ring-2 ring-[#242836] ring-offset-2 ring-offset-[#0F1118]`}>
              <div className="absolute inset-0 flex items-center justify-center">
                {
                  member.image ? (
                    <Image src={member.image} alt={member.name} width={80} height={80} className="rounded-2xl object-cover" />
                  ) : (
                    <span className="text-lg font-bold text-[#F5F6FA]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )
                }
              </div>
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at center, ${member.accent}20, transparent 70%)` }}
              />
            </div>

            {/* Name & Role */}
            <div className="flex-1 min-w-0 max-w-[200px] sm:max-w-auto">
              <h4 className="text-xl font-bold text-[#F5F6FA] ">
                {member.name}
              </h4>
              <p className="text-sm font-semibold tracking-tighter md:tracking-widest text-gray-400 uppercase">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="relative mb-6 text-sm leading-relaxed text-[#D5D8E1]/90">
          {member.bio}
        </p>

        {/* Quote */}
        <div className="relative mb-6 overflow-hidden rounded-xl border border-[#242836]/50 bg-gradient-to-br from-[#0F1118] to-[#131623]/50 p-2 md:p-4">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#DC4242] to-[#5A6BFF]"></div>
          <div className="relative pl-1 md:pl-3">
            <svg className="absolute -top-1 left-0 md:-left-1 h-2 md:h-4 w-2 md:w-4 text-[#DC4242]/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm font-medium italic text-[#F5F6FA]/90">
              {member.quote}
            </p>
          </div>
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#DC4242] to-[#5A6BFF] transition-all duration-500 group-hover:w-full"></div>
      </div>
    </article>
  );

  // Helper function to render the special "More members" card
  const renderMoreMembersCard = (member, key) => (
    <article
      key={key}
      className="relative min-w-[200px] min-h-[350px] sm:min-w-xs md:min-w-[285px] shrink-0 transition-transform duration-500"
    >
      <div className="flex min-h-[350px] items-center justify-center rounded-md transition-all cursor-disabled">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#F5F6FA]">
            {member.count}
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#BCC1CA]">
            {member.name}
          </p>
        </div>
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
            A multidisciplinary team blending strategy, design, engineering, and growth.
            We move fast, align to outcomes, and keep collaboration transparent.
          </span>
        </div>
        {/* Carousel */}
        <div className="relative py-10 md:py-0">
          {/* Controls */}
          <div className="mb-5 hidden lg:flex items-center justify-between">
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
              mobileSlides.map((member, index) => (
                <SwiperSlide key={member.isSpecial ? `more-${index}` : member.name}>
                  <div className="flex justify-center items-stretch">
                    {member.isSpecial
                      ? renderMoreMembersCard(member, `more-${index}`)
                      : renderTeamMemberCard(member, member.name)}
                  </div>
                </SwiperSlide>
              ))
            ) : (
              // Tablet & Desktop: Grouped slides (multiple items per slide)
              slideGroups.map((group, groupIndex) => (
                <SwiperSlide key={groupIndex}>
                  <div className="flex gap-1 md:gap-6 justify-center items-stretch p-0">
                    {group.map((member, idx) =>
                      member.isSpecial
                        ? renderMoreMembersCard(member, `more-${groupIndex}-${idx}`)
                        : renderTeamMemberCard(member, member.name)
                    )}
            </div>
            </SwiperSlide>
              ))
            )}
          </Swiper>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center">
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