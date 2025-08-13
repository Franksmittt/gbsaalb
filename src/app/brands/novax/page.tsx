// FILE: src/app/brands/novax/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';

// --- Page-Specific Data ---
const novaxProducts = [
  { id: 'novax-616', name: 'NOVAX 616 Battery', specs: '12V 45Ah 330CCA', price: 'R1,150.00', imageUrl: '/images/brand-novax.jpg' },
  { id: 'novax-628', name: 'NOVAX 628 Battery', specs: '12V 50Ah 380CCA', price: 'R1,299.00', imageUrl: '/images/brand-novax.jpg' },
  { id: 'novax-639', name: 'NOVAX 639 Battery', specs: '12V 60Ah 475CCA', price: 'R1,450.00', imageUrl: '/images/brand-novax.jpg' },
  { id: 'novax-652', name: 'NOVAX 652 Battery', specs: '12V 65Ah 520CCA', price: 'R1,599.00', imageUrl: '/images/brand-novax.jpg' },
];

const ProductCard = ({ product }: { product: typeof novaxProducts[0] }) => (
    <Link href={`/products/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border">
        <div className="overflow-hidden rounded-t-lg">
            <Image 
                src={product.imageUrl}
                alt={`Image of ${product.name}`}
                width={400}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-navy-800 transition-colors">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.specs}</p>
            <div className="flex-grow" />
            <div className="flex items-center justify-between mt-4">
                 <p className="font-bold text-xl text-navy-800">{product.price}</p>
                 <span className="text-navy-800 font-bold text-sm">View Details</span>
            </div>
        </div>
    </Link>
);

const AdvantageCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="text-center">
        <Icon path={iconPath} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default function NovaxPage() {
    
    React.useEffect(() => {
        document.title = 'Novax Batteries | Reliable Power, Great Value | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative bg-gray-800 text-white py-20">
                     <Image 
                        src="/images/contact-hero.jpg"
                        alt="Abstract background of a city road"
                        fill
                        style={{objectFit: 'cover'}}
                        className="opacity-20"
                    />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Image src="/images/brand-novax.jpg" alt="Novax Batteries Logo" width={250} height={100} className="mx-auto mb-4 bg-white p-3 rounded-lg" />
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">The Smart Choice for Your Drive</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Novax batteries offer the perfect balance of reliable performance and outstanding value for everyday vehicles.</p>
                    </div>
                </div>

                {/* The Novax Advantage Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">The Novax Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <AdvantageCard 
                                iconPath="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Excellent Value"
                                description="Get dependable starting power and a solid warranty without breaking the bank. The perfect budget-friendly option."
                            />
                            <AdvantageCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Proven Performance"
                                description="Built with maintenance-free technology to provide reliable service for a wide range of popular vehicles in SA."
                            />
                            <AdvantageCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="18-Month Warranty"
                                description="Our standard Novax line comes with a competitive 18-month warranty, offering great protection for your purchase."
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Shop Novax Batteries</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {novaxProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Novax FAQs</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">What is the difference between Novax and Novax Premium?</h3>
                                <p className="text-gray-600 mt-1">The standard Novax line offers great value with an 18-month warranty. Novax Premium is our top-tier offering with higher performance specs, advanced calcium technology for a longer life, and an extended 26-month warranty.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">Is a Novax battery the right choice for my car?</h3>
                                <p className="text-gray-600 mt-1">If you have a standard vehicle without Start-Stop technology and are looking for a reliable, new battery on a budget, the Novax line is an excellent and popular choice among our customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}