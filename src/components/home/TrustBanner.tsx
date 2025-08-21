// FILE: src/components/home/TrustBanner.tsx (REPLACE ENTIRE FILE)
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const trustPoints = [
  { title: "Free Testing", subtitle: "Battery & Alternator" },
  { title: "BMW Coding", subtitle: "Specialized Service" },
  { title: "3 Locations", subtitle: "Across Gauteng" },
  { title: "Same-Day Delivery", subtitle: "In Alberton Area" }
];

const TrustBanner = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="bg-navy-800 border-y border-blue-900/50 py-8 md:py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {trustPoints.map((point) => (
            <motion.div key={point.title} variants={itemVariants}>
              <p className="font-bold text-base md:text-lg">{point.title}</p>
              <p className="text-sm text-gray-300">{point.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBanner;