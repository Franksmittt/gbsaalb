// FILE: src/app/privacy-policy/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// --- Data for the Privacy Policy Sections ---
const policySections = [
    {
        title: "Introduction",
        content: "Global Batteries services, including (without limitation) our website and other interactive properties through which the services are delivered (collectively, the “Service”) are owned, operated and distributed by Global Batteries (referred to in this Privacy Notice as “Global Batteries” or “we” and through similar words such as “us,” “our,” etc.). This Privacy Notice outlines the personal information that Global Batteries may collect, how Global Batteries uses and safeguards that information, and with whom we may share it. By using our Service, you acknowledge that you understand and agree to be bound by this Privacy Notice."
    },
    {
        title: "What we collect",
        content: "Personal information is information that can be used to identify you. The personal information that we collect directly from you includes: Name and contact information (address, phone number, email); Billing Information (credit card, bank account); Order Information (purchase history, shipping details); Company/employer information; Geographic or location information; and any other information exchanged in the course of engaging with the Service."
    },
    {
        title: "User Content",
        content: "We may invite you to post content on the Service, including comments and reviews (“User Generated Content”). If you post User Generated Content, all of the information that you post will be available to our personnel and may be shared publicly on the Service or through other channels like Facebook, Instagram, and Google."
    },
    {
        title: "Why we collect it",
        content: "We use your personal information to administer the Service, respond to your requests, distribute communications relevant to your use of the Service (like system updates), support operations (like billing and record-keeping), and send you marketing materials that we feel may be of interest to you. You can opt-out of marketing materials at any time. Global Batteries does not sell or re-sell your personal information."
    },
    {
        title: "How we share it",
        content: "We may provide personal information to our employees, affiliates, or other businesses for the purpose of processing such information on our behalf to provide the Service to you. We will not share your personal information with other, third-party companies for their commercial or marketing use without your consent. We may also release personal information to comply with any applicable law, to enforce our Terms of Service, or in the event of a business transition such as a merger or acquisition."
    },
    {
        title: "Your Rights (POPIA & PAIA)",
        content: "As a South African resident, you have rights under the Protection of Personal Information Act (“POPIA”) and Promotion of Access to Information Act (“PAIA”). You have the right to request disclosure or action your personal information, including correcting or deleting it, opting out of direct marketing, and objecting to the processing of your data. You may submit a request by contacting us at gbsa101@gmail.com. If you have a complaint, you may contact us or the Information Regulator at https://www.justice.gov.za/inforeg/contact.html."
    },
    {
        title: "Security",
        content: "We employ industry-standard security measures to protect your information. However, the security of information transmitted through the internet can never be guaranteed. Users are responsible for maintaining the security of any password or user ID. We may suspend your use of the Service without notice if a breach of security is suspected."
    },
    {
        title: "Changes",
        content: "Global Batteries reserves the right to modify this Privacy Notice from time to time. When material changes are made, we will post the revised Notice on our website."
    }
];

const KeyHighlightCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <Icon path={iconPath} className="w-8 h-8 text-navy-800 mb-3" />
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);


export default function PrivacyPolicyPage() {
    
    const [activeSection, setActiveSection] = useState<string>(policySections[0].title);

    useEffect(() => {
        document.title = 'Privacy Policy | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">Privacy Policy</h1>
                        <p className="text-lg text-gray-600">Your trust is important to us. Here’s how we protect your data.</p>
                    </div>
                </div>

                {/* NEW: Key Highlights Section */}
                <div className="py-16 bg-navy-800 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Your Privacy at a Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <KeyHighlightCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="We Don't Sell Your Data"
                                description="We will never sell or rent your personal information to third parties. Period."
                            />
                            <KeyHighlightCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="You're In Control"
                                description="You have the right to access, correct, or delete your personal information at any time."
                            />
                            <KeyHighlightCard 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Secure Storage"
                                description="We use industry-standard security measures to safeguard your data against unauthorized access."
                            />
                             <KeyHighlightCard 
                                iconPath="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z"
                                title="Only Necessary Info"
                                description="We only collect information that is essential to provide you with our services and improve your experience."
                            />
                        </div>
                    </div>
                </div>

                {/* Policy Content Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Navigation */}
                            <div className="lg:col-span-1">
                                <nav className="sticky top-24">
                                    <ul className="space-y-2">
                                        {policySections.map(section => (
                                            <li key={section.title}>
                                                <button 
                                                    onClick={() => setActiveSection(section.title)}
                                                    className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors ${activeSection === section.title ? 'bg-navy-800 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                                                >
                                                    {section.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            {/* Content */}
                            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                                {policySections.find(s => s.title === activeSection) && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">{activeSection}</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            {policySections.find(s => s.title === activeSection)?.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Contact Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                        <p className="text-lg text-gray-600 mb-6">If you have any questions or comments about this Privacy Notice or the Service provided by Global Batteries, please don&apos;t hesitate to reach out.</p>
                        <a href="/contact" className="bg-navy-800 text-white font-bold py-3 px-8 rounded-md hover:bg-navy-700 transition duration-300">
                            Contact Our Team
                        </a>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
