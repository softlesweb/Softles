import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Progress ring geometry, in the ring SVG's 100×100 viewBox.
const RING_R = 49.4;
const RING_C = 2 * Math.PI * RING_R;
// The ring draws a full circle, starting and finishing where this circle crosses
// its neighbour: the first card meets the next one at its lower right, every
// other card meets the one before it at its upper left.
const RING_START_FIRST = 30;
const RING_START_REST = -150;

export default function ServiceCard(props) {
    const altText = props.alt || `Service icon for ${props.name}`;
    const ringStart = props.index === 0 ? RING_START_FIRST : RING_START_REST;

    return (
        <Link
            href={props.link || "#"}
            passHref
            className={`relative overflow-hidden h-[280px] w-[280px] p-[24px] lg:-mr-10 rounded-full bg-[#111319] ${props.bg} ${props.hover} ${props.active ? "-translate-y-2" : ""} ${props.dimmed ? "opacity-45" : "opacity-100"} flex flex-col items-center justify-center gap-y-3 text-center group border border-[#2E3446] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-24px_48px_rgba(0,0,0,0.35)] hover:border-[#FF4D57]/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(255,77,87,0.15)] hover:-translate-y-3 focus-visible:ring-4 focus-visible:ring-[#FF4D57] transition-all duration-300 ease-out outline-none`}
            style={{ zIndex: props.zIndex }}
            aria-label={`Learn more about ${props.name}`}
            tabIndex={0}
        >

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,77,87,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Current step — soft glow behind the content */}
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500 ${props.active ? "opacity-100" : "opacity-0"}`}
                style={{ background: "radial-gradient(circle at center, rgba(255,77,87,0.08), transparent 70%)" }}
            />

            {/* Progress ring on the border: draws from the top while playing, stays full once done */}
            <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                style={{
                    // Rotate so the draw starts and finishes at the seam with the
                    // neighbouring circle instead of at the top of the card.
                    transform: `rotate(${ringStart}deg)`,
                    filter: props.playing ? "drop-shadow(0 0 4px rgba(255,77,87,0.7))" : "none",
                }}
            >
                <circle cx="50" cy="50" r={RING_R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
                <circle
                    cx="50"
                    cy="50"
                    r={RING_R}
                    fill="none"
                    stroke="#FF4D57"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeDasharray={RING_C}
                    className={props.playing ? "step-ring-draw" : ""}
                    onAnimationEnd={props.playing ? props.onRingDone : undefined}
                    style={{
                        "--ring-c": RING_C,
                        opacity: props.playing ? 1 : props.reached ? 0.55 : 0,
                        animationDuration: `${props.stepMs || 4000}ms`,
                        animationPlayState: props.paused ? "paused" : "running",
                        transition: "opacity 0.5s ease",
                    }}
                />
            </svg>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-y-3">

                <div
                    className={`step-float w-[76px] h-[76px] rounded-full bg-[rgba(255,77,87,0.08)] border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF4D57]/50 ${props.active ? "border-[#FF4D57]/60 scale-105" : "border-[rgba(255,77,87,0.25)]"}`}
                    style={{ animation: "stepFloat 5s ease-in-out infinite", animationDelay: `${(props.index || 0) * 0.4}s` }}
                >
                    <Image
                        src={props.source}
                        alt={altText}
                        width={50}
                        height={50}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {props.step && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF4D57]/80 -mb-1">
                        Step {props.step}
                    </span>
                )}
                <span className="text-[#FFFFFF] text-xl leading-[30px] font-bold group-hover:text-[#FF4D57] transition-colors duration-300">
                    {props.name}
                </span>

                <p className="text-[#C7CCD6] font-normal text-sm leading-tight px-3">
                    {props.description}
                </p>

            </div>

        </Link>
    )
}