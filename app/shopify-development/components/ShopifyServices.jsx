"use client";

import { RiBrushLine, RiPlug2Line } from "react-icons/ri";
import { FiLink2 } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import { Check } from "lucide-react";

export default function ShopifyServices() {
  const services = [
    {
      icon: <RiBrushLine className="w-5 h-5 text-[#DC4242]" />,
      title: "Theme Design & Redesign",
      desc: "Conversion-focused, custom Shopify themes built for brand impact, speed, and seamless mobile performance.",
      featured: true,
      bullets: [
        "Custom Theme Development",
        "Shopify 2.0 Sections",
        "Pixel-perfect UX/UI",
        "Mobile Optimization",
      ],
    },
    {
      icon: <SiNextdotjs className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Headless Shopify Development",
      desc: "Decoupled storefronts with Next.js and Hydrogen for faster performance and total flexibility.",
      featured: false,
      bullets: [
        "Hydrogen & Headless",
        "Next.js Commerce",
        "API-first Architecture",
        "PWA Experiences",
      ],
    },
    {
      icon: <RiPlug2Line className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Shopify App Development",
      desc: "Custom apps built to extend Shopify with workflow automation, storefront integrations, and business logic.",
      featured: false,
      bullets: [
        "Embedded Apps",
        "Private App Builds",
        "Store Automation",
        "API Integrations",
      ],
    },
    {
      icon: <FiLink2 className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />,
      title: "Integrations & Automation",
      desc: "Connect Shopify to your CRM, email platform, and business systems so your store runs like clockwork.",
      featured: false,
      bullets: [
        "Klaviyo & Mailchimp",
        "CRM Sync",
        "Zapier Workflows",
        "Order Automation",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#2a2e40] bg-[#0D0F12]" id="services">
      <div className="service-page-container">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#181B23] border border-[#2a2e40] mb-4">
            {/* font-mono removed, standard typography implemented */}
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#BCC1CA]/80">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Shopify Development Services
          </h2>
          <p className="text-[#BCC1CA]/80 text-sm sm:text-base leading-relaxed">
            End-to-end Shopify solutions — from brand-new stores and Shopify Plus builds to headless architectures and full ecosystem automation.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              // Hover effects ko sabhi cards ke liye perfectly identical aur uniform kar diya hai
              className={`group relative rounded-xl p-6 flex flex-col justify-between border transition-all duration-300 bg-[#14161F] border-[#2a2e40]/70 hover:border-[#DC4242]/50 hover:shadow-[0_12px_30px_rgba(220,66,66,0.06)] ${
                service.featured ? "shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" : ""
              }`}
            >
              <div>
                {/* Header Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      service.featured
                        ? "bg-[#DC4242]/10 border border-[#DC4242]/30"
                        : "bg-[#0D0F12] border border-[#2a2e40] group-hover:bg-[#DC4242]/10 group-hover:border-[#DC4242]/30"
                    }`}
                  >
                    {service.icon}
                  </div>
                  
                  {service.featured && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#DC4242]/10 border border-[#DC4242]/30 text-[#DC4242]">
                      Core Expert
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-white tracking-tight mb-2.5 group-hover:text-[#DC4242] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#BCC1CA]/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Functional Tech Features */}
              <div className="pt-4 border-t border-[#2a2e40]/40">
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      // Removed font-mono for unified brand style look
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#BCC1CA]/80 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 shrink-0 text-[#DC4242]" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}