"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import Divy from "@/public/Divy.jpg";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';



export default function ContactSection() {
    const [userName, setUserName] = useState('')
    const [userMail, setUserMail] = useState('')
    const [loading, setLoading] = useState(false)

    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current) return;
        setLoading(true);

        emailjs
            .sendForm(
                'service_db4zwz8',      // ← replace
                'template_oiu2ped',     // ← replace
                form.current,
                'oo80cgXuN0GQTNqFm'       // ← replacecd sof
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thanks! We’ll be in touch soon.');
                    // optional: reset form
                    form.current?.reset();
                    setUserName('');
                    setUserMail('');
                },
                (err) => {
                    console.error(err);
                    setLoading(false);
                    alert('Sorry, something went wrong. Try again.');
                }
            );
    };

    const isFormValid = () => {
        return (
            userName.trim() !== '' &&
            userMail.trim() !== ''
        )
    }
    return (
        <section id="book-call" className="w-full py-12 md:py-20 px-0 flex flex-col justify-center place-content-between bg-[#12131c] border-t border-b border-[#2a2e40]">
            <div className="service-page-container mx-auto w-full flex flex-col gap-12">
                <div className="flex flex-col">
                    <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                        <Image src={Separator} alt="separator" width={0} height={0} sizes="(max-width: 768px) 20vw, (max-width: 1024px) 10vw, 6vw" className="object-cover overflow-hidden h-[2px] w-auto mr-[10px]" />
                        <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
                            Get In Touch
                        </p>
                    </div>
                    <span className="mt-2 mb-4 lg:mb-0 service-section-heading text-[#FFFFFF]">Book a Discovery Session</span>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-0 mt-12 justify-center items-stretch">
                    {/* Book a Discovery Session via Google Meet */}
                <div className="bg-gradient-to-br from-[#191C26] via-[#221429] to-[#191C26] rounded-2xl md:rounded-r-none md:rounded-l-2xl mb-5 md:mb-0 shadow-lg flex flex-col justify-between p-0 border border-[#23263a] w-full md:w-1/3 max-w-none">
                    <div className="flex flex-col items-center pt-8 pb-4 px-3 md:px-6 h-full">
                        <div className="relative">
                            <Image src={Divy} alt="Expert Image" className="rounded-xl w-[180px] h-[180px] object-cover border-4 border-[#221429] shadow-md" />
                        </div>
                        <div className="mt-4 bg-[#221429] rounded-xl px-5 py-2 shadow-lg flex flex-col items-center">
                            <p className="text-lg font-semibold text-white">Divyansh Veermanya</p>
                            <p className="text-sm font-normal text-[#bdbdbd]">Product Lead</p>
                        </div>
                        <div className="bg-[#221429] px-8 py-6 flex flex-col items-center gap-3 border-t border-[#23263a] w-full mt-8 rounded-b-2xl">
                            <h2 className="font-bold text-2xl text-white text-center">Book a Discovery Session</h2>
                            <p className="text-base font-medium text-[#bdbdbd] text-center">
                                Instantly schedule a call with our expert.<br />
                                <span className="text-xs text-[#888]">Powered by <span className="font-semibold">Google Meet</span></span>
                            </p>
                            <a
                                href="https://calendar.google.com/calendar/u/0?cid=ZGl2eWFuc2gudmVlcm1hbnlhQGdtYWlsLmNvbQ" // ← put your own public booking URL here
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 py-2 px-8 rounded-full border border-[#DC4242] text-[#DC4242] text-base font-semibold hover:bg-[#DC4242] hover:text-white transition-colors duration-200 shadow-sm text-center"
                            >
                                Book via Google Meet
                            </a>
                            <span className="text-xs text-[#bdbdbd] mt-2">Email: <a href="mailto:info@softles.in?cc=hr@softles.in" className="underline hover:text-[#DC4242] transition">info@softles.in</a>, <a href="mailto:hr@softles.com?cc=info@softles.in" className="underline hover:text-[#DC4242] transition">hr@softles.in</a></span>
                        </div>
                    </div>
                </div>
                {/* Submit details for callback */}
                <div className="bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#191C26] rounded-2xl md:rounded-l-none rounded-r-2xl shadow-lg flex flex-col justify-center p-3 md:p-8 border-t border-b border-r border-[#23263a] w-full md:w-2/3 max-w-none">
                    <form className="w-full" ref={form} onSubmit={sendEmail} autoComplete="off">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Let us reach out to you</h3>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="name" className="text-[#bdbdbd]">Name <span className="text-[#DC4242]">*</span></Label>
                            <Input id="name" name="user_name" placeholder="John Doe" type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="email" className="text-[#bdbdbd]">Email Address <span className="text-[#DC4242]">*</span></Label>
                            <Input id="email" name="user_email" placeholder="johndoe@gmail.com" type="email"
                                value={userMail}
                                onChange={(e) => setUserMail(e.target.value)}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="phone" className="text-[#bdbdbd]">Phone Number</Label>
                            <Input id="phone" name="user_phone" placeholder="+91 98765 43210" type="tel"
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="message" className="text-[#bdbdbd]">Message (Optional)</Label>
                            <textarea
                                id="message"
                                name="user_message"
                                placeholder="Tell us about your needs..."
                                rows={3}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg px-3 py-2 resize-none"
                            />
                        </LabelInputContainer>
                        <button
                            className={cn(
                                "relative group/btn mt-8 w-full py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200",
                                "bg-gradient-to-br from-[#DC4242] to-[#b92d2d] border border-[#DC4242] text-white shadow-lg hover:from-[#b92d2d] hover:to-[#DC4242] hover:scale-[1.03]",
                                loading ? "opacity-60 cursor-not-allowed" : ""
                            )}
                            value='send'
                            disabled={!isFormValid() || loading}
                            type="submit"
                        >
                            {loading ? (
                                <span className="animate-pulse">Sending ...</span>
                            ) : (
                                <>
                                    <Send size={20} strokeWidth={2} />
                                    Submit Details
                                </>
                            )}
                        </button>
                        <p className="text-xs text-[#bdbdbd] mt-4 text-center">
                            We&apos;ll reach out to you to schedule your session.
                        </p>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
