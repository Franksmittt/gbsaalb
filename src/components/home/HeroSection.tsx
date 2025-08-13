// FILE: src/components/home/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

const categories = [
    { name: 'Car', href: '/shop?type=Automotive', iconPath: 'M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z' },
    { name: 'Truck', href: '/shop?type=Truck', iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
    { name: 'Motorcycle', href: '/shop?type=Motorcycle', iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
    { name: 'Solar', href: '/shop?type=Solar', iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
    { name: 'Security', href: '/shop?type=Security', iconPath: 'M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z' },
    { name: 'Boat', href: '/shop?type=Marine', iconPath: 'M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z' },
];

export default function HeroSection() {
    return (
        <div className="relative h-[70vh] min-h-[550px] w-full flex items-center justify-center text-white bg-gray-900">
            <Image 
                src="/images/hero-banner.jpg" 
                alt="High-performance car battery in a clean engine bay" 
                fill
                style={{objectFit: 'cover'}}
                className="brightness-50"
                priority 
            />
            
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    The Power You Rely On.
                    <br/>
                    The Service You Trust.
                </h1>
                <p className="text-lg md:text-xl mb-10 drop-shadow-md text-gray-200 max-w-3xl mx-auto">
                    South Africa's premier battery specialists, providing expert advice, free testing, and guaranteed fitment.
                </p>

                {/* UPDATED: Buttons now have consistent sizing and the new animation class */}
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <Link 
                            key={cat.name} 
                            href={cat.href} 
                            className="hero-category-button w-32 h-14 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm font-semibold hover:bg-white/20"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-8">
                     <Link href="#battery-finder" className="bg-brand-yellow text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-300 transition duration-300 text-lg shadow-xl">
                        Or Find Your Vehicle Battery
                    </Link>
                </div>
            </div>
        </div>
    );
};
