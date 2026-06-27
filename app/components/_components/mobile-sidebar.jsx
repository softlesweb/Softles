import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/SoftLes.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet.jsx";


export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleSectionClick = (e, sectionId) => {
        if (pathname === "/") {
            e.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition" aria-label="Open navigation menu">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-[#191C26] text-[#FFFFFF] flex flex-col items-center p-6">
                <Link href="/">
                    <Image src={Logo} alt="Softles Logo"/>
                </Link>
                <div className="w-full flex flex-col items-center justify-start text-base leading-5 gap-10 mt-14 font-semibold flex-grow">
                    <ul className="flex flex-col items-center justify-start gap-8">
                        <li className="hover:text-[#DC4242] transition-colors">
                            <Link href="/#about" onClick={e => handleSectionClick(e, "about")} tabIndex={0} className="focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">About Us</Link>
                        </li>
                        <li className="hover:text-[#DC4242] transition-colors">
                            <Link href="/#services" onClick={e => handleSectionClick(e, "services")} tabIndex={0} className="focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Services</Link>
                        </li>
                        <li className="hover:text-[#DC4242] transition-colors">
                            <Link href="/wordpress-development" onClick={() => setOpen(false)} tabIndex={0} className="focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">WordPress Development</Link>
                        </li>
                        <li className="hover:text-[#DC4242] transition-colors">
                            <Link href="/shopify-development" onClick={() => setOpen(false)} tabIndex={0} className="focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Shopify Development</Link>
                        </li>
                    </ul>
                    <div className="mt-auto w-full flex justify-center">
                        <Link href="/#book-call" onClick={e => handleSectionClick(e, "book-call")} className="w-full max-w-xs">
                            <button className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none ">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[20px] py-[5px] text-sm font-medium text-white backdrop-blur-3xl">
                                    Book a Discovery Call
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
