// FILE: src/components/home/HeroFinder.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

// NOTE: The data fetching logic from the original finder would be integrated here.
// For this blueprint, the UI is prioritized with mock data.

const HeroFinder = () => {
    const [step, setStep] = useState(1);
    const [vehicleType, setVehicleType] = useState('');
    
    const selectVehicleType = (type: string) => {
        setVehicleType(type);
        setStep(2);
    };

    return (
        <div className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-white bg-gray-900">
            {/* Background Image */}
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

                {/* --- INTERACTIVE FINDER OVERLAY --- */}
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20">
                    <h2 className="text-2xl font-bold mb-4">What powers your world?</h2>

                    {/* Step 1: Vehicle Type Selection */}
                    {step === 1 && (
                         <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {['Car', 'Truck', 'Motorcycle', 'Solar', 'Gate', 'Boat'].map(type => (
                                <button key={type} onClick={() => selectVehicleType(type)} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-2">
                                    <Icon path="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z" className="w-10 h-10"/>
                                    <span className="font-semibold">{type}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Step 2: Details */}
                    {step === 2 && (
                        <div>
                             <div className="flex justify-center mb-4">
                                <button onClick={() => setStep(1)} className="text-sm hover:underline">‹ Back to categories</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-black">
                                    <option>Select Make</option>
                                </select>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-black">
                                    <option>Select Model</option>
                                </select>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-black">
                                    <option>Select Year</option>
                                </select>
                                <a href="https://wa.me/27793203014" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-yellow text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition h-full flex items-center justify-center gap-2">
                                    Confirm on WhatsApp
                                </a>
                            </div>
                             <p className="text-xs text-gray-300 mt-3">Our expert will confirm your selection and provide a quote instantly.</p>
                        </div>
                    )}
                </div>

                {/* Trust Icons */}
                <div className="mt-8 flex justify-center gap-6 md:gap-10">
                    <div className="flex items-center gap-2 text-sm">
                        <Icon path="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" className="w-5 h-5 text-brand-yellow"/>
                        <span>Free Fitment Included</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Icon path="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z" className="w-5 h-5 text-brand-yellow"/>
                        <span>Up to 26-Month Warranties</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Icon path="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" className="w-5 h-5 text-brand-yellow"/>
                        <span>Free Expert Testing</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroFinder;