"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { useEffect, useState, useRef } from "react";

const navLinks = [
    { label: "Design", href: "/design-prototyping" },
    { label: "WordPress", href: "/wordpress-development" },
    { label: "Shopify", href: "/shopify-development" },
    { label: "Integrations", href: "/integrations-automation" },
    { label: "Blog", href: "/blog" },
];

function ThemeToggle({ className = "" }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        if (next === "light") {
            document.documentElement.dataset.theme = "light";
        } else {
            delete document.documentElement.dataset.theme;
        }
        try {
            localStorage.setItem("softles-theme", next);
        } catch {}
        setTheme(next);
    };

    return (
        <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-mute transition-all duration-300 hover:border-brand hover:text-brand ${className}`}
        >
            {theme === "dark" ? (
                /* Sun — shown in dark mode, click for light */
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            ) : (
                /* Moon — shown in light mode, click for dark */
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [pill, setPill] = useState({ x: 0, w: 0, visible: false });
    const lastScrollY = useRef(0);
    const listRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;
                setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 88);
                setScrolled(currentScrollY > 16);
                lastScrollY.current = currentScrollY;
            }
        };

        if (typeof window !== "undefined") {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const handleSectionClick = (e, sectionId) => {
        if (pathname === "/") {
            e.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const isActive = (href) => pathname === href || pathname?.startsWith(`${href}/`);

    const moveHighlight = (e) => {
        const list = listRef.current;
        if (!list) return;
        const linkRect = e.currentTarget.getBoundingClientRect();
        const listRect = list.getBoundingClientRect();
        setPill({ x: linkRect.left - listRect.left, w: linkRect.width, visible: true });
    };

    const hideHighlight = () => setPill((p) => ({ ...p, visible: false }));

    // Ad landing pages (/lp/*) use their own minimal header — hide the global nav.
    if (pathname?.startsWith("/lp")) return null;

    return (
        <header
            className={`fixed top-0 w-full z-50 text-ink transition-all duration-500 ease-out
            ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            ${scrolled
                ? "bg-page/75 backdrop-blur-xl shadow-[0_16px_44px_rgba(0,0,0,0.45)]"
                : "bg-transparent"}`}
        >
            {/* Gradient hairline along the bottom edge — appears on scroll */}
            <div
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/[0.14] to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />

                {/* Bar content: logo + menu left, CTA right */}
                <div className="service-page-container flex items-center h-[60px] lg:h-[64px]">
                        <Link href="/" className="shrink-0 flex items-center">
                            <span
                                className="select-none text-[22px] font-bold leading-none tracking-tight text-ink"
                                style={{ fontFamily: "var(--font-display), var(--font-body), sans-serif" }}
                            >
                                SoftLes<span className="text-brand">.</span>
                            </span>
                        </Link>

                        {/* Divider */}
                        <span aria-hidden="true" className="hidden lg:block h-5 w-px bg-ink/[0.09] ml-6 mr-2" />

                        {/* Nav links with sliding highlight, next to logo */}
                        <nav className="hidden lg:block mx-2">
                            <ul
                                ref={listRef}
                                onMouseLeave={hideHighlight}
                                className="relative flex items-center text-sm font-semibold"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-y-0 rounded-full pointer-events-none [transition:left_0.35s_cubic-bezier(0.34,1.4,0.4,1),width_0.35s_cubic-bezier(0.34,1.4,0.4,1),opacity_0.25s_ease]"
                                    style={{
                                        left: pill.x,
                                        width: pill.w,
                                        opacity: pill.visible ? 1 : 0,
                                        background:
                                            "radial-gradient(60% 55% at 50% 100%, rgba(255,77,87,0.22), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                                        boxShadow:
                                            "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.06), 0 4px 14px rgba(0,0,0,0.25)",
                                    }}
                                />
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <li key={link.label} className="relative">
                                            <Link
                                                href={link.href}
                                                onMouseEnter={moveHighlight}
                                                aria-current={active ? "page" : undefined}
                                                className={`relative block px-4 py-2 rounded-full transition-colors duration-200
                                                ${active
                                                    ? "text-ink bg-ink/[0.08]"
                                                    : "text-mute hover:text-ink"}`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Theme toggle + CTA pinned right */}
                        <ThemeToggle className="hidden lg:flex ml-auto mr-3" />
                        <Link
                            href="/#book-call"
                            onClick={(e) => handleSectionClick(e, "book-call")}
                            className="hidden lg:block"
                        >
                            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[20px] py-[5px] text-sm font-medium text-white backdrop-blur-3xl">
                                    Book a Discovery Call
                                </span>
                            </button>
                        </Link>

                    <div className="ml-auto lg:ml-0 flex items-center gap-2">
                        <ThemeToggle className="lg:hidden" />
                        <MobileSidebar />
                    </div>
                </div>
        </header>
    );
}
