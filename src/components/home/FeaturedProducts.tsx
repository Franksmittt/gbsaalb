// FILE: src/components/home/FeaturedProducts.tsx (REPLACE ENTIRE FILE)
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Icon from '@/components/ui/Icon';

const StockStatus = ({ status }: { status: Product['stock_status'] }) => {
  if (status === 'Out of Stock') {
    return (
      <div className="absolute top-3 left-3 bg-slate-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 flex items-center gap-1.5">
        <Icon path="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm-1-4h2v2H11Zm0-8h2v6H11Z" className="w-4 h-4" />
        OUT OF STOCK
      </div>
    );
  }
  if (status === 'Low Stock') {
    return (
      <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 flex items-center gap-1.5 animate-pulse">
        <Icon path="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm-1-4h2v2H11Zm0-8h2v6H11Z" className="w-4 h-4" />
        LOW STOCK
      </div>
    );
  }
  return null;
};

const ProductCard = ({ product, isBestSeller }: { product: Product; isBestSeller?: boolean }) => (
    <div className="product-card-gradient rounded-lg border border-slate-700/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/50 relative overflow-hidden">
        <StockStatus status={product.stock_status} />
        {isBestSeller && <div className="absolute top-3 right-3 bg-white text-navy-950 px-3 py-1 rounded-full text-xs font-semibold uppercase z-10">Best Seller</div>}
        <div className="bg-white p-4">
            <Link href={`/shop/${product.id}`}>
                <Image 
                    src={product.imageUrl} 
                    alt={product.name} 
                    width={400} 
                    height={400} 
                    className="w-full h-48 object-contain product-image-blend"
                />
            </Link>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-white">{product.name}</h3>
            <p className="text-slate-400 text-sm mb-4 h-10">{product.warranty} | {product.specs.ah}Ah {product.specs.cca}CCA</p>
            <p className="text-3xl font-bold text-white mb-6 mt-auto">R{product.price.toFixed(2)}</p>
            <Link href={`/shop/${product.id}`} className="border border-white text-white font-semibold py-2 px-6 rounded-md w-full text-center transition-colors hover:bg-white hover:text-navy-950">
                View Details
            </Link>
        </div>
    </div>
);

type CategoryTab = 'automotive' | 'commercial' | 'leisure' | 'backup' | 'security';

export default function FeaturedProducts({ products }: { products: Product[] }) {
    const [activeTab, setActiveTab] = useState<CategoryTab>('automotive');

    const tabs: { id: CategoryTab; label: string; type: string }[] = [
        { id: 'automotive', label: 'Automotive', type: 'Automotive' },
        { id: 'commercial', label: 'Truck & Commercial', type: 'Truck' },
        { id: 'leisure', label: 'Motorcycle & Leisure', type: 'Motorcycle' },
        { id: 'backup', label: 'Solar & Backup', type: 'Solar' },
        { id: 'security', label: 'Security', type: 'Security' },
    ];

    return (
        <section className="w-full bg-navy-950">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Power Solutions</h2>
                    <p className="text-slate-400 mt-4 text-lg max-w-3xl mx-auto">A curated selection of our most trusted and popular batteries for every need, available now in Alberton.</p>
                </div>

                <div className="flex flex-wrap justify-center border-b border-slate-700 mb-12">
                    {tabs.map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`font-semibold py-4 px-6 transition-all duration-300 border-b-2 ${activeTab === tab.id ? 'text-white border-white' : 'text-slate-400 border-transparent hover:text-white hover:border-slate-700'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div>
                    {tabs.map(tab => (
                        <div key={tab.id} className={`${activeTab === tab.id ? 'grid' : 'hidden'} grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-fast`}>
                            {products
                                // FIX: Made the filter case-insensitive to ensure products always match.
                                .filter(p => p.type.map(t => t.toLowerCase()).includes(tab.type.toLowerCase()))
                                .slice(0, 4)
                                .map((product, index) => (
                                    <ProductCard key={product.id} product={product} isBestSeller={tab.id === 'automotive' && index === 0} />
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}