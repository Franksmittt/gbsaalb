// FILE: src/components/DealOfTheWeek.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DealOfTheWeek = () => {
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Set the countdown to the end of the current week (Saturday midnight)
        const calculateTimeLeft = () => {
            const now = new Date();
            const endOfWeek = new Date(now);
            endOfWeek.setDate(now.getDate() + (6 - now.getDay())); // Find Saturday
            endOfWeek.setHours(23, 59, 59, 999); // Set to end of day

            const difference = +endOfWeek - +now;
            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };
        
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Set initial value
        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-navy-800 text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <Image 
                        src="/images/brand-willard.jpg" 
                        alt="Willard 652 battery, our deal of the week." 
                        width={600} 
                        height={600} 
                        className="rounded-lg shadow-2xl object-cover" 
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold mb-2">Deal of the Week</h2>
                    <p className="text-xl text-navy-400 mb-4 font-semibold">Willard 652 Automotive Battery</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <p className="text-5xl font-bold text-white">R1,850.00</p>
                        <p className="text-2xl text-gray-400 line-through">R2,150.00</p>
                    </div>
                    {isClient && Object.keys(timeLeft).length > 0 && (
                        <div className="flex justify-center md:justify-start gap-2 md:gap-4 mb-8">
                            {Object.entries(timeLeft).map(([interval, value]) => (
                                <div key={interval} className="text-center bg-gray-700 p-3 rounded-lg w-20">
                                    <p className="text-3xl font-bold">{String(value).padStart(2, '0')}</p>
                                    <p className="text-xs uppercase">{interval}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <Link href="/products/willard-652" className="bg-white text-navy-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300 text-lg">
                        View Deal
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DealOfTheWeek;