// FILE: src/components/home/PromoBannersTwo.tsx (CREATE NEW FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const promoData = [
    {
        title: "Willard AGM Batteries",
        description: "Unbeatable power for Stop-Start vehicles.",
        price: "3,499",
        imageUrl: "/images/brand-willard.jpg",
        href: "/shop?brand=Willard",
        bgColor: "bg-navy-800",
        textColor: "text-white",
        accentColor: "text-blue-400"
    },
    {
        title: "Novax Premium Range",
        description: "26-Month Nationwide Warranty.",
        price: "1,499",
        imageUrl: "/images/brand-novax-premium.jpg",
        href: "/shop?brand=Novax-Premium",
        bgColor: "bg-gray-800",
        textColor: "text-white",
        accentColor: "text-blue-400"
    }
];

const PromoCard = ({ item }: { item: typeof promoData[0] }) => (
    <Link href={item.href} className={`group relative flex items-center rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.bgColor}`}>
        <div className="relative w-2/5 h-full">
            <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 40vw, 20vw"
            />
        </div>

        <div className="w-3/5 p-6 sm:p-8">
            <h3 className={`text-xl sm:text-2xl font-extrabold ${item.textColor}`}>{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-1">{item.description}</p>
            
            <div className="mt-4 flex items-baseline gap-2">
                <span className={`text-xs ${item.textColor} opacity-80`}>FROM</span>
                <p className={`text-3xl sm:text-4xl font-bold ${item.accentColor}`}>
                    R{item.price}
                </p>
            </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </Link>
);


export default function PromoBannersTwo() {
    return (
        <div className="bg-gray-100 py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {promoData.map((item) => (
                        <PromoCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}