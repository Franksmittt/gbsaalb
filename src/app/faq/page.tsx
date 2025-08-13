// FILE: src/app/faq/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// --- Data for the FAQ Page ---
const faqData = [
    { 
        category: 'Products & Stock',
        question: "How do I know which battery my car needs?",
        answer: "The easiest way is to use our 'Find Your Battery' tool on the homepage. Alternatively, you can call or WhatsApp our Alberton branch at 079 320 3014 with your vehicle's make, model, and year, and our experts will help you find the perfect match."
    },
    { 
        category: 'Products & Stock',
        question: "What brands do you carry?",
        answer: "We are proud to be a multi-brand retailer, offering a wide selection to fit every budget and need. Our featured brands include Novax, Novax Premium, Willard, Exide, and Global Batteries."
    },
    { 
        category: 'Products & Stock',
        question: "Do you sell batteries for things other than cars?",
        answer: "Yes! We stock a comprehensive range of batteries for trucks, commercial vehicles, motorcycles, gate motors, security systems, and generators. We also carry AGM batteries for modern vehicles with Stop-Start technology."
    },
    { 
        category: 'Services',
        question: "Do you offer free battery installation near me?",
        answer: "Absolutely. We offer free, professional battery fitment and testing at all our branches, including our main branch in Alberton. Stop by anytime for a complimentary check-up."
    },
    { 
        category: 'Services',
        question: "Can you test my current battery?",
        answer: "Yes, we provide a free, no-obligation battery and alternator test using our expert diagnostic tools. This helps you understand the health of your battery and charging system before you make a purchase."
    },
    { 
        category: 'Services',
        question: "Do you offer call-out services?",
        answer: "We offer a jump-start and call-out service in the local Alberton area to assist you in getting your vehicle to our store for a battery replacement."
    },
    { 
        category: 'Policies',
        question: "Do I have to trade in my old battery?",
        answer: "Yes, the trade-in of an old scrap battery is mandatory for every new battery purchased. If you cannot provide one, a refundable scrap fee will be charged. This is an environmental and supplier requirement."
    },
    { 
        category: 'Policies',
        question: "Can I get a refund on the scrap fee?",
        answer: "Yes. The scrap fee is refundable for up to one year from the date of purchase. You must bring the old battery and your original invoice to the branch to claim your refund."
    },
    { 
        category: 'Policies',
        question: "What is your return policy?",
        answer: "You have 7 calendar days to return an unused item in its original, undamaged condition and packaging. Please see our full Refund Policy page for more details."
    },
];

const categories = ['All', 'Products & Stock', 'Services', 'Policies'];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b">
        <button
            onClick={onClick}
            className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800"
        >
            <span className="pr-4">{question}</span>
            <Icon 
                path={isOpen ? "M19,13H5V11H19V13Z" : "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"} 
                className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? '' : 'rotate-45'}`} 
            />
        </button>
        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="pb-5 pr-8 text-gray-600 leading-relaxed">
                {answer}
            </div>
        </div>
    </div>
);

export default function FaqPage() {
    
    const [openAccordion, setOpenAccordion] = useState<string | null>(faqData[0].question);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        document.title = 'Frequently Asked Questions | Global Batteries Alberton';
    }, []);

    const handleAccordionClick = (question: string) => {
        setOpenAccordion(openAccordion === question ? null : question);
    };

    const filteredFaqs = faqData.filter(faq => 
        (activeCategory === 'All' || faq.category === activeCategory) &&
        (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2">Frequently Asked Questions</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Have a question? We&apos;ve got answers. Find what you&apos;re looking for below.</p>
                        <div className="mt-8 max-w-2xl mx-auto">
                            <input 
                                type="search"
                                placeholder="Search questions (e.g., 'warranty', 'fitment')..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                            />
                        </div>
                    </div>
                </div>

                {/* FAQ Content Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map(category => (
                                <button 
                                    key={category} 
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === category ? 'bg-navy-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200 border'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        
                        {filteredFaqs.length > 0 ? (
                            <div className="bg-white">
                                {filteredFaqs.map((faq) => (
                                    <AccordionItem 
                                        key={faq.question}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openAccordion === faq.question}
                                        onClick={() => handleAccordionClick(faq.question)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-600">No questions found matching your search.</p>
                        )}
                    </div>
                </div>
                
                {/* "Still Have Questions?" CTA */}
                <div className="bg-navy-800 py-16">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h2 className="text-3xl font-bold mb-2">Can&apos;t Find Your Answer?</h2>
                        <p className="mb-6 max-w-xl mx-auto">Our experts are ready to help. Get in touch with us directly for any specific questions you have.</p>
                        <a href="/contact" className="bg-white text-navy-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
