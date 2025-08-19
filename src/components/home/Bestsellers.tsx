// FILE: src/components/home/Bestsellers.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Icon from '@/components/ui/Icon';

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 snap-start">
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group overflow-hidden">
      <div className="relative p-4 bg-white rounded-t-xl">
        <div className="absolute top-0 left-0 bg-navy-800 text-white text-xs font-bold px-3 py-1 rounded-tl-xl rounded-br-xl z-10">
          {product.brand}
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
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-lg leading-tight h-14">
            <Link href={`/shop/${product.id}`} className="hover:text-navy-700 transition-colors">{product.name}</Link>
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
          {product.specs.cca && (
            <div className="flex items-center gap-1" title="Cold Cranking Amps">
              <Icon path="M12,2a1,1,0,0,0-1,1V5.41a5,5,0,0,0,0,9.18V19a1,1,0,0,0,2,0V14.59a5,5,0,0,0,0-9.18V3A1,1,0,0,0,12,2ZM12,8a3,3,0,1,1-3,3A3,3,0,0,1,12,8Z" className="w-4 h-4 text-navy-700" />
              <span>{product.specs.cca} CCA</span>
            </div>
          )}
          {product.specs.ah && (
            <div className="flex items-center gap-1" title="Ampere-Hour">
              <Icon path="M13,1a1,1,0,0,0-2,0V4H9A1,1,0,0,0,8,5V8H4a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H15V1A1,1,0,0,0,13,1Z" className="w-4 h-4 text-navy-700" />
              <span>{product.specs.ah} Ah</span>
            </div>
          )}
        </div>
        <div className="mt-auto pt-5">
          <p className="text-gray-500 text-sm">Starts From</p>
          <p className="text-3xl font-extrabold text-navy-900">R{product.price.toFixed(2)}</p>
          <Link href={`/shop/${product.id}`} className="mt-4 w-full inline-block text-center bg-brand-yellow text-navy-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

type CategoryTab = 'Top Sellers' | 'Truck & Commercial' | 'Motorcycle' | 'Accessories';

const Bestsellers = ({ products }: { products: Product[] }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('Top Sellers');
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.75;
      scrollContainer.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const getFilteredProducts = () => {
    switch(activeTab) {
      case 'Truck & Commercial':
        return products.filter(p => p.type.includes('Truck'));
      case 'Motorcycle':
        return products.filter(p => p.type.includes('Motorcycle'));
      case 'Accessories':
         return products.filter(p => p.type.includes('Accessories'));
      case 'Top Sellers':
      default:
        return products.filter(p => p.type.includes('Automotive')).slice(0, 8);
    }
  };

  const filteredProducts = getFilteredProducts();
  const tabs: CategoryTab[] = ['Top Sellers', 'Truck & Commercial', 'Motorcycle', 'Accessories'];

  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Top Products for Alberton Drivers</h2>
            <p className="mt-2 text-lg text-gray-600">Our most trusted and popular batteries and accessories for local conditions.</p>
        </div>
        
        <div className="flex justify-center mb-8 border-b border-gray-300">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold text-sm sm:text-base transition-colors duration-300 border-b-2 ${activeTab === tab ? 'border-navy-800 text-navy-800' : 'border-transparent text-gray-500 hover:text-navy-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <div ref={scrollContainer} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -m-3 p-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="w-full text-center py-16">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
           <div className="hidden sm:flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <button onClick={() => scroll('left')} aria-label="Previous Item" className="bg-white/80 hover:bg-white shadow-md rounded-full p-3 transition-colors pointer-events-auto -ml-6">
              <Icon path="M15.71,17.29a1,1,0,0,1-1.42,0L9.71,12.71a1,1,0,0,1,0-1.42L14.29,6.7a1,1,0,1,1,1.42,1.42L11.83,12l3.88,3.88A1,1,0,0,1,15.71,17.29Z" className="w-6 h-6 text-gray-800" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next Item" className="bg-white/80 hover:bg-white shadow-md rounded-full p-3 transition-colors pointer-events-auto -mr-6">
              <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;