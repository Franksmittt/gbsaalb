// FILE: src/app/brands/page.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
// ESLINT FIX: Removed unused 'Icon' import
// import Icon from '@/components/ui/Icon';

// --- Data for the Brands Page ---
const brandsData = [
    { name: 'Novax Premium', logoUrl: '/images/logo-novax.png', tagline: 'The pinnacle of performance and reliability.', category: 'Premium Automotive', href: '/brands/novax-premium', featured: true },
    { name: 'Willard', logoUrl: '/images/logo-willard.png', tagline: 'The power of technology, built to last.', category: 'Premium Automotive', href: '#', featured: false },
    { name: 'Exide', logoUrl: '/images/logo-exide.png', tagline: 'Trusted performance for every journey.', category: 'Automotive', href: '#', featured: false },
    { name: 'Varta', logoUrl: 'https://placehold.co/150x60/FFFFFF/333333?text=Varta', tagline: 'Engineered in Germany for ultimate power.', category: 'Premium Automotive', href: '#', featured: false },
    { name: 'Novax', logoUrl: '/images/logo-novax.png', tagline: 'Reliable power for the everyday drive.', category: 'Automotive', href: '#', featured: false },
    { name: 'Global Batteries', logoUrl: '/images/logo-global.png', tagline: 'Quality and value you can depend on.', category: 'Automotive', href: '#', featured: false },
    { name: 'Enertec', logoUrl: '/images/logo-enertec.png', tagline: 'The trusted choice for motorcycle power.', category: 'Motorcycle', href: '#', featured: false },
    { name: 'Discover', logoUrl: 'https://placehold.co/150x60/FFFFFF/333333?text=Discover', tagline: 'Engineered for deep cycle and solar applications.', category: 'Deep Cycle & Solar', href: '#', featured: false },
];

const categories = ['All Brands', 'Premium Automotive', 'Automotive', 'Motorcycle', 'Deep Cycle & Solar'];

const BrandCard = ({ brand }: { brand: typeof brandsData[0] }) => (
    // TAILWIND FIX: Removed redundant 'block' class
    <Link href={brand.href} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border flex flex-col">
        <Image 
            src={brand.logoUrl}
            alt={`${brand.name} Logo`}
            width={150}
            height={60}
            className="h-16 mx-auto mb-4 object-contain"
        />
        <p className="text-center text-gray-600 group-hover:text-navy-800 transition-colors flex-grow">{brand.tagline}</p>
        <span className="text-center text-navy-800 font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
    </Link>
);

export default function BrandsPage() {
    
    const [activeCategory, setActiveCategory] = useState('All Brands');

    useEffect(() => {
        document.title = 'Our Brands | Global Batteries Alberton';
    }, []);

    const featuredBrand = brandsData.find(b => b.featured);
    const filteredBrands = useMemo(() => 
        brandsData.filter(brand => 
            !brand.featured && (activeCategory === 'All Brands' || brand.category === activeCategory)
        ), 
    [activeCategory]);

    return (
        <div className="bg-gray-50">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">Our Premier Battery Brands</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">We are the sole retailer offering such a vast scope of different battery brands under one roof, ensuring you find the perfect power solution for your needs.</p>
                    </div>
                </div>

                {/* Featured Brand Spotlight */}
                {featuredBrand && (
                    <div className="bg-navy-800 py-16 text-white">
                        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <p className="font-semibold text-navy-400 mb-2">Featured Brand</p>
                                <h2 className="text-4xl font-bold mb-4">{featuredBrand.name}</h2>
                                <p className="text-lg text-navy-300 mb-6">{featuredBrand.tagline}</p>
                                <Link href={featuredBrand.href} className="bg-white text-navy-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300">
                                    Explore Novax Premium
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Image 
                                    src="/images/brand-novax-premium.jpg"
                                    alt="A Novax Premium battery"
                                    width={500}
                                    height={500}
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* NEW: Our Brand Philosophy Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Brand Philosophy</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Not all batteries are created equal. At Global Batteries Alberton, we&apos;ve meticulously curated our brand selection to offer a solution for every need and budget, without compromising on quality. We partner directly with trusted suppliers to bring you brands known for their reliability, longevity, and performance under demanding South African conditions. Whether you need a premium battery for a high-performance vehicle or a dependable, budget-friendly option, our collection represents the best in the industry.
                        </p>
                    </div>
                </div>
                
                {/* Brand Grid & Filters */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map(category => (
                                <button 
                                    key={category} 
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === category ? 'bg-navy-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200 border'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredBrands.map(brand => (
                                <BrandCard key={brand.name} brand={brand} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* NEW: Brand Comparison Snapshot */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Brand Comparison Snapshot</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-4 bg-gray-100 font-bold text-sm text-gray-600 border-b-2 border-gray-200">Tier</th>
                                        <th className="py-3 px-4 bg-gray-100 font-bold text-sm text-gray-600 border-b-2 border-gray-200">Best For</th>
                                        <th className="py-3 px-4 bg-gray-100 font-bold text-sm text-gray-600 border-b-2 border-gray-200">Warranty</th>
                                        <th className="py-3 px-4 bg-gray-100 font-bold text-sm text-gray-600 border-b-2 border-gray-200">Example Brands</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 border-b border-gray-200 font-semibold text-navy-800">Premium Automotive</td>
                                        <td className="py-3 px-4 border-b border-gray-200">High-performance & luxury vehicles</td>
                                        <td className="py-3 px-4 border-b border-gray-200">24-26 Months</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Novax Premium, Willard, Varta</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 border-b border-gray-200 font-semibold text-navy-800">Standard Automotive</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Everyday driving & value</td>
                                        <td className="py-3 px-4 border-b border-gray-200">12-24 Months</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Exide, Novax, Global</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 border-b border-gray-200 font-semibold text-navy-800">Specialized</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Motorcycles, Solar & Deep Cycle</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Varies by product</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Enertec, Discover</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                {/* "Unsure?" CTA Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl font-bold mb-4">Not Sure Which Brand is Right for You?</h2>
                        {/* ESLINT FIX: Escaped apostrophe */}
                        <p className="text-lg text-gray-600 mb-6">Our experts are here to help. We&apos;ll listen to your needs and recommend the perfect battery to match your vehicle and your budget. No guesswork required.</p>
                        <Link href="/contact" className="bg-navy-800 text-white font-bold py-3 px-8 rounded-md hover:bg-navy-700 transition duration-300">
                            Get Expert Advice
                        </Link>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
