// FILE: src/components/brands/BrandHero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandHeroProps {
    logoSrc: string;
    brandName: string;
    tagline: string;
    backgroundImg: string;
}

export default function BrandHero({ logoSrc, brandName, tagline, backgroundImg }: BrandHeroProps) {
    return (
        // FIX: Added bg-gray-900 to ensure a dark background is always present for text contrast.
        <div className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-center items-center text-white text-center bg-gray-900">
            <Image 
                src={backgroundImg}
                alt="Abstract high-tech energy background"
                fill
                style={{objectFit: 'cover'}}
                // FIX: Switched from 'brightness' to 'opacity' for a more reliable overlay effect.
                className="opacity-20"
                priority
            />
            <div className="relative z-10 p-4">
                <Image 
                    src={logoSrc} 
                    alt={`${brandName} Logo`} 
                    width={250} 
                    height={100} 
                    className="mx-auto mb-6 drop-shadow-lg"
                />
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                    {tagline}
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto drop-shadow">
                    Engineered for South Africa. Backed by an industry-leading 26-month warranty.
                </p>
                {/* FIX: Redesigned button to use the approved Black, Navy Blue, and White palette. */}
                <Link 
                    href="#products" 
                    className="mt-8 inline-block bg-transparent border-2 border-white text-white 
                               font-bold py-3 px-10 rounded-md 
                               transition-all duration-300 text-lg shadow-xl 
                               hover:bg-white hover:text-gray-900 hover:scale-105"
                >
                    View The Range
                </Link>
            </div>
            {/* Animated scroll down indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}