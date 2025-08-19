// FILE: src/components/home/BrandShowcase.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    name: 'Willard Batteries',
    logoUrl: '/images/logo-willard.png',
    href: '/brands/willard',
    width: 140,
    height: 40
  },
  {
    name: 'Exide Batteries',
    logoUrl: '/images/brand-exide.jpg',
    href: '/brands/exide',
    width: 130,
    height: 40
  },
  {
    name: 'Novax Premium Batteries',
    logoUrl: '/images/logo-novax.png',
    href: '/brands/novax-premium',
    width: 150,
    height: 40
  },
  {
    name: 'Enertec Motorcycle Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder - replace when you have the Enertec logo
    href: '/brands/enertec',
    width: 140,
    height: 40
  },
  {
    name: 'Global Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder - replace with your own Global Batteries logo
    href: '/brands/global',
    width: 150,
    height: 40
  },
];

const BrandShowcase = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
          Featuring South Africa's Most Trusted Brands
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 justify-items-center">
          {brands.map((brand) => (
            <Link key={brand.name} href={brand.href} className="flex items-center justify-center">
              <Image
                src={brand.logoUrl}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                style={{ objectFit: 'contain' }}
                className="filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
                unoptimized={true} 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;