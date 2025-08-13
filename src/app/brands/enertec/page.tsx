// FILE: src/app/brands/enertec/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';

// --- Page-Specific Data showcasing the diverse range ---
const enertecProducts = [
  { id: 'enertec-ytx9', name: 'ENERTEC YTX9-BS Motorcycle Battery', specs: '12V 8Ah Sealed AGM', price: 'R850.00', imageUrl: '/images/brand-enertec.jpg' },
  { id: 'enertec-652hp', name: 'ENERTEC 652HP High Performance Battery', specs: '12V 68Ah 600CCA', price: 'R1,950.00', imageUrl: '/images/brand-enertec.jpg' },
  { id: 'enertec-668c', name: 'ENERTEC 668C Commercial Battery', specs: '12V 110Ah 850CCA', price: 'R3,200.00', imageUrl: '/images/brand-enertec.jpg' },
  { id: 'enertec-ytz14s', name: 'ENERTEC YTZ14S Powersport Battery', specs: '12V 11.2Ah Sealed AGM', price: 'R1,100.00', imageUrl: '/images/brand-enertec.jpg' },
];

const ProductCard = ({ product }: { product: typeof enertecProducts[0] }) => (
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

export default function EnertecPage() {
    
    React.useEffect(() => {
        document.title = 'Enertec Batteries | High-Performance Power Solutions | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative bg-gray-800 text-white py-20">
                     <Image 
                        src="/images/contact-hero.jpg"
                        alt="Abstract background showing speed and power"
                        fill
                        style={{objectFit: 'cover'}}
                        className="opacity-20"
                    />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        {/* You will need to source an Enertec logo image */}
                        <div className="w-64 h-24 bg-white flex items-center justify-center mx-auto mb-4 rounded-lg">
                             <span className="text-3xl font-bold text-red-600">ENERTEC</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">High-Performance Power Solutions</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">From powersport and motorcycles to automotive and heavy-duty commercial vehicles, Enertec delivers specialist power.</p>
                    </div>
                </div>

                {/* The Enertec Advantage Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">The Enertec Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <AdvantageCard 
                                iconPath="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Diverse Applications"
                                description="Expertly engineered batteries for a huge range of vehicles, including automotive, truck, and motorcycle."
                            />
                            <AdvantageCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="High-Performance Output"
                                description="Enertec batteries are built for enthusiasts who demand higher cranking power and superior reliability."
                            />
                            <AdvantageCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="Sealed AGM Technology"
                                description="Many Enertec batteries feature Absorbed Glass Mat (AGM) tech, making them spill-proof and vibration-resistant."
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Shop Enertec Batteries</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {enertecProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Enertec FAQs</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">Are Enertec batteries good for performance cars?</h3>
                                <p className="text-gray-600 mt-1">Yes. Enertec&apos;s High Performance (HP) line is specifically designed to provide the higher Cold Cranking Amps (CCA) that performance and modified vehicles require for reliable starting.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">Do you stock the right Enertec battery for my motorcycle?</h3>
                                <p className="text-gray-600 mt-1">We carry a comprehensive range of Enertec powersport batteries. Their sealed, maintenance-free AGM design is perfect for motorcycles, quad bikes, and jet skis, offering excellent vibration resistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}