"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../work/projects";

// The device runs through every live build, showing each one's hero.
// Crops are built by scripts/make-hero-crops.mjs from the same page captures.
const HERO_SHOTS = projects.map((p) => ({
    name: p.name,
    src: p.pages[0].d.replace(/-p0-d\.\w+$/, "-hero.jpg"),
    category: p.category,
    // The platform is only worth saying when it adds to the category, and only
    // where there's room for it.
    platform: p.stack && p.stack.toLowerCase() !== p.category.toLowerCase() ? p.stack : null,
}));
const SHOT_MS = 5500;
const DECK_MS = 850; // one shared move for every card when the deck turns

// Image logos for long-standing clients, interleaved with text wordmarks for
// the newer projects that don't have a logo asset yet.
const railItems = [
    { src: "/logo_1.png", invert: true },
    { src: "/logo_2.png", lightSrc: "/logo_2_light.png" },
    { src: "/ssf_global.png", chip: true },
    { src: "/logo_3.png", lightSrc: "/logo_3_light.png" },
    { src: "/logo_4.png" },
    { src: "/logo_5.png", lightSrc: "/logo_5_light.png" },
    { src: "/logo_6.png" },
    { name: "Umang Aatray" },
    { src: "/logo_7.png" },
    { src: "/ayla_solutions.png", chip: true },
    { src: "/logo_8.png", invert: true },
    { name: "Tuitionly" },
    { src: "/logo_9.png" },
];

const EASE = [0.22, 1, 0.36, 1];

// The headline arrives word by word, each one from behind its own mask.
const LINE_ONE = ["We", "build", "businesses"];
const LINE_TWO = [
    { text: "on", accent: false },
    { text: "WordPress", accent: true },
    { text: "&", accent: false },
    { text: "Shopify.", accent: true },
];

const word = {
    hidden: { y: "110%", opacity: 0 },
    show: (i = 0) => ({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.75, delay: 0.12 + i * 0.06, ease: EASE },
    }),
};

const rise = {
    hidden: { opacity: 0, y: 22 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i, ease: EASE },
    }),
};

function Word({ children, index, accent }) {
    return (
        <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
                variants={word}
                custom={index}
                className={`hero-word inline-block ${accent ? "hero-gradient-anim" : ""}`}
            >
                {children}
            </motion.span>
        </span>
    );
}

