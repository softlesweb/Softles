"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="snap-start bg-surface border-t border-line text-ink-muted py-16 md:py-20 px-5 md:px-16">
            <div className="service-page-container flex flex-col gap-14 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-10">
                    {/* About */}
                    <div className="flex flex-col gap-y-6 w-full lg:col-span-2">
                        <Link href="/" className="inline-block">
                            <Image src={"/SoftLes.png"} alt="Logo" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[48px] w-auto"/>
                        </Link>
                        <p className="text-sm leading-relaxed text-ink-muted max-w-[42ch]">
                            SoftLes is a small team that builds WordPress and Shopify sites for growing brands. We handle the design, the development, and the automation that ties it together. If you have a project in mind, book a call and we&apos;ll talk it through.
                        </p>
                    </div>

                    {/* WordPress services */}
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-ink-faint text-xs uppercase tracking-[0.2em]">
                            <Link href="/wordpress-development" className="hover:text-brand transition-colors">WordPress</Link>
                        </h3>
                        <ul className="space-y-3 text-sm text-ink-muted">
                            <li><Link href="/wordpress-development" className="hover:text-brand transition-colors">Custom Theme Development</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition-colors">Headless WordPress</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition-colors">Plugins &amp; WooCommerce</Link></li>
                            <li><Link href="/wordpress-development" className="hover:text-brand transition-colors">Integrations &amp; Automation</Link></li>
                        </ul>
                    </div>

                    {/* Shopify services */}
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-ink-faint text-xs uppercase tracking-[0.2em]">
                            <Link href="/shopify-development" className="hover:text-brand transition-colors">Shopify</Link>
                        </h3>
                        <ul className="space-y-3 text-sm text-ink-muted">
                            <li><Link href="/shopify-development" className="hover:text-brand transition-colors">Custom Theme Development</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition-colors">Headless &amp; Hydrogen</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition-colors">Shopify Apps</Link></li>
                            <li><Link href="/shopify-development" className="hover:text-brand transition-colors">Integrations &amp; Automation</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-ink-faint text-xs uppercase tracking-[0.2em]">Resources</h3>
                        <ul className="space-y-3 text-sm text-ink-muted">
                            <li><Link href="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
                            <li><Link href="/blog" className="hover:text-brand transition-colors">Shopify &amp; WordPress guides</Link></li>
                            <li><Link href="/#book-call" className="hover:text-brand transition-colors">Talk to us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-ink-faint text-xs uppercase tracking-[0.2em]">Contact</h3>
                        <div className="flex flex-col items-start gap-3 text-sm">
                            <a href="mailto:info@softles.in?cc=hr@softles.in" className="text-ink-muted hover:text-brand transition-colors">
                                info@softles.in
                            </a>
                            <a href="mailto:hr@softles.in?cc=info@softles.in" className="text-ink-muted hover:text-brand transition-colors">
                                hr@softles.in
                            </a>
                            <a href="tel:+918954000202" className="text-ink-muted hover:text-brand transition-colors">
                                +91 89540 00202
                            </a>
                            <a href="tel:+919990548795" className="text-ink-muted hover:text-brand transition-colors">
                                +91 99905 48795
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-line">
                    <p className="text-ink-faint text-sm text-center md:text-left">
                        &quot;Do something today that your future self will thank you for.&quot;
                    </p>
                    <div className="flex gap-5">
                        <Link href="https://www.facebook.com/softlesweb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Image src={"/FacebookIcon.png"} alt="Facebook" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"/>
                        </Link>
                        <Link href="https://x.com/softlesindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Image src={"/TwitterIcon.png"} alt="Twitter" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/softlesindia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Image src={"/LinkedInIcon.png"} alt="LinkedIn" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"/>
                        </Link>
                        <Link href="https://www.instagram.com/softlesindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Image src={"/InstagramIcon.png"} alt="Instagram" width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"/>
                        </Link>
                    </div>
                    <p className="text-ink-faint text-xs text-center md:text-right">
                        &copy; {new Date().getFullYear()} SoftLes - Web Design Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
