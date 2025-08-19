// FILE: src/components/home/TheGlobalBatteriesAdvantage.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

const advantages = [
  {
    iconPath: "M12,2a10,10,0,0,0-9,12.2,1,1,0,0,0,.5,1.1l7,3.5a1,1,0,0,0,1,0l7-3.5a1,1,0,0,0,.5-1.1A10,10,0,0,0,12,2Zm-1.1,13-3-3a1,1,0,1,1,1.4-1.4L9.9,12.8l4.3-4.3a1,1,0,0,1,1.4,1.4l-5,5A1,1,0,0,1,9.9,15Z",
    title: "Free Expert Testing & Fitment",
    description: "Unsure about your battery? We offer free, no-obligation battery and alternator tests, plus professional fitment with every purchase."
  },
  {
    iconPath: "M9,21.5a1,1,0,0,1-.6-.2l-5-3.5a1,1,0,0,1,0-1.6l5-3.5a1,1,0,0,1,1.2.4,1,1,0,0,1-.4,1.2L5.8,16l3.4,2.4a1,1,0,0,1-.4,1.2A1,1,0,0,1,8,20Zm13-9.4-5-3.5a1,1,0,0,1-.2-1.6,1,1,0,0,1,1.6-.2l5,3.5a1,1,0,0,1,0,1.6l-5,3.5a1,1,0,0,1-.8.2,1,1,0,0,1-.6-1.4L20.2,16Z",
    title: "Unmatched Brand Selection",
    description: "As the only retailer with such a vast scope of top brands like Willard, Exide, and Novax, we guarantee the perfect fit for your needs and budget."
  },
  {
    iconPath: "M17.6,15.2l-2.2-2.2a1,1,0,0,0-1.4,0L13,14a1,1,0,0,1-1.4,0L7,9.4a1,1,0,0,1,0-1.4l1-1a1,1,0,0,0,0-1.4L5.8,3.4a1,1,0,0,0-1.4,0L2.7,5.1A1,1,0,0,0,2.6,6,12.6,12.6,0,0,0,18,21.4a1,1,0,0,0,.9-.1l1.7-1.7a1,1,0,0,0,0-1.4Z",
    title: "Specialized Services & Call-Outs",
    description: "From battery terminal repairs and BMW coding to emergency call-outs in the Alberton area, we're more than a store—we're your power partner."
  }
];

const TheGlobalBatteriesAdvantage = () => {
  return (
    <div className="relative bg-navy-900 text-white py-16 sm:py-24">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/dashboard-bg.jpg')] bg-cover bg-center opacity-10 animate-background-pan [animation-duration:20s]"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl">The Global Batteries Advantage</h2>
          <p className="mt-4 text-lg text-gray-300">
            We're not just a battery shop; we're your dedicated power specialists in Alberton. Experience service and expertise you won't find anywhere else.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group text-center p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-navy-800 border-2 border-blue-900/50 text-blue-400 transition-all duration-300 group-hover:animate-pulse-glow group-hover:scale-110">
                <Icon path={advantage.iconPath} className="w-10 h-10" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{advantage.title}</h3>
              <p className="mt-2 text-base text-gray-400">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Link 
              href="/services/free-battery-testing" 
              className="bg-brand-yellow text-navy-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg hover:shadow-yellow-400/30"
            >
                Explore Our Services
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TheGlobalBatteriesAdvantage;