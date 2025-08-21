// FILE: src/components/home/WhyGlobalBatteries.tsx (REPLACE ENTIRE FILE)
"use client";

import React from "react";
import Image from "next/image";

// Card component for individual features
const FeatureCard = ({ imgSrc, altText, title, description }: { imgSrc: string, altText: string, title: string, description: string }) => (
  <div className="group relative bg-navy-850 rounded-lg p-8 text-center border border-slate-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-brand-blue">
    <div className="relative w-16 h-16 mx-auto mb-5">
      <Image 
        src={imgSrc} 
        alt={altText} 
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-full" 
        sizes="64px"
      />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

const WhyGlobalBatteries = () => {
  return (
    <section className="w-full bg-navy-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Global Batteries?</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            More than just a store — we are Alberton’s trusted specialists in powering your drive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            imgSrc="/images/technician-smiling.jpg"
            altText="Expert Technicians"
            title="Expert Technicians"
            description="Our team provides professional service, from free battery testing to precise BMW coding."
          />
          <FeatureCard 
            imgSrc="/images/brand-willard.jpg"
            altText="Biggest Selection"
            title="Biggest Selection"
            description="Stocking Willard, Exide, Novax, Global, and more — for cars, trucks, motorcycles, and solar."
          />
          <FeatureCard 
            imgSrc="/images/process/step2-test.jpg"
            altText="Free Testing & Fitment"
            title="Free Testing & Fitment"
            description="Peace of mind with free alternator, battery, and starter testing — plus expert fitment."
          />
          <FeatureCard 
            imgSrc="/images/process/step3-drive.jpg"
            altText="Fast Delivery"
            title="Fast Delivery"
            description="Same-day delivery available across Alberton and surrounds. Power, right when you need it."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyGlobalBatteries;