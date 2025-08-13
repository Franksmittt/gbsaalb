// FILE: src/components/home/FeaturedBrands.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const brands = [
    { name: 'Novax Premium Batteries', href: '/brands/novax-premium', logoUrl: '/images/logo-novax-premium.png', warranty: '26 Month Warranty' },
    { name: 'Willard Batteries', href: '/brands/willard', logoUrl: '/images/logo-willard.png', warranty: '25 Month Warranty' },
    { name: 'Exide Batteries', href: '/brands/exide', logoUrl: '/images/logo-exide.png', warranty: '24 Month Warranty' },
    { name: 'Novax Batteries', href: '/brands/novax', logoUrl: '/images/logo-novax.png', warranty: '18 Month Warranty' },
    { name: 'Global Batteries', href: '/brands', logoUrl: '/images/logo-global.png', warranty: '12 Month Warranty' },
];

const BrandCard = ({ brand }: { brand: typeof brands[0] }) => (
  <Link 
    href={brand.href} 
    // FIX: Removed the redundant 'block' class as 'flex' handles the display property.
    className="group bg-gray-800/50 rounded-lg backdrop-blur-sm 
               border border-gray-700 
               transition-all duration-300 
               hover:-translate-y-2 hover:border-navy-400 
               hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] 
               flex flex-col p-6 text-center"
  >
    <div className="h-24 flex items-center justify-center">
        <Image 
            src={brand.logoUrl}
            alt={`${brand.name} Logo`}
            width={150}
            height={60}
            className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-white">{brand.name}</h3>
      <p className="text-sm font-semibold text-navy-400 mt-1">{brand.warranty}</p>
    </div>
    <div className="mt-6">
        <span className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors flex justify-between items-center">
            View Range
            <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5 transition-transform group-hover:translate-x-1"/>
        </span>
    </div>
  </Link>
);

export default function FeaturedBrands() {
    return (
        <div className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">South Africa's Most Trusted Battery Brands</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We stock a comprehensive range of leading brands, each backed by a solid nationwide warranty.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {brands.map(brand => (
                        <BrandCard key={brand.name} brand={brand} />
                    ))}
                </div>
            </div>
        </div>
    );
}