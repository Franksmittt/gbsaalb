// FILE: src/components/VehicleFinder.tsx
import React, { useState, useEffect } from 'react';
import { VehicleData } from '@/types';

const VehicleFinder = () => {
    const [batteryData, setBatteryData] = useState<VehicleData[]>([]);
    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [variants, setVariants] = useState<string[]>([]);

    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');

    const [result, setResult] = useState<{ recommended: string; alternative: string } | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/data/batteries.json')
            .then(res => res.ok ? res.json() : Promise.reject('Failed to load'))
            .then((data: VehicleData[]) => {
                setBatteryData(data);
                setMakes(Array.from(new Set(data.map(item => item.make))).sort());
            })
            .catch(() => setError("Could not load vehicle data."));
    }, []);

    useEffect(() => {
        if (selectedMake) {
            const filtered = batteryData.filter(item => item.make === selectedMake);
            setModels(Array.from(new Set(filtered.map(item => item.model))).sort());
        }
        setSelectedModel('');
        setYears([]);
        setVariants([]);
    }, [selectedMake, batteryData]);

    useEffect(() => {
        if (selectedModel) {
            const filtered = batteryData.filter(item => item.make === selectedMake && item.model === selectedModel);
            setYears(Array.from(new Set(filtered.map(item => item.year))).sort());
        }
        setSelectedYear('');
        setVariants([]);
    }, [selectedModel, selectedMake, batteryData]);

    useEffect(() => {
        if (selectedYear) {
            const filtered = batteryData.filter(item => item.make === selectedMake && item.model === selectedModel && item.year === selectedYear);
            setVariants(Array.from(new Set(filtered.map(item => item.variant))).sort());
        }
        setSelectedVariant('');
    }, [selectedYear, selectedModel, selectedMake, batteryData]);

    const handleFindBattery = () => {
        if (!selectedVariant) {
            setError('Please complete all selections.');
            setResult(null);
            return;
        }
        const found = batteryData.find(item => 
            item.make === selectedMake && 
            item.model === selectedModel && 
            item.year === selectedYear &&
            item.variant === selectedVariant
        );
        if (found) {
            setResult({ recommended: found.recommended_battery, alternative: found.alternative_battery });
            setError('');
        } else {
            setError('No battery found for this selection.');
            setResult(null);
        }
    };

    return (
        // RESPONSIVE FIX: Changed margin to be positive on mobile and negative on desktop
        <div className="bg-white mt-8 md:-mt-16 relative z-10 container mx-auto rounded-lg shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find The Right Battery For Your Vehicle</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <select value={selectedMake} onChange={e => setSelectedMake(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-md">
                    <option value="">Select Make</option>
                    {makes.map(make => <option key={make} value={make}>{make}</option>)}
                </select>
                <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} disabled={!selectedMake} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100">
                    <option value="">Select Model</option>
                    {models.map(model => <option key={model} value={model}>{model}</option>)}
                </select>
                <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} disabled={!selectedModel} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100">
                    <option value="">Select Year</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
                <select value={selectedVariant} onChange={e => setSelectedVariant(e.target.value)} disabled={!selectedYear} className="w-full px-4 py-3 border border-gray-300 rounded-md disabled:bg-gray-100">
                    <option value="">Select Variant</option>
                    {variants.map(variant => <option key={variant} value={variant}>{variant}</option>)}
                </select>
                <button onClick={handleFindBattery} disabled={!selectedVariant} className="w-full bg-navy-800 text-white font-bold py-3 px-6 rounded-md hover:bg-navy-700 transition duration-300 h-full disabled:bg-gray-400">
                    Find Battery
                </button>
            </div>
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}
            {result && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border">
                    <h3 className="text-lg font-bold text-center mb-4">Your Recommended Batteries</h3>
                    <div className="flex justify-center gap-8">
                        <div><p className="text-sm text-gray-500">Recommended</p><p className="text-2xl font-bold text-navy-800">{result.recommended}</p></div>
                        <div><p className="text-sm text-gray-500">Alternative</p><p className="text-2xl font-bold text-gray-700">{result.alternative}</p></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehicleFinder;
