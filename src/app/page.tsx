// FILE: src/app/page.tsx
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import InteractiveBatteryFinder from '@/components/home/InteractiveBatteryFinder';
import ThePromise from '@/components/home/ThePromise';
import ShopByCategory from '@/components/home/ShopByCategory';
import ShopBySize from '@/components/home/ShopBySize';
import FeaturedBrands from '@/components/home/FeaturedBrands';
import DynamicProductShowcase from '@/components/home/DynamicProductShowcase';
import ExpertAdvicePreview from '@/components/home/ExpertAdvicePreview';
import TrustStream from '@/components/home/TrustStream';
import LocalTrustBar from '@/components/home/LocalTrustBar';
import Footer from '@/components/Footer';
import { getCollectionProducts } from '@/lib/shopify'; // Import the fetch function

// This is now an async Server Component, which can fetch data
export default async function HomePage() {
  
  // Fetch the products for the components that need them
  const topSellers = await getCollectionProducts('top-sellers', 8);
  const allProducts = await getCollectionProducts('all', 20); // Fetch some products for category section

  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <InteractiveBatteryFinder />
        <ThePromise />
        {/* Pass the fetched products down as a prop */}
        <ShopByCategory products={allProducts} /> 
        <ShopBySize />
        <FeaturedBrands />
        {/* Pass the fetched top sellers down as a prop */}
        <DynamicProductShowcase products={topSellers} />
        <ExpertAdvicePreview />
        <TrustStream />
        <LocalTrustBar />
      </main>
      <Footer />
    </div>
  );
}