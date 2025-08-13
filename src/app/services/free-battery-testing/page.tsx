// FILE: src/app/services/free-battery-testing/page.tsx

"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import LocalTrustBar from '@/components/home/LocalTrustBar';

// --- Data for Page Sections ---
// UPDATED: Now includes unique IDs for state management
const symptoms = [
    { id: 'crank', name: "Slow Engine Crank", icon: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", position: "top-[48%] left-[23%]" },
    { id: 'light', name: "Warning Light On", icon: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z", position: "top-[48%] left-[48%]" },
    { id: 'dim', name: "Dim Headlights", icon: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z", position: "top-[48%] left-[73%]" },
    { id: 'click', name: "Clicking Sound", icon: "M16.5,12A4.5,4.5,0,0,0,12,7.5A4.5,4.5,0,0,0,7.5,12A4.5,4.5,0,0,0,12,16.5A4.5,4.5,0,0,0,16.5,12Z", position: "top-[25%] left-[65%]" },
    { id: 'age', name: "Battery Age (3+ yrs)", icon: "M9,11H7v2H9v-2m4,0H11v2h2v-2m4,0H15v2h2v-2m2-7H5a2,2,0,0,0-2,2V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z", position: "top-[25%] left-[32%]" },
    { id: 'jumps', name: "Needs Frequent Jumps", icon: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z", position: "top-[70%] left-[58%]" },
];

const benefits = [
    { title: "Avoid Breakdowns", description: "Proactively identify a weak battery before it leaves you stranded.", icon: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" },
    { title: "Protect Electronics", description: "A failing battery and alternator can damage your vehicle's sensitive computer systems.", icon: "M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z" },
    { title: "Maximize Lifespan", description: "Catch charging system issues early to get the most from your battery.", icon: "M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z" },
    { title: "Completely Free", description: "Our test is 100% free with no obligation. We provide an honest report; the decision is always yours.", icon: "M21.08,7a2,2,0,0,0-1.7-1H6.62a2,2,0,0,0-1.7,1L3,15v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V15ZM5,19V15.48l1.8-8H17.2l1.8,8V19Z" }
];

const processSteps = [
    { number: 1, title: "Pull In, No Appointment Needed", description: "Simply visit any of our branches in Alberton, Vanderbijlpark, or Sasolburg during operating hours.", imageUrl: "/images/process/step1-arrive.jpg" },
    { number: 2, title: "5-Minute Professional Test", description: "While you wait in your car, our technician will connect our state-of-the-art digital tester to get a complete health report.", imageUrl: "/images/process/step2-test.jpg" },
    { number: 3, title: "Drive On with Certainty", description: "We provide you with a clear, easy-to-understand printout and our expert, no-obligation recommendation.", imageUrl: "/images/process/step3-drive.jpg" },
];

// --- Sub-Components for the Page ---

// UPDATED: Completely new component for the interactive dashboard
const SymptomHotspot = ({ name, icon, isSelected, onSelect, position }: { name: string, icon: string, isSelected: boolean, onSelect: () => void, position: string }) => {
    return (
        <div className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2 group`} onClick={onSelect}>
            <button className={`relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-300
                ${isSelected ? 'bg-brand-yellow/80' : 'bg-navy-400/70 hover:bg-navy-400'}
            `}>
                <div className={`absolute inset-0 rounded-full animate-pulse ${isSelected ? 'bg-brand-yellow/50' : 'bg-navy-400/50'}`}></div>
                <Icon path={icon} className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs px-3 py-2 bg-gray-900 text-white text-sm font-bold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900"></div>
            </div>
        </div>
    );
};

const BenefitCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
    <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-200 text-center">
        <Icon path={icon} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const StepTab = ({ number, title, isActive, onClick }: { number: number, title: string, isActive: boolean, onClick: () => void }) => (
    <button onClick={onClick} className="relative flex-1 p-6 text-left transition-colors duration-300 group">
        <div className="flex items-center gap-4">
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center font-extrabold text-2xl rounded-full transition-all duration-300 ${isActive ? 'bg-navy-800 text-white scale-110' : 'bg-gray-200 text-navy-800 group-hover:bg-navy-800/20'}`}>
                {number}
            </div>
            <div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-navy-800' : 'text-gray-600 group-hover:text-navy-800'}`}>{title}</h3>
            </div>
        </div>
        <div className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-all duration-300 ${isActive ? 'bg-brand-yellow' : 'bg-gray-200 group-hover:bg-navy-800/20'}`}/>
    </button>
);

const ContentPanel = ({ step }: { step: typeof processSteps[0] }) => (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 animate-fade-in-fast">
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl">
            <Image src={step.imageUrl} alt={step.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 90vw, 40vw" />
        </div>
        <div className="text-center md:text-left">
            <p className="text-3xl font-bold text-gray-900 leading-tight">{step.title}</p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">{step.description}</p>
        </div>
    </div>
);

// --- Main Page Component ---
export default function FreeBatteryTestingPage() {
    const [activeStep, setActiveStep] = useState(1);
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

    React.useEffect(() => {
        document.title = 'Free Battery & Alternator Health Check | Global Batteries Alberton';
    }, []);

    const activeStepData = processSteps.find(s => s.number === activeStep) || processSteps[0];
    
    const handleSymptomSelect = (symptomId: string) => {
        setSelectedSymptoms(prev => prev.includes(symptomId) ? prev.filter(id => id !== symptomId) : [...prev, symptomId]);
    };

    const getDynamicTitle = () => {
        const count = selectedSymptoms.length;
        if (count === 0) return "Is Your Vehicle Sending a Signal?";
        if (count <= 2) return "A Faint Signal Detected...";
        if (count <= 4) return "Multiple Warnings Identified...";
        return "System Alert: Critical Health!";
    };

    const getDynamicMessage = () => {
        const count = selectedSymptoms.length;
        if (count === 0) return "Click the glowing hotspots on the dashboard that match your car's symptoms for an instant analysis.";
        if (count <= 2) return "Even one or two of these signs warrant a closer look. Our free test can provide definitive clarity.";
        return "Multiple symptoms strongly indicate your battery needs urgent attention. We highly recommend visiting us for a free, professional diagnosis.";
    };

    return (
        <div className="bg-white">
            <Header />
            <main>
                {/* === HERO SECTION === */}
                <div className="relative bg-gray-800 text-white py-28 text-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image src="/images/technician-testing.jpg" alt="Technician performing a precision battery test" fill style={{ objectFit: 'cover' }} className="opacity-30" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                    </div>
                    <div className="relative container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">Turn the Key with Certainty.</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow">
                            A failing battery rarely gives a warning. Our complimentary, 5-minute diagnostic provides complete peace of mind, keeping you on the road.
                        </p>
                        <Link href="#visit-us" className="mt-8 inline-block bg-brand-yellow text-gray-900 font-bold py-4 px-12 rounded-md hover:bg-yellow-300 transition-transform duration-300 text-lg shadow-xl hover:scale-105 transform">
                            Visit Us For Your Free Health Check
                        </Link>
                    </div>
                </div>

                {/* === UPDATED: VEHICLE HEALTH DASHBOARD === */}
                <div className="py-20 bg-gray-50 border-b">
                    <div className="container mx-auto px-4 text-center max-w-5xl">
                        <h2 className="text-4xl font-extrabold text-navy-800 mb-4">{getDynamicTitle()}</h2>
                        <p className="text-lg text-gray-600 mb-12">{getDynamicMessage()}</p>
                        
                        <div className="relative max-w-3xl mx-auto aspect-[16/9] bg-gray-200 rounded-2xl shadow-xl overflow-hidden border-4 border-gray-300">
                            <Image src="/images/dashboard-bg.jpg" alt="Car dashboard background" fill style={{objectFit: 'cover'}} quality={90} />
                            <div className="absolute inset-0 bg-black/20"></div>

                            {/* Dashboard Indicators */}
                            <div className={`absolute top-[48%] left-[48%] w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${selectedSymptoms.includes('light') ? 'opacity-100' : 'opacity-0'}`}>
                                <Icon path="M11,15H13V17H11V15M11,7H13V13H11V7M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z" className="w-full h-full text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                            </div>

                            {/* Interactive Hotspots */}
                            {symptoms.map(symptom => 
                                <SymptomHotspot 
                                    key={symptom.id}
                                    {...symptom}
                                    isSelected={selectedSymptoms.includes(symptom.id)}
                                    onSelect={() => handleSymptomSelect(symptom.id)}
                                />
                            )}
                        </div>
                    </div>
                </div>


                {/* === THE SOLUTION & BENEFITS === */}
                <div className="py-24 bg-white">
                    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <Image src="/images/sample-report.png" alt="A sample of the clear battery health report" width={550} height={700} className="rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Precision Diagnosis. Priceless Peace of Mind.</h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Don't guess, get certainty. Our state-of-the-art digital testers provide a complete health report of your vehicle's starting and charging system. We check everything from battery health and charge state to alternator output.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map(benefit => <BenefitCard key={benefit.title} {...benefit} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* === INTERACTIVE PROCESS SECTION === */}
                <div className="py-24 bg-gray-50 border-t">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-4xl font-extrabold text-center mb-4 text-navy-800">Your 5-Minute Pit Stop to Certainty</h2>
                        <p className="text-lg text-gray-600 text-center mb-12">An effortless, transparent, and completely free process.</p>
                        
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                            <div className="flex flex-col md:flex-row border-b border-gray-200">
                                {processSteps.map(step => (
                                    <StepTab 
                                        key={step.number}
                                        number={step.number}
                                        title={step.title}
                                        isActive={activeStep === step.number}
                                        onClick={() => setActiveStep(step.number)}
                                    />
                                ))}
                            </div>
                            <ContentPanel step={activeStepData} />
                        </div>
                    </div>
                </div>

                {/* === FINAL CTA SECTION === */}
                <div id="visit-us">
                    <LocalTrustBar />
                </div>

            </main>
            <Footer />
        </div>
    );
}