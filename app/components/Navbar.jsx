"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { useEffect, useState, useRef } from "react";

const navLinks = [
    { label: "WordPress", href: "/wordpress-development" },
    { label: "Shopify", href: "/shopify-development" },
    { label: "Blog", href: "/blog" },
];

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
            className={`fixed top-0 w-full z-50 text-[#FFFFFF] transition-all duration-500 ease-out
            ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            ${scrolled
                ? "bg-[#0E1219]/75 backdrop-blur-xl shadow-[0_16px_44px_rgba(0,0,0,0.45)]"
                : "bg-[#0E1219]"}`}
        >
            {/* Gradient hairline along the bottom edge — appears on scroll */}
            <div
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />

                {/* Bar content: logo + menu left, CTA right */}
                <div className="service-page-container flex items-center h-[60px] lg:h-[64px]">
                        <Link href="/" className="shrink-0 flex items-center">
                            <Image
                                src={"/SoftLes.png"}
                                alt="logo"
                                width={0}
                                height={0}
                                sizes="160px"
                                className="object-contain h-[30px] w-auto"
                            />
                        </Link>

                        {/* Divider */}
                        <span aria-hidden="true" className="hidden lg:block h-5 w-px bg-white/[0.09] ml-6 mr-2" />

                        {/* Nav links with sliding highlight, next to logo */}
                        <nav className="hidden lg:block mx-2">
                            <ul
                                ref={listRef}
                                onMouseLeave={hideHighlight}
                                className="relative flex items-center text-sm font-semibold"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-y-0 rounded-full bg-white/[0.08] transition-all duration-300 ease-out pointer-events-none"
                                    style={{ left: pill.x, width: pill.w, opacity: pill.visible ? 1 : 0 }}
                                />
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <li key={link.label} className="relative">
                                            <Link
                                                href={link.href}
                                                onMouseEnter={moveHighlight}
                                                aria-current={active ? "page" : undefined}
                                                className={`relative block px-4 py-2 transition-colors duration-200
                                                ${active
                                                    ? "text-white"
                                                    : "text-[#C7CCD6] hover:text-white"}`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* CTA pinned right */}
                        <Link
                            href="/#book-call"
                            onClick={(e) => handleSectionClick(e, "book-call")}
                            className="hidden lg:block ml-auto"
                        >
                            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[20px] py-[5px] text-sm font-medium text-white backdrop-blur-3xl">
                                    Book a Discovery Call
                                </span>
                            </button>
                        </Link>

                    <div className="ml-auto lg:ml-0 flex items-center">
                        <MobileSidebar />
                    </div>
                </div>
        </header>
    );
}
