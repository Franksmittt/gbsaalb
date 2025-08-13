// FILE: src/components/shop/ShopSidebar.tsx
"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';

type FilterCategory = 'brands' | 'type' | 'cca' | 'ah' | 'size' | 'warranty';

interface ShopSidebarProps {
    filters: Record<FilterCategory, string[]>;
    selectedFilters: Record<FilterCategory, string[]>;
    onFilterChange: (filterType: FilterCategory, value: string) => void;
    onClearFilters: () => void;
}

const CollapsibleFilterSection = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    // Don't render the section if there are no children to display
    if (!React.Children.count(children)) {
        return null;
    }

    return (
        <div className="border-b last:border-b-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-4 hover:opacity-80 transition-opacity">
                <h4 className="font-bold text-gray-800 uppercase text-sm tracking-wider">{title}</h4>
                <Icon path={isOpen ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? '' : 'transform rotate-45'}`} />
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
                <div className="space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

const FilterCheckbox = ({ item, isSelected, onFilterChange }: { item: string, isSelected: boolean, onFilterChange: (value: string) => void }) => (
     <label key={item} className="flex items-center space-x-3 cursor-pointer p-1 rounded hover:bg-gray-100">
        <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-navy-800 focus:ring-navy-700 transition"
            checked={isSelected}
            onChange={() => onFilterChange(item)}
        />
        <span className="text-gray-700 text-sm">{item}</span>
    </label>
);

// This is the component that was causing the error. It has now been fixed.
const FilterSection = ({ title, items, selectedItems, onFilterChange }: {
    title: string; // <-- FIX: This 'title' property was missing.
    items: string[];
    selectedItems: string[];
    onFilterChange: (value: string) => void;
}) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="py-2">
            <h5 className="font-semibold text-gray-600 mb-2 text-sm">{title}</h5>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {items.map((item) => (
                    <FilterCheckbox
                        key={item}
                        item={item}
                        isSelected={selectedItems.includes(item)}
                        onFilterChange={onFilterChange}
                    />
                ))}
            </div>
        </div>
    );
};


const ShopSidebar = ({ 
    filters, 
    selectedFilters, 
    onFilterChange,
    onClearFilters
}: ShopSidebarProps) => {
    const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);
    return (
        <aside className="bg-white p-6 rounded-lg shadow-md h-full sticky top-24">
            <div className="flex justify-between items-center border-b pb-3 mb-2">
                 <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                 {hasActiveFilters && (
                    <button 
                        onClick={onClearFilters}
                        className="text-sm font-semibold text-navy-700 hover:underline"
                    >
                        Clear All
                    </button>
                )}
            </div>

            <CollapsibleFilterSection title="Category" defaultOpen={true}>
                <FilterSection title="Product Type" items={filters.type} selectedItems={selectedFilters.type} onFilterChange={(value) => onFilterChange('type', value)} />
            </CollapsibleFilterSection>

            <CollapsibleFilterSection title="Brand" defaultOpen={true}>
                 <FilterSection title="Brand Name" items={filters.brands} selectedItems={selectedFilters.brands} onFilterChange={(value) => onFilterChange('brands', value)} />
            </CollapsibleFilterSection>

            <CollapsibleFilterSection title="Specifications">
                <FilterSection title="Size Code" items={filters.size} selectedItems={selectedFilters.size} onFilterChange={(value) => onFilterChange('size', value)} />
                <FilterSection title="CCA (Amps)" items={filters.cca} selectedItems={selectedFilters.cca} onFilterChange={(value) => onFilterChange('cca', value)} />
                <FilterSection title="AH (Amp Hours)" items={filters.ah} selectedItems={selectedFilters.ah} onFilterChange={(value) => onFilterChange('ah', value)} />
            </CollapsibleFilterSection>

            <CollapsibleFilterSection title="Warranty">
                 <FilterSection title="Warranty Length" items={filters.warranty} selectedItems={selectedFilters.warranty} onFilterChange={(value) => onFilterChange('warranty', value)} />
            </CollapsibleFilterSection>

        </aside>
    );
};

export default ShopSidebar;