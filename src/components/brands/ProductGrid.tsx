// FILE: src/components/brands/ProductGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

interface Product {
    id: string;
    name: string;
    specs: string;
    price: string;
    imageUrl: string;
}

const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col overflow-hidden">
        <Link href={`/products/${product.id}`} className="block">
            <div className="bg-gray-100 flex items-center justify-center h-48 overflow-hidden">
                <Image 
                    src={product.imageUrl} 
                    alt={`Image of ${product.name}`} 
                    width={200} 
                    height={200} 
                    className="w-auto h-auto max-h-40 object-contain group-hover:scale-105 transition-transform duration-300" 
                />
            </div>
        </Link>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.specs}</p>
            <div className="flex-grow"></div>
            <p className="font-bold text-2xl text-navy-800 mt-4">{product.price}</p>
        </div>
        <div className="p-4 border-t mt-auto">
            <button className="w-full bg-navy-800 text-white font-bold py-3 px-4 rounded-md hover:bg-navy-700 transition duration-300 flex items-center justify-center gap-2">
                <Icon path="M17,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V8H5V6H8.55a4,4,0,0,1,7.9,0H20v2H19v10ZM9,8v10h6V8Z" className="w-5 h-5" />
                Add to Cart
            </button>
        </div>
    </div>
);

export default function ProductGrid({ products, brandName }: { products: Product[], brandName: string }) {
    return (
        <div id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Explore The {brandName} Range</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}