"use client";

import WordReveal from "./_components/WordReveal";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { enter } from "./_components/motion-presets";
import DragRail from "./_components/DragRail";

// Order: full-time trio spread out between the wider team, not bunched together.
const team = [
  { name: "Shakti Singh", role: "Strategy Lead", image: "/shakti_singh-cutout.png", cutout: true, hoverImage: "/shakti-hover.webp", linkedin: "https://www.linkedin.com/in/gurjarshakti/" },
  { name: "Tanmay Sharma", role: "SaaS Sales Professional", image: "/tanmay_sharma-cutout.png", cutout: true, linkedin: "https://www.linkedin.com/in/tanmaybummlers/" },
  { name: "Neeraj Kumar", role: "Shopify Developer", image: "/neeraj_kumar-cutout.png", cutout: true, hoverImage: "/neeraj-hover.webp", linkedin: "https://www.linkedin.com/in/neerajkumar94/" },
  { name: "Divyansh Chaudhary", role: "Product Lead", image: "/divyansh_chaudhary-cutout.png", cutout: true, linkedin: "https://www.linkedin.com/in/divyansh-chaudhary-887744119/" },
  { name: "Shahad Hassan", role: "Full-Stack Developer", image: "/shahad_hassan-cutout.png", cutout: true, hoverImage: "/shahad-hover.webp", linkedin: "https://www.linkedin.com/in/shahad-hassan-82287a220/" },
  { name: "Manish Rana", role: "UI/UX Designer", image: "/manish_rana-cutout.png", cutout: true, linkedin: "https://www.linkedin.com/in/mymkrana/" },
  { name: "Sparsh Yadav", role: "Senior Product Designer", image: "/sparsh_yadav-cutout.png", cutout: true, linkedin: "https://www.linkedin.com/in/sparsh-yadav-8a794714a/" },
];

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function MemberCard({ member, lit, innerRef }) {
  // `lit` is the rail's own spotlight: whichever card is passing the middle gets
  // a warmer frame and body. The portrait swap and the red backdrop behind it
  // stay on hover alone.
  return (
    <article
      ref={innerRef}
      className={`group softles-card overflow-hidden w-[220px] sm:w-[240px] shrink-0 ${
        lit ? "border-brand/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_44px_rgba(255,77,87,0.18)] -translate-y-0.5" : ""
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-raise to-deep">
        {member.image ? (
          <>
            {/* Single-portrait members have a cut-out photo, so on hover the
                same brand backdrop rises behind them — the person stays put,
                only the world behind them changes. */}
            {member.cutout && !member.hoverImage && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,#FF6A3D_0%,#FF4D57_38%,#5A1F2A_78%,#2A1519_100%)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] [transition:clip-path_600ms_cubic-bezier(0.65,0,0.35,1)] [transform:translateZ(0)] will-change-[clip-path]"
              />
            )}
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="240px"
              draggable={false}
              className="object-cover object-top [transform:translateZ(0)]"
            />
            {member.hoverImage && (
              <>
                {/* The hover portrait is a cut-out, so the backdrop behind it is
                    ours to change: a brand gradient rises with it in the same
                    wipe, covering the studio-dark base photo underneath. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,#FF6A3D_0%,#FF4D57_38%,#5A1F2A_78%,#2A1519_100%)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] [transition:clip-path_600ms_cubic-bezier(0.65,0,0.35,1)] [transform:translateZ(0)] will-change-[clip-path]"
                />
                <Image
                  src={member.hoverImage}
                  alt={member.name}
                  fill
                  sizes="240px"
                  loading="eager"
                  draggable={false}
                  className="object-cover object-top [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] [transition:clip-path_600ms_cubic-bezier(0.65,0,0.35,1)] [transform:translateZ(0)] will-change-[clip-path]"
                />
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/12 border border-brand/30 text-2xl font-bold text-brand">
              {initials(member.name)}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-deep/80 to-transparent transition-colors duration-500 group-hover:from-[#2A1519]/85" />
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            draggable={false}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-page/80 border border-line text-mute backdrop-blur-md transition-all hover:bg-brand hover:border-brand hover:text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.9h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.43 3.01 5.43 6.93V22h-4.52v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.74V8z" />
            </svg>
          </a>
        )}
      </div>
      {/* The card body warms with it: a red tint, a hairline that lights up on
          the seam, and the role brightens to match. */}
      <div className={`relative p-4 text-center transition-colors duration-500 group-hover:bg-brand/10 ${lit ? "bg-brand/10" : ""}`}>
        <span
          aria-hidden="true"
          className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent transition-opacity duration-500 group-hover:opacity-100 ${lit ? "opacity-100" : "opacity-0"}`}
        />
        <h3 className="text-sm sm:text-base font-bold text-ink leading-tight">{member.name}</h3>
        <p className={`text-xs sm:text-sm mt-1 transition-colors duration-500 group-hover:text-brand-soft ${lit ? "text-brand-soft" : "text-mute/80"}`}>{member.role}</p>
      </div>
    </article>
  );
}

export default function OurTeamSection() {
  // The rail scrolls on its own, so nothing fires scroll events: sample the card
  // positions on a slow timer and light whichever one is crossing the middle.
  // 8Hz is plenty — the highlight itself eases over 500ms.
  const railRef = useRef(null);
  const cardsRef = useRef([]);
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const tick = () => {
      if (document.hidden) return;
      const box = rail.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      let best = -1;
      let bestDist = Infinity;
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.right < box.left || r.left > box.right) return;
        const d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setLit((prev) => (prev === best ? prev : best));
    };
    tick();
    const id = setInterval(tick, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="softles-section-primary overflow-hidden">
      <div className="service-page-container">
        <motion.div {...enter(0)} className="softles-eyebrow mb-2">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Our team</span>
        </motion.div>
        <WordReveal as="h2" className="service-section-heading text-ink">The people behind SoftLes</WordReveal>
        <motion.p {...enter(2)} className="softles-section-copy">
          A small senior team you work with directly — no account managers, no hand-offs.
        </motion.p>
      </div>

      {/* Auto-scrolling team rail (pauses on hover) — constrained to the page container */}
      <div className="service-page-container">
      <motion.div {...enter(3)} className="mt-10 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-page before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-page after:to-transparent after:z-10">
        <div ref={railRef}>
          <DragRail className="py-1">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-5 pr-5 shrink-0" aria-hidden={dup === 1}>
                {team.map((member, idx) => {
                  const slot = dup * team.length + idx;
                  return (
                    <MemberCard
                      key={`${dup}-${member.name}`}
                      member={member}
                      lit={lit === slot}
                      innerRef={(el) => {
                        cardsRef.current[slot] = el;
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </DragRail>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
