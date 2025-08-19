// FILE: src/app/page.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import type { Metadata } from 'next';
import { Product } from '@/types';
import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveBatteryFinder from '@/components/features/InteractiveBatteryFinder';
import TheGlobalBatteriesAdvantage from '@/components/home/TheGlobalBatteriesAdvantage';
import BrandShowcase from '@/components/home/BrandShowcase';
import BlogTeaser from '@/components/home/BlogTeaser';
import Testimonials from '@/components/home/Testimonials';
import BatteryHealthCalculator from '@/components/tools/BatteryHealthCalculator';
import VisitOurBranches from '@/components/home/VisitOurBranches';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CTA from '@/components/home/CTA'; // Import the new CTA component
import Footer from '@/components/Footer';

const LazyLoad = dynamic(() => import('@/components/utils/LazyLoad'));

const bestsellingProducts: Product[] = [
    // Automotive
    { id: 'willard-652', name: 'Willard 652 Car Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Willard', price: 1750.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/products/willard-automotive-willard-652-12882776621137.jpg?v=1741347546', description: 'The trusted choice for South African drivers, offering reliability and a 25-month warranty.', warranty: '25-Month Warranty', stock_status: 'In Stock', specs: { cca: '520', ah: '62' }, },
    { id: 'novax-premium-628', name: 'Novax Premium 628 Battery', category: ['Automotive'], type: ['Automotive'], brand: 'Novax Premium', price: 1400.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/products/novax-premium-automotive-novax-premium-628-12882776621137.jpg?v=1741347546', description: 'High-performance battery with a 26-month warranty.', warranty: '26-Month Warranty', stock_status: 'In Stock', specs: { cca: '375', ah: '45' }, },
    { id: 'exide-652c', name: 'Exide 652C', category: ['Automotive'], type: ['Automotive'], brand: 'Exide', price: 1650.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/products/exide-automotive-exide-652c-12882776621137.jpg?v=1741347546', description: 'Enhanced Flooded Battery designed for vehicles with Start-Stop technology.', warranty: '24-Month Warranty', stock_status: 'In Stock', specs: { cca: '516', ah: '62' }, },
    { id: 'global-619c', name: 'GLOBAL 619', category: ['Automotive'], type: ['Automotive'], brand: 'Global Batteries', price: 1050.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0245/6915/1569/products/global-automotive-global-619c-12882776621137.jpg?v=1741347546', description: '12V, 42Ah, 314CCA. A reliable choice for a wide range of popular passenger vehicles.', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: '314', ah: '42' }, },
    
    // Truck & Commercial
    { id: 'willard-668', name: 'Willard 668 Truck Battery', category: ['Truck'], type: ['Truck'], brand: 'Willard', price: 3200.00, imageUrl: '/images/category/truck-commercial.jpg', description: 'Heavy-duty performance for commercial vehicles and trucks.', warranty: '25-Month Warranty', stock_status: 'In Stock', specs: { cca: '830', ah: '102' }, },

    // Motorcycle
    { id: 'enertec-ytx14', name: 'Enertec YTX14-BS High Output', category: ['Motorcycle'], type: ['Motorcycle'], brand: 'Enertec', price: 950.00, imageUrl: 'https://placehold.co/400x400/ffffff/172A46?text=YTX14', description: 'High output AGM battery for larger motorcycles and ATVs.', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: '200', ah: '12' }, },

    // Solar & Backup
    { id: 'royal-100ah-dc', name: 'Royal 100Ah Deep Cycle', category: ['Solar'], type: ['Solar'], brand: 'Royal', price: 2500.00, imageUrl: 'https://placehold.co/400x400/ffffff/172A46?text=100Ah', description: '12V 100Ah Deep Cycle | Solar & Inverter', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: 'N/A', ah: '100' }, },

    // Security
    { id: 'enertec-7ah', name: 'Enertec 7.2Ah Security Battery', category: ['Security'], type: ['Security'], brand: 'Enertec', price: 350.00, imageUrl: 'https://placehold.co/400x400/ffffff/172A46?text=7.2Ah', description: '12V 7.2Ah | Gate Motors & Alarms', warranty: '12-Month Warranty', stock_status: 'In Stock', specs: { cca: 'N/A', ah: '7.2' }, },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InteractiveBatteryFinder />
        
        <LazyLoad placeholderHeight="600px">
          <TheGlobalBatteriesAdvantage />
        </LazyLoad>
        
        <LazyLoad placeholderHeight="800px">
          <FeaturedProducts products={bestsellingProducts} />
        </LazyLoad>

        <BrandShowcase />

        <LazyLoad placeholderHeight="700px">
          <Testimonials />
        </LazyLoad>
        
        <BlogTeaser />
        <BatteryHealthCalculator />
        
        <div id="branches"> {/* Added ID for anchor link */}
            <LazyLoad placeholderHeight="600px">
                <VisitOurBranches />
            </LazyLoad>
        </div>

        <CTA /> {/* Added the new CTA component */}
      </main>
      <Footer />
    </>
  );
}