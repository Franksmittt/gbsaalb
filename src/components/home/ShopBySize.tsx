// FILE: src/components/home/ShopBySize.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const sizeInfo: { [key: string]: { description: string; topProduct: string; } } = {
    '616': { description: 'Common in older light passenger vehicles like Toyota Tazz & Citi Golf.', topProduct: 'Novax 616' },
    '619': { description: 'Fits a wide range of modern small-engine cars like Hyundai i10 & Kia Picanto.', topProduct: 'Willard 619' },
    '628': { description: 'Popular size for mid-range sedans and hatchbacks, including Toyota Corolla.', topProduct: 'Exide 628' },
    '646': { description: 'Used in many European models like BMW 3-Series and Mercedes C-Class.', topProduct: 'Novax Premium 646' },
    '652': { description: 'Our top seller, fitting VW Polos, Toyota Fortuners, and many bakkies.', topProduct: 'Novax Premium 652' },
    '668': { description: 'For larger SUVs and performance vehicles requiring higher cranking power.', topProduct: 'Willard 668' },
    '658': { description: 'The go-to size for many heavy-duty commercial trucks and agricultural equipment.', topProduct: 'Exide 658' },
};

const sizes = ['616', '619', '628', '646', '652', '668', '658'];

const SizeButton = ({ size, isSelected, onSelect }: { size: string; isSelected: boolean; onSelect: () => void; }) => (
    <button 
        onClick={onSelect}
        className={`
            p-4 rounded-lg font-bold text-3xl md:text-4xl
            transition-all duration-200 ease-in-out transform
            border-2
            ${isSelected
                ? 'bg-navy-700 text-white border-navy-400 shadow-lg shadow-navy-500/20 scale-110'
                // This is the "off" state - a glassy, dark button
                : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-navy-500 hover:text-white hover:scale-105'
            }
        `}
    >
        {size}
    </button>
);

const InfoPanel = ({ size }: { size: string | null }) => {
    if (!size || !sizeInfo[size]) return null;

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-fast">
            <div className="text-center md:text-left">
                <p className="font-bold text-xl text-white">
                    Size {size}: <span className="text-gray-400 font-normal">{sizeInfo[size].description}</span>
                </p>
                <p className="text-sm mt-2 text-gray-300">
                    <span className="font-semibold text-white">Top Recommendation:</span> {sizeInfo[size].topProduct}
                </p>
            </div>
            <Link 
                href={`/shop?size=${size}`} 
                className="bg-navy-700 text-white font-bold py-3 px-8 rounded-md hover:bg-navy-600 transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-navy-500/30"
            >
                Shop All Size {size}
            </Link>
        </div>
    );
};

export default function ShopBySize() {
    const [selectedSize, setSelectedSize] = useState<string | null>('652');

    return (
        <div className="py-20 bg-blueprint">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <Icon path="M12,2a1,1,0,0,0-1,1V5.33a8,8,0,0,0,0,13.34V21a1,1,0,0,0,2,0V18.67a8,8,0,0,0,0-13.34V3A1,1,0,0,0,12,2Zm0,15a6.63,6.63,0,0,1-4-1.12V8.12A6.63,6.63,0,0,1,12,7a6.63,6.63,0,0,1,4,1.12v8.76A6.63,6.63,0,0,1,12,17Z" className="w-12 h-12 mx-auto mb-4 text-navy-400"/>
                        Sizing Terminal
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Select a battery size code to activate the terminal and get instant compatibility information.
                    </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-10 shadow-2xl max-w-5xl mx-auto">
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                        {sizes.map(size => (
                            <SizeButton 
                                key={size}
                                size={size}
                                isSelected={selectedSize === size}
                                onSelect={() => setSelectedSize(size)}
                            />
                        ))}
                    </div>

                    <div className="mt-6 min-h-[120px]">
                        <InfoPanel size={selectedSize} />
                    </div>
                </div>
            </div>
        </div>
    );
};