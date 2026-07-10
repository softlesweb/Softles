"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// WhatsApp is the primary communication channel.
const WHATSAPP_NUMBER = "918954000202";
const PHONE_DISPLAY = "+91 89540 00202";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [sending, setSending] = useState(false);

    const valid = name.trim() !== "" && whatsapp.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!valid || sending) return;
        setSending(true);

        // Capture the lead in the background (same EmailJS template as before)
        emailjs
            .send(
                "service_db4zwz8",
                "template_oiu2ped",
                {
                    user_name: name,
                    user_phone: whatsapp,
                    user_email: "",
                    user_message: `WhatsApp lead from softles.in homepage\nName: ${name}\nWhatsApp: ${whatsapp}`,
                },
                "oo80cgXuN0GQTNqFm"
            )
            .catch((err) => console.error(err));

        // Open WhatsApp with a prefilled message — primary action, don't wait on email
        const text = `Hi SoftLes, I'm ${name}. I'd like to talk about my project.`;
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        );
        setSending(false);
    };

    return (
        <section id="book-call" className="w-full py-12 md:py-20 px-0 flex flex-col justify-center place-content-between bg-[#12131c] border-t border-b border-[#2a2e40]">
            <div className="service-page-container mx-auto w-full flex flex-col">
                {/* Header */}
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                        <Image src={Separator} alt="separator" width={0} height={0} sizes="(max-width: 768px) 20vw, (max-width: 1024px) 10vw, 6vw" className="object-cover overflow-hidden h-[2px] w-auto mr-[10px]" />
                        <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
                            Get in touch
                        </p>
                    </div>
                    <span className="mt-2 mb-2 lg:mb-0 service-section-heading text-[#FFFFFF]">Let&apos;s talk on WhatsApp</span>
                    <span className="text-sm sm:text-base text-[#BCC1CA]/80 mt-2 max-w-2xl leading-relaxed">
                        Tell us who you are and we&apos;ll continue on WhatsApp — the fastest way to
                        reach us. No long forms, no waiting for callbacks.
                    </span>
                </div>

                {/* WhatsApp-first contact */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                    {/* Form → WhatsApp */}
                    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl border border-[#2a2e40] p-6 sm:p-8 flex flex-col gap-4" autoComplete="off">
                        <h3 className="text-xl font-bold text-white">Start the conversation</h3>
                        <input
                            type="text"
                            placeholder="Your name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] focus:outline-none text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm"
                        />
                        <input
                            type="tel"
                            placeholder="Your WhatsApp number *"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            required
                            className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] focus:outline-none text-white placeholder-[#777] rounded-lg px-4 py-3 text-sm"
                        />
                        <button
                            type="submit"
                            disabled={!valid || sending}
                            className="mt-2 w-full py-3.5 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.043z" />
                            </svg>
                            {sending ? "Opening WhatsApp…" : "Chat with us on WhatsApp"}
                        </button>
                        <p className="text-[#BCC1CA]/50 text-xs text-center">
                            Opens WhatsApp with a prefilled message — send it and we&apos;ll reply within hours.
                        </p>
                    </form>

                    {/* Direct contact */}
                    <div className="bg-gradient-to-br from-[#191C26] to-[#181B23] rounded-2xl border border-[#2a2e40] p-6 sm:p-8 flex flex-col justify-center gap-5">
                        <h3 className="text-xl font-bold text-white">Prefer to reach out directly?</h3>
                        <div className="flex flex-col gap-3 text-[#BCC1CA]">
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" /></svg>
                                </span>
                                WhatsApp: {PHONE_DISPLAY}
                            </a>
                            <a href="tel:+918954000202" className="flex items-center gap-3 hover:text-[#DC4242] transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-[#DC4242]/10 border border-[#DC4242]/30 flex items-center justify-center text-[#DC4242]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                </span>
                                Call: {PHONE_DISPLAY}
                            </a>
                            <a href="mailto:info@softles.in" className="flex items-center gap-3 hover:text-[#DC4242] transition-colors">
                                <span className="w-9 h-9 rounded-lg bg-[#DC4242]/10 border border-[#DC4242]/30 flex items-center justify-center text-[#DC4242]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </span>
                                info@softles.in
                            </a>
                        </div>
                        <p className="text-[#BCC1CA]/50 text-xs">
                            WhatsApp is our primary channel — it&apos;s where you&apos;ll get the fastest response.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
