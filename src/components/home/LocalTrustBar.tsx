// FILE: src/components/home/LocalTrustBar.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

const branches = [
    { 
        name: 'Alberton', 
        tag: 'Main Branch',
        address: 'Unit 4, 16 Fore Street, New Redruth',
        phone: '011 869 2427', 
        whatsapp: '27793203014',
        mapUrl: 'http://googleusercontent.com/maps.google.com/2'
    },
    { 
        name: 'Vanderbijlpark', 
        tag: 'Vaal Triangle',
        address: '4 Krag Street, Vanderbijlpark',
        phone: '016 023 0161', 
        whatsapp: '27711394043',
        mapUrl: 'http://googleusercontent.com/maps.google.com/3'
    },
    { 
        name: 'Sasolburg', 
        tag: 'Vaal Triangle',
        address: '1 Finlay Street, Sasolburg',
        phone: '016 976 2076', 
        whatsapp: null,
        mapUrl: 'http://googleusercontent.com/maps.google.com/4'
    },
];

// UPDATED: This function now uses the correct times but returns the simpler text.
const getBranchStatus = (branchName: string) => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Johannesburg" }));
    const day = now.getDay(); // Sunday = 0, Saturday = 6
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + (minutes / 60); // Convert current time to a decimal for easy comparison

    const isWeekday = day >= 1 && day <= 5;
    const isSaturday = day === 6;

    let openTime = 0;
    let closeTime = 0;

    if (branchName === 'Alberton') {
        if (isWeekday) {
            openTime = 7.5; // 7:30 AM
            closeTime = 17.5; // 5:30 PM
        } else if (isSaturday) {
            openTime = 8;
            closeTime = 13; // 1:00 PM
        }
    } else { // Vanderbijlpark and Sasolburg share the same hours
        if (isWeekday) {
            openTime = 8;
            closeTime = 17; // 5:00 PM
        } else if (isSaturday) {
            openTime = 8;
            closeTime = 13; // 1:00 PM
        }
    }

    if (currentTime >= openTime && currentTime < closeTime) {
        return { text: "Open Now", color: "text-green-400", dotColor: "bg-green-400" };
    }
    
    // Default to closed for all other cases
    return { text: "Currently Closed", color: "text-red-500", dotColor: "bg-red-500" };
};

const BranchCard = ({ branch }: { branch: typeof branches[0] }) => {
    const [status, setStatus] = useState({ text: "Loading...", color: "text-gray-400", dotColor: "bg-gray-400" });

    useEffect(() => {
        // Pass the branch name to the status function
        setStatus(getBranchStatus(branch.name));
    }, [branch.name]);

    return (
        <div className="group relative"> {/* Group for hover effects */}
            {/* The animated glowing border element */}
            <div className="glowing-border">
                <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 h-full flex flex-col z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-navy-400">{branch.tag}</p>
                            <h3 className="text-3xl font-extrabold text-white">{branch.name}</h3>
                        </div>
                        <div className="flex items-center flex-shrink-0 mt-1 text-right">
                            <div className={`w-3 h-3 rounded-full mr-2 ${status.dotColor}`}></div>
                            <span className={`font-semibold text-sm ${status.color}`}>{status.text}</span>
                        </div>
                    </div>

                    <p className="text-gray-400 flex-grow">{branch.address}</p>

                    <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col gap-3">
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="w-full text-center bg-gray-700/50 text-white font-bold py-3 px-4 rounded-md hover:bg-navy-700 transition duration-300 flex items-center justify-center gap-2">
                            <Icon path="M6.62,10.79a15.25,15.25,0,0,0,6.59,6.59l2.2-2.2a1,1,0,0,1,1-.24,11.36,11.36,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.24,1Z" className="w-5 h-5"/>
                            Call: {branch.phone}
                        </a>
                        {branch.whatsapp && (
                           <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-green-600/20 border border-green-500 text-green-400 font-bold py-3 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300 flex items-center justify-center gap-2">
                                <Icon path="M12.04,2C6.58,2,2.13,6.45,2.13,12a9.74,9.74,0,0,0,1.88,5.55,1,1,0,0,0,.8.4h.1a1,1,0,0,0,.75-.31,1,1,0,0,0,.15-1.09,7.54,7.54,0,0,1-.13-1.5,7.68,7.68,0,0,1,6.54-7.53A7.73,7.73,0,0,1,20,11.75a7.54,7.54,0,0,1-1.28,4.24,1,1,0,0,0,.15,1.09,1,1,0,0,0,.75.31h.1a1,1,0,0,0,.8-.4A9.74,9.74,0,0,0,22,12C21.95,6.45,17.5,2,12.04,2Z" className="w-5 h-5"/>
                                WhatsApp
                            </a>
                        )}
                        <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="text-center text-sm text-gray-400 hover:text-white pt-2">Get Directions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function LocalTrustBar() {
    return (
        <div className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-gray-900 to-black bg-[length:200%_auto] animate-background-pan"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Your Local Power Hubs</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Expert advice, professional fitment, and the right battery are waiting for you. Visit your nearest Global Batteries branch today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {branches.map(branch => (
                        <BranchCard key={branch.name} branch={branch} />
                    ))}
                </div>
            </div>
        </div>
    );
}