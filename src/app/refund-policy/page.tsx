// FILE: src/app/refund-policy/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const PolicyHighlight = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full border-t-4 border-navy-800">
        <Icon path={iconPath} className="w-10 h-10 text-navy-800 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Step = ({ number, title, description, isLast = false }: { number: number, title: string, description: string, isLast?: boolean }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-12 h-12 bg-navy-800 rounded-full text-white font-bold text-lg">
                    {number}
                </div>
            </div>
            {!isLast && <div className="w-px h-full bg-gray-300"></div>}
        </div>
        <div className="pb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b">
        <button
            onClick={onClick}
            className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800"
        >
            <span>{title}</span>
            <Icon 
                path={isOpen ? "M19,13H5V11H19V13Z" : "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"} 
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-45'}`} 
            />
        </button>
        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="pb-5 pr-4 text-gray-600 leading-relaxed">
                {content}
            </div>
        </div>
    </div>
);

export default function RefundPolicyPage() {
    
    const [openAccordion, setOpenAccordion] = useState<string>('Return Eligibility');

    const handleAccordionClick = (title: string) => {
        setOpenAccordion(openAccordion === title ? '' : title);
    };

    useEffect(() => {
        document.title = 'Refund Policy | Global Batteries Alberton';
    }, []);

    const finePrint = [
        { title: "Return Eligibility", content: "To be eligible for a return, your item must be unused, free from damage, and in the same condition that you received it. It must be in the original, sealed packaging. Any signs of installation, wear, or damage will void the eligibility for a refund." },
        { title: "Exchanges for Incorrectly Sized Products", content: "If you ordered the wrong size battery for your application, we are happy to facilitate an exchange within the 7-day return period. If the correct item is more expensive, you will be liable to pay the difference. If it is cheaper, we will refund the difference via EFT." },
        { title: "Non-Refundable Costs", content: "Please note that any shipping or delivery costs associated with your original order are non-refundable. If you are returning an item because you ordered the incorrect product, you will be responsible for paying for your own shipping costs for returning the item." },
        { title: "Refund Process", content: "Once we receive and inspect your item, we will notify you on the status of your refund. If your return is approved, we will initiate a refund to your bank account via EFT only. The time it takes for the credit to appear in your account depends on your bank's processing times." },
    ];

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-navy-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Refund & Returns Policy</h1>
                        <p className="text-lg text-navy-300 max-w-3xl mx-auto">Clear, fair, and simple. Here’s everything you need to know about returns.</p>
                    </div>
                </div>

                {/* Policy Highlights Section */}
                 <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Promise at a Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <PolicyHighlight 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="7-Day Returns"
                                description="You have 7 calendar days from the date of receipt to return an item."
                            />
                            <PolicyHighlight 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Original Condition"
                                description="Items must be unused, undamaged, and in their original, sealed packaging."
                            />
                            <PolicyHighlight 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="Proof of Purchase"
                                description="A valid receipt or proof of purchase is required for all returns and exchanges."
                            />
                             <PolicyHighlight 
                                iconPath="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z"
                                title="EFT Refunds"
                                description="All approved refunds are processed securely via EFT to your bank account."
                            />
                        </div>
                    </div>
                </div>

                {/* UPDATED: Combined How to Return and Fine Print Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                            {/* How to Return Section */}
                            <div>
                                <h2 className="text-3xl font-bold text-center lg:text-left mb-12">How to Initiate a Return</h2>
                                <div className="max-w-xl mx-auto lg:mx-0">
                                    <Step 
                                        number={1}
                                        title="Contact Us First"
                                        description="Before returning an item, please contact our Alberton branch to inform us of the return and the reason. This helps us process your request efficiently."
                                    />
                                    <Step 
                                        number={2}
                                        title="Package the Item Securely"
                                        description="Ensure the item is in its original, undamaged packaging. For batteries with spillable acid, they must be transported upright and secured as they were upon collection."
                                    />
                                    <Step 
                                        number={3}
                                        title="Return to Branch"
                                        description="Bring the item and your original proof of purchase to the branch where you collected it. You are responsible for all return shipping or transport costs."
                                    />
                                     <Step 
                                        number={4}
                                        title="Inspection & Approval"
                                        description="Our team will inspect the item to ensure it meets the return conditions. We will then notify you of the approval status of your refund or exchange."
                                        isLast={true}
                                    />
                                </div>
                            </div>

                            {/* Detailed Policy Section */}
                            <div>
                                <h2 className="text-3xl font-bold text-center lg:text-left mb-8">The Fine Print</h2>
                                <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
                                    {finePrint.map((item) => (
                                        <AccordionItem 
                                            key={item.title}
                                            title={item.title}
                                            content={item.content}
                                            isOpen={openAccordion === item.title}
                                            onClick={() => handleAccordionClick(item.title)}
                                        />
                                    ))}
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
