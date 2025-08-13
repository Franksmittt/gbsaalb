// FILE: src/components/home/ShopByCategory.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const categories = [
    { 
        name: 'Automotive', 
        href: '/shop?type=Automotive', 
        imageUrl: '/images/category/automotive.jpg',
        description: 'For cars, bakkies, and passenger vehicles.'
    },
    { 
        name: 'Stop-Start (AGM/EFB)', 
        href: '/shop?type=Stop-Start', 
        imageUrl: '/images/category/stop-start.jpg',
        description: 'Specialized power for modern vehicles.'
    },
    { 
        name: 'Truck & Commercial', 
        href: '/shop?type=Truck', 
        imageUrl: '/images/category/truck-commercial.jpg',
        description: 'Heavy-duty batteries that keep you on the road.'
    },
    { 
        name: 'Motorcycle', 
        href: '/shop?type=Motorcycle', 
        imageUrl: '/images/category/motorcycle.jpg',
        description: 'High-performance power for bikes and leisure.'
    },
    { 
        name: 'Security & Gate', 
        href: '/shop?type=Security', 
        imageUrl: '/images/category/security-gate.jpg',
        description: 'Reliable backup for alarms, gates, and UPS systems.'
    },
    { 
        name: 'Solar & Deep-Cycle', 
        href: '/shop?type=Solar', 
        imageUrl: '/images/category/solar-deep-cycle.jpg',
        description: 'Long-lasting energy for off-grid and backup solutions.'
    },
];

const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
    <Link 
        href={category.href} 
        className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                   transition-all duration-300 transform hover:-translate-y-2 h-96"
    >
        {/* Background Image with Zoom Effect */}
        <Image 
            src={category.imageUrl}
            alt={`Shop for ${category.name} batteries`}
            fill
            style={{objectFit: 'cover'}}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

        {/* Glassmorphism Content Box */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                    {category.name}
                </h3>
                <p className="text-white/80 mt-2 h-12">{category.description}</p>
                <div className="mt-4 font-bold text-brand-yellow flex items-center transition-transform group-hover:translate-x-1">
                    Shop Now
                    <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5 ml-1"/>
                </div>
            </div>
        </div>
    </Link>
);

export default function ShopByCategory() {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800">Power for Every Purpose</h2>
                <p className="mt-4 text-lg text-gray-600">
                    From daily drives to heavy-duty commercial fleets and off-grid solar setups, we have the exact battery solution you need.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map(category => (
                    <CategoryCard key={category.name} category={category} />
                ))}
            </div>
        </div>
    </div>
  );
};