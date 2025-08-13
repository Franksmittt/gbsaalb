// FILE: src/app/shop/ShopPageClient.tsx
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product as ShopifyProduct } from '@/types';
import ShopSidebar from '@/components/shop/ShopSidebar';
import Icon from '@/components/ui/Icon';
import ProductCard from '@/components/products/ProductCard'; // <-- FIX: Import the new reusable component

const TrustBar = () => ( <div className="bg-gray-100 border-b border-t py-4"> <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium"> <Icon path="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" className="w-5 h-5 text-green-600" /> <span>Free Battery Test</span> </div> <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium"> <Icon path="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" className="w-5 h-5 text-green-600" /> <span>Same-Day Fitment</span> </div> <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium"> <Icon path="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z" className="w-5 h-5 text-green-600" /> <span>Old Battery Trade-in</span> </div> <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium"> <Icon path="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z" className="w-5 h-5 text-green-600" /> <span>Fitment Guarantee</span> </div> </div> </div> );

type FilterCategory = 'brands' | 'type' | 'cca' | 'ah' | 'size' | 'warranty';

export default function ShopPageClient({ allProducts }: { allProducts: ShopifyProduct[] }) {
    const searchParams = useSearchParams();
    const initialType = searchParams.get('type');

    const [selectedFilters, setSelectedFilters] = useState<Record<FilterCategory, string[]>>(() => {
        const initialState: Record<FilterCategory, string[]> = { brands: [], type: [], cca: [], ah: [], size: [], warranty: [] };
        if (initialType) { initialState.type = [initialType]; }
        return initialState;
    });
    
    const availableFilters = useMemo(() => {
        const filters: Record<FilterCategory, Set<string>> = { brands: new Set(), type: new Set(), cca: new Set(), ah: new Set(), size: new Set(), warranty: new Set() };
        allProducts.forEach(p => {
            if (p.brand) filters.brands.add(p.brand);
            if (p.type && Array.isArray(p.type)) { p.type.forEach(t => filters.type.add(t)); }
            if (p.specs?.cca) filters.cca.add(p.specs.cca);
            if (p.specs?.ah) filters.ah.add(p.specs.ah);
            if (p.specs?.size) filters.size.add(p.specs.size);
            if (p.warranty) filters.warranty.add(p.warranty);
        });
        const sortAlphanumeric = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
        const sortWarranty = (a: string, b: string) => Number(a.match(/\d+/)?.[0] || 0) - Number(b.match(/\d+/)?.[0] || 0);
        return {
            brands: Array.from(filters.brands).sort(),
            type: Array.from(filters.type).sort(),
            cca: Array.from(filters.cca).sort(sortAlphanumeric),
            ah: Array.from(filters.ah).sort(sortAlphanumeric),
            size: Array.from(filters.size).sort(sortAlphanumeric),
            warranty: Array.from(filters.warranty).sort(sortWarranty),
        };
    }, [allProducts]);

    const handleFilterChange = (filterType: FilterCategory, value: string) => {
        setSelectedFilters(prev => {
            const currentSelection = prev[filterType] || [];
            const newSelection = currentSelection.includes(value) ? currentSelection.filter(item => item !== value) : [...currentSelection, value];
            return { ...prev, [filterType]: newSelection };
        });
    };

    const clearFilters = () => { setSelectedFilters({ brands: [], type: [], cca: [], ah: [], size: [], warranty: [] }); };

    const filteredProducts = useMemo(() => {
        const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);
        if (!hasActiveFilters) { return allProducts; }
        return allProducts.filter(product => {
            const { brands, type, size, cca, ah, warranty } = selectedFilters;
            if (brands.length > 0 && !brands.includes(product.brand)) return false;
            // This logic is now correct because `product.type` is an array.
            if (type.length > 0 && !product.type.some((t: string) => type.includes(t))) return false;
            if (warranty.length > 0 && !warranty.includes(product.warranty)) return false;
            if (size.length > 0 && !size.includes(product.specs?.size || '')) return false;
            if (cca.length > 0 && !cca.includes(product.specs?.cca || '')) return false;
            if (ah.length > 0 && !ah.includes(product.specs?.ah || '')) return false;
            return true;
        });
    }, [allProducts, selectedFilters]);

    return (
        <>
            <div className="bg-white pb-8">
                <div className="container mx-auto px-4 text-center pt-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800">Shop Our Products</h1>
                    <p className="text-lg text-gray-600 mt-2">Everything you need to stay powered up</p>
                </div>
            </div>
            <TrustBar />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-1">
                        <ShopSidebar filters={availableFilters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} onClearFilters={clearFilters}/>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b">
                            <p className="text-sm text-gray-600">Showing <strong>{filteredProducts.length}</strong> of <strong>{allProducts.length}</strong> products</p>
                        </div>
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map(product => ( <ProductCard key={product.id} product={product} /> ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-lg">
                                <h3 className="text-2xl font-bold text-gray-700">No Products Found</h3>
                                <p className="text-gray-500 mt-2 mb-6">Try adjusting your filters or clear them to see all available products.</p>
                                <button onClick={clearFilters} className="bg-navy-700 text-white font-bold py-2 px-6 rounded-md hover:bg-navy-600 transition"> Clear All Filters </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}