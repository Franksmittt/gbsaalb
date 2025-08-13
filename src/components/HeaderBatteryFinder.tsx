// FILE: src/components/HeaderBatteryFinder.tsx (NEW FILE)
import React, { useState, useEffect } from 'react';
import { VehicleData } from '@/types';

const HeaderBatteryFinder = ({ closeFinder }: { closeFinder: () => void }) => {
    const [batteryData, setBatteryData] = useState<VehicleData[]>([]);
    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [variants, setVariants] = useState<string[]>([]);

    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');

    useEffect(() => {
        // This is a simplified fetch for the component. In a real app, this data might be managed globally.
        fetch('/data/batteries.json')
            .then(res => res.json())
            .then((data: VehicleData[]) => {
                setBatteryData(data);
                setMakes(Array.from(new Set(data.map(item => item.make))).sort());
            });
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

    const handleSearch = () => {
        if (selectedVariant) {
            // In a real app, this would redirect to a filtered shop page or show results.
            alert(`Searching for batteries for: ${selectedMake} ${selectedModel} ${selectedYear} ${selectedVariant}`);
            closeFinder();
        }
    };

    return (
        <div className="absolute top-full left-0 w-full bg-gray-100 shadow-lg z-30 border-t">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div>
                        <label htmlFor="make-header" className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                        <select id="make-header" value={selectedMake} onChange={e => setSelectedMake(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                            <option value="">Select Make</option>
                            {makes.map(make => <option key={make} value={make}>{make}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="model-header" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <select id="model-header" value={selectedModel} onChange={e => setSelectedModel(e.target.value)} disabled={!selectedMake} className="w-full px-4 py-2 border border-gray-300 rounded-md disabled:bg-gray-200">
                            <option value="">Select Model</option>
                            {models.map(model => <option key={model} value={model}>{model}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year-header" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <select id="year-header" value={selectedYear} onChange={e => setSelectedYear(e.target.value)} disabled={!selectedModel} className="w-full px-4 py-2 border border-gray-300 rounded-md disabled:bg-gray-200">
                            <option value="">Select Year</option>
                            {years.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="variant-header" className="block text-sm font-medium text-gray-700 mb-1">Variant</label>
                        <select id="variant-header" value={selectedVariant} onChange={e => setSelectedVariant(e.target.value)} disabled={!selectedYear} className="w-full px-4 py-2 border border-gray-300 rounded-md disabled:bg-gray-200">
                            <option value="">Select Variant</option>
                            {variants.map(variant => <option key={variant} value={variant}>{variant}</option>)}
                        </select>
                    </div>
                    <button onClick={handleSearch} disabled={!selectedVariant} className="w-full bg-navy-800 text-white font-bold py-2 px-6 rounded-md hover:bg-navy-700 transition duration-300 h-full disabled:bg-gray-400">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBatteryFinder;