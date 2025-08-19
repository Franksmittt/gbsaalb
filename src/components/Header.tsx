// FILE: src/components/Header.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Icon from './ui/Icon';

const CategoryMegaMenu = dynamic(() => import('./ui/CategoryMegaMenu'));

const NotificationBadge = ({ count }: { count: number }) => (
    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#2a2c32]">
        {count > 9 ? '9+' : count}
    </span>
);

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
      <div className="bg-[#1e2025] text-gray-300 text-sm">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/faq" className="hover:text-white transition-colors p-2">FAQ</Link>
            <Link href="/collection-terms" className="hover:text-white transition-colors p-2">Collection Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors p-2">Contact Us</Link>
          </div>
          <div className="flex-1 text-center text-white flex items-center justify-center">
            <Image
                src="/icons/car_battery_icon.png"
                alt="Car Battery Icon"
                width={16}
                height={16}
                className="inline mr-2"
            />
            <span className="font-medium">Free Fitment On All Car Batteries</span>
          </div>
          <div className="hidden md:flex items-center">
            <a href="https://www.google.com/maps/search/?api=1&query=Global+Batteries+Alberton" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white flex items-center gap-1 p-2">
                <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" className="w-4 h-4" />
                Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2c32] text-white">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0" aria-label="Global Batteries Homepage">
            <span className="text-2xl font-extrabold tracking-tight text-white">Global Batteries</span>
          </Link>
          <div className="hidden lg:block flex-grow max-w-2xl">
             <div className="relative">
              <input 
                type="search" 
                placeholder="Search by battery size, vehicle, or brand..." 
                className="w-full bg-white text-black rounded-md py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-label="Search products"
             />
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                <Icon path="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="hidden md:flex items-center gap-4">
              <Icon path="M6.62,10.79a15.25,15.25,0,0,0,6.59,6.59l2.2-2.2a1,1,0,0,1,1-.24,11.36,11.36,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.24,1Z" className="w-8 h-8 text-blue-400"/>
              <div>
                <p className="text-xs text-gray-400">NEED HELP?</p>
                <a href="tel:0118692427" className="font-bold text-lg hover:text-blue-400">011 869 2427</a>
                 <a href="https://wa.me/27793203014" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-blue-400">WhatsApp Us</a>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/cart" className="relative hover:text-blue-400 transition-colors p-3" aria-label="View shopping cart">
                <Icon path="M17,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V8H5V6H8.55a4,4,0,0,1,7.9,0H20v2H19v10ZM9,8v10h6V8Z" className="w-7 h-7"/>
                <NotificationBadge count={0} />
              </Link>
            </div>
            <button className="lg:hidden p-3" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
              <Icon path="M3,6H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6ZM21,11H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-[#34373e] text-white font-semibold">
        {/* --- UPDATED NAVIGATION BAR --- */}
        {/* UPDATED: justify-between to anchor items left/right, and `relative` for positioning context */}
        <div className="container mx-auto px-4 h-14 flex items-center justify-between relative">
          
          {/* Left-aligned items */}
          <div className="flex items-center gap-6">
            <div className="relative h-full" ref={categoryMenuRef}>
              <button 
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className="bg-blue-600 text-white px-6 h-14 flex items-center gap-2 font-bold text-base transition-colors hover:bg-blue-500"
              >
                <Icon path="M3,8H8V3A1,1,0,0,1,9,2h6a1,1,0,0,1,1,1V8h5a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H16v5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V16H3a1,1,0,0,1-1-1V9A1,1,0,0,1,3,8ZM4,14H8V10H4Zm6,0h4V10H10Zm6,0h4V10H16ZM14,8H10V4h4Z" className="w-5 h-5"/>
                Shop By Category
                <Icon path="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,1,1,1.42,1.42l-4,4A1,1,0,0,1,12,15Z" className={`w-5 h-5 transition-transform duration-300 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <CategoryMegaMenu isOpen={isCategoryMenuOpen} onClose={() => setIsCategoryMenuOpen(false)} />
            </div>
          </div>
          
          {/* UPDATED: Absolutely centered slogan */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-sm text-white font-medium whitespace-nowrap px-6">
              The largest selection of battery brands in South Africa
            </p>
          </div>

          {/* Right-aligned Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
             {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</Link>
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
}