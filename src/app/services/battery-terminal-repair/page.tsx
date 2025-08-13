// FILE: src/app/services/battery-terminal-repair/page.tsx
"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

const BeforeAfterCard = ({ beforeImg, afterImg }: { beforeImg: string, afterImg: string }) => (
    <div className="grid grid-cols-2 gap-4">
        <div>
            <h3 className="text-center font-bold text-red-600 mb-2">BEFORE</h3>
            <Image src={beforeImg} alt="Damaged battery terminal before repair" width={400} height={400} className="rounded-lg shadow-lg border-2 border-red-500" />
        </div>
        <div>
            <h3 className="text-center font-bold text-green-600 mb-2">AFTER</h3>
            <Image src={afterImg} alt="Repaired battery terminal" width={400} height={400} className="rounded-lg shadow-lg border-2 border-green-500" />
        </div>
    </div>
);


export default function TerminalRepairPage() {

    React.useEffect(() => {
        document.title = 'Battery Terminal Repair Service | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-800 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm font-bold uppercase text-yellow-400">Specialized Workshop Service</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Melted or Damaged Battery Terminal?</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">Don&apos;t replace your expensive battery. Our Alberton workshop can professionally repair and rebuild it.</p>
                    </div>
                </div>

                {/* Before and After Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">See the Difference We Make</h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Our expert technicians can restore your damaged lead terminals to factory condition, ensuring a safe, solid connection.</p>
                        {/* IMPORTANT: Replace these placeholder images with your actual photos */}
                        <BeforeAfterCard beforeImg="https://placehold.co/400x400/ff0000/ffffff?text=Damaged+Terminal" afterImg="https://placehold.co/400x400/00ff00/ffffff?text=Repaired+Terminal" />
                    </div>
                </div>

                {/* The Problem & Solution Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">What Causes Terminal Damage?</h3>
                            <p className="text-gray-600 mb-4">Terminal damage is often caused by a poor connection that leads to electrical arcing and intense heat, melting the lead post. Common culprits include:</p>
                             <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Loose or improperly fitted battery clamps.</li>
                                <li>Severe corrosion buildup (sulfation).</li>
                                <li>Attempting to jump-start with incorrect equipment.</li>
                                <li>Underlying faults in the vehicle&apos;s charging system.</li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Professional Repair Solution</h3>
                            <p className="text-gray-600 mb-4">Instead of a risky DIY fix or a costly battery replacement, we offer a safe and permanent solution. Our process involves:</p>
                             <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Safely preparing the damaged area.</li>
                                <li>Using specialized moulds for the terminal post.</li>
                                <li>Re-casting the terminal with molten lead.</li>
                                <li>Shaping and cleaning the new post for a perfect fit.</li>
                            </ul>
                            <p className="mt-4 font-semibold text-navy-800 bg-navy-100 p-3 rounded-md">This service can save you hundreds of Rands compared to buying a new battery.</p>
                        </div>
                    </div>
                </div>
                
                {/* CTA Section */}
                <div className="py-20 bg-navy-800">
                    <div className="container mx-auto px-4 text-center">
                        <Icon path="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Repair?</h2>
                        <p className="text-navy-300 mb-8 max-w-2xl mx-auto">This specialized service is available exclusively at our main Alberton branch. Contact us to schedule your repair.</p>
                        <div className="inline-block bg-white p-8 rounded-lg shadow-2xl">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Batteries Alberton</h3>
                            <p className="text-lg text-gray-700 mb-2"><strong>Call:</strong> 011 869 2427</p>
                            <p className="text-lg text-gray-700 mb-6"><strong>WhatsApp:</strong> 079 320 3014</p>
                            <a href="tel:0118692427" className="w-full inline-block bg-green-600 text-white font-bold py-4 px-10 rounded-md hover:bg-green-700 transition text-lg">
                                Call Workshop Now
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}