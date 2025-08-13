// FILE: src/components/brands/NovaxPremiumClientPage.tsx
"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import BrandHero from '@/components/brands/BrandHero';
import WhyChoose from '@/components/brands/WhyChoose';
import ProductGrid from '@/components/brands/ProductGrid';
import TechSpecsTable from '@/components/brands/TechSpecsTable';
import CustomerReviews from '@/components/brands/CustomerReviews';
import FaqSection from '@/components/brands/FaqSection';

// --- Page-Specific Data (Unchanged) ---
const novaxProducts = [
  { id: 'np-619', name: 'Novax Premium 619', specs: '12V 45AH 390CCA', price: 'R1,499.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '45', cca: '390', length: '242mm', width: '175mm', height: '190mm' } },
  { id: 'np-628', name: 'Novax Premium 628', specs: '12V 50AH 450CCA', price: 'R1,649.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '50', cca: '450', length: '242mm', width: '175mm', height: '190mm' } },
  { id: 'np-652', name: 'Novax Premium 652', specs: '12V 65AH 610CCA', price: 'R1,999.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '65', cca: '610', length: '278mm', width: '175mm', height: '190mm' } },
  { id: 'np-668', name: 'Novax Premium 668', specs: '12V 70AH 680CCA', price: 'R2,249.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '70', cca: '680', length: '278mm', width: '175mm', height: '190mm' } },
];
const whyChooseFeatures = [
    { iconPath: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", title: "26-Month Warranty", description: "An industry-leading nationwide warranty that guarantees performance and peace of mind." },
    { iconPath: "M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z", title: "Superior Cranking Power", description: "Engineered with higher Cold Cranking Amps (CCA) for reliable starts in all conditions." },
    { iconPath: "M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z", title: "Built For SA Conditions", description: "Designed with advanced calcium technology to withstand demanding South African climates and roads." },
];
const reviews = [
    { quote: "Installed the Novax Premium in my Hilux and the difference was immediate. Starts strong every time, even on cold mornings.", author: "Bheki L, Johannesburg", rating: 5 },
    { quote: "The 26-month warranty is what sold me. It shows confidence in the product, and the performance has been flawless in my BMW.", author: "Anika P, Sandton", rating: 5 },
    { quote: "Worth every rand. You can feel the quality. My Ranger has never been more reliable.", author: "Chris V, Alberton", rating: 5 },
];
const faqs = [
    { question: "What makes Novax Premium different from the standard Novax?", answer: "Novax Premium batteries are our flagship offering. They are built with higher-quality internal components, providing superior starting power (CCA) and a longer lifespan. This is backed by our industry-leading 26-month nationwide warranty." },
    { question: "Is a Novax Premium battery right for my vehicle?", answer: "This range is ideal for high-performance vehicles, cars with advanced electronics (like modern infotainment systems), or for any driver who demands the utmost reliability and longevity in all weather conditions." },
    { question: "How does the 26-month warranty work?", answer: "The warranty covers any manufacturing defects for 26 months from the date of purchase. Simply bring your battery and proof of purchase to any of our branches for a free test and replacement if necessary." },
];


export default function NovaxPremiumClientPage() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <BrandHero 
            logoSrc="/images/logo-novax-premium.png"
            brandName="Novax Premium"
            tagline="The Pinnacle of Performance and Reliability."
            backgroundImg="/images/hero-brand-bg.jpg"
        />
        <WhyChoose brandName="Novax Premium" features={whyChooseFeatures} />
        <ProductGrid products={novaxProducts} brandName="Novax Premium" />
        <TechSpecsTable products={novaxProducts} />
        <CustomerReviews brandName="Novax Premium" reviews={reviews} />
        <FaqSection faqs={faqs} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}