// FILE: src/components/tools/BatteryHealthCalculator.tsx
"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';

const BatteryHealthCalculator = () => {
    const [age, setAge] = useState(2); // in years
    const [usage, setUsage] = useState('mixed'); // 'short', 'mixed', 'long'
    const [climate, setClimate] = useState('moderate'); // 'hot', 'moderate'
    
    const [result, setResult] = useState<{ health: number; message: string; color: string } | null>(null);

    const calculateHealth = () => {
        let health = 100;
        
        // Age degradation (non-linear)
        health -= Math.pow(age, 2) * 4;

        // Usage impact
        if (usage === 'short') health -= 15;
        if (usage === 'long') health += 5; // Long trips are good for batteries

        // Climate impact
        if (climate === 'hot') health -= 10;

        // Clamp the value between 5 and 99
        health = Math.max(5, Math.min(99, Math.round(health)));

        let message = '';
        let color = '';

        if (health > 75) {
            message = "Your battery appears to be in good health. Regular checks are still recommended.";
            color = 'text-green-600';
        } else if (health > 40) {
            message = "Your battery is showing signs of aging. We recommend a professional test soon.";
            color = 'text-yellow-600';
        } else {
            message = "Your battery has a high risk of failure. Visit us for a free, urgent test and replacement.";
            color = 'text-red-600';
        }

        setResult({ health, message, color });
    };


    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-navy-800 mb-4">Battery Health Estimator</h2>
                        <p className="text-gray-600 mb-6">Answer a few questions to get an idea of your battery&apos;s current health. For an accurate diagnosis, always get a free professional test at our store.</p>
                        
                        {/* Age Slider */}
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Battery Age: <span className="font-bold text-navy-800">{age} years</span></label>
                            <input type="range" id="age" min="0" max="8" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                        </div>

                        {/* Usage Pattern */}
                        <div className="mb-4">
                            <label htmlFor="usage" className="block text-sm font-medium text-gray-700">Primary Driving Style</label>
                            <select id="usage" value={usage} onChange={(e) => setUsage(e.target.value)} className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option value="short">Mostly short city trips</option>
                                <option value="mixed">A mix of city and highway</option>
                                <option value="long">Mostly long highway trips</option>
                            </select>
                        </div>
                        
                        {/* Climate */}
                        <div className="mb-6">
                            <label htmlFor="climate" className="block text-sm font-medium text-gray-700">Climate</label>
                            <select id="climate" value={climate} onChange={(e) => setClimate(e.target.value)} className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option value="moderate">Moderate (like Gauteng winters)</option>
                                <option value="hot">Very Hot (like a car parked in the sun)</option>
                            </select>
                        </div>

                        <button onClick={calculateHealth} className="w-full bg-navy-800 text-white font-bold py-3 rounded-md hover:bg-navy-700 transition">Calculate Health</button>
                    </div>

                    <div className="text-center">
                        {result ? (
                             <div className="p-6">
                                <p className="text-lg text-gray-600">Estimated Health:</p>
                                <p className={`text-7xl font-bold my-2 ${result.color}`}>{result.health}%</p>
                                <p className={`font-semibold ${result.color}`}>{result.message}</p>
                                {result.health <= 75 && (
                                     <a href="/contact" className="mt-6 inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition">
                                        Book a Free Test Now
                                    </a>
                                )}
                            </div>
                        ) : (
                            <div className="text-center p-6 text-gray-500">
                                <Icon path="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" className="w-24 h-24 mx-auto text-gray-300 mb-4" />
                                <p>Your results will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatteryHealthCalculator;