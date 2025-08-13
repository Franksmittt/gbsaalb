// FILE: src/components/home/ShopByCategory.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { Product } from '@/types'; // <-- FIX: Importing from the correct central types file

// This component now accepts the products as a prop.
export default function ShopByCategory({ products }: { products: Product[] }) {
  // We'll create a simplified list of categories based on the products passed in.
  const categories = [
    { name: 'Automotive', href: '/shop?type=Automotive', imageUrl: '/images/category/automotive.jpg', description: 'For cars, bakkies, and passenger vehicles.' },
    { name: 'Stop-Start (AGM/EFB)', href: '/shop?type=Stop-Start', imageUrl: '/images/category/stop-start.jpg', description: 'Specialized power for modern vehicles.' },
    { name: 'Truck & Commercial', href: '/shop?type=Truck', imageUrl: '/images/category/truck-commercial.jpg', description: 'Heavy-duty batteries that keep you on the road.' },
  ];

  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800">Power for Every Purpose</h2>
                <p className="mt-4 text-lg text-gray-600">
                  From daily drives to heavy-duty commercial fleets, we have the exact battery solution you need.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map(category => (
                     <Link key={category.name} href={category.href} className="group relative block rounded-2xl overflow-hidden shadow-lg h-96">
                        <Image 
                            src={category.imageUrl}
                            alt={`Shop for ${category.name} batteries`}
                            fill
                            style={{objectFit: 'cover'}}
                            className="transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-3xl font-extrabold drop-shadow-lg">{category.name}</h3>
                            <p className="text-white/90 mt-2">{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};