// FILE: src/components/home/ThePromise.tsx
import React from 'react';
import Icon from '@/components/ui/Icon';

// UPDATED: New, more technical icons
const promises = [
    { 
        iconPath: "M19.4,5.6a1,1,0,0,0-1.4,0l-11,11a1,1,0,0,0,0,1.4,1,1,0,0,0,1.4,0l11-11A1,1,0,0,0,19.4,5.6ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", 
        title: "Expert Guidance", 
        description: "The right battery, every time. Our specialists ensure you get the perfect match for your needs and budget, never an upsell." 
    },
    { 
        iconPath: "M12,2a1,1,0,0,0-1,1V5.33a8,8,0,0,0,0,13.34V21a1,1,0,0,0,2,0V18.67a8,8,0,0,0,0-13.34V3A1,1,0,0,0,12,2Zm0,15a6.63,6.63,0,0,1-4-1.12V8.12A6.63,6.63,0,0,1,12,7a6.63,6.63,0,0,1,4,1.12v8.76A6.63,6.63,0,0,1,12,17Z", 
        title: "Unmatched Service", 
        description: "Free testing and professional fitment on all automotive batteries. We protect your vehicle's electronics and guarantee our work." 
    },
    { 
        iconPath: "M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,0,1.42l9,9a1,1,0,0,0,1.42,0l9-9A1,1,0,0,0,21.71,11.29ZM12,19.59,4.41,12,12,4.41,19.59,12Z", 
        title: "Guaranteed Quality", 
        description: "A comprehensive range of leading brands, each backed by a solid nationwide warranty for complete peace of mind." 
    },
];

const PromiseCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    // This is the 3D tilt container. The magic is in the CSS classes.
    <div style={{ perspective: '1000px' }} className="group">
        <div className="
            bg-gray-800/50 backdrop-blur-sm 
            border border-gray-700 rounded-xl p-8 text-center h-full
            transition-all duration-300
            transform-style-3d group-hover:transform-gpu group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-navy-500/20
        ">
            <div className="
                mx-auto w-20 h-20 mb-6 flex items-center justify-center 
                rounded-full bg-navy-900/50 border-2 border-navy-700 
                transition-all duration-300
                group-hover:border-navy-400 group-hover:scale-110
            ">
                <Icon path={iconPath} className="w-10 h-10 text-navy-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);


export default function ThePromise() {
    return (
        // Using the new bg-blueprint class for that high-tech feel
        <div className="py-20 bg-blueprint">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">The Global Batteries Promise</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We are more than a battery shop. We are your partners in power, dedicated to providing expert service and unmatched value.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {promises.map(promise => (
                        <PromiseCard key={promise.title} {...promise} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Add this utility class to your tailwind.config.ts if it doesn't exist
// This enables the 3D transform effect on the cards.
/*
  // In your tailwind.config.ts `theme.extend` section:
  theme: {
    extend: {
      utilities: {
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
      },
    },
  },
*/