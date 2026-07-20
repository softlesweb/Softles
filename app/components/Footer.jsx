"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="snap-start bg-[#18181B] text-white pt-5 sm:pt-12 pb-6 px-5 md:px-16">
            <div className="flex flex-col gap-5 w-full service-page-container border-b border-[#27272A] pb-10">
                <Link href="/">
                    <Image src={"/SoftLes.png"} alt="Logo" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[54px] w-auto"/>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                    {/* About */}
                    <div className="flex flex-col gap-y-3 w-full lg:col-span-2">
                        <h3 className="font-semibold text-base mb-1">About</h3>
                        <p className="text-sm text-ink-muted">
                            SoftLes is a small team that builds WordPress and Shopify sites for growing brands. We handle the design, the development, and the automation that ties it together. If you have a project in mind, book a call and we&apos;ll talk it through.
                        </p>
                    </div>

                    {/* WordPress services */}
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-semibold text-base mb-1">
                            <Link href="/wordpress-development" className="hover:text-brand transition">WordPress</Link>
                        </h3>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li><Link href="/wordpress-development" className="hover:text-brand transition">Custom Theme Development</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition">Headless WordPress</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition">Plugins &amp; WooCommerce</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition">Integrations &amp; Automation</Link></li>
                        </ul>
                    </div>

                    {/* Shopify services */}
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-semibold text-base mb-1">
                            <Link href="/shopify-development" className="hover:text-brand transition">Shopify</Link>
                        </h3>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li><Link href="/shopify-development" className="hover:text-brand transition">Custom Theme Development</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition">Headless &amp; Hydrogen</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition">Shopify Apps</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition">Integrations &amp; Automation</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-semibold text-base mb-1">Resources</h3>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li><Link href="/blog" className="hover:text-brand transition">Blog</Link></li>
                            <li><Link href="/blog" className="hover:text-brand transition">Shopify &amp; WordPress guides</Link></li>
                            <li><Link href="/#book-call" className="hover:text-brand transition">Talk to us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-semibold text-base mb-1">Contact</h3>
                        <div className="flex flex-col items-start gap-2 text-sm">
                            <a href="mailto:info@softles.in?cc=hr@softles.in" className="font-medium underline hover:text-brand transition">
                                info@softles.in
                            </a>
                            <a href="mailto:hr@softles.in?cc=info@softles.in" className="font-medium underline hover:text-brand transition">
                                hr@softles.in
                            </a>
                            <a href="tel:+918954000202" className="font-medium underline hover:text-brand transition">
                                +91 89540 00202
                            </a>
                            <a href="tel:+919990548795" className="font-medium underline hover:text-brand transition">
                                +91 99905 48795
                            </a>
                        </div>
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
                    <ul className="space-y-2 text-ink-muted">
                        <li>
                            <Link href="/#about" className="hover:text-brand transition focus-visible:ring-2 focus-visible:ring-brand rounded">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-brand transition focus-visible:ring-2 focus-visible:ring-brand rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="/#work" className="hover:text-brand transition focus-visible:ring-2 focus-visible:ring-brand rounded">Our Work</Link>
                        </li>
                        <li>
                            <Link href="/#brochure" className="hover:text-brand transition focus-visible:ring-2 focus-visible:ring-brand rounded">Our Brochure</Link>
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
