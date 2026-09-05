import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServiceCard(props) {
    const altText = props.alt || `Service icon for ${props.name}`;

    return (
        <Link
            href={props.link || "#"}
            passHref
            className={`relative overflow-hidden h-[280px] w-[280px] p-[24px] lg:-mr-10 rounded-full bg-[#111319] ${props.bg} ${props.hover} flex flex-col items-center justify-center gap-y-3 text-center group border border-[#2E3446] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-24px_48px_rgba(0,0,0,0.35)] hover:border-[#FF4D57]/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(255,77,87,0.15)] hover:-translate-y-3 focus-visible:ring-4 focus-visible:ring-[#FF4D57] transition-all duration-300 ease-out outline-none`}
            style={{ zIndex: props.zIndex }}
            aria-label={`Learn more about ${props.name}`}
            tabIndex={0}
        >

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,77,87,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-y-3">

                <div className="w-[76px] h-[76px] rounded-full bg-[rgba(255,77,87,0.08)] border border-[rgba(255,77,87,0.25)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF4D57]/50">
                    <Image
                        src={props.source}
                        alt={altText}
                        width={50}
                        height={50}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                {props.step && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF4D57]/80 -mb-1">
                        Step {props.step}
                    </span>
                )}
                <span className="text-[#FFFFFF] text-xl leading-[30px] font-bold group-hover:text-[#FF4D57] transition-colors duration-300">
                    {props.name}
                </span>

                <p className="text-[#C7CCD6] font-normal text-sm leading-tight px-3">
                    {props.description}
                </p>

            </div>

        </Link>
    )
}