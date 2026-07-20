"use client";

import React, { useState } from "react";

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
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    const inputClass =
        "bg-surface-overlay border border-line focus:border-brand focus:outline-none text-ink placeholder-ink-faint rounded-lg px-4 py-3 text-sm transition-colors duration-200";

    return (
        <section id="book-call" className="w-full py-16 md:py-24 px-0 bg-surface-raised border-t border-b border-line">
            <div className="service-page-container">
                {/* Header */}
                <div className="flex flex-col">
                    <div className="softles-eyebrow">
                        <span className="softles-eyebrow-line" />
                        <span className="softles-eyebrow-text">Get in touch</span>
                    </div>
                    <h2 className="mt-5 service-section-heading font-semibold text-ink">
                        Let&apos;s talk about your project<span className="text-brand">.</span>
                    </h2>
                    <p className="softles-section-copy">
                        Tell us what you&apos;re building and we&apos;ll get back to you — usually within a day.
                    </p>
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 softles-card p-6 md:p-8 flex flex-col gap-4" autoComplete="off">
                        {status === "sent" ? (
                            <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                                <div className="w-14 h-14 rounded-full bg-brand-soft border border-brand/30 flex items-center justify-center text-brand">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-ink">Thanks — we&apos;ll be in touch</h3>
                                <p className="text-ink-muted text-sm max-w-sm leading-relaxed">We&apos;ve got your message and will reply shortly. For anything urgent, ping us on WhatsApp.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-semibold text-ink">Send us a message</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your name *" value={name} onChange={(e) => setName(e.target.value)} required
                                        className={inputClass} />
                                    <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required
                                        className={inputClass} />
                                </div>
                                <input type="tel" placeholder="Phone / WhatsApp (optional)" value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className={inputClass} />
                                <textarea placeholder="Tell us about your project…" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                                    className={`${inputClass} resize-none`} />
                                <button type="submit" disabled={!valid || status === "sending"}
                                    className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-brand">
                                    {status === "sending" ? "Sending…" : "Send message"}
                                </button>
                                {status === "error" && (
                                    <p className="text-brand text-xs text-center">Something went wrong. Please try again or WhatsApp us.</p>
                                )}
                            </>
                        )}
                    </form>

                    {/* Direct contact */}
                    <div className="lg:col-span-2 softles-card p-6 md:p-8 flex flex-col justify-center gap-5">
                        <h3 className="text-xl font-semibold text-ink">Prefer to reach out directly?</h3>
                        <div className="flex flex-col gap-3 text-ink-muted">
                            <a href="tel:+918954000202" className="flex items-center gap-3 hover:text-ink transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-brand-soft border border-brand/25 flex items-center justify-center text-brand">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                </span>
                                {PHONE_DISPLAY}
                            </a>
                            <a href="mailto:info@softles.in" className="flex items-center gap-3 hover:text-ink transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-brand-soft border border-brand/25 flex items-center justify-center text-brand">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </span>
                                info@softles.in
                            </a>
                        </div>
                        <p className="text-ink-faint text-xs leading-relaxed">
                            Or tap the WhatsApp button in the corner — it&apos;s the fastest way to reach us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
