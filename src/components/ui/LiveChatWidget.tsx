// FILE: src/components/ui/LiveChatWidget.tsx (CREATE NEW FILE)
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show a welcome message bubble after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsOpen(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    window.open('https://wa.me/27793203014', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Chat bubble message */}
        <div 
            className={`
                mb-2 p-3 bg-white rounded-lg rounded-br-none shadow-lg text-sm text-gray-800 transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
        >
            Need help? Chat with an expert!
        </div>

        {/* Main button with new animation class */}
        <button
            onClick={handleOpenChat}
            className="whatsapp-button-animated p-4 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            aria-label="Chat with us on WhatsApp"
        >
            <Image
                src="/icons/whatsapp.svg"
                alt="Chat on WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8"
            />
        </button>
    </div>
  );
};

export default LiveChatWidget;