"use client";

import Image from "next/image";
import Link from "next/link";

const linkColumns = [
    {
        title: "WordPress",
        titleHref: "/wordpress-development",
        links: [
            { label: "Custom Theme Development", href: "/wordpress-development" },
            { label: "Headless WordPress", href: "/wordpress-development" },
            { label: "Plugins & WooCommerce", href: "/wordpress-development" },
            { label: "Integrations & Automation", href: "/wordpress-development" },
        ],
    },
    {
        title: "Shopify",
        titleHref: "/shopify-development",
        links: [
            { label: "Custom Theme Development", href: "/shopify-development" },
            { label: "Headless & Hydrogen", href: "/shopify-development" },
            { label: "Shopify Apps", href: "/shopify-development" },
            { label: "Integrations & Automation", href: "/shopify-development" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "/blog" },
            { label: "Shopify & WordPress guides", href: "/blog" },
            { label: "Talk to us", href: "/#book-call" },
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
        <footer className="snap-start relative bg-[#0E1219] text-white border-t border-[#2E3446] overflow-hidden">
            {/* Giant watermark — sits behind the footer content */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-0 select-none pointer-events-none">
                <span className="block text-center font-bold tracking-tight leading-[0.78] text-white/[0.03] text-[16vw] whitespace-nowrap">
                    SoftLes
                </span>
            </div>
            {/* CTA band */}
            <div className="service-page-container py-14 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-[#2E3446]">
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#C7CCD6] mb-3">Have a project in mind?</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Let&apos;s build something{" "}
                        <span className="softles-gradient-text">worth shipping.</span>
                    </h2>
                </div>
                <Link href="/#book-call" className="softles-primary-button shrink-0 self-start lg:self-auto">
                    Start a project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </Link>
            </div>

            {/* Link grid */}
            <div className="relative z-[1] service-page-container py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-10">
                {/* Brand */}
                <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-5 lg:pr-10">
                    <Link href="/" className="w-fit">
                        <Image src={"/SoftLes.png"} alt="SoftLes" width={0} height={0} sizes="200px" className="object-contain h-[42px] w-auto" />
                    </Link>
                    <p className="text-sm text-[#C7CCD6]/80 leading-relaxed max-w-sm">
                        SoftLes is a small team that builds WordPress and Shopify sites for growing brands. We handle the design, the development, and the automation that ties it together.
                    </p>
                    <div className="flex gap-3 mt-1">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2E3446] text-[#C7CCD6] transition-all duration-300 hover:border-[#FF4D57] hover:text-[#FF4D57] hover:-translate-y-0.5"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link columns */}
                {linkColumns.map((col) => (
                    <div key={col.title} className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#7c8394]">
                            {col.titleHref ? (
                                <Link href={col.titleHref} className="hover:text-white transition-colors">{col.title}</Link>
                            ) : (
                                col.title
                            )}
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-[#C7CCD6]/80 hover:text-white transition-colors duration-200">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Contact */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#7c8394]">Contact</h3>
                    <div className="flex flex-col items-start gap-2.5 text-sm">
                        <a href="mailto:info@softles.in?cc=hr@softles.in" className="text-[#C7CCD6]/80 hover:text-white transition-colors duration-200">
                            info@softles.in
                        </a>
                        <a href="mailto:hr@softles.in?cc=info@softles.in" className="text-[#C7CCD6]/80 hover:text-white transition-colors duration-200">
                            hr@softles.in
                        </a>
                        <a href="tel:+918954000202" className="text-[#C7CCD6]/80 hover:text-white transition-colors duration-200">
                            +91 89540 00202
                        </a>
                        <a href="tel:+919990548795" className="text-[#C7CCD6]/80 hover:text-white transition-colors duration-200">
                            +91 99905 48795
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-[1] border-t border-[#2E3446]">
                <div className="service-page-container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#7c8394]">
                    <p>&copy; {new Date().getFullYear()} SoftLes — Web Design Company. All rights reserved.</p>
                    <p className="italic hidden lg:block">&quot;Do something today that your future self will thank you for.&quot;</p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
