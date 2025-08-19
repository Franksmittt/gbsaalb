// FILE: src/components/home/TrustAndValue.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Icon from '@/components/ui/Icon';

const values = [
  {
    iconPath: "M9,21.5a1,1,0,0,1-.6-.2l-5-3.5a1,1,0,0,1,0-1.6l5-3.5a1,1,0,0,1,1.2.4,1,1,0,0,1-.4,1.2L5.8,16l3.4,2.4a1,1,0,0,1-.4,1.2A1,1,0,0,1,8,20Zm13-9.4-5-3.5a1,1,0,0,1-.2-1.6,1,1,0,0,1,1.6-.2l5,3.5a1,1,0,0,1,0,1.6l-5,3.5a1,1,0,0,1-.8.2,1,1,0,0,1-.6-1.4L20.2,16Z",
    title: "Unmatched Brand Selection",
    description: "The sole retailer in South Africa offering such a vast scope of top battery brands under one roof."
  },
  {
    iconPath: "M12,2a10,10,0,0,0-9,12.2,1,1,0,0,0,.5,1.1l7,3.5a1,1,0,0,0,1,0l7-3.5a1,1,0,0,0,.5-1.1A10,10,0,0,0,12,2Zm-1.1,13-3-3a1,1,0,1,1,1.4-1.4L9.9,12.8l4.3-4.3a1,1,0,0,1,1.4,1.4l-5,5A1,1,0,0,1,9.9,15Z",
    title: "Guaranteed Best Warranties",
    description: "Featuring industry-leading warranties, including an exclusive 26-Month Warranty on our Novax Premium range."
  },
  {
    iconPath: "M21.1,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21.1,12Zm-9.8-1.7a1,1,0,0,0,1.4,0l6-6a1,1,0,0,0-1.4-1.4L13.1,7V2a1,1,0,0,0-2,0V7L6.9,2.9a1,1,0,0,0-1.4,1.4Z",
    title: "Free Expert Services",
    description: "All batteries come with free professional testing, charging, and fitment while you wait. No booking required."
  }
];

const TrustAndValue = () => {
  return (
    <div className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-navy-900/70 text-blue-400 border border-blue-900/50">
                <Icon path={value.iconPath} className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-base text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustAndValue;