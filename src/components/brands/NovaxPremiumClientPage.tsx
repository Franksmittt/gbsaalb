// FILE: src/components/brands/NovaxPremiumClientPage.tsx
"use client"; // This component contains all the interactive logic

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import BrandHero from '@/components/brands/BrandHero';
import ProductGrid from '@/components/brands/ProductGrid';
import WhyChoose from '@/components/brands/WhyChoose';
import TechSpecsTable from '@/components/brands/TechSpecsTable';
import CustomerReviews from '@/components/brands/CustomerReviews';
import FaqSection from '@/components/brands/FaqSection';

// --- Page-Specific Data ---
const novaxProducts = [
  { id: 'np-619', name: 'Novax Premium 619', specs: '12V 45AH 390CCA', price: 'R1,499.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '45', cca: '390', length: '242mm', width: '175mm', height: '190mm' } },
  { id: 'np-628', name: 'Novax Premium 628', specs: '12V 50AH 450CCA', price: 'R1,649.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '50', cca: '450', length: '242mm', width: '175mm', height: '190mm' } },
  { id: 'np-652', name: 'Novax Premium 652', specs: '12V 65AH 610CCA', price: 'R1,999.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '65', cca: '610', length: '278mm', width: '175mm', height: '190mm' } },
  { id: 'np-668', name: 'Novax Premium 668', specs: '12V 70AH 680CCA', price: 'R2,249.00', imageUrl: '/images/brand-novax-premium.jpg', tech: { ah: '70', cca: '680', length: '278mm', width: '175mm', height: '190mm' } },
];

const whyChooseFeatures = [
    { iconPath: "M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z", title: "Unmatched Warranty", description: "Enjoy peace of mind with a 26-month nationwide warranty, a testament to our quality." },
    { iconPath: "M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", title: "Superior Performance", description: "Engineered for high-performance vehicles, ensuring reliable starts in all conditions." },
    { iconPath: "M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", title: "Built for South Africa", description: "Designed to withstand the demanding conditions of South African roads and climate." },
];

const reviews = [
    { quote: "Installed the Novax Premium in my Hilux and the difference was immediate. Starts strong every time, even on cold mornings.", author: "Bheki L, Johannesburg" },
    { quote: "The 26-month warranty is what sold me. It shows confidence in the product, and the performance has been flawless in my BMW.", author: "Anika P, Sandton" },
    { quote: "Worth every rand. You can feel the quality. My Ranger has never been more reliable.", author: "Chris V, Alberton" },
];

const faqs = [
    { question: "What makes Novax Premium different?", answer: "Novax Premium batteries are built with higher quality materials, offering superior starting power (CCA) and a longer lifespan, backed by a 26-month warranty." },
    { question: "Is a Novax Premium battery right for my vehicle?", answer: "They are ideal for high-performance vehicles, cars with advanced electronics, or for drivers who demand the utmost reliability in all weather conditions." },
    { question: "How does the 26-month warranty work?", answer: "The warranty covers any manufacturing defects for 26 months from the date of purchase. Simply bring your battery and proof of purchase to any of our branches for a free test and replacement if necessary." },
];


export default function NovaxPremiumClientPage() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <BrandHero 
            logoSrc="/images/logo-novax.png"
            brandName="Novax Premium"
            tagline="The pinnacle of performance and reliability, backed by an industry-leading 26-month warranty."
        />
        <ProductGrid products={novaxProducts} brandName="Novax Premium" />
        <WhyChoose brandName="Novax Premium" features={whyChooseFeatures} />
        <TechSpecsTable products={novaxProducts} />
        <CustomerReviews brandName="Novax Premium" reviews={reviews} />
        <FaqSection faqs={faqs} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
