// FILE: src/components/WhyChooseUsSection.tsx (Replaces existing file)
import React from 'react';
import Icon from '@/components/ui/Icon';

const AdvantageCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <Icon path={iconPath} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyChooseUsSection = () => (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Global Batteries Alberton?</h2>
                {/* ESLINT FIX: Escaped apostrophes */}
                <p className="text-lg text-gray-600">
                    We&apos;re more than just a battery shop. We&apos;re your partners in power, dedicated to providing expert service and unmatched value. Here&apos;s what makes us different.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AdvantageCard 
                    iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    title="Free Expert Fitment"
                    description="Don't risk your vehicle's electronics. Our specialists provide free, professional installation and testing with every battery purchase."
                />
                <AdvantageCard 
                    iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                    title="Honest, Expert Advice"
                    description="We're not here to upsell you. We listen to your needs and recommend the right battery for your car and budget, guaranteed."
                />
                <AdvantageCard 
                    iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                    title="Unbeatable Range & Warranty"
                    description="From premium brands to budget-friendly options, every battery is backed by a solid nationwide warranty for your peace of mind."
                />
            </div>
        </div>
    </div>
);

export default WhyChooseUsSection;