// FILE: src/components/home/InteractiveBatteryFinder.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link'; // FIX: Added missing import for Link component
import { VehicleData } from '@/types'; // FIX: Importing the type from the central types file

export default function InteractiveBatteryFinder() {
    const [allVehicleData, setAllVehicleData] = useState<VehicleData[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [variant, setVariant] = useState('');

    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [variants, setVariants] = useState<string[]>([]);

    const [result, setResult] = useState<{ recommended: string; alternative: string } | null>(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const response = await fetch(`/data/abarth.json`);
                if (!response.ok) throw new Error(`Failed to load vehicle data`);
                
                // FIX: Explicitly type the fetched data to resolve the SetStateAction error
                const data: VehicleData[] = await response.json();
                
                setAllVehicleData(data);
                const uniqueMakes = Array.from(new Set(data.map((item) => item.make))).sort();
                setMakes(uniqueMakes);
            } catch (err) {
                 setError("We couldn't load our vehicle database. Please contact us directly for assistance.");
            }
        };

        fetchAllData();
    }, []);

    useEffect(() => {
        if (make) {
            const filtered = allVehicleData.filter(item => item.make === make);
            setModels(Array.from(new Set(filtered.map(item => item.model))).sort());
            setModel(''); setYear(''); setVariant(''); setResult(null);
        }
    }, [make, allVehicleData]);

    useEffect(() => {
        if (model) {
            const filtered = allVehicleData.filter(item => item.make === make && item.model === model);
            setYears(Array.from(new Set(filtered.map(item => item.year))).sort());
            setYear(''); setVariant(''); setResult(null);
        }
    }, [model, make, allVehicleData]);
    
    useEffect(() => {
        if (year) {
             const filtered = allVehicleData.filter(item => item.make === make && item.model === model && item.year === year);
            setVariants(Array.from(new Set(filtered.map(item => item.variant))).sort());
            setVariant(''); setResult(null);
        }
    }, [year, model, make, allVehicleData]);

    const handleFindBattery = () => {
        if (!variant) {
            setError('Please complete all selections to find your battery.');
            setResult(null);
            return;
        }
        const found = allVehicleData.find(item => 
            item.make === make && item.model === model && item.year === year && item.variant === variant
        );
        if (found) {
            setResult({ recommended: found.recommended_battery, alternative: found.alternative_battery });
            setError(null);
        } else {
            setError('No battery match found for this selection. Please contact us for expert assistance.');
            setResult(null);
        }
    };
    
    const resetFinder = () => {
        setMake(''); setModel(''); setYear(''); setVariant('');
        setResult(null); setError(null);
    };

    return (
        <div className="bg-white -mt-16 relative z-10 container mx-auto rounded-lg shadow-2xl p-6 md:p-8" id="battery-finder">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Find The Right Battery For Your Vehicle</h2>
            <p className="text-gray-600 text-center mb-6">Get a precise recommendation using our supplier data.</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                    <select id="make" value={make} onChange={e => setMake(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-800 transition">
                         <option value="">Select Make</option>
                        {makes.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                    <select id="model" value={model} onChange={e => setModel(e.target.value)} disabled={!make} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed focus:ring-2 focus:ring-navy-800 transition">
                        <option value="">Select Model</option>
                         {models.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
                <div>
                     <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <select id="year" value={year} onChange={e => setYear(e.target.value)} disabled={!model} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed focus:ring-2 focus:ring-navy-800 transition">
                        <option value="">Select Year</option>
                         {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>
                <div>
                     <label htmlFor="variant" className="block text-sm font-medium text-gray-700 mb-1">Engine / Variant</label>
                    <select id="variant" value={variant} onChange={e => setVariant(e.target.value)} disabled={!year} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed focus:ring-2 focus:ring-navy-800 transition">
                        <option value="">Select Variant</option>
                        {variants.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                </div>
                <button onClick={handleFindBattery} disabled={!variant} className="w-full bg-navy-800 text-white font-bold py-3 px-6 rounded-md hover:bg-navy-700 transition h-full disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <Icon path="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" className="w-5 h-5" />
                    Find Battery
                </button>
            </div>

            {error && <p className="text-center text-red-600 font-semibold mt-4">{error}</p>}
            
             {result && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                             <h3 className="text-lg font-bold text-gray-800 mb-2">Your Recommended Battery</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                                <div>
                                     <p className="text-sm text-gray-500 font-semibold">RECOMMENDED</p>
                                    <p className="text-2xl font-bold text-navy-800">{result.recommended}</p>
                                </div>
                                 {result.alternative && (
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold">ALTERNATIVE FIT</p>
                                     <p className="text-2xl font-bold text-gray-700">{result.alternative}</p>
                                </div>
                                )}
                             </div>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                            <Link href={`/shop?query=${result.recommended}`} className="bg-green-600 text-white font-bold py-2 px-5 rounded-md hover:bg-green-700 transition text-sm mb-2 inline-block">
                                View Product
                            </Link>
                             <button onClick={resetFinder} className="text-xs text-gray-500 hover:underline block md:ml-auto mt-2">
                                Start Over
                            </button>
                        </div>
                     </div>
                </div>
            )}
        </div>
    );
};