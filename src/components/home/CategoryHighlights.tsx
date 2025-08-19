// FILE: src/components/home/CategoryHighlights.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const categoryData = [
    {
        title: "Automotive Batteries",
        description: "For Cars, Bakkies & SUVs",
        imageUrl: "/images/category/automotive.jpg",
        href: "/shop?type=Automotive",
        className: "md:col-span-4 h-80"
    },
    {
        title: "Truck & Commercial",
        description: "Heavy-Duty Power",
        imageUrl: "/images/category/truck-commercial.jpg",
        href: "/shop?type=Truck",
        className: "md:col-span-2 h-64"
    },
    {
        title: "Motorcycle & Leisure",
        description: "For Bikes, Quads & Jetskis",
        imageUrl: "/images/category/motorcycle.jpg",
        href: "/shop?type=Motorcycle",
        className: "md:col-span-2 h-64"
    },
    {
        title: "Solar & Backup Power",
        description: "Deep-Cycle & Inverter",
        imageUrl: "/images/category/solar-deep-cycle.jpg",
        href: "/shop?type=Solar",
        className: "md:col-span-2 h-64"
    },
     {
        title: "Security & Gate Motors",
        description: "Reliable Backup Power",
        imageUrl: "/images/category/security-gate.jpg",
        href: "/shop?type=Security",
        className: "md:col-span-2 h-64"
    }
];

const CategoryCard = ({ item }: { item: typeof categoryData[0] }) => (
    <Link href={item.href} className={`group relative block bg-navy-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.className}`}>
        <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 className="text-2xl font-extrabold drop-shadow-md">{item.title}</h3>
            <p className="text-base text-gray-300 mt-1 drop-shadow-sm">{item.description}</p>
            <div className="mt-4 flex items-center gap-2 font-bold text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                <span>Shop Now</span>
                <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5" />
            </div>
        </div>
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-yellow/50 transition-colors duration-300 pointer-events-none"></div>
    </Link>
);

const CategoryHighlights = () => {
    return (
        <div className="bg-gray-100 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Power For Every Purpose</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From daily drives in Alberton to heavy-duty commercial fleets and off-grid solar systems, we have the expert-backed power solution for every application.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {categoryData.map((item) => (
                        <CategoryCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryHighlights;