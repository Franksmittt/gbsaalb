// FILE: src/components/home/BrandShowcase.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Updated and expanded list of brands
const brands = [
  {
    name: 'Willard Batteries',
    logoUrl: '/images/logo-willard.png',
    href: '/brands/willard',
  },
  {
    name: 'Exide Batteries',
    logoUrl: '/images/brand-exide.jpg',
    href: '/brands/exide',
  },
  {
    name: 'Novax Premium Batteries',
    logoUrl: '/images/logo-novax.png',
    href: '/brands/novax-premium',
  },
  {
    name: 'Novax Batteries',
    logoUrl: '/images/logo-novax.jpg', // Using alternate logo
    href: '/brands/novax',
  },
  {
    name: 'Global Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder
    href: '/brands/global',
  },
  {
    name: 'Enertec Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder
    href: '/brands/enertec',
  },
  {
    name: 'Royal Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder
    href: '/brands/royal',
  },
  {
    name: 'Forbatt Batteries',
    logoUrl: '/images/logo-placeholder.png', // Placeholder
    href: '/brands/forbatt',
  },
];

const BrandShowcase = () => {
  return (
    <section className="w-full bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featuring South Africa's Most Trusted Battery Brands</h2>
                <p className="text-slate-400 mt-4 text-lg max-w-3xl mx-auto">As official stockists for <strong>Willard</strong>, <strong>Exide</strong>, and <strong>Novax</strong>, we provide authentic products backed by nationwide warranties and expert fitment.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {brands.map((brand) => (
                    <Link key={brand.name} href={brand.href} className="brand-card p-8 rounded-lg flex items-center justify-center aspect-video">
                        <Image
                            src={brand.logoUrl}
                            alt={`${brand.name} logo`}
                            width={200}
                            height={100}
                            className="brand-logo max-h-16 w-auto object-contain"
                            unoptimized={true} 
                        />
                    </Link>
                ))}
            </div>
        </div>
    </section>
  );
};

export default BrandShowcase;