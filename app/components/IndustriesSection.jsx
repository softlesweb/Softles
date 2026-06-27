"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import caseStudy1 from "@/public/case_study_1.png";
import caseStudy2 from "@/public/case_study_2.png";
import caseStudy3 from "@/public/case_study_3.png";
import caseStudy4 from "@/public/case_study_4.png";
import caseStudy5 from "@/public/case_study_5.png";

const industries = [
  {
    key: "Travel",
    label: "Travel",
    image: caseStudy1,
    description: "Empowering travel businesses with seamless booking, itinerary management, and customer engagement solutions.",
    color: "#FF6B6B"
  },
  {
    key: "Agritech",
    label: "Agritech",
    image: caseStudy2,
    description: "Innovative digital solutions for agriculture to optimize operations and maximize impact.",
    color: "#4CAF50"
  },
  {
    key: "Oil & Gas",
    label: "Oil & Gas",
    image: caseStudy3,
    description: "Digital transformation for oil & gas sector, improving efficiency and safety.",
    color: "#FF9800"
  },
  {
    key: "NGO",
    label: "NGO",
    image: caseStudy4,
    description: "Empowering NGOs with technology for greater social impact.",
    color: "#9C27B0"
  },
  {
    key: "Education",
    label: "Education",
    image: caseStudy5,
    description: "Transforming education with e-learning platforms, student management, and interactive content delivery.",
    color: "#2196F3"
  }
];

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [touchStartX, setTouchStartX] = useState(0);
  const containerRef = useRef(null);

  // Calculate max index based on visibleCount
  const maxIndex = Math.max(0, industries.length - visibleCount);

  // Responsive card count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // 1 card on mobile
      } else {
        setVisibleCount(2); // 2 cards on desktop
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe 
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <motion.section
      ref={containerRef}
      id="industries"
      className="w-full pt-5 pb-20 md:pt-10 md:pb-28 px-0 bg-[#191C26] bg-grid-white text-white flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="service-page-container mx-auto w-full">
        <motion.div
          className="flex flex-col mb-8 md:mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center text-base font-medium tracking-wide"
            variants={itemVariants}
          >
            <Image
              src={"/Separator.png"}
              className="mr-3"
              alt="separator"
              width={24}
              height={4}
            />
            <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
              Industries we serve
            </p>
          </motion.div>

          <motion.h2
            className="mt-2 mb-2 lg:mb-0 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight"
            variants={itemVariants}
          >
            We are more than our words
          </motion.h2>

          <motion.p
            className="text-base text-[#BCC1CA]/80 mt-2 max-w-2xl"
            variants={itemVariants}
          >
            We empower businesses across diverse industries with tailored digital solutions. Explore our expertise below.
          </motion.p>
        </motion.div>

        <div
          className="relative w-full service-page-container mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop Navigation Arrows - Hidden on mobile */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="hidden md:flex absolute top-1/2 -left-10 lg:-left-12 z-20 bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-xl transition-all"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 22l-8-8 8-8"/>
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={handleNext}
            className="hidden md:flex absolute top-1/2 -right-10 lg:-right-12 z-20 bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-xl transition-all"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 6l8 8-8 8"/>
            </svg>
          </button>

          {/* Industry Cards */}
          <div className="overflow-hidden relative w-full">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                className="flex w-full gap-6 md:gap-8 justify-center"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {industries.slice(currentIndex, currentIndex + visibleCount).map((industry, idx) => (
                  <motion.div
                    key={`${industry.key}-${idx}`}
                    className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-white/10 w-full max-w-xl flex flex-col"
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Image with gradient overlay */}
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.label}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#23263a] to-transparent opacity-90"></div>

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm bg-black/30 border border-white/20"
                          style={{ backgroundColor: `${industry.color}20` }}
                        >
                          <Image
                            src={industry.icon}
                            alt={industry.label}
                            width={32}
                            height={32}
                            className="filter brightness-125"
                          />
                        </div>
                      </div>

                      {/* Floating title */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#DC4242] transition-colors duration-200">
                          {industry.label}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex flex-col flex-grow">
                      <div className="flex-grow mb-4">
                        <p className="text-base md:text-lg text-[#BCC1CA]">
                          {industry.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <button className="text-[#DC4242] font-medium flex items-center group-hover:text-white transition-colors">
                          Learn more
                          <svg
                            className="ml-2 transition-transform group-hover:translate-x-1"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Accent bar */}
                    <div
                      className="w-full h-1.5"
                      style={{ background: industry.color }}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Single set of mobile navigation arrows */}
          <div className="flex justify-center mt-8 space-x-4 md:hidden">
            <button
              aria-label="Previous"
              onClick={handlePrev}
              className="bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-lg transition-all"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 22l-8-8 8-8"/>
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={handleNext}
              className="bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-lg transition-all"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 6l8 8-8 8"/>
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-10 space-x-2">
            {Array.from({ length: industries.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-[#DC4242] w-8'
                    : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}