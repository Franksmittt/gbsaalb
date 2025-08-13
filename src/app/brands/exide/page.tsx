// FILE: src/app/brands/exide/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';

// --- Page-Specific Data ---
const exideProducts = [
  { id: 'exide-619-efb', name: 'EXIDE 619 EFB Battery', specs: '12V 45Ah 420CCA', price: 'R1,850.00', imageUrl: '/images/brand-exide.jpg' },
  { id: 'exide-652', name: 'EXIDE 652 Car Battery', specs: '12V 65Ah 550CCA', price: 'R1,799.00', imageUrl: '/images/brand-exide.jpg' },
  { id: 'exide-658', name: 'EXIDE 658 Truck Battery', specs: '12V 105Ah 800CCA', price: 'R2,950.00', imageUrl: '/images/brand-exide.jpg' },
  { id: 'exide-628', name: 'EXIDE 628 Car Battery', specs: '12V 50Ah 430CCA', price: 'R1,599.00', imageUrl: '/images/brand-exide.jpg' },
];

const ProductCard = ({ product }: { product: typeof exideProducts[0] }) => (
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

export default function ExidePage() {
    
    React.useEffect(() => {
        document.title = 'Exide Batteries | OEM Quality & Performance | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative bg-gray-800 text-white py-20">
                    <Image 
                        src="/images/contact-hero.jpg"
                        alt="Abstract background of car technology"
                        fill
                        style={{objectFit: 'cover'}}
                        className="opacity-20"
                    />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Image src="/images/brand-exide.jpg" alt="Exide Batteries Logo" width={250} height={100} className="mx-auto mb-4 bg-white p-3 rounded-lg" />
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Original Equipment Excellence</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Trusted by the world&apos;s leading car manufacturers, Exide delivers cutting-edge technology and reliability.</p>
                    </div>
                </div>

                {/* The Exide Advantage Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">The Exide Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <AdvantageCard 
                                iconPath="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="OEM Trusted Quality"
                                description="Exide is a leading global supplier of batteries to original equipment manufacturers, guaranteeing factory-level quality."
                            />
                            <AdvantageCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Advanced EFB Technology"
                                description="Pioneers in Enhanced Flooded Battery (EFB) tech for modern Start-Stop vehicles, offering superior performance."
                            />
                            <AdvantageCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="24-Month Warranty"
                                description="Every Exide automotive battery sold by us comes with a solid 24-month warranty for your peace of mind."
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Shop Exide Batteries</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {exideProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Exide FAQs</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">Is Exide a good battery brand?</h3>
                                <p className="text-gray-600 mt-1">Yes, Exide is considered a top-tier brand globally. Their strong relationships with car manufacturers like VW, BMW, and Mercedes-Benz mean their batteries meet the highest quality standards.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">What is an EFB battery and do I need one?</h3>
                                <p className="text-gray-600 mt-1">EFB batteries are designed for vehicles with Start-Stop technology that don&apos;t require a full AGM battery. They handle frequent starts and stops much better than a standard battery. If your car has this feature, an EFB is highly recommended.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}