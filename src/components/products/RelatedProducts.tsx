// FILE: src/components/products/RelatedProducts.tsx
import React from 'react';
import { getAllProducts } from '@/lib/shopify';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  currentProductId: string;
  currentProductType: string[]; // <-- FIX: Changed to accept an array of strings
}

export default async function RelatedProducts({ currentProductId, currentProductType }: RelatedProductsProps) {
  const allProducts = await getAllProducts();

  const relatedProducts = allProducts.filter(product => {
    // FIX: Updated logic to find products that share at least one category
    const hasSharedType = product.type.some(type => currentProductType.includes(type));
    return hasSharedType && product.id !== currentProductId;
  }).slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-navy-800">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}