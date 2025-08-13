// FILE: src/components/home/TopSellers.tsx
import React from 'react';
import ProductCard from '@/components/products/ProductCard'; // <-- FIX: Correct import path
import { getCollectionProducts } from '@/lib/shopify';
import { Product } from '@/types';

export default async function TopSellers() {
    const topSellers: Product[] = await getCollectionProducts('top-sellers', 6);
    if (!topSellers || topSellers.length === 0) {
        return (
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto text-center">
                    <p>No top sellers found. Please check the 'Top Sellers' collection in Shopify.</p>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2 text-navy-800">Our Top Sellers</h2>
                <p className="text-center text-gray-600 mb-10">Trusted by thousands of drivers across South Africa for performance and reliability.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {topSellers.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}