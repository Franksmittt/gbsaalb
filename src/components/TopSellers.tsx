// FILE: src/components/TopSellers.tsx (New file)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const topSellers = [
  { id: 'willard-652', name: 'Willard 652', price: 1850.00, imageUrl: '/images/brand-willard.jpg' },
  { id: 'np-619', name: 'Novax Premium 619', price: 1499.00, imageUrl: '/images/brand-novax-premium.jpg' },
  { id: 'global-619c', name: 'Global 619', price: 1250.00, imageUrl: '/images/brand-global.jpg' },
  { id: 'exide-610c', name: 'Exide 610C', price: 1600.00, imageUrl: '/images/brand-exide.jpg' },
];

const ProductCard = ({ product }: { product: typeof topSellers[0] }) => (
    <Link href={`/products/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border">
        <div className="overflow-hidden rounded-t-lg">
            <Image 
                src={product.imageUrl}
                alt={`Image of ${product.name}`}
                width={400}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-navy-800 transition-colors">{product.name}</h3>
            <p className="font-bold text-xl text-navy-800">R{product.price.toFixed(2)}</p>
        </div>
    </Link>
);

const TopSellers = () => (
    <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Top Sellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topSellers.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/shop" className="bg-navy-800 text-white font-bold py-3 px-8 rounded-md hover:bg-navy-700 transition duration-300">
                    Shop All Products
                </Link>
            </div>
        </div>
    </div>
);

export default TopSellers;