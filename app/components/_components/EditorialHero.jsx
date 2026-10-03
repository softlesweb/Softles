"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WordPressArt from "./hero-art/WordPressArt";
import ShopifyArt from "./hero-art/ShopifyArt";
import DesignArt from "./hero-art/DesignArt";
import IntegrationsArt from "./hero-art/IntegrationsArt";

// Each page gets its own scene rather than one illustration with a swapped
// logo — the artwork should say what the page is about on its own.
const HERO_ART = {
  wordpress: WordPressArt,
  shopify: ShopifyArt,
  design: DesignArt,
  integrations: IntegrationsArt,
};

// Spotlight-editorial hero shared by every service page: left — reveal copy
// with a looping gradient-fill word; right — the page's own scene.
export default function EditorialHero({
  eyebrow,
  thin,
  name,
  mid = "that",
  fillWord,
  sub,
  projectsLabel,
  variant = "wordpress",
  // Longer headlines need their own break after the light opening phrase,
  // otherwise the first line reflows and leaves an orphan word behind.
  breakAfterThin = false,
}) {
  const Art = HERO_ART[variant] || WordPressArt;

  return (
    <section className="eh relative w-full overflow-hidden bg-[#0A0D13] flex items-center min-h-screen lg:min-h-[92vh] pt-28 pb-16 lg:pt-20 lg:pb-0">
      {/* swinging spotlight cone + indigo corner glow + film grain */}
      <div aria-hidden="true" className="eh-spot" />
      <div aria-hidden="true" className="eh-spot2" />
      <div
        aria-hidden="true"
        className="eh-noise"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.6\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="service-page-container relative z-[2] w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Left: copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="eh-r eh-r1 flex items-center gap-3 text-[#8b93a5] text-xs tracking-[0.28em] uppercase">
              <span aria-hidden="true" className="w-11 h-px bg-[#FF4D57]" />
              {eyebrow}
            </div>

            <h1 className="eh-r eh-r2 mt-6 font-bold text-4xl sm:text-6xl lg:text-[44px] xl:text-[52px] leading-[1.08] tracking-[-0.035em] text-white">
              <span className="font-light text-[#aab0be]">{thin}</span>
              {breakAfterThin ? <br /> : " "}
              <span className="whitespace-nowrap">{name}</span>
              <br />
              {mid}{" "}
              <span className="eh-fillw">
                {fillWord}
                <i aria-hidden="true">{fillWord}</i>
              </span>
            </h1>

            <p className="eh-r eh-r3 mt-6 text-[#8f97a8] text-base leading-[1.75] max-w-md">
              {sub}
            </p>

            <div className="eh-r eh-r4 mt-9 flex flex-col sm:flex-row items-center gap-6">
              <Link href="/#book-call" className="eh-btn softles-primary-button relative overflow-hidden !text-xs md:!text-sm whitespace-nowrap group">
                <span>Book free discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
              <a
                href="#projects"
                className="text-[#C7CCD6] text-sm font-semibold border-b border-[#2E3446] pb-1 transition-colors duration-300 hover:text-white hover:border-[#FF4D57]"
              >
                {projectsLabel}
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="eh-rail w-full max-w-[440px] lg:max-w-[450px] xl:max-w-[520px] shrink-0 mx-auto lg:mx-0">
            <Art />
          </div>
        </div>
      </div>

      <style jsx>{`
        .eh-spot {
          position: absolute;
          top: -42vh;
          left: -12vw;
          width: 90vw;
          height: 150vh;
          pointer-events: none;
          background: conic-gradient(
            from 100deg at 50% 0%,
            transparent 42%,
            rgba(255, 255, 255, 0.09) 49%,
            rgba(255, 77, 87, 0.1) 52%,
            rgba(255, 255, 255, 0.07) 55%,
            transparent 62%
          );
          filter: blur(28px);
          transform-origin: 50% 0;
          animation: ehSwing 11s ease-in-out infinite;
        }
        @keyframes ehSwing {
          0%, 100% { transform: rotate(-4deg); opacity: 0.85; }
          50% { transform: rotate(5deg); opacity: 1; }
        }
        .eh-spot2 {
          position: absolute;
          bottom: -30vh;
          right: -16vw;
          width: 60vw;
          height: 60vh;
          background: radial-gradient(closest-side, rgba(109, 94, 246, 0.1), transparent);
          filter: blur(40px);
          pointer-events: none;
        }
        .eh-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
        }

        .eh-r {
          opacity: 0;
          transform: translateY(26px);
          animation: ehUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .eh-r1 { animation-delay: 0.05s; }
        .eh-r2 { animation-delay: 0.22s; }
        .eh-r3 { animation-delay: 0.42s; }
        .eh-r4 { animation-delay: 0.6s; }
        @keyframes ehUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .eh-fillw {
          position: relative;
          display: inline-block;
          -webkit-text-stroke: 1.5px #ff4d57;
          color: transparent;
        }
        .eh-fillw i {
          position: absolute;
          inset: 0;
          font-style: normal;
          -webkit-text-stroke: 0;
          background: linear-gradient(90deg, #ff4d57, #ff6a3d);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          clip-path: inset(0 100% 0 0);
          animation: ehFill 4.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes ehFill {
          0%, 12% { clip-path: inset(0 100% 0 0); }
          45%, 68% { clip-path: inset(0 0 0 0); }
          94%, 100% { clip-path: inset(0 100% 0 0); }
        }

        .eh-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.35) 50%, transparent 80%);
          transform: translateX(-120%);
          animation: ehShine 3.8s ease-in-out infinite 1.6s;
        }
        @keyframes ehShine {
          0% { transform: translateX(-120%); }
          45%, 100% { transform: translateX(130%); }
        }

        .eh-rail {
          opacity: 0;
          animation: ehIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }
        @keyframes ehIn {
          to { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .eh-spot, .eh-fillw i, .eh-btn::after { animation: none !important; }
          .eh-r, .eh-rail { animation: none !important; opacity: 1; transform: none; }
          .eh-fillw i { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </section>
  );
}
