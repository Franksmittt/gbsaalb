// FILE: src/app/shop/page.tsx
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product as ShopifyProduct } from '@/types';
import { getAllProducts } from '@/lib/shopify';
import ShopPageClient from './ShopPageClient'; // Import the new client component

// This is now a pure Server Component
export default async function ShopPageWrapper() {
    const allProducts: ShopifyProduct[] = await getAllProducts();

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <Suspense fallback={<div className="container mx-auto text-center py-20 text-lg font-semibold">Loading Products...</div>}>
                <ShopPageClient allProducts={allProducts} />
            </Suspense>
            <Footer />
        </div>
    );
}