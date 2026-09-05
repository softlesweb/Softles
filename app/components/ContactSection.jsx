"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import React, { useState } from "react";
import { trackEvent } from "@/lib/gtag";

const PHONE_DISPLAY = "+91 89540 00202";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const valid = name.trim() !== "" && email.trim() !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!valid || status === "sending") return;
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            trackEvent("generate_lead", { source: "contact_form", page: "home" });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section id="book-call" className="w-full py-12 md:py-20 px-0 bg-[#161C27] border-t border-b border-[#2E3446]">
            <div className="service-page-container">
                {/* Header */}
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                        <Image src={Separator} alt="separator" width={0} height={0} sizes="(max-width: 768px) 20vw, (max-width: 1024px) 10vw, 6vw" className="object-cover overflow-hidden h-[2px] w-auto mr-[10px]" />
                        <p className="text-sm uppercase tracking-[0.2em] text-[#C7CCD6]">
                            Get in touch
                        </p>
                    </div>
                    <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">Let&apos;s talk about your project</span>
                    <span className="text-sm sm:text-base text-[#C7CCD6] mt-2 max-w-2xl leading-relaxed">
                        Tell us what you&apos;re building and we&apos;ll get back to you — usually within a day.
                    </span>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
                    {/* Photo panel */}
                    <div className="group relative lg:col-span-2 rounded-2xl overflow-hidden border border-[#2E3446] bg-gradient-to-br from-[#222A3B] to-[#12161F] min-h-[320px] sm:min-h-[400px] lg:min-h-0">
                        <Image
                            src="/shakti-hover.jpg"
                            alt="Shakti Singh, Strategy Lead at SoftLes"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-top"
                        />
                        <Image
                            src="/shakti_singh.jpg"
                            alt="Shakti Singh, Strategy Lead at SoftLes"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            loading="eager"
                            className="object-cover object-top [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] [transition:clip-path_600ms_cubic-bezier(0.65,0,0.35,1)]"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B0F16] via-[#0B0F16]/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                            <p className="text-white font-bold text-lg leading-tight">Shakti Singh</p>
                            <p className="text-[#C7CCD6] text-sm mt-0.5">Strategy Lead</p>
                            <p className="text-[#C7CCD6]/80 text-xs sm:text-sm mt-2 leading-relaxed">
                                Your message lands directly with me — no sales reps, no hand-offs.
                            </p>
                        </div>
                    </div>

                    {/* Form + direct contact */}
                    <div className="lg:col-span-3 softles-card p-6 sm:p-8 flex flex-col gap-6">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
                        {status === "sent" ? (
                            <div className="flex flex-col items-center justify-center text-center py-10 gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#FF4D57]/12 border border-[#FF4D57]/40 flex items-center justify-center">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white">Thanks — we&apos;ll be in touch</h3>
                                <p className="text-[#C7CCD6] text-sm max-w-sm">We&apos;ve got your message and will reply shortly. For anything urgent, ping us on WhatsApp.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold text-white">Send us a message</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your name *" value={name} onChange={(e) => setName(e.target.value)} required
                                        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm" />
                                    <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required
                                        className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm" />
                                </div>
                                <input type="tel" placeholder="Phone / WhatsApp (optional)" value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm" />
                                <textarea placeholder="Tell us about your project…" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                                    className="bg-[#0F131A] border border-[#2E3446] focus:border-[#FF4D57] focus:outline-none text-white placeholder-[#7c8394] rounded-lg px-4 py-3 text-sm resize-none" />
                                <button type="submit" disabled={!valid || status === "sending"}
                                    className="softles-primary-button w-full justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                    {status === "sending" ? "Sending…" : "Send message"}
                                </button>
                                {status === "error" && (
                                    <p className="text-[#FF4D57] text-xs text-center">Something went wrong. Please try again or WhatsApp us.</p>
                                )}
                            </>
                        )}
                    </form>

                    {/* Direct contact */}
                    <div className="border-t border-[#2E3446] pt-6 flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#C7CCD6]">Prefer to reach out directly?</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-[#C7CCD6]">
                            <a href="tel:+918954000202" className="flex items-center gap-3 hover:text-[#FF4D57] transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-[#FF4D57]/10 border border-[#FF4D57]/30 flex items-center justify-center text-[#FF4D57]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                </span>
                                {PHONE_DISPLAY}
                            </a>
                            <a href="mailto:info@softles.in" className="flex items-center gap-3 hover:text-[#FF4D57] transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-[#FF4D57]/10 border border-[#FF4D57]/30 flex items-center justify-center text-[#FF4D57]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </span>
                                info@softles.in
                            </a>
                        </div>
                        <p className="text-[#C7CCD6]/60 text-xs">
                            Or tap the WhatsApp button in the corner — it&apos;s the fastest way to reach us.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
