// FILE: src/components/ExpertAdviceSection.tsx
import React from 'react';
import Image from 'next/image';

const ExpertAdviceSection = () => (
    <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Expert Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                {/* ACCESSIBILITY FIX: More descriptive alt text */}
                <Image src="https://placehold.co/400x250/EFEFEF/333333?text=Battery+Care" alt="A clean car battery terminal, illustrating proper battery care." width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">How to Extend Your Car Battery&apos;s Life</h3>
                    <p className="text-sm text-gray-600 mb-4">Simple tips and tricks to get the most out of your battery and avoid unexpected failures.</p>
                    <a href="#" className="font-semibold text-navy-800 hover:text-navy-700">Read More &rarr;</a>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <Image src="https://placehold.co/400x250/EFEFEF/333333?text=Warning+Signs" alt="A car dashboard with a battery warning light illuminated." width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">5 Signs Your Battery is About to Die</h3>
                    <p className="text-sm text-gray-600 mb-4">Learn to recognize the warning signs before you get stranded. Don&apos;t get caught unprepared.</p>
                    <a href="#" className="font-semibold text-navy-800 hover:text-navy-700">Read More &rarr;</a>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <Image src="https://placehold.co/400x250/EFEFEF/333333?text=AGM+vs+Lead" alt="Side-by-side comparison of an AGM battery and a traditional lead-acid battery." width={400} height={250} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">AGM vs. Lead-Acid: Which is Right for You?</h3>
                    <p className="text-sm text-gray-600 mb-4">A breakdown of the technology to help you make an informed decision for your vehicle.</p>
                    <a href="#" className="font-semibold text-navy-800 hover:text-navy-700">Read More &rarr;</a>
                </div>
            </div>
        </div>
    </div>
);

export default ExpertAdviceSection;