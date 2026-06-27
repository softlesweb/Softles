"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <footer className="snap-start bg-[#18181B] text-white pt-5 sm:pt-12 pb-6 px-5 md:px-16">
            <div className="flex flex-col gap-5 w-full service-page-container border-b border-[#27272A] pb-10">
                <Link href="/">
                    <Image src={"/SoftLes.png"} alt="Logo" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[54px] w-auto"/>
                </Link>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* About */}
                    <div className="flex flex-col gap-y-3 w-full">
                        <h3 className="font-semibold text-base mb-1">About</h3>
                        <p className="text-sm text-[#D4D4D8]">
                            At Softles, we craft unique digital experiences by combining design, technology, and strategy. From innovative UI/UX to smart development and automation, our passionate team helps businesses grow online. Book a free discovery call and let’s build something remarkable together. Your vision, our creativity — powered by purpose.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-3 w-full">
                        <h3 className="font-semibold text-base mb-1">Contact</h3>
                        <div className="grid grid-cols-2 gap-5 w-full">
                            <div className="flex flex-col gap-x-2">
                                <h6 className="text-sm text-[#D4D4D8]">Email:</h6>
                                <div className="flex flex-col items-start">
                                    <a href="mailto:info@softles.com?cc=hr@softles.in" className="text-md font-medium underline hover:text-[#DC4242] transition">
                                        info@softles.in
                                    </a>
                                    <a href="mailto:hr@softles.in?cc=info@softles.in" className="text-md font-medium underline hover:text-[#DC4242] transition">
                                        hr@softles.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-x-2">
                                <h6 className="text-sm text-[#D4D4D8]">Phone:</h6>
                                <div className="flex flex-col items-start">
                                    <a href="tel:+918954000202" className="text-md font-medium underline hover:text-[#DC4242] transition">
                                        +918954000202
                                    </a>
                                    <a href="tel:+919990548795" className="text-md font-medium underline hover:text-[#DC4242] transition">
                                        +919990548795
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-base mb-3">Newsletter</h3>
                        <p className="text-sm text-[#D4D4D8] mb-3">Stay up to date with our latest news and offers.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="bg-[#23232A] border border-[#27272A] rounded px-3 py-2 text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#DC4242] transition"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#DC4242] hover:bg-[#b32e2e] transition text-white rounded px-4 py-2 font-semibold"
                            >
                                Subscribe
                            </button>
                            {submitted && (
                                <span className="text-green-400 text-xs mt-1">Thank you for subscribing!</span>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="service-page-container flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                <p className="text-[#A1A1AA] text-sm text-center md:text-left">
                    &quot;Do something today that your future self will thank you for.&quot;
                </p>
                <div className="flex gap-4 mt-2">
                    <Link href="https://www.facebook.com/softlesweb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Image src={"/FacebookIcon.png"} alt="Facebook" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-7 h-7 hover:scale-110 transition"/>
                    </Link>
                    <Link href="https://x.com/softlesindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Image src={"/TwitterIcon.png"} alt="Twitter" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-7 h-7 hover:scale-110 transition"/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/softlesindia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Image src={"/LinkedInIcon.png"} alt="LinkedIn" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-7 h-7 hover:scale-110 transition"/>
                    </Link>
                    <Link href="https://www.instagram.com/softlesindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Image src={"/InstagramIcon.png"} alt="Instagram" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-7 h-7 hover:scale-110 transition"/>
                    </Link>
                </div>
                <p className="text-[#a4a4b3] text-xs text-center md:text-right">
                    &copy; {new Date().getFullYear()} SoftLes - Web Design Company. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}



 {/* Navigation */}
                {/* <div>
                    <h3 className="font-semibold text-base mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-[#D4D4D8]">
                        <li>
                            <Link href="/#about" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="/#work" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Our Work</Link>
                        </li>
                        <li>
                            <Link href="/#brochure" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Our Brochure</Link>
                        </li>
                    </ul>
                </div> */}
                 {/* Map */}
                {/* <div className="flex flex-col gap-4">
                    <div className="rounded-lg overflow-hidden h-32 w-full">
                        <iframe
                            title="Google Maps Location of Softles"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.924964478238!2d-0.7573350076874479!3d51.29371402076245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742b842cb7a42d%3A0x1b1fd25cfaeb0a02!2sBrand%20House%2C%20Coombe%20way!5e0!3m2!1sen!2sin!4v1735461568255!5m2!1sen!2sin"
                            className="border-none w-full h-full"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div> */}
