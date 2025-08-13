// FILE: src/app/terms-of-service/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// --- Data for the Terms of Service Sections ---
const termsSections = [
    { title: "1. Online Store Terms", content: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your province of residence. You may not use our products for any illegal or unauthorized purpose. A breach or violation of any of the Terms will result in an immediate termination of your Services." },
    { title: "2. General Conditions", content: "We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information) may be transferred unencrypted. Credit card information is always encrypted during transfer. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission by us." },
    { title: "3. Accuracy of Information", content: "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions. Any reliance on the material on this site is at your own risk." },
    { title: "4. Modifications & Prices", content: "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service." },
    { title: "5. Products or Services", content: "Certain products may be available exclusively online and may have limited quantities. They are subject to return or exchange only according to our Return Policy. We have made every effort to display product images and colors accurately, but cannot guarantee your monitor's display will be accurate. We reserve the right to limit the sales of our products and to discontinue any product at any time." },
    { title: "6. Billing & Account Info", content: "We reserve the right to refuse any order you place with us. You agree to provide current, complete and accurate purchase and account information for all purchases. You agree to promptly update your information as needed. By placing an order, you also agree to be bound by our Shipping Policy and Refund Policy regarding shipping fees and the conditions for returning products." },
    { title: "7. Third-Party Links & Tools", content: "Our Service may include materials from third-parties or provide access to third-party tools. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials, websites, or tools." },
    { title: "8. User Comments & Feedback", content: "If you send us comments or feedback, you agree that we may, at any time, without restriction, edit, copy, publish, and distribute them. You agree that your comments will not violate any right of any third-party, and will not contain unlawful or abusive material. We take no responsibility and assume no liability for any comments posted by you or any third-party." },
    { title: "9. Personal Information", content: "Your submission of personal information through the store is governed by our Privacy Policy." },
    { title: "10. Errors & Omissions", content: "Occasionally there may be information on our site that contains typographical errors, inaccuracies or omissions. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information is inaccurate at any time without prior notice." },
    { title: "11. Prohibited Uses", content: "You are prohibited from using the site or its content for any unlawful purpose, to infringe upon intellectual property rights, to harass, abuse, or discriminate, to submit false information, to upload viruses, to collect personal information of others, to spam, or to interfere with the security features of the Service." },
    { title: "12. Disclaimer of Warranties", content: "We do not guarantee that your use of our service will be uninterrupted, timely, secure or error-free. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products are provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind." },
    { title: "13. Limitation of Liability", content: "In no case shall Global Batteries SA, our directors, officers, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, arising from your use of the service or any products procured using the service." },
    { title: "14. Indemnification", content: "You agree to indemnify, defend and hold harmless Global Batteries SA and our affiliates from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service." },
    { title: "15. Governing Law", content: "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the Republic of South Africa." },
    { title: "16. Changes to Terms", content: "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes." },
];

const KeyTermCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full border-t-4 border-navy-800">
        <Icon path={iconPath} className="w-10 h-10 text-navy-800 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default function TermsOfServicePage() {
    
    const [activeSection, setActiveSection] = useState<string>(termsSections[0].title);

    useEffect(() => {
        document.title = 'Terms of Service | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">Terms of Service</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Please read these terms carefully before using our services. Your access and use are conditioned upon your acceptance.</p>
                    </div>
                </div>

                {/* Key Terms at a Glance */}
                <div className="py-16 bg-navy-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Key Terms at a Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <KeyTermCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="Age Requirement"
                                description="You must be at least the age of majority in your province to use our site and purchase products."
                            />
                            <KeyTermCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Lawful Use Only"
                                description="Our products may not be used for any illegal or unauthorized purpose."
                            />
                            <KeyTermCard 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Right to Refuse Service"
                                description="We reserve the right to refuse service or cancel orders for any reason at any time."
                            />
                             <KeyTermCard 
                                iconPath="M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z"
                                title="Your Responsibility"
                                description="You are responsible for providing accurate account and shipping information and for monitoring changes to our policies."
                            />
                        </div>
                    </div>
                </div>

                {/* Full Terms Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Navigation */}
                            <div className="lg:col-span-1">
                                <nav className="sticky top-24">
                                    <h3 className="font-bold text-lg mb-4 text-gray-800">Sections</h3>
                                    <ul className="space-y-2">
                                        {termsSections.map(section => (
                                            <li key={section.title}>
                                                <button 
                                                    onClick={() => setActiveSection(section.title)}
                                                    className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors text-sm ${activeSection === section.title ? 'bg-navy-800 text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                                                >
                                                    {section.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            {/* Content */}
                            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                                {termsSections.find(s => s.title === activeSection) && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">{activeSection}</h2>
                                        <div className="prose lg:prose-lg max-w-none text-gray-600">
                                            <p>{termsSections.find(s => s.title === activeSection)?.content}</p>
                                        </div>
                                    </div>
                                )}
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
