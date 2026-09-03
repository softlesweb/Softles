import Image from "next/image";

// Order: full-time trio first, then the wider team (Tanmay moved up).
const team = [
  { name: "Shakti Singh", role: "Strategy Lead", image: "/shakti_singh.jpg", hoverImage: "/shakti-hover.jpg", linkedin: "https://www.linkedin.com/in/gurjarshakti/" },
  { name: "Neeraj Kumar", role: "Shopify Developer", image: "/neeraj_kumar.jpg", hoverImage: "/neeraj-hover.jpg", linkedin: "https://www.linkedin.com/in/neerajkumar94/" },
  { name: "Shahad Hassan", role: "Full-Stack Developer", image: "/shahad_hassan.jpg", hoverImage: "/shahad-hover.jpg", linkedin: "https://www.linkedin.com/in/shahad-hassan-82287a220/" },
  { name: "Tanmay Sharma", role: "SaaS Sales Professional", image: "/tanmay_sharma.png", linkedin: "https://www.linkedin.com/in/tanmaybummlers/" },
  { name: "Divyansh Chaudhary", role: "Product Lead", image: "/Divy.jpg", linkedin: "https://www.linkedin.com/in/divyansh-chaudhary-887744119/" },
  { name: "Manish Rana", role: "UI/UX Designer", image: "/Manish_Rana.png", linkedin: "https://www.linkedin.com/in/mymkrana/" },
  { name: "Sparsh Yadav", role: "Senior Product Designer", image: "/sparsh_yadav.webp", linkedin: "https://www.linkedin.com/in/sparsh-yadav-8a794714a/" },
];

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function MemberCard({ member }) {
  return (
    <article className="group softles-card overflow-hidden w-[220px] sm:w-[240px] shrink-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#222A3B] to-[#12161F]">
        {member.image ? (
          <>
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="240px"
              className="object-cover object-top"
            />
            {member.hoverImage && (
              <Image
                src={member.hoverImage}
                alt={member.name}
                fill
                sizes="240px"
                loading="eager"
                className="object-cover object-top [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] [transition:clip-path_600ms_cubic-bezier(0.65,0,0.35,1)]"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FF4D57]/12 border border-[#FF4D57]/30 text-2xl font-bold text-[#FF4D57]">
              {initials(member.name)}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#12161F]/80 to-transparent" />
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0E1219]/80 border border-[#2E3446] text-[#C7CCD6] backdrop-blur-md transition-all hover:bg-[#FF4D57] hover:border-[#FF4D57] hover:text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.9h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.43 3.01 5.43 6.93V22h-4.52v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.74V8z" />
            </svg>
          </a>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{member.name}</h3>
        <p className="text-xs sm:text-sm text-[#C7CCD6]/80 mt-1">{member.role}</p>
      </div>
    </article>
  );
}

export default function OurTeamSection() {
  return (
    <section id="about" className="softles-section-primary overflow-hidden">
      <div className="service-page-container">
        <div className="softles-eyebrow mb-2">
          <span className="softles-eyebrow-line" />
          <span className="softles-eyebrow-text">Our team</span>
        </div>
        <h2 className="service-section-heading text-[#FFFFFF]">The people behind SoftLes</h2>
        <p className="softles-section-copy">
          A small senior team you work with directly — no account managers, no hand-offs.
        </p>
      </div>

      {/* Auto-scrolling team rail (pauses on hover) */}
      <div className="mt-10 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-[#0E1219] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-[#0E1219] after:to-transparent after:z-10">
        <div className="flex w-max py-1 animate-[team-marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-5 pr-5 shrink-0" aria-hidden={dup === 1}>
              {team.map((member) => (
                <MemberCard key={`${dup}-${member.name}`} member={member} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
