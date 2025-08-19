// FILE: src/components/home/VisitOurBranches.tsx (REPLACE ENTIRE FILE)
'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

// --- Data for the branches, updated from your new HTML ---
const branches = [
  {
    name: 'Alberton',
    province: 'Gauteng',
    blurb: 'Our flagship store, offering specialized BMW coding & local call-out services.',
    address: '6 Voortrekker St, New Redruth, Alberton, 1449',
    phone: '011 869 2427',
    whatsapp: '079 320 3014',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Global+Batteries+Alberton+6+Voortrekker+Street',
    hours: {
      weekday: { open: 7.5, close: 17.5, string: 'Mon-Fri: 7:30 - 17:30' },
      saturday: { open: 8, close: 13, string: 'Sat & PH: 8:00 - 13:00' }
    }
  },
  {
    name: 'Vanderbijlpark',
    province: 'Gauteng',
    blurb: 'Serving the Vaal Triangle with the same expert service and premium brands.',
    address: 'Shop 3, Ganda Ganda City, Cnr Golden Highway & Rautenbach Rd',
    phone: '016 023 0161',
    whatsapp: '071 139 4043',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Global+Batteries+Vanderbijlpark',
    hours: {
      weekday: { open: 7.5, close: 17, string: 'Mon-Fri: 7:30 - 17:00' },
      saturday: { open: 8, close: 13, string: 'Sat & PH: 8:00 - 13:00' }
    }
  },
  {
    name: 'Sasolburg',
    province: 'Free State',
    blurb: 'Your trusted battery specialists for industrial and residential needs.',
    address: '1 Melt Brink St, Sasolburg, 1947',
    phone: '016 976 2076',
    whatsapp: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Global+Batteries+Sasolburg',
    hours: {
      weekday: { open: 8, close: 17, string: 'Mon-Fri: 8:00 - 17:00' },
      saturday: { open: 8, close: 13, string: 'Sat & PH: 8:00 - 13:00' }
    }
  },
];

// --- Custom Hook for Store Status Logic ---
const useStoreStatus = (hours: typeof branches[0]['hours']) => {
    const [status, setStatus] = useState({ text: 'Checking...', className: '' });

    useEffect(() => {
        const now = new Date();
        const utcHours = now.getUTCHours();
        const sastHours = (utcHours + 2); // SAST is UTC+2
        const minutes = now.getUTCMinutes();
        const currentTime = sastHours + (minutes / 60);
        const day = now.getUTCDay(); // Sunday = 0, Saturday = 6

        let currentHours;
        if (day >= 1 && day <= 5) { // Monday to Friday
            currentHours = hours.weekday;
        } else if (day === 6) { // Saturday
            currentHours = hours.saturday;
        } else { // Sunday
            currentHours = null;
        }

        if (currentHours && currentTime >= currentHours.open && currentTime < currentHours.close) {
            setStatus({ text: 'Open Now', className: 'status-open' });
        } else {
            setStatus({ text: 'Closed', className: 'status-closed' });
        }
    }, [hours]);

    return status;
};

// --- Branch Card Sub-Component ---
const BranchCard = ({ branch }: { branch: typeof branches[0] }) => {
    const status = useStoreStatus(branch.hours);

    return (
        <div className="bg-navy-850 rounded-lg border border-slate-700/50 flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/50">
            <div className="flex-grow flex flex-col">
                <div className="flex items-center mb-2">
                    <h3 className="font-bold text-2xl text-white">{branch.name}</h3>
                    <span className={`status-indicator ${status.className}`}>{status.text}</span>
                </div>
                <p className="text-slate-400 italic mb-6 min-h-[60px]">{branch.blurb}</p>
                <div className="space-y-4 text-slate-300 mb-auto">
                    <div className="flex items-start min-h-[56px]"><Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" className="w-6 text-center mr-2 mt-1 text-slate-500 flex-shrink-0" /><span>{branch.address}</span></div>
                    <div className="flex items-start min-h-[56px]"><Icon path="M6.62,10.79a15.25,15.25,0,0,0,6.59,6.59l2.2-2.2a1,1,0,0,1,1-.24,11.36,11.36,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.24,1Z" className="w-6 text-center mr-2 mt-1 text-slate-500 flex-shrink-0" /><a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{branch.phone}</a></div>
                    <div className="flex items-start min-h-[56px]"><Icon path="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM16.24,16.24,11,13V7h2v5.18l4.24,2.54Z" className="w-6 text-center mr-2 mt-1 text-slate-500 flex-shrink-0" /><span>{branch.hours.weekday.string}<br />{branch.hours.saturday.string}</span></div>
                </div>
                {branch.whatsapp ? (
                    <a href={`https://wa.me/27${branch.whatsapp.substring(1).replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white rounded-md px-4 py-3 font-semibold my-8 hover:bg-green-700 transition-colors">
                        <Icon path="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,1.53,5.29L2,22l4.83-1.26A10,10,0,1,0,12,2Zm4.23,12.82a1.48,1.48,0,0,1-1.24,1,3,3,0,0,1-1.75-.58,10.37,10.37,0,0,1-3.43-2.17,10.37,10.37,0,0,1-2.17-3.43,3,3,0,0,1-.58-1.75,1.48,1.48,0,0,1,1-1.24,1.18,1.18,0,0,1,.81.12l.24.12a1,1,0,0,1,.48.86,5.33,5.33,0,0,1,.2,1.23,1,1,0,0,1-.27.83l-.42.42a1,1,0,0,0-.2,1.18,7.9,7.9,0,0,0,2.17,2.17,1,1,0,0,0,1.18-.2l.42-.42a1,1,0,0,1,.83-.27,5.33,5.33,0,0,1,1.23.2,1,1,0,0,1,.86.48l.12.24A1.18,1.18,0,0,1,16.23,12.82Z" className="w-5 h-5 mr-3" />
                        WhatsApp {branch.name}
                    </a>
                ) : (
                    <div className="my-8 min-h-[52px]"></div>
                )}
            </div>
            <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="border border-white text-white font-semibold py-3 px-6 rounded-md w-full text-center transition-colors hover:bg-white hover:text-navy-950 mt-auto">
                Get Directions
            </a>
        </div>
    );
};


// --- Main Component ---
export default function VisitOurBranches() {
  return (
    <section className="w-full bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Expert Battery Fitment & Testing</h2>
                <p className="text-slate-400 mt-4 text-lg max-w-3xl mx-auto">Find our Alberton and Vanderbijlpark branches in <strong>Gauteng</strong>, or visit our Sasolburg branch in the <strong>Free State</strong> for professional advice and immediate service.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {branches.map((branch) => (
                    <BranchCard key={branch.name} branch={branch} />
                ))}
            </div>
        </div>
    </section>
  );
};