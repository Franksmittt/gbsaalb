// FILE: src/components/home/ProductCarouselClient.tsx
"use client";

import React, { useState, useRef, CSSProperties } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';
import Icon from '@/components/ui/Icon';

export default function ProductCarouselClient({ products }: { products: Product[] }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (!products || products.length === 0) {
        return <p className="text-center text-gray-500 py-8">Top sellers are currently being updated. Please check back soon.</p>;
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    // FIX: Corrected the type for the style object to satisfy TypeScript.
    const scrollbarHideStyle: CSSProperties = {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
    };

    return (
        <div className="relative">
            <button 
                onClick={() => scroll('left')} 
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-navy-700 hover:scale-110 transition-all text-white hidden lg:flex items-center justify-center"
                aria-label="Scroll left"
            >
                <Icon path="M15.71,17.29a1,1,0,0,1-1.42,0L9,12l5.29-5.29a1,1,0,0,1,1.42,1.42L11.83,12l3.88,3.88A1,1,0,0,1,15.71,17.29Z" className="w-6 h-6"/>
            </button>

            <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory py-4 scroll-smooth" style={scrollbarHideStyle}>
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 snap-start px-3">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <button 
                onClick={() => scroll('right')} 
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-navy-700 hover:scale-110 transition-all text-white hidden lg:flex items-center justify-center"
                aria-label="Scroll right"
            >
                <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-6 h-6"/>
            </button>
        </div>
    );
}