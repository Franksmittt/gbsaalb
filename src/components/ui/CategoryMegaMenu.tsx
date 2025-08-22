// FILE: src/components/ui/CategoryMegaMenu.tsx (REPLACE ENTIRE FILE)
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// All icon imports have been removed.

const categories = {
    vehicle: [
        { name: 'Automotive', description: "For cars, bakkies & SUVs", href: '/shop?type=Automotive' },
        { name: 'Stop-Start (AGM/EFB)', description: "For modern vehicles", href: '/shop?type=Stop-Start' },
        { name: 'Truck & Commercial', description: "Heavy-duty power", href: '/shop?type=Truck' },
        { name: 'Motorcycle', description: "For bikes & leisure craft", href: '/shop?type=Motorcycle' },
    ],
    specialized: [
        { name: 'Solar & Deep-Cycle', description: "For off-grid & backup", href: '/shop?type=Solar' },
        { name: 'Security & Gate', description: "Reliable backup power", href: '/shop?type=Security' },
        { name: 'Accessories', description: "Terminals, chargers & more", href: '/shop?type=Accessories' }
    ]
};

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CategoryMegaMenu({ isOpen, onClose }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute top-full left-0 w-[48rem] max-w-[90vw] bg-gray-900/80 backdrop-blur-lg text-white rounded-b-lg shadow-2xl border-t-2 border-blue-500"
                >
                    <div className="p-6 grid grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-bold text-sm uppercase text-gray-400 px-3 pb-2 border-b border-gray-700">For Your Vehicle</h3>
                            {categories.vehicle.map(cat => (
                                <Link key={cat.name} href={cat.href} onClick={onClose} className="group block p-3 rounded-md hover:bg-navy-800/50 transition-colors">
                                    {/* The icon div has been removed */}
                                    <div>
                                        <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{cat.name}</p>
                                        <p className="text-sm text-gray-400">{cat.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase text-gray-400 px-3 pb-2 border-b border-gray-700">Specialized Power</h3>
                            {categories.specialized.map(cat => (
                                <Link key={cat.name} href={cat.href} onClick={onClose} className="group block p-3 rounded-md hover:bg-navy-800/50 transition-colors">
                                    {/* The icon div has been removed */}
                                    <div>
                                        <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{cat.name}</p>
                                        <p className="text-sm text-gray-400">{cat.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="relative rounded-md overflow-hidden group">
                            <Image 
                                src="/images/megamenu-featured.jpg" 
                                alt="Featured: Novax Premium Batteries" 
                                fill 
                                style={{objectFit: 'cover'}} 
                                className="group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 1024px) 30vw, 250px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-xl font-extrabold text-white">Novax Premium</h3>
                                <p className="text-sm text-gray-300">26-Month Warranty</p>
                                <Link href="/brands/novax-premium" onClick={onClose} className="mt-2 inline-block font-bold text-sm text-blue-400 hover:text-blue-300">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}