export default function Hero() {
    // Pointer parallax: the canvas, device and chips drift by different amounts,
    // which is what sells the depth between them.
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
    const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });
    const deviceX = useTransform(sx, [-0.5, 0.5], [14, -14]);
    const deviceY = useTransform(sy, [-0.5, 0.5], [10, -10]);

    // The progress bar's own animation drives the hand-off, so what you see
    // filling is exactly what decides when the next project arrives.
    const [shot, setShot] = useState(0);
    const [held, setHeld] = useState(false);
    const current = HERO_SHOTS[shot];

    // The timer line traces the capture, so it needs the screen's live size.
    // Every card in the stack is the same size, so the sizer's screen is measured
    // once and the numbers hold for whichever card is in front.
    const screenRef = useRef(null);
    const [screen, setScreen] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const el = screenRef.current;
        if (!el) return;
        setScreen({ w: el.offsetWidth, h: el.offsetHeight });
        // borderBoxSize is the element's own size, fractional and unaffected by the
        // card's rotation — rounding it here is what made the line sit off the edge.
        const ro = new ResizeObserver(([entry]) => {
            const box = entry.borderBoxSize?.[0];
            setScreen(box ? { w: box.inlineSize, h: box.blockSize } : { w: el.offsetWidth, h: el.offsetHeight });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // Which way the last card left, so the fling matches the drag that caused it.
    const [flyDir, setFlyDir] = useState(-1);
    const advance = (dir = -1) => {
        setFlyDir(dir);
        setShot((i) => (i + 1) % HERO_SHOTS.length);
    };
    const onDragEnd = (_e, info) => {
        const far = Math.abs(info.offset.x) > 90;
        const fast = Math.abs(info.velocity.x) > 500;
        if (far || fast) advance(info.offset.x < 0 ? -1 : 1);
    };

    // Matches the screen's rounded-xl corners, pulled in by half the stroke.
    const R = 10.5;
    const perimeter = screen.w
        ? 2 * (screen.w - 2 * R) + 2 * (screen.h - 2 * R) + 2 * Math.PI * R
        : 0;

    // Fetch the next capture while the current one is still on screen.
    useEffect(() => {
        const next = new window.Image();
        next.src = HERO_SHOTS[(shot + 1) % HERO_SHOTS.length].src;
    }, [shot]);

    const track = (e) => {
        const b = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - b.left) / b.width - 0.5);
        py.set((e.clientY - b.top) / b.height - 0.5);
    };

    const rest = () => {
        px.set(0);
        py.set(0);
    };

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            onMouseMove={track}
            onMouseLeave={rest}
            className="relative w-full overflow-hidden bg-page min-h-screen lg:min-h-[92vh] flex flex-col justify-center pt-28 pb-10 sm:pt-[calc(7rem+60px)] lg:pt-[calc(6rem+60px)] lg:pb-8"
        >
            {/* Colour canvas cutting in from the right, with a slow sheen drifting across it.
                The section starts at the top of the page (the navbar is transparent
                until you scroll), so the canvas runs right up behind the nav. */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 0.92, scale: 1 }}
                transition={{ duration: 1.25, ease: EASE }}
                className="hero-canvas pointer-events-none absolute inset-x-0 top-0 h-[460px] origin-top-right bg-[linear-gradient(135deg,#FF4D57_0%,#FF6A3D_38%,#6D5EF6_100%)] [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62vw] lg:[clip-path:polygon(22%_0,100%_0,100%_78%,0_100%)]"
            >
                <span className="hero-sheen absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.32),transparent_60%)]" />
            </motion.div>

            {/* Veil so the copy keeps its contrast over the canvas */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[linear-gradient(180deg,rgb(var(--c-page)/0.2),rgb(var(--c-page))_92%)] [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62vw] lg:bg-[linear-gradient(90deg,rgb(var(--c-page))_0%,rgb(var(--c-page)/0.55)_34%,transparent_62%)] lg:[clip-path:polygon(22%_0,100%_0,100%_78%,0_100%)]"
            />

            <div className="service-page-container relative z-10 w-full">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                    {/* Copy */}
                    <div className="max-w-2xl">

                        <motion.h1
                            initial="hidden"
                            animate="show"
                            className="font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-[54px] xl:text-[60px] lg:leading-[1.07] tracking-[-0.03em] text-ink"
                        >
                            {LINE_ONE.map((w, i) => (
                                <span key={w}>
                                    <Word index={i}>{w}</Word>{" "}
                                </span>
                            ))}
                            <br className="hidden sm:block" />
                            {LINE_TWO.map((w, i) => (
                                <span key={w.text}>
                                    <Word index={LINE_ONE.length + i} accent={w.accent}>
                                        {w.text}
                                    </Word>{" "}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={rise}
                            initial="hidden"
                            animate="show"
                            custom={0.55}
                            className="hero-reveal mt-6 text-base lg:text-lg leading-relaxed text-mute"
                            style={{ maxWidth: "50ch" }}
                        >
                            Custom storefronts, headless builds, apps, and the integrations that keep them running. Fixed pricing agreed upfront, and support that continues after launch.
                        </motion.p>

                        <motion.div
                            variants={rise}
                            initial="hidden"
                            animate="show"
                            custom={0.68}
                            className="hero-reveal mt-9 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
                        >
                            <button
                                onClick={(e) => handleClick(e, "book-call")}
                                className="softles-primary-button group w-full sm:w-auto whitespace-nowrap"
                            >
                                <span>Book a Free Discovery Call</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </button>
                            <a
                                href="#work"
                                onClick={(e) => handleClick(e, "work")}
                                className="softles-secondary-button w-full sm:w-auto whitespace-nowrap"
                            >
                                See our work
                            </a>
                        </motion.div>
                    </div>

                    {/* Device on the canvas */}
                    <motion.div
                        initial={{ opacity: 0, x: 70, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: -4 }}
                        transition={{ duration: 1.05, delay: 0.3, ease: EASE }}
                        className="hero-reveal relative mx-auto w-full max-w-[560px] lg:mx-0"
                    >
                        <motion.div style={{ x: deviceX, y: deviceY }}>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                onMouseEnter={() => setHeld(true)}
                                onMouseLeave={() => setHeld(false)}
                                className="group/stack relative"
                            >
                                {/* Sizer: an invisible card that gives the stack its height, so the
                                    real cards can all sit absolute and swap places freely. */}
                                <div aria-hidden="true" className="invisible rounded-2xl border border-ink/20 p-2.5">
                                    <div className="h-[26px] pb-2" />
                                    <div ref={screenRef} className="aspect-[27/16] rounded-xl" />
                                </div>

                                {/* The deck: the current build in front, the next two fanned behind it
                                    (like a hand of cards). Every card glides to its next slot in one
                                    shared, eased move — the front one arcs out and tucks under the deck
                                    instead of vanishing — so a change reads as one motion, not a swap. */}
                                {HERO_SHOTS.map((item, idx) => {
                                    const n = HERO_SHOTS.length;
                                    const k = (idx - shot + n) % n;
                                    const leaving = k === n - 1; // the card that was in front a moment ago
                                    if (k > 2 && !leaving) return null;
                                    const front = k === 0;
                                    const slot = {
                                        rotate: -4 * k,
                                        scale: 1 - 0.035 * k,
                                        opacity: 1,
                                        x: 0,
                                        filter: `brightness(${1 - 0.22 * k})`,
                                        zIndex: 30 - k * 10,
                                    };
                                    // Arc out to the side, drop under the deck at the midpoint, settle
                                    // into the back slot and fade — all on the same clock as the others.
                                    const tuck = {
                                        x: [null, 150 * flyDir, -22],
                                        rotate: [null, 12 * flyDir, -10],
                                        scale: [null, 0.97, 0.9],
                                        opacity: [1, 1, 0],
                                        filter: ["brightness(1)", "brightness(0.9)", "brightness(0.5)"],
                                        zIndex: [30, 30, 0, 0],
                                    };
                                    return (
                                        <motion.div
                                            key={item.src}
                                            initial={{ rotate: -12, scale: 0.9, opacity: 0, zIndex: 0 }}
                                            animate={leaving ? tuck : slot}
                                            transition={
                                                leaving
                                                    ? { duration: DECK_MS / 1000, ease: [0.65, 0, 0.35, 1], times: [0, 0.5, 1], zIndex: { times: [0, 0.48, 0.5, 1], duration: DECK_MS / 1000 } }
                                                    : { duration: DECK_MS / 1000, ease: [0.65, 0, 0.35, 1] }
                                            }
                                                style={{ transformOrigin: "92% 100%" }}
                                                drag={front ? "x" : false}
                                                dragConstraints={{ left: 0, right: 0 }}
                                                dragElastic={0.7}
                                                onDragEnd={front ? onDragEnd : undefined}
                                                whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                                                className={`absolute inset-0 rounded-2xl border border-ink/20 bg-[#0b0d12] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.55)] ${front ? "cursor-grab" : "pointer-events-none"}`}
                                            >
                                                {/* Browser chrome doubles as the caption: which build this is, and what it's built on */}
                                                <div className="flex items-center gap-2 px-1 pb-2">
                                                    <span className="flex shrink-0 gap-1.5" aria-hidden="true">
                                                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                                                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                                                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                                                    </span>
                                                    <span className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-line/70 bg-panel px-2.5 py-1 text-[10px] font-medium text-dim">
                                                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                                            <rect x="3" y="11" width="18" height="11" rx="2" />
                                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                        </svg>
                                                        <span className="truncate text-ink/90">{item.name}</span>
                                                    </span>
                                                    <span className="shrink-0 rounded-full border border-brand/30 bg-brand/10 px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.1em] text-brand">
                                                        {item.category}
                                                        {item.platform && <span className="hidden sm:inline"> · {item.platform}</span>}
                                                    </span>
                                                </div>

                                                {/* Matches the hero crops' 27:16 ratio, so each one fits exactly at any width */}
                                                <div className="relative aspect-[27/16] overflow-hidden rounded-xl bg-white">
                                                    {/* Slide timer, only on the front card: it traces the capture, and
                                                        finishing is what flicks the card away. Hovering holds it. */}
                                                    {front && perimeter > 0 && (
                                                        <svg
                                                            width={screen.w}
                                                            height={screen.h}
                                                            viewBox={`0 0 ${screen.w} ${screen.h}`}
                                                            fill="none"
                                                            aria-hidden="true"
                                                            shapeRendering="geometricPrecision"
                                                            style={{ width: screen.w, height: screen.h }}
                                                            className="pointer-events-none absolute left-0 top-0 z-10"
                                                        >
                                                            <defs>
                                                                <linearGradient id="hero-timer" x1="0" y1="0" x2="1" y2="1">
                                                                    <stop offset="0%" stopColor="#FF4D57" />
                                                                    <stop offset="100%" stopColor="#FF6A3D" />
                                                                </linearGradient>
                                                            </defs>
                                                            {/* Glow is a second, wider stroke rather than a drop-shadow filter:
                                                                filters rasterise coarsely on this rotated card and made the line ripple. */}
                                                            <rect
                                                                key={`glow-${shot}`}
                                                                x="1.5"
                                                                y="1.5"
                                                                width={Math.max(screen.w - 3, 0)}
                                                                height={Math.max(screen.h - 3, 0)}
                                                                rx={R}
                                                                stroke="rgba(255,77,87,0.3)"
                                                                strokeWidth="7"
                                                                strokeDasharray={perimeter}
                                                                className="hero-progress"
                                                                style={{
                                                                    "--p": perimeter,
                                                                    animationDuration: `${SHOT_MS}ms`,
                                                                    animationPlayState: held ? "paused" : "running",
                                                                }}
                                                            />
                                                            <rect
                                                                key={shot}
                                                                x="1.5"
                                                                y="1.5"
                                                                width={Math.max(screen.w - 3, 0)}
                                                                height={Math.max(screen.h - 3, 0)}
                                                                rx={R}
                                                                stroke="url(#hero-timer)"
                                                                strokeWidth="3"
                                                                strokeDasharray={perimeter}
                                                                className="hero-progress"
                                                                style={{
                                                                    "--p": perimeter,
                                                                    animationDuration: `${SHOT_MS}ms`,
                                                                    animationPlayState: held ? "paused" : "running",
                                                                }}
                                                                onAnimationEnd={() => advance(-1)}
                                                            />
                                                        </svg>
                                                    )}
                                                    {/* eslint-disable-next-line @next/next/no-img-element -- hero crop, sized by its box */}
                                                    <img
                                                        src={item.src}
                                                        alt={`${item.name}, a site we designed and built`}
                                                        draggable={false}
                                                        className="absolute inset-0 h-full w-full select-none object-cover object-top"
                                                    />
                                                    {/* Swipe cue, only on the front card and only on hover — the same
                                                        nudge the reference deck gives. */}
                                                    {front && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3.5 py-1.5 text-[11px] font-semibold text-ink opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-300 group-hover/stack:opacity-100"
                                                        >
                                                            Swipe →
                                                        </span>
                                                    )}
                                                </div>
                                            </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Client rail */}
                <motion.div
                    variants={rise}
                    initial="hidden"
                    animate="show"
                    custom={1.15}
                    className="hero-reveal mt-12 lg:mt-14 border-t border-line/70 pt-7"
                >
                    <div className="flex items-center gap-6">
                        <span className="hidden sm:block shrink-0 text-[11px] uppercase tracking-[0.18em] text-dim">Trusted by</span>
                        <div
                            className="overflow-hidden w-full"
                            style={{
                                maskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
                            }}
                        >
                            {/* Two identical lists; the track translates exactly -50% so the loop seam is invisible. */}
                            <div className="flex animate-logo-rail w-max items-center">
                                {[0, 1].map((listIdx) => (
                                    <div key={listIdx} className="flex items-center shrink-0 gap-12 md:gap-16 pr-12 md:pr-16" aria-hidden={listIdx === 1}>
                                        {railItems.map((item, idx) => (
                                            <div key={idx} className="group flex h-12 shrink-0 items-center justify-center">
                                                {item.src ? (
                                                    <>
                                                        <Image
                                                            src={item.src}
                                                            alt={`Client Logo ${idx + 1}`}
                                                            width={120}
                                                            height={40}
                                                            className={`${item.chip ? "h-9 md:h-10" : "h-7 md:h-8"} ${item.invert ? "rail-invert" : ""} ${item.lightSrc ? "theme-dark-only" : ""} w-auto opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105`}
                                                        />
                                                        {item.lightSrc && (
                                                            <Image
                                                                src={item.lightSrc}
                                                                alt=""
                                                                aria-hidden="true"
                                                                width={120}
                                                                height={40}
                                                                className="theme-light-only h-7 md:h-8 w-auto opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                                                            />
                                                        )}
                                                    </>
                                                ) : (
                                                    <span className="whitespace-nowrap text-[15px] md:text-base font-bold tracking-wide text-soft opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                                                        {item.name}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
                .hero-gradient-anim {
                    background: linear-gradient(90deg, #FF4D57, #FF6A3D, #FF8A65, #FF4D57);
                    background-size: 250% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: hero-gradient-sweep 6s linear infinite;
                }
                @keyframes hero-gradient-sweep {
                    to { background-position: 250% 0; }
                }

                /* Sheen drifting across the colour canvas */
                .hero-sheen { animation: hero-sheen 16s ease-in-out infinite; }
                @keyframes hero-sheen {
                    0%, 100% { transform: translate3d(-6%, -4%, 0) scale(1); opacity: .85; }
                    50% { transform: translate3d(8%, 6%, 0) scale(1.12); opacity: 1; }
                }

                /* Slide timer: the line drawing around the capture is what triggers the next project */
                .hero-progress {
                    animation-name: hero-progress;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                }
                @keyframes hero-progress {
                    from { stroke-dashoffset: var(--p); }
                    to { stroke-dashoffset: 0; }
                }

                .animate-logo-rail {
                    animation: logo-rail 26s linear infinite;
                    will-change: transform;
                }
                @keyframes logo-rail {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-word, .hero-reveal, .hero-float { transform: none !important; opacity: 1 !important; }
                    .hero-sheen, .animate-logo-rail, .hero-gradient-anim { animation: none !important; }
                    .hero-progress { animation: none !important; opacity: 0; }
                    .hero-gradient-anim { background-position: 0 0; }
                }
            `}</style>
        </section>
    );
}
