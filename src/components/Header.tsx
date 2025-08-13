// FILE: src/components/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './ui/Icon';

const NotificationBadge = ({ count }: { count: number }) => (
    <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#2a2c32]">
        {count > 9 ? '9+' : count}
    </span>
);

const categories = {
    vehicle: [
        { name: 'Automotive', description: "For cars, bakkies & SUVs", href: '/shop?type=Automotive', icon: 'M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z' },
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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target as Node)) {
        setIsCategoryMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoryMenuRef]);

  const navLinks = [
    { name: 'Brands', href: '/brands' },
    { name: 'Services', href: '/services/free-battery-testing' },
    { name: 'Advice', href: '/blog' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="bg-gray-800 shadow-md relative z-50">
      {/* Tier 1: Top Utility Bar */}
      <div className="bg-[#1e2025] text-gray-400 text-sm">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/collection-terms" className="hover:text-white transition-colors">Collection Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <div className="flex-1 text-center text-white">
            <Icon path="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" className="w-4 h-4 inline mr-2 text-brand-yellow"/>
            <span className="font-medium">Free Fitment On All Car Batteries</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="https://www.google.com/maps/search/?api=1&query=Global+Batteries+Alberton" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white flex items-center gap-1">
                <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" className="w-4 h-4" />
                Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Header */}
      <div className="bg-[#2a2c32] text-white">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Global Batteries
            </span>
          </Link>
          <div className="hidden lg:block flex-grow max-w-2xl">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search by battery size, vehicle, or brand..." 
                className="w-full bg-white text-black rounded-md py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow" 
              />
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <Icon path="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Icon path="M6.62,10.79a15.25,15.25,0,0,0,6.59,6.59l2.2-2.2a1,1,0,0,1,1-.24,11.36,11.36,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.24,1Z" className="w-8 h-8"/>
              <div>
                <p className="text-xs text-gray-400">NEED HELP?</p>
                <a href="tel:0118692427" className="font-bold text-lg hover:text-brand-yellow">011 869 2427</a>
                <a href="https://wa.me/27793203014" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-brand-yellow">WhatsApp Us</a>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/cart" className="relative hover:text-brand-yellow transition-colors p-2">
                <Icon path="M17,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V8H5V6H8.55a4,4,0,0,1,7.9,0H20v2H19v10ZM9,8v10h6V8Z" className="w-7 h-7"/>
                <NotificationBadge count={0} />
              </Link>
            </div>
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
              <Icon path="M3,6H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6ZM21,11H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation Bar */}
      <nav className="bg-[#34373e] text-white font-semibold">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-8">
          {/* Category Button on the far left */}
          <div className="relative h-full" ref={categoryMenuRef}>
            <button 
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="bg-brand-yellow text-black px-6 h-full flex items-center gap-2 font-bold text-base transition-colors hover:bg-yellow-300"
            >
              <Icon path="M3,8H8V3A1,1,0,0,1,9,2h6a1,1,0,0,1,1,1V8h5a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H16v5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V16H3a1,1,0,0,1-1-1V9A1,1,0,0,1,3,8ZM4,14H8V10H4Zm6,0h4V10H10Zm6,0h4V10H16ZM14,8H10V4h4Z" className="w-5 h-5"/>
              Shop By Category
              <Icon path="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,1,1,1.42,1.42l-4,4A1,1,0,0,1,12,15Z" className={`w-5 h-5 transition-transform duration-300 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* The Mega-Menu */}
            <div className={`
                absolute top-full left-0 w-[48rem] max-w-[90vw] bg-gray-900/80 backdrop-blur-lg text-white rounded-b-lg shadow-2xl border-t-2 border-brand-yellow
                transition-all duration-300 ease-in-out
                ${isCategoryMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
            `}>
                <div className="p-6 grid grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-sm uppercase text-gray-400 px-3 pb-2 border-b border-gray-700">For Your Vehicle</h3>
                        {categories.vehicle.map(cat => (
                             <Link key={cat.name} href={cat.href} onClick={() => setIsCategoryMenuOpen(false)} className="group flex items-center gap-4 p-3 rounded-md hover:bg-navy-800/50">
                                 <Icon path={cat.icon} className="w-6 h-6 text-navy-400"/>
                                <div>
                                    <p className="font-bold text-white group-hover:text-brand-yellow transition-colors">{cat.name}</p>
                                    <p className="text-sm text-gray-400">{cat.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-sm uppercase text-gray-400 px-3 pb-2 border-b border-gray-700">Specialized Power</h3>
                        {categories.specialized.map(cat => (
                            <Link key={cat.name} href={cat.href} onClick={() => setIsCategoryMenuOpen(false)} className="group flex items-center gap-4 p-3 rounded-md hover:bg-navy-800/50">
                                <Icon path={cat.icon} className="w-6 h-6 text-navy-400"/>
                                <div>
                                    <p className="font-bold text-white group-hover:text-brand-yellow transition-colors">{cat.name}</p>
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
                            loading="lazy"
                            sizes="(max-width: 1024px) 30vw, 250px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-xl font-extrabold text-white">Novax Premium</h3>
                            <p className="text-sm text-gray-300">26-Month Warranty</p>
                            <Link href="/brands/novax-premium" onClick={() => setIsCategoryMenuOpen(false)} className="mt-2 inline-block font-bold text-sm text-brand-yellow hover:text-yellow-300">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="hidden lg:block flex-grow text-center px-4">
            <p className="text-sm text-gray-300 italic">We offer the largest selection of brands in South Africa.</p>
          </div>

          <div className="hidden lg:flex items-center gap-8">
             {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="hover:text-brand-yellow transition-colors">{link.name}</Link>
             ))}
          </div>
        </div>
      </nav>
      {/* Mobile Menu logic would go here */}
    </header>
  );
}