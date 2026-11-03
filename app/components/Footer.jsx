"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { enter, viewportOnce, fadeUp } from "./_components/motion-presets";

const linkColumns = [
    {
        title: "Services",
        links: [
            { label: "Design & Prototyping", href: "/design-prototyping" },
            { label: "WordPress Development", href: "/wordpress-development" },
            { label: "Shopify Development", href: "/shopify-development" },
            { label: "Integrations & Automation", href: "/integrations-automation" },
        ],
    },
    {
        title: "WordPress",
        titleHref: "/wordpress-development",
        links: [
            { label: "Custom themes & headless", href: "/wordpress-development#services" },
            { label: "How we work", href: "/wordpress-development#process" },
            { label: "Projects", href: "/wordpress-development#projects" },
            { label: "FAQ", href: "/wordpress-development#faq" },
        ],
    },
    {
        title: "Shopify",
        titleHref: "/shopify-development",
        links: [
            { label: "Themes, apps & Hydrogen", href: "/shopify-development#services" },
            { label: "How we work", href: "/shopify-development#process" },
            { label: "Brunswick case study", href: "/shopify-development#projects" },
            { label: "FAQ", href: "/shopify-development#faq" },
        ],
    },
];

const socials = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/softlesweb/",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.45-3H13.5V9.1c0-.87.24-1.46 1.5-1.46h1.45V4.95c-.7-.07-1.4-.11-2.1-.1-2.1 0-3.55 1.28-3.55 3.64V11H8.4v3h2.4v7h2.7z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://x.com/softlesindia",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2.5h3.2l-7.1 8.1L23.3 21.5h-6.5l-5.1-6.7-5.9 6.7H2.6l7.6-8.6L2 2.5h6.7l4.6 6.1 5.6-6.1zm-1.1 17h1.8L7.7 4.3H5.8l12 15.2z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/softlesindia/",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.9h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.43 3.01 5.43 6.93V22h-4.52v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.74V8z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/softlesindia/",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="snap-start relative bg-page text-ink border-t border-line overflow-hidden">
            {/* Giant watermark — sits behind the footer content */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-0 select-none pointer-events-none">
                <span className="block text-center font-bold tracking-tight leading-[0.78] text-ink/[0.03] text-[16vw] whitespace-nowrap">
                    SoftLes
                </span>
            </div>
            {/* CTA band */}
            <div className="service-page-container py-14 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-line">
                <motion.div {...enter(0)}>
                    <p className="text-sm uppercase tracking-[0.2em] text-mute mb-3">Have a project in mind?</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Let&apos;s build something{" "}
                        <span className="softles-gradient-text">worth shipping.</span>
                    </h2>
                </motion.div>
                <motion.div {...enter(1)} className="shrink-0 self-start lg:self-auto">
                <Link href="/#book-call" className="softles-primary-button">
                    Start a project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </Link>
                </motion.div>
            </div>

            {/* Link grid */}
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ staggerChildren: 0.08 }} className="relative z-[1] service-page-container py-12 md:py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-10 items-start">
                {/* Brand */}
                <motion.div variants={fadeUp} className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-4 lg:pr-10">
                    {/* Logo and socials share one row so this column stays as short as the link columns */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Link href="/" className="w-fit">
                        <span
                            className="select-none text-[30px] font-bold leading-none tracking-tight text-ink"
                            style={{ fontFamily: "var(--font-display), var(--font-body), sans-serif" }}
                        >
                            SoftLes<span className="text-brand">.</span>
                        </span>
                    </Link>
                    <div className="flex gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mute transition-all duration-300 hover:border-brand hover:text-brand hover:-translate-y-0.5"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                    </div>
                    <p className="text-sm text-mute/80 leading-relaxed max-w-md">
                        SoftLes is a small team that builds WordPress and Shopify sites for growing brands. We handle the design, the development, and the automation that ties it together.
                    </p>
                </motion.div>

                {/* Link columns */}
                {linkColumns.map((col) => (
                    <motion.div key={col.title} variants={fadeUp} className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-dim">
                            {col.titleHref ? (
                                <Link href={col.titleHref} className="hover:text-ink transition-colors">{col.title}</Link>
                            ) : (
                                col.title
                            )}
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                {/* Contact */}
                <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-dim">Contact</h3>
                    <div className="flex flex-col items-start gap-2.5 text-sm">
                        <a href="mailto:info@softles.in?cc=hr@softles.in" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">
                            info@softles.in
                        </a>
                        <a href="mailto:hr@softles.in?cc=info@softles.in" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">
                            hr@softles.in
                        </a>
                        <a href="tel:+918954000202" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">
                            +91 89540 00202
                        </a>
                        <a href="tel:+919990548795" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">
                            +91 99905 48795
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom bar */}
            <div className="relative z-[1] border-t border-line">
                <div className="service-page-container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-dim">
                    <p>&copy; {new Date().getFullYear()} SoftLes — Web Design Company. All rights reserved.</p>
                    <p className="italic hidden lg:block">&quot;Do something today that your future self will thank you for.&quot;</p>
                    <div className="flex gap-5">
                        <Link href="/blog" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">Blog</Link>
                        <Link href="/privacy" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">Privacy Policy</Link>
                        <Link href="/terms" className="text-mute/85 underline underline-offset-[5px] decoration-ink/15 hover:text-ink hover:decoration-brand/70 transition-colors duration-200">Terms of Service</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
