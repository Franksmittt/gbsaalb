// FILE: src/components/home/DynamicProductShowcase.tsx
import React from 'react';
import { Product } from '@/types'; // Now correctly imports the type
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import ProductCarouselClient from '@/components/home/ProductCarouselClient';

// This is no longer an async component. It's a regular component
// that receives 'products' as a prop.
export default function DynamicProductShowcase({ products }: { products: Product[] }) {
    
    // Check if there are any products to show
    if (!products || products.length === 0) {
        return (
            <div className="py-20 bg-blueprint">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Most Popular Products</h2>
                    <p className="mt-4 text-lg text-gray-400">Top sellers are currently being updated. Please check back soon.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="py-20 bg-blueprint">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Most Popular Products</h2>
                        <p className="mt-2 text-lg text-gray-400">Trusted by thousands of drivers for performance and reliability.</p>
                    </div>
                    <Link href="/shop" className="mt-4 md:mt-0 font-bold text-navy-400 hover:text-white transition-colors flex items-center gap-2 flex-shrink-0">
                        Shop All Products
                        <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5"/>
                    </Link>
                </div>
                {/* The client carousel receives the products passed down to this component */}
                <ProductCarouselClient products={products} />
            </div>
        </div>
    );
}