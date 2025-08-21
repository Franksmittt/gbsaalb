// FILE: src/app/page.tsx (REPLACE ENTIRE FILE)

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Data fetching functions
import { getAllProducts } from '@/lib/shopify';

// Components
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveBatteryFinder from '@/components/features/InteractiveBatteryFinder';
import TrustBanner from '@/components/home/TrustBanner';
import WhyGlobalBatteries from '@/components/home/WhyGlobalBatteries';
import Footer from '@/components/Footer';
import BestSellers from '@/components/home/BestSellers';

// Dynamically import heavy components that are below the fold
const FeaturedProducts = dynamic(() => import('@/components/home/FeaturedProducts'));
const TheGlobalBatteriesAdvantage = dynamic(() => import('@/components/home/TheGlobalBatteriesAdvantage'));
const SocialProofBanner = dynamic(() => import('@/components/home/SocialProofBanner'));
const BrandExplorer = dynamic(() => import('@/components/home/BrandExplorer'));
const BlogTeaser = dynamic(() => import('@/components/home/BlogTeaser'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const BatteryHealthCalculator = dynamic(() => import('@/components/tools/BatteryHealthCalculator'));
const VisitOurBranches = dynamic(() => import('@/components/home/VisitOurBranches'));
const CTA = dynamic(() => import('@/components/home/CTA'));


// Define a simple loading placeholder for Suspense
const SectionLoader = ({ height }: { height: string }) => (
  <div style={{ minHeight: height }} />
);

// The page is now an async function to fetch data on the server
export default async function HomePage() {
  // Fetch all products from Shopify on the server for other components
  const allProducts = await getAllProducts();

  return (
    <>
      <Header />
      <main>
        {/* Eager loaded components */}
        <HeroSection />
        <InteractiveBatteryFinder />

        {/* ADD THE NEW BEST SELLERS COMPONENT HERE, WRAPPED IN SUSPENSE */}
        <Suspense fallback={<SectionLoader height="600px" />}>
          <BestSellers />
        </Suspense>

        <WhyGlobalBatteries />
        <TrustBanner />

        {/* The rest of your Suspense-loaded components */}
        <Suspense fallback={<SectionLoader height="600px" />}>
          <TheGlobalBatteriesAdvantage />
        </Suspense>
        
        <Suspense fallback={<SectionLoader height="500px" />}>
          <SocialProofBanner />
        </Suspense>
        
        <Suspense fallback={<SectionLoader height="900px" />}>
          <FeaturedProducts products={allProducts} />
        </Suspense>
        
        <Suspense fallback={<SectionLoader height="900px" />}>
          <BrandExplorer />
        </Suspense>
        
        <Suspense fallback={<SectionLoader height="700px" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader height="400px" />}>
          <BlogTeaser />
        </Suspense>

        <BatteryHealthCalculator />

        <Suspense fallback={<SectionLoader height="600px" />}>
          <VisitOurBranches />
        </Suspense>

        <Suspense fallback={<SectionLoader height="400px" />}>
          <CTA />
        </Suspense>

      </main>
      <Footer />
    </>
  );
}