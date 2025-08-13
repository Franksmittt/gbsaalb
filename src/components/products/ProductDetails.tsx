// FILE: src/components/products/ProductDetails.tsx
"use client";

import { Product } from '@/types';
import Icon from '@/components/ui/Icon';

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase text-gray-500">{product.brand}</p>
      <h1 className="text-3xl lg:text-4xl font-extrabold text-navy-800 my-2">{product.name}</h1>
      <p className="text-3xl font-bold text-gray-800 mb-4">
        R{product.price.toFixed(2)}
      </p>

      <div className="border-t pt-4 mt-4">
        <h2 className="font-bold text-lg text-gray-700 mb-3">Specifications</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
          {product.specs.size && <div><strong>Size Code:</strong> {product.specs.size}</div>}
          {product.specs.cca && <div><strong>CCA:</strong> {product.specs.cca}</div>}
          {product.specs.ah && <div><strong>Amp Hours (Ah):</strong> {product.specs.ah}</div>}
          {product.specs.voltage && <div><strong>Voltage:</strong> {product.specs.voltage}</div>}
          {product.warranty && <div><strong>Warranty:</strong> {product.warranty}</div>}
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full bg-navy-800 text-white font-bold py-3 px-6 rounded-md hover:bg-navy-700 transition duration-300 flex items-center justify-center gap-2">
          <Icon path="M17,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V8H5V6H8.55a4,4,0,0,1,7.9,0H20v2H19v10ZM9,8v10h6V8Z" className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}