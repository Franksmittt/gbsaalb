// FILE: src/components/home/Bestsellers.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Icon from '@/components/ui/Icon';

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 animate-fade-in">
    <div className="bg-navy-900 border border-gray-700 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col group overflow-hidden">
      <div className="relative p-4 bg-white rounded-t-xl">
        {/* ACCESSIBILITY FIX: Using a darker blue for better contrast */}
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-tl-xl rounded-br-xl z-10">
          BESTSELLER
        </div>
        <Link href={`/shop/${product.id}`} className="block">
          <Image
            src={product.imageUrl}
            alt={`Image of ${product.name}`}
            width={250}
            height={250}
            style={{ objectFit: 'contain' }}
            className="mx-auto h-48 w-full transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col flex-grow text-white">
        <h3 className="font-bold text-lg leading-tight h-14">
            <Link href={`/shop/${product.id}`} className="hover:text-blue-400 transition-colors">{product.name}</Link>
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-400 mt-3">
          {product.specs.cca && (
            <div className="flex items-center gap-1" title="Cold Cranking Amps">
              <Icon path="M12,2a1,1,0,0,0-1,1V5.41a5,5,0,0,0,0,9.18V19a1,1,0,0,0,2,0V14.59a5,5,0,0,0,0-9.18V3A1,1,0,0,0,12,2ZM12,8a3,3,0,1,1-3,3A3,3,0,0,1,12,8Z" className="w-4 h-4 text-blue-400" />
              <span>{product.specs.cca} CCA</span>
            </div>
          )}
          {product.specs.ah && (
            <div className="flex items-center gap-1" title="Ampere-Hour">
              <Icon path="M13,1a1,1,0,0,0-2,0V4H9A1,1,0,0,0,8,5V8H4a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H15V1A1,1,0,0,0,13,1Z" className="w-4 h-4 text-blue-400" />
              <span>{product.specs.ah} Ah</span>
            </div>
          )}
        </div>
        <div className="mt-auto pt-5">
          <p className="text-gray-400 text-sm">Starts From</p>
          <p className="text-3xl font-extrabold text-white">R{product.price.toFixed(2)}</p>
          <Link href={`/shop/${product.id}`} className="mt-4 w-full inline-block text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
            View Battery
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Bestsellers = ({ products }: { products: Product[] }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.75;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-navy-900 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Bestsellers for Gauteng Drivers</h2>
            <p className="mt-2 text-lg text-gray-400">Our most trusted and popular batteries for local conditions.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => scroll('left')} aria-label="Previous Item" className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors">
              <Icon path="M15.71,17.29a1,1,0,0,1-1.42,0L9.71,12.71a1,1,0,0,1,0-1.42L14.29,6.7a1,1,0,1,1,1.42,1.42L11.83,12l3.88,3.88A1,1,0,0,1,15.71,17.29Z" className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next Item" className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors">
              <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -m-3 p-3"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;