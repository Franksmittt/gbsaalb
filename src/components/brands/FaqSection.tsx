// FILE: src/components/brands/FaqSection.tsx
"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';

interface FaqItem {
    question: string;
    answer: string;
}

const AccordionItem = ({ faq, isOpen, onClick }: { faq: FaqItem, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onClick}
            className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800"
        >
            <span className="pr-4">{faq.question}</span>
            <Icon 
                path="M19,13H5V11H19V13Z" 
                className={`w-5 h-5 text-navy-700 transition-transform duration-300 flex-shrink-0 ${isOpen ? '' : 'rotate-90'}`} 
            />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="pb-5 pr-8 text-gray-600 leading-relaxed">
                {faq.answer}
            </div>
        </div>
    </div>
);

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
    const [openAccordion, setOpenAccordion] = useState<string | null>(faqs.length > 0 ? faqs[0].question : null);

    const handleAccordionClick = (question: string) => {
        setOpenAccordion(openAccordion === question ? null : question);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq) => (
                        <AccordionItem 
                            key={faq.question}
                            faq={faq}
                            isOpen={openAccordion === faq.question}
                            onClick={() => handleAccordionClick(faq.question)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}