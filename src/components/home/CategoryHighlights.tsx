// FILE: src/components/home/CategoryHighlights.tsx (CREATE NEW FILE)
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
    },
    {
        title: "Truck & Commercial",
        description: "Heavy-Duty Power Solutions",
        imageUrl: "/images/category/truck-commercial.jpg",
        href: "/shop?type=Truck",
    },
    {
        title: "Motorcycle & Leisure",
        description: "For Bikes, Quads & Jetskis",
        imageUrl: "/images/category/motorcycle.jpg",
        href: "/shop?type=Motorcycle",
    },
    {
        title: "Solar & Backup Power",
        description: "Deep-Cycle & Inverter Batteries",
        imageUrl: "/images/category/solar-deep-cycle.jpg",
        href: "/shop?type=Solar",
    },
    {
        title: "Accessories & Chargers",
        description: "Terminals, Cables & More",
        imageUrl: "/images/category/stop-start.jpg", // Using a relevant placeholder image
        href: "/shop?type=Accessories",
    }
];

const CategoryCard = ({ item }: { item: typeof categoryData[0] }) => (
    <Link href={item.href} className="group relative block bg-navy-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-64">
        <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 22vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 className="text-2xl font-extrabold">{item.title}</h3>
            <p className="text-base text-gray-300 mt-1">{item.description}</p>
            <div className="mt-4 flex items-center gap-2 font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Shop Now</span>
                <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5" />
            </div>
        </div>
        
        {/* Accent border on hover */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300 pointer-events-none"></div>
    </Link>
);

const CategoryHighlights = () => {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Shop By Your Need</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The right power solution for every application, backed by expert advice.</p>
                </div>
                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    <div className="lg:col-span-2">
                        <CategoryCard item={categoryData[0]} />
                    </div>
                    <div className="lg:col-span-2">
                        <CategoryCard item={categoryData[1]} />
                    </div>
                    <div className="lg:col-span-2">
                        <CategoryCard item={categoryData[2]} />
                    </div>
                    <div className="lg:col-span-3">
                        <CategoryCard item={categoryData[3]} />
                    </div>
                    <div className="lg:col-span-3">
                        <CategoryCard item={categoryData[4]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryHighlights;