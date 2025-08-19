// FILE: src/components/ui/CategoryMegaMenu.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

const categories = {
    vehicle: [
        { name: 'Automotive', description: "For cars, bakkies & SUVs", href: '/shop?type=Automotive' },
        { name: 'Stop-Start (AGM/EFB)', description: "For modern vehicles", href: '/shop?type=Stop-Start', icon: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
        { name: 'Truck & Commercial', description: "Heavy-duty power", href: '/shop?type=Truck', icon: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
        { name: 'Motorcycle', description: "For bikes & leisure craft", href: '/shop?type=Motorcycle', icon: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
    ],
    specialized: [
        { name: 'Solar & Deep-Cycle', description: "For off-grid & backup", href: '/shop?type=Solar', icon: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' },
        { name: 'Security & Gate', description: "Reliable backup power", href: '/shop?type=Security', icon: 'M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z' },
        { name: 'Accessories', description: "Terminals, chargers & more", href: '/shop?type=Accessories', icon: 'M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z' }
    ]
};

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CategoryMegaMenu({ isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 w-[48rem] max-w-[90vw] bg-gray-900/80 backdrop-blur-lg text-white rounded-b-lg shadow-2xl border-t-2 border-blue-500 animate-fade-in-fast">
            <div className="p-6 grid grid-cols-3 gap-6">
                <div>
                    <h3 className="font-bold text-sm uppercase text-gray-400 px-3 pb-2 border-b border-gray-700">For Your Vehicle</h3>
                    {categories.vehicle.map(cat => (
                         <Link key={cat.name} href={cat.href} onClick={onClose} className="group flex items-center gap-4 p-3 rounded-md hover:bg-navy-800/50">
                            {/* --- UPDATED ICON LOGIC --- */}
                            <div className="flex-shrink-0 w-6 h-6">
                                {cat.name === 'Automotive' ? (
                                    <Image src="/icons/car_battery_icon.png" alt="Automotive Icon" width={24} height={24} />
                                ) : (
                                    <Icon path={cat.icon!} className="w-6 h-6 text-navy-400"/>
                                )}
                            </div>
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
                        <Link key={cat.name} href={cat.href} onClick={onClose} className="group flex items-center gap-4 p-3 rounded-md hover:bg-navy-800/50">
                            <Icon path={cat.icon} className="w-6 h-6 text-navy-400"/>
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
        </div>
    );
}