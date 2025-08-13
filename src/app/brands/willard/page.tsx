// FILE: src/app/brands/willard/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

// --- Page-Specific Data ---
const willardProducts = [
  { id: 'willard-610', name: 'WILLARD 610 Car Battery', specs: '12V 42Ah 314CCA', price: 'R1,350.00', imageUrl: '/images/brand-willard.jpg' },
  { id: 'willard-628', name: 'WILLARD 628 Car Battery', specs: '12V 50Ah 375CCA', price: 'R1,550.00', imageUrl: '/images/brand-willard.jpg' },
  { id: 'willard-652', name: 'WILLARD 652 Car Battery', specs: '12V 65Ah 519CCA', price: 'R1,850.00', imageUrl: '/images/brand-willard.jpg' },
  { id: 'willard-668', name: 'WILLARD 668 Car Battery', specs: '12V 70Ah 650CCA', price: 'R2,150.00', imageUrl: '/images/brand-willard.jpg' },
];

const ProductCard = ({ product }: { product: typeof willardProducts[0] }) => (
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

export default function WillardPage() {
    
    React.useEffect(() => {
        document.title = 'Willard Batteries | Trusted Power & Technology | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative bg-gray-800 text-white py-20">
                    <Image 
                        src="/images/contact-hero.jpg" // A generic tech/car background would be great here
                        alt="Abstract background showing technology and power"
                        fill
                        style={{objectFit: 'cover'}}
                        className="opacity-20"
                    />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Image src="/images/logo-willard.png" alt="Willard Batteries Logo" width={250} height={100} className="mx-auto mb-4 bg-white p-3 rounded-lg" />
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">The Power of Technology</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Discover why Willard is one of South Africa&apos;s most trusted battery brands, engineered for reliability and a long service life.</p>
                    </div>
                </div>

                {/* The Willard Advantage Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">The Willard Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <AdvantageCard 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Proven Reliability"
                                description="With a rich history in South Africa, Willard batteries are built to withstand our unique and demanding road conditions."
                            />
                            <AdvantageCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Advanced Technology"
                                description="Featuring state-of-the-art grid technology for enhanced performance, greater efficiency, and a longer lifespan."
                            />
                            <AdvantageCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="Nationwide Warranty"
                                description="Backed by a comprehensive 25-month nationwide warranty for complete peace of mind on the road."
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Shop Willard Batteries</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {willardProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technology Spotlight */}
                <div className="py-16 bg-navy-800 text-white">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <Image 
                                src="/images/brand-willard.jpg" // Replace with a tech-focused image if possible
                                alt="Cutaway view of a Willard battery showing internal technology"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Engineered for Endurance</h2>
                            <p className="text-navy-300 mb-6 leading-relaxed">Willard batteries feature a robust plate design and advanced calcium technology that resists corrosion and water loss, ensuring a longer life and reliable starting power, time after time. It&apos;s not just a battery; it&apos;s an investment in your vehicle&apos;s performance.</p>
                            <Link href="/shop?brand=Willard" className="bg-white text-navy-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300">
                                View Full Range
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Willard FAQs</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">What is the warranty on a Willard battery?</h3>
                                <p className="text-gray-600 mt-1">Standard Willard automotive batteries come with a 25-month nationwide warranty, covering any manufacturing defects.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">Is Willard a good battery brand for my car in South Africa?</h3>
                                <p className="text-gray-600 mt-1">Absolutely. Willard is a well-established South African brand, and their batteries are specifically designed to handle our unique climate and road conditions, making them an excellent choice for local drivers.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}