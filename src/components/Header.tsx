// FILE: src/components/Header.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

import { LocationPinIcon } from '@/components/icons/LocationPinIcon';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { PhoneIcon } from '@/components/icons/PhoneIcon';
import { CartIcon } from '@/components/icons/CartIcon';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { ShopIcon } from '@/components/icons/ShopIcon';
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon';
import { CloseIcon } from '@/components/icons/CloseIcon';

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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

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

  const topBarLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Collection Policy', href: '/collection-terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <header className="bg-gray-800 shadow-md relative z-40">
        <div className="bg-[#1e2025] text-gray-300 text-sm">
          <div className="container mx-auto px-4 h-10 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              {topBarLinks.map(link => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors p-2">{link.name}</Link>
              ))}
            </div>
            <div className="flex-1 text-center text-white flex items-center justify-center md:justify-center">
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
                  <LocationPinIcon className="w-4 h-4" />
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
                <input type="search" placeholder="Search by battery size, vehicle, or brand..." className="w-full bg-white text-black rounded-md py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Search products" />
                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                  <SearchIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <div className="hidden md:flex items-center gap-4">
                <PhoneIcon className="w-8 h-8 text-blue-400"/>
                <div>
                  <p className="text-xs text-gray-400">NEED HELP?</p>
                  <a href="tel:0118692427" className="font-bold text-lg hover:text-white">011 869 2427</a>
                   <a href="https://wa.me/27793203014" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-white">WhatsApp Us</a>
                </div>
              </div>
              <div className="flex items-center">
                <Link href="/cart" className="relative hover:text-white transition-colors p-3" aria-label="View shopping cart">
                  <CartIcon className="w-7 h-7"/>
                  <NotificationBadge count={0} />
                </Link>
              </div>
              <button className="lg:hidden p-3" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
        <nav className="bg-[#34373e] text-white font-semibold">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between relative">
            <div className="flex items-center gap-6">
              <div className="relative h-full" ref={categoryMenuRef}>
                <button onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)} className="bg-brand-blue text-white px-6 h-14 flex items-center gap-2 font-bold text-base transition-colors hover:bg-brand-blue-hover">
                  <ShopIcon className="w-5 h-5"/>
                  Shop By Category
                  <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <CategoryMegaMenu isOpen={isCategoryMenuOpen} onClose={() => setIsCategoryMenuOpen(false)} />
              </div>
            </div>
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-sm text-white font-medium whitespace-nowrap px-6">
                The largest selection of battery brands in South Africa
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-8">
               {navLinks.map(link => (
                <Link key={link.name} href={link.href} className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-all">{link.name}</Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-navy-950 z-50 p-4 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
                <CloseIcon className="w-8 h-8 text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full gap-8 text-center">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-brand-blue transition-colors">{link.name}</Link>
              ))}
              <div className="border-t border-slate-700 w-1/2 my-4"></div>
              {topBarLinks.map(link => (
                 <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white transition-colors">{link.name}</Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}