// FILE: src/app/shipping-policy/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const HighlightCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full border-t-4 border-navy-800">
        <Icon path={iconPath} className="w-10 h-10 text-navy-800 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const TimelineStep = ({ number, title, description, isLast = false }: { number: number, title: string, description: string, isLast?: boolean }) => (
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

export default function ShippingPolicyPage() {
    
    const [openAccordion, setOpenAccordion] = useState<string>('Shipping Rates & Destinations');

    const handleAccordionClick = (title: string) => {
        setOpenAccordion(openAccordion === title ? '' : title);
    };

    useEffect(() => {
        document.title = 'Shipping Policy | Global Batteries Alberton';
    }, []);

    const policyDetails = [
        { title: "Shipping Rates & Destinations", content: "We currently only ship within the Gauteng Area of South Africa. Standard rates are: Motorcycle & Accessories: R100, Automotive: R350, Truck & Large Commercial: R500. We reserve the right to adjust shipping fees for remote or high-cost delivery zones; we will contact you for approval before dispatching if an additional charge is required." },
        { title: "Incorrect Product Orders", content: "If you have ordered the incorrect product, you are responsible for all return shipping costs. The original shipping fees paid are non-refundable. Please use our 'Find Your Battery' tool or contact us before ordering to ensure you have the correct item." },
        { title: "Incorrect or Incomplete Addresses", content: "If a package is returned to us due to an incorrect or incomplete address provided by you, you will be responsible for paying all costs to re-deliver the order. We are not liable for the loss of your order if the address provided is incorrect." },
        { title: "Lost or Delayed Orders", content: "A parcel is considered lost after 15 business days in the courier system. While we cannot take responsibility for delays caused by the courier (Fastway or The Courier Guy), we will assist in tracking your order. We are unable to dispatch a replacement until this 15-day period has elapsed." },
        { title: "Right to Refuse Shipping", content: "We reserve the right to determine if a product can be shipped safely and securely. For certain hazardous or oversized items, we may require in-store collection only. We will notify you if this is the case with your order." },
    ];

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">Shipping Policy</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Fast, reliable, and transparent. Here’s how we get your order to you.</p>
                    </div>
                </div>

                {/* Highlights Section */}
                 <div className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Key Information at a Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <HighlightCard 
                                iconPath="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z"
                                title="Gauteng Only"
                                description="At present, we only ship orders within the Gauteng province of South Africa."
                            />
                            <HighlightCard 
                                iconPath="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z"
                                title="Free Local Shipping"
                                description="You qualify for free shipping if you live within a 10km radius of our Alberton store."
                            />
                            <HighlightCard 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Fast Dispatch"
                                description="Most orders are dispatched within two business days. Orders placed over the weekend are sent out on Monday."
                            />
                             <HighlightCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Trusted Couriers"
                                description="We partner with Fastway Couriers and The Courier Guy for all our shipments."
                            />
                        </div>
                    </div>
                </div>

                {/* UPDATED: Combined Timeline and Fine Print Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                            {/* Column 1: Delivery Timeline Section */}
                            <div>
                                <h2 className="text-3xl font-bold text-center lg:text-left mb-12">Your Order Journey</h2>
                                <div className="max-w-xl mx-auto lg:mx-0">
                                    <TimelineStep 
                                        number={1}
                                        title="Order Placed"
                                        description="You'll receive an email confirmation as soon as your order is successfully placed."
                                    />
                                    <TimelineStep 
                                        number={2}
                                        title="Order Dispatched"
                                        description="Your order will be dispatched within two business days. You'll receive a shipping confirmation with a tracking number."
                                    />
                                    <TimelineStep 
                                        number={3}
                                        title="Out for Delivery"
                                        description="Our courier partner will notify you once your package is out for delivery."
                                    />
                                     <TimelineStep 
                                        number={4}
                                        title="Delivered"
                                        description="Your battery arrives! For same-day local delivery, orders must be placed before 4 PM on a weekday."
                                        isLast={true}
                                    />
                                </div>
                            </div>

                            {/* Column 2: Detailed Policy Section */}
                            <div>
                                <h2 className="text-3xl font-bold text-center lg:text-left mb-8">The Fine Print</h2>
                                <div className="bg-white p-8 rounded-lg shadow-inner">
                                    {policyDetails.map((item) => (
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
