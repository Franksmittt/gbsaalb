// FILE: src/components/brands/WhyChoose.tsx
import React from 'react';
import Icon from '@/components/ui/Icon';

interface Feature {
    iconPath: string;
    title: string;
    description: string;
}

interface WhyChooseProps {
    brandName: string;
    features: Feature[];
}

export default function WhyChoose({ brandName, features }: WhyChooseProps) {
    return (
        <div className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">The {brandName} Advantage</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(feature => (
                        <div key={feature.title} className="bg-gray-800/50 border border-gray-700 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2">
                            <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-navy-800/50 border-2 border-navy-700">
                                <Icon path={feature.iconPath} className="w-8 h-8 text-brand-yellow" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}