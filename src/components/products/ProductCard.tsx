// FILE: src/components/products/ProductCard.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import Icon from '@/components/ui/Icon';

const brandLogoMap: { [key: string]: string } = {
    'Willard': '/images/logo-willard.png',
    'Exide': '/images/logo-exide.png',
    'Novax Premium': '/images/logo-novax-premium.png',
    'Novax': '/images/logo-novax.png',
    'Global Batteries': '/images/logo-global.png',
    'Enertec': '/images/logo-enertec.png',
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group relative bg-gray-900 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-navy-500 flex flex-col h-full overflow-hidden">
            {/* The Spotlight Effect */}
            <div className="absolute top-0 left-0 w-full h-2/3 rounded-t-2xl bg-gradient-to-t from-gray-900 to-navy-800/50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
            
            <div className="relative p-4 flex flex-col flex-grow z-10">
                {/* Product Image */}
                <Link href={`/products/${product.id}`} className="block">
                    <div className="relative h-48 mb-4 flex items-center justify-center">
                        <Image 
                            src={product.imageUrl || '/images/placeholder.jpg'}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="w-auto h-auto max-h-40 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                        />
                    </div>
                </Link>

                {/* Product Info */}
                <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-center">
                        {brandLogoMap[product.brand] && (
                             <Image 
                                src={brandLogoMap[product.brand]}
                                alt={`${product.brand} Logo`}
                                width={70}
                                height={28}
                                className="h-7 w-auto object-contain"
                             />
                        )}
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-xs font-bold text-white">
                            {product.specs.size || 'Standard'}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mt-4 h-14 overflow-hidden">{product.name}</h3>
                    <p className="text-sm font-semibold text-gray-400 mt-1">{product.warranty}</p>

                    <div className="flex-grow" />

                    <p className="font-extrabold text-3xl text-white mt-4">R{product.price.toFixed(2)}</p>
                </div>
            </div>

            {/* Reveal-on-hover Action Bar */}
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gray-800/80 backdrop-blur-sm border-t border-gray-700
                            transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <div className="flex gap-3">
                    <Link href={`/products/${product.id}`} className="flex-1 text-center bg-gray-600/50 border-2 border-gray-600 text-white font-bold py-3 px-4 rounded-md hover:border-white transition duration-300 text-sm">
                        View Details
                    </Link>
                    <button className="flex-1 text-center bg-navy-700 text-white font-bold py-3 px-4 rounded-md hover:bg-navy-600 transition duration-300 flex items-center justify-center gap-2 text-sm">
                        <Icon path="M17,18a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V8H5V6H8.55a4,4,0,0,1,7.9,0H20v2H19v10ZM9,8v10h6V8Z" className="w-5 h-5" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}