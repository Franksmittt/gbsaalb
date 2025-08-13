// FILE: src/components/products/ProductActions.tsx
"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { Product } from '@/types';

// This component handles client-side interactivity
const ProductActions = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // In a real application, this would trigger a function to add
    // the product and quantity to the Shopify cart.
    alert(`${quantity} x ${product.name} added to cart! (Product Handle: ${product.id})`);
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="quantity" className="font-bold text-gray-700">Quantity:</label>
        <div className="flex items-center border rounded-md">
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))} 
            className="px-3 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 transition"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input 
            type="number" 
            id="quantity" 
            value={quantity}
            readOnly
            className="w-16 p-2 border-l border-r text-center font-bold bg-white"
          />
          <button 
            onClick={() => setQuantity(q => q + 1)} 
            className="px-3 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 transition"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      
      <button 
        onClick={handleAddToCart}
        className="w-full bg-navy-800 text-white font-bold py-4 px-6 rounded-md hover:bg-navy-700 transition duration-300 flex items-center justify-center gap-2 text-lg"
      >
        <Icon path="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z" className="w-5 h-5" />
        Add to Cart
      </button>
    </>
  );
};

export default ProductActions;