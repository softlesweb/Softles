"use client";

import { FiZap, FiLock, FiTrendingUp, FiEdit2 } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";

export default function ShopifyTrust() {
  const advantages = [
    {
      icon: <FiZap className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Fast & Reliable Infrastructure",
      desc: "Shopify's global CDN and enterprise-ready uptime keep your store fast and available during every launch and sale.",
    },
    {
      icon: <FiLock className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Secure Payment Ecosystem",
      desc: "PCI-compliant checkout, Shop Pay optimization, and secure payments so customers can buy with confidence.",
    },
    {
      icon: <FiTrendingUp className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Scalable Commerce Platform",
      desc: "Grow from a single storefront to Shopify Plus, multi-country stores, and headless commerce without a rewrite.",
    },
    {
      icon: <FiEdit2 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Easy Store Management",
      desc: "A polished admin experience and smart workflows make product, order, and campaign management simple.",
    },
  ];

  return (
    <section className="softles-section-secondary" id="why-shopify">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="softles-eyebrow justify-center mb-2">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Platform Advantages
            </span>
          </div>
          <h2 className="service-section-heading text-[#FFFFFF]">
            Why Leading Brands Choose Shopify
          </h2>
          <p className="softles-section-copy mx-auto">
            Shopify powers over 4.6 million stores worldwide. It&apos;s the platform built to convert browsers into buyers — and to scale without friction.
          </p>

          {/* Partner framing — we build with Shopify, as partners, not resellers */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#95BF47]/30 bg-[#95BF47]/[0.07] px-5 py-2.5">
              <FaShopify className="w-5 h-5 text-[#95BF47] shrink-0" />
              <span className="text-sm text-[#C7CCD6]">
                <span className="font-bold text-white">SoftLes × Shopify</span> — we work as a Shopify partner agency, building on the platform every day.
              </span>
            </div>
          </div>
        </div>

        {/* Unified Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              // Consistent with pichla section: No scaling, no rotations, unified hover response
              className="
                group 
                relative 
                softles-card 
                p-6 
                flex 
                flex-col 
              "
            >
              {/* Minimal Clean Icon Container */}
              <div
                className="
                  w-10 h-10 
                  rounded-lg 
                  flex 
                  items-center 
                  justify-center 
                  mb-5 
                  bg-[#0E1219] 
                  border 
                  border-[#2E3446] 
                  group-hover:bg-[#FF4D57]/10 
                  group-hover:border-[#FF4D57]/30 
                  transition-all 
                  duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title with matching transitions */}
              <h3 className="font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#FF4D57] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#C7CCD6] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
