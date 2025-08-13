// FILE: src/components/ui/WhatsAppButton.tsx
import React from 'react';
import Image from 'next/image'; // We are using the Next.js Image component for this final test.

const WhatsAppButton = () => (
    <a
        href="https://wa.me/27793203014"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
    >
        {/* UPDATED: Reverted to the Next.js Image component as a definitive test. */}
        {/* This directly loads the file from your public/icons folder. */}
        <Image
            src="/icons/whatsapp.png"
            alt="Chat on WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8"
        />
    </a>
);

export default WhatsAppButton;
