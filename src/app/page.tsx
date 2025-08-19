// FILE: src/app/page.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import type { Metadata } from 'next';
import { Product } from '@/types';
import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveBatteryFinder from '@/components/features/InteractiveBatteryFinder';
import TrustAndValue from '@/components/home/TrustAndValue';
import CategoryHighlights from '@/components/home/CategoryHighlights';
import BrandShowcase from '@/components/home/BrandShowcase';
import ServiceHub from '@/components/home/ServiceHub';
import BlogTeaser from '@/components/home/BlogTeaser';
import Testimonials from '@/components/home/Testimonials'; // <-- IMPORT THE NEW COMPONENT
import BatteryHealthCalculator from '@/components/tools/BatteryHealthCalculator';
import Footer from '@/components/Footer';

// Dynamically import the Bestsellers component
const Bestsellers = dynamic(() => import('@/components/home/Bestsellers'));

export const metadata: Metadata = {
  title: 'Global Batteries Alberton | Car, Truck & Solar Batteries',
  description: 'Your #1 battery specialist in Alberton. We stock top brands like Willard, Exide & Novax with free testing & fitment. Powering your world with unbeatable service.',
};

// Mock data for the Bestsellers component
const bestsellingProducts: Product[] = [
    { id: 'novax-premium-628', name: 'Novax Premium 628 Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Novax Premium', price: 1750.00, imageUrl: '/images/brand-novax-premium.jpg', description: 'High-performance battery with a 26-month warranty.', warranty: '26-Month Warranty', stock_status: 'In Stock', specs: { cca: '450', ah: '50' }, },
    { id: 'willard-652', name: 'Willard 652 Car Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Willard', price: 2100.00, imageUrl: '/images/brand-willard.jpg', description: 'The trusted choice for South African drivers, offering reliability and a 25-month warranty.', warranty: '25-Month Warranty', stock_status: 'In Stock', specs: { cca: '580', ah: '65' }, },
    { id: 'exide-616', name: 'Exide 616 EFB Start-Stop Battery', category: ['Automotive'], type: ['Stop-Start'], brand: 'Exide', price: 2450.00, imageUrl: '/images/brand-exide.jpg', description: 'Enhanced Flooded Battery designed for vehicles with Start-Stop technology.', warranty: '24-Month Warranty', stock_status: 'In Stock', specs: { cca: '360', ah: '40' }, },
    { id: 'global-619c', name: 'GLOBAL 619C Maintenance-Free Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Global Batteries', price: 1150.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/files/global-619-242470_46dbe2c8-c170-4082-a6f3-3f5f8877ae27.jpg?v=1741347595', description: '12V, 42Ah, 314CCA. A reliable choice for a wide range of popular passenger vehicles.', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: '314', ah: '42' }, },
    { id: 'novax-639', name: 'Novax 639 Low-Maintenance Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Novax', price: 1700.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/files/639.jpg?v=1741347635', description: '12V, 60Ah, 510CCA. Robust power for demanding South African conditions.', warranty: '18-Month Warranty', stock_status: 'In Stock', specs: { cca: '510', ah: '60' }, },
    { id: 'willard-668', name: 'Willard 668 Truck Battery', category: ['Truck'], type: ['Truck'], brand: 'Willard', price: 3200.00, imageUrl: '/images/category/truck-commercial.jpg', description: 'Heavy-duty performance for commercial vehicles and trucks.', warranty: '25-Month Warranty', stock_status: 'In Stock', specs: { cca: '830', ah: '102' }, },
    { id: 'enertec-ytx9', name: 'Enertec YTX9-BS Motorcycle Battery', category: ['Motorcycle'], type: ['Motorcycle'], brand: 'Enertec', price: 750.00, imageUrl: '/images/category/motorcycle.jpg', description: 'AGM technology for high-performance bikes and leisure craft.', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: '135', ah: '8' }, },
    { id: 'novax-658', name: 'Novax 658 Bakkie Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Novax', price: 1850.00, imageUrl: '/images/logo-novax.png', description: 'A popular and reliable choice for most light commercial vehicles and bakkies.', warranty: '18-Month Warranty', stock_status: 'In Stock', specs: { cca: '510', ah: '68' }, },
    { id: 'exide-646', name: 'Exide 646 European Standard Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Exide', price: 1950.00, imageUrl: '/images/brand-exide.jpg', description: 'Designed for European vehicle models requiring specific fitment.', warranty: '24-Month Warranty', stock_status: 'In Stock', specs: { cca: '540', ah: '60' }, },
    { id: 'novax-premium-652', name: 'Novax Premium 652 High-Performance', category: ['Automotive'], type: ['Automotive'], brand: 'Novax Premium', price: 1999.00, imageUrl: '/images/brand-novax-premium.jpg', description: 'Maximum power and longevity with our best 26-month warranty.', warranty: '26-Month Warranty', stock_status: 'In Stock', specs: { cca: '610', ah: '65' }, }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InteractiveBatteryFinder />
        <TrustAndValue />
        <Bestsellers products={bestsellingProducts} />
        <CategoryHighlights />
        <BrandShowcase />
        <ServiceHub />
        <BlogTeaser />
        {/* NEW COMPONENT ADDED HERE */}
        <Testimonials />
        <BatteryHealthCalculator />
      </main>
      <Footer />
    </>
  );
}