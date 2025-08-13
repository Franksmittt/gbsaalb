// FILE: src/app/collection-terms/page.tsx
"use client";

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const FeeRow = ({ category, fee }: { category: string, fee: string }) => (
    <div className="flex justify-between items-center py-3 border-b last:border-none">
        <p className="text-gray-700">{category}</p>
        <p className="font-bold text-navy-800 text-lg">{fee}</p>
    </div>
);

export default function CollectionTermsPage() {
    
    useEffect(() => {
        document.title = 'In-Store Collection Terms | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">In-Store Collection Policy</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Important information regarding your online order pickup and our mandatory scrap battery policy.</p>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {/* Why This Policy Exists */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-400 mb-12">
                             <div className="flex items-center mb-4">
                                <Icon path="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" className="w-8 h-8 text-yellow-500 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-800">Mandatory Scrap Battery Policy</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To ensure environmental responsibility and comply with supplier regulations, the trade-in of an old battery (&quot;scrap&quot;) is <strong>mandatory</strong> for every new car, truck, solar, deep cycle, or motorcycle battery purchased. This is not a loophole; it&apos;s a legal and environmental requirement.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our suppliers charge us a fee for every new battery sold without a corresponding scrap return. The &quot;scrap fee&quot; is not a source of profit for us; it simply covers the cost passed on by our suppliers.
                            </p>
                        </div>

                        {/* How It Works */}
                        <h2 className="text-3xl font-bold text-center mb-8">The Collection Process: Two Simple Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-8 rounded-lg border">
                                <h3 className="text-xl font-bold mb-4 flex items-center"><span className="bg-navy-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span> Bring Your Old Battery</h3>
                                <p className="text-gray-600">When you come to collect your new battery, simply bring your old, equivalent scrap battery with you. We&apos;ll take your scrap, and you&apos;ll receive your new battery with no extra charges. This is the easiest and most common option.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-lg border">
                                <h3 className="text-xl font-bold mb-4 flex items-center"><span className="bg-navy-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span> Pay the Scrap Fee</h3>
                                <p className="text-gray-600">If you cannot provide an old battery at the time of collection, a mandatory scrap fee will be charged. This fee must be paid before your new battery can be released. <strong className="text-navy-800">This fee is refundable</strong> (see FAQ below).</p>
                            </div>
                        </div>

                        {/* Scrap Fee Table */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-center mb-8">Scrap Battery Fees</h2>
                            <div className="bg-white p-8 rounded-lg shadow-lg border">
                                <p className="text-center text-gray-500 mb-6">The fee is charged per battery and varies by type and brand.</p>
                                <div className="space-y-2">
                                    <FeeRow category="Motorcycle Batteries" fee="R23.00" />
                                    <FeeRow category="Novax / Global Automotive (up to 652)" fee="R172.50" />
                                    <FeeRow category="Novax / Global Automotive (up to 696)" fee="R287.50" />
                                    <FeeRow category="Willard / Varta Batteries" fee="R305.00" />
                                    <FeeRow category="Exide Batteries" fee="R402.50" />
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-center mb-8">Your Questions Answered</h2>
                             <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-lg">What if I buy multiple batteries?</h3>
                                    <p className="text-gray-600 mt-1">The policy applies per battery. If you purchase three new batteries, you must provide three equivalent scrap batteries or pay the scrap fee for each one.</p>
                                </div>
                                <div className="border-t pt-4">
                                    <h3 className="font-semibold text-lg">Can I bring the scrap battery back later for a refund?</h3>
                                    {/* UPDATED: Corrected the refund policy */}
                                    <p className="text-gray-600 mt-1"><strong>Yes.</strong> The scrap fee is refundable for up to **one year** from the date of purchase. You must bring the old battery and your original invoice to the branch to claim your refund.</p>
                                </div>
                                <div className="border-t pt-4">
                                    <h3 className="font-semibold text-lg">Why is the fee different for each brand?</h3>
                                    <p className="text-gray-600 mt-1">The scrap fee is determined by our suppliers and varies based on their own policies and the materials used in the batteries.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
