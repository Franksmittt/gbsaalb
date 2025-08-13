// FILE: src/components/BrandLogosSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BrandLogosSection = () => (
    <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-gray-600 text-sm font-bold uppercase tracking-widest mb-8">
                {/* FIX: Escaped the apostrophe to resolve linting error */}
                Stockists of South Africa&apos;s Most Trusted Brands
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-6">
                <Link href="/brands/willard">
                    <Image src="/images/brand-willard.jpg" alt="Willard Batteries Logo" width={150} height={60} className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/brands/exide">
                    <Image src="/images/brand-exide.jpg" alt="Exide Batteries Logo" width={150} height={60} className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/brands/novax-premium">
                    <Image src="/images/brand-novax-premium.jpg" alt="Novax Premium Batteries Logo" width={150} height={60} className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/brands/enertec">
                     <Image src="/images/logo-enertec.png" alt="Enertec Batteries Logo" width={150} height={60} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
                 <Link href="/brands">
                    <Image src="/images/logo-global.png" alt="Global Batteries Logo" width={150} height={60} className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                </Link>
            </div>
        </div>
    </div>
);

export default BrandLogosSection;