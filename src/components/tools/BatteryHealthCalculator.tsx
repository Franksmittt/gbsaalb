// FILE: src/components/tools/BatteryHealthCalculator.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';

type Usage = 'short' | 'mixed' | 'long';
type Climate = 'hot' | 'moderate';

const SegmentedControl = ({ label, options, selectedValue, onSelect }: any) => (
    <div>
        <label className="block text-sm font-semibold text-gray-400 mb-2">{label}</label>
        <div className="flex w-full bg-gray-800 rounded-lg p-1">
            {options.map((option: any) => (
                <button
                    key={option.value}
                    onClick={() => onSelect(option.value)}
                    className={`w-full rounded-md py-2 text-sm font-bold transition-colors duration-300 ${selectedValue === option.value ? 'bg-gray-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    </div>
);

const BatteryHealthCalculator = () => {
    const [age, setAge] = useState<number>(3);
    const [usage, setUsage] = useState<Usage>('mixed');
    const [climate, setClimate] = useState<Climate>('moderate');
    const [result, setResult] = useState<{ health: number; message: string; color: string; colorClass: string } | null>(null);

    const calculateHealth = () => {
        let health = 100;
        health -= Math.pow(age, 2) * 4;
        if (usage === 'short') health -= 15;
        if (usage === 'long') health += 5;
        if (climate === 'hot') health -= 10;
        health = Math.max(5, Math.min(99, Math.round(health)));

        let message = '', color = '', colorClass = '';

        if (health > 75) {
            message = "Your battery appears to be in good health. Regular checks are still recommended.";
            color = 'text-green-400';
            colorClass = 'bg-green-500';
        } else if (health > 40) {
            message = "Your battery is showing signs of aging. We recommend a professional test soon.";
            color = 'text-yellow-400';
            colorClass = 'bg-yellow-500';
        } else {
            message = "Your battery has a high risk of failure. Visit us for a free, urgent test to avoid getting stranded.";
            color = 'text-red-400';
            colorClass = 'bg-red-500';
        }
        setResult({ health, message, color, colorClass });
    };

    return (
        <div className="bg-navy-900 py-16 sm:py-24" id="battery-health-calculator">
            {/* UPDATED: Removed max-w-5xl to align with the standard container */}
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Battery Health Estimator</h2>
                    <p className="mt-4 text-lg text-gray-400">A quick estimate of your battery's condition. For 100% accuracy, visit us for a free professional test.</p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Column 1: Controls */}
                    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 space-y-6">
                        <div>
                            <label htmlFor="age" className="block text-sm font-semibold text-gray-400">Battery Age: <span className="font-bold text-blue-400">{age} {age === 1 ? 'year' : 'years'}</span></label>
                            <input type="range" id="age" min="1" max="8" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer mt-2 custom-slider" />
                        </div>
                        <SegmentedControl label="Primary Driving Style" options={[{ value: 'short', label: 'Short Trips' }, { value: 'mixed', label: 'Mixed' }, { value: 'long', label: 'Long Trips' }]} selectedValue={usage} onSelect={setUsage} />
                        <SegmentedControl label="Typical Climate" options={[{ value: 'moderate', label: 'Moderate' }, { value: 'hot', label: 'Hot' }]} selectedValue={climate} onSelect={setClimate} />
                    </div>

                    {/* Column 2: Results */}
                    <div className="text-center">
                        {result ? (
                            <div className="p-6 animate-fade-in">
                                <p className="font-semibold text-gray-400">Estimated Health</p>
                                <div className="relative w-full bg-gray-700 rounded-full h-10 mt-4 mb-2 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full animate-progress-bar-fill ${result.colorClass}`}
                                        style={{ width: `${result.health}%` }}
                                    ></div>
                                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white mix-blend-exclusion">
                                        {result.health}%
                                    </span>
                                </div>
                                <p className={`mt-4 text-lg font-semibold ${result.color}`}>{result.message}</p>
                                {result.health <= 75 && (
                                    <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-transform hover:scale-105">
                                        Book Your Free Test
                                    </a>
                                )}
                            </div>
                        ) : (
                             <button onClick={calculateHealth} className="w-full max-w-sm bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-500 transition-transform hover:scale-105">
                                Estimate My Battery Health
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatteryHealthCalculator;