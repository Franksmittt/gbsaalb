// FILE: src/components/home/CTA.tsx (CREATE NEW FILE)
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function CTA() {
  return (
    <section className="w-full bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-navy-850 rounded-lg p-10 md:p-16 text-center border border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Power Now?
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Get a free quote or find your nearest branch for expert advice and immediate, professional battery fitment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#branches" // Updated to link to the branches section on the same page
              className="inline-flex items-center justify-center bg-white text-navy-950 font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition-all duration-300 hover:bg-slate-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" className="w-5 h-5 mr-2" />
              Find Your Nearest Branch
            </Link>
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center border border-white text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition-colors duration-300 hover:bg-white hover:text-navy-950"
            >
              <Icon path="M20,8H16V6a1,1,0,0,0-1-1H9A1,1,0,0,0,8,6V8H4a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V10A2,2,0,0,0,20,8Zm-4,6H14v2a1,1,0,0,1-2,0V14H10a1,1,0,0,1,0-2h2V10a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z" className="w-5 h-5 mr-2" />
              Browse All Batteries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}