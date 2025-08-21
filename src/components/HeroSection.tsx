// FILE: src/components/HeroSection.tsx (REPLACE ENTIRE FILE)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui/Icon';

const HeroSection = () => {
    return (
        <section className="relative h-[600px] md:h-[700px] text-white flex items-center bg-navy-950">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/technician-testing.jpg"
                    alt="Technician testing a car battery in Alberton"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="brightness-50"
                    sizes="100vw"
                    priority 
                    fetchPriority="high"
                />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-shadow-md">
                        Your Trusted Battery Specialists in Alberton
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-200 text-shadow">
                        Shop South Africa’s top battery brands like Willard, Exide & Novax online. <br/>
                         Expert advice, free testing, and professional fitment at our Alberton branch.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/#vehicle-finder"
                            className="inline-flex items-center justify-center bg-brand-blue text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:bg-brand-blue-hover hover:-translate-y-1 shadow-lg w-full sm:w-auto"
                        >
                            <Icon path="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" className="w-5 h-5 mr-3" />
                            Find Your Battery
                        </Link>
                        <Link 
                            href="/shop"
                            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-navy-900 transition-colors w-full sm:w-auto"
                        >
                            Shop All Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;