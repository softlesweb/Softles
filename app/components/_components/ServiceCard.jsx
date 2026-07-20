import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServiceCard(props) {
    const altText = props.alt || `Service icon for ${props.name}`;

    return (
        <Link
            href={props.link || "#"}
            passHref
            className={`relative overflow-hidden h-[280px] w-[280px] p-[24px] lg:-mr-10 rounded-full bg-surface ${props.bg} ${props.hover} flex flex-col items-center justify-center gap-y-3 text-center group border border-line hover:border-brand/50 hover:shadow-[0_20px_50px_rgba(255,77,87,0.15)] hover:-translate-y-3 focus-visible:ring-4 focus-visible:ring-brand transition-all duration-300 ease-out outline-none`}
            style={{ zIndex: props.zIndex }}
            aria-label={`Learn more about ${props.name}`}
            tabIndex={0}
        >

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,77,87,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-y-3">

                <div className="w-[76px] h-[76px] rounded-full bg-brand/10 border border-brand/25 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-brand/50">
                    <Image
                        src={props.source}
                        alt={altText}
                        width={50}
                        height={50}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <span className="text-ink text-xl leading-[30px] font-bold group-hover:text-brand transition-colors duration-300">
                    {props.name}
                </span>

                <p className="text-ink-muted font-normal text-sm leading-tight px-3">
                    {props.description}
                </p>

            </div>

        </Link>
    )
}