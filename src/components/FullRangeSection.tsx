// FILE: src/components/FullRangeSection.tsx
import React from 'react';
import Link from 'next/link';
import Icon from './ui/Icon';

const rangeCategories = [
    {
        name: 'Battery Chargers',
        description: 'Keep your batteries in peak condition with our range of smart and trickle chargers.',
        href: '/shop?type=Charger',
        iconPath: 'M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z'
    },
    {
        name: 'Gate & Alarm Batteries',
        description: 'Reliable backup power to keep your home and business secure, whatever the conditions.',
        href: '/shop?type=Gate+Motor', // Use URL encoding for spaces
        iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    },
    {
        name: 'Terminals & Accessories',
        description: 'Everything you need for a perfect installation, from terminals and lugs to cables.',
        href: '/shop?type=Accessories',
        iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    },
    {
        name: 'Motorcycle & Leisure',
        description: 'High-performance AGM batteries for bikes, jet-skis, and all your powersport toys.',
        href: '/shop?type=Motorcycle',
        iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    },
    {
        name: 'Inverters & Solar',
        description: 'Harness the power of the sun or create reliable backup systems with our deep cycle range.',
        href: '/shop?type=Solar',
        iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    },
    {
        name: 'Truck & Commercial',
        description: 'Heavy-duty batteries built to withstand the rigorous demands of commercial vehicles.',
        href: '/shop?type=Truck',
        iconPath: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    }
];

const CategoryCard = ({ category }: { category: typeof rangeCategories[0]}) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
        <Icon path={category.iconPath} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{category.description}</p>
        <Link href={category.href} className="mt-auto bg-gray-100 text-navy-800 font-bold py-2 px-5 rounded-md hover:bg-navy-100 transition">
            Shop Now
        </Link>
    </div>
);


const FullRangeSection = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">More Than Just Car Batteries</h2>
                    <p className="text-lg text-gray-600 mb-12">We are your one-stop shop for a complete range of power solutions and accessories. Explore our full inventory.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rangeCategories.map(category => (
                        <CategoryCard key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullRangeSection;