// FILE: src/components/HeroSection.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { name: 'Car', href: '/shop?type=Automotive' },
    { name: 'Truck', href: '/shop?type=Truck' },
    { name: 'Motorcycle', href: '/shop?type=Motorcycle' },
    { name: 'Solar', href: '/shop?type=Solar' },
    { name: 'Security', href: '/shop?type=Security' },
    { name: 'Boat', href: '/shop?type=Marine' },
];

export default function HeroSection() {
    return (
        <div className="relative h-[70vh] min-h-[550px] w-full flex items-center justify-center text-white bg-navy-900">
            {/* FIX: Removed the placeholder="blur" prop to resolve the build error for images served from the public directory. */}
            <Image 
                src="/images/technician-testing.jpg" 
                alt="High-performance car battery in a clean engine bay" 
                fill
                style={{objectFit: 'cover'}}
                className="brightness-50"
                priority={true}
                sizes="100vw"
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

                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <Link 
                            key={cat.name} 
                            href={cat.href} 
                            className="group relative w-32 h-14 rounded-lg font-semibold overflow-hidden transition-transform hover:scale-105"
                        >
                            <div 
                                className="absolute inset-[-1000%] animate-spin-slow group-hover:opacity-100 opacity-0 transition-opacity duration-500"
                                style={{ 
                                    background: 'conic-gradient(from 90deg at 50% 50%, #60A5FA 0%, #1D4ED8 50%, #60A5FA 100%)' 
                                }}
                            />
                            <div className="absolute inset-[2px] bg-white/10 border border-white/20 rounded-md backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <span>{cat.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};