// FILE: src/components/HomePageClient.tsx
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Testimonial } from '@/types';

// Import components that are visible immediately (above-the-fold)
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveBatteryFinder from '@/components/features/InteractiveBatteryFinder';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

// Dynamically import components that are below-the-fold
const TopSellers = dynamic(() => import('@/components/TopSellers'));
const ShopByCategorySection = dynamic(() => import('@/components/ShopByCategorySection'));
const FullRangeSection = dynamic(() => import('@/components/FullRangeSection'));
const DealOfTheWeek = dynamic(() => import('@/components/DealOfTheWeek'));
const BatteryHealthCalculator = dynamic(() => import('@/components/tools/BatteryHealthCalculator'));
const ExpertAdvicePreview = dynamic(() => import('@/components/ExpertAdvicePreview'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const BrandLogosSection = dynamic(() => import('@/components/BrandLogosSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function HomePageClient() {
  const testimonials: Testimonial[] = [
      { id: 1, name: 'John D.', location: 'Alberton, GP', quote: 'Exceptional service! The team has extensive product knowledge and helped me find the perfect battery for my car.', avatarUrl: '/images/avatar-john-d.jpg' },
      { id: 2, name: 'Sarah L.', location: 'Johannesburg, GP', quote: 'The jump-start call-out service was a lifesaver! They got me to the store and replaced my battery in no time.', avatarUrl: '/images/avatar-sarah-l.jpg' },
      { id: 3, name: 'Mike R.', location: 'Meyersdal, GP', quote: 'I was impressed by the range of brands. They had exactly what I needed, and the free fitment was a fantastic bonus.', avatarUrl: '/images/avatar-mike-r.jpg' },
  ];

  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <InteractiveBatteryFinder />
        <WhyChooseUsSection />
        <TopSellers />
        <ShopByCategorySection />
        <FullRangeSection />
        <DealOfTheWeek />
        <BatteryHealthCalculator />
        <ExpertAdvicePreview />
        <TestimonialsSection testimonials={testimonials} />
        <BrandLogosSection />
      </main>
      <Footer />
    </div>
  );
}