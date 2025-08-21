// FILE: src/components/home/SocialProofBanner.tsx (REPLACE ENTIRE FILE)
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';

const reviews = [
    { quote: "The free battery test was quick and professional. They identified the problem with my alternator... saving me a huge headache.", name: "Jaco V.", location: "Alberton" },
    { quote: "Excellent service! They had the exact Willard battery for my Fortuner in stock and fitted it in under 15 minutes.", name: "Brenda M.", location: "Brackenhurst" },
    { quote: "My gate motor battery died during load shedding. The team sorted me out with a reliable solution at a great price.", name: "Sipho K.", location: "Meyersdal" },
    { quote: "The team is so knowledgeable. They explained the difference between AGM and regular batteries for my BMW and even handled the coding.", name: "Lindiwe P.", location: "Randhart" },
    { quote: "Best prices on Exide batteries I could find anywhere. The free fitment is a huge bonus. I won't go anywhere else.", name: "Fatima A.", location: "Alberton North" }
];

const AnimatedCounter = ({ to, suffix }: { to: number, suffix?: string }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(0, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    if (to % 1 !== 0) {
                        node.textContent = value.toFixed(1) + (suffix || '');
                    } else {
                        node.textContent = Math.floor(value).toLocaleString('en-US') + (suffix || '');
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, to, suffix]);

    return <p ref={ref} className="text-5xl lg:text-6xl font-extrabold text-brand-blue tracking-tighter">0</p>;
};

const SocialProofBanner = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentReviewIndex(prev => (prev + 1) % reviews.length);
                setIsAnimating(false);
            }, 400);
        }, 5000);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        startInterval();
    };
    
    const review = reviews[currentReviewIndex];

    return (
        <section className="w-full bg-navy-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    <motion.div 
                        className="space-y-8 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div>
                            <AnimatedCounter to={50000} suffix="+" />
                            <p className="mt-1 text-lg text-gray-300">Batteries Sold</p>
                        </div>
                        <div>
                            <AnimatedCounter to={50} suffix="+" />
                            <p className="mt-1 text-lg text-gray-300">Years of Combined Experience</p>
                        </div>
                        <div>
                            <AnimatedCounter to={3} />
                            <p className="mt-1 text-lg text-gray-300">Locations Across Gauteng</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative bg-navy-850 p-8 rounded-xl border border-blue-900/50 h-full flex flex-col hover:border-brand-blue transition-colors duration-300 shadow-lg">
                            <div className="flex items-center justify-between pb-4 border-b border-blue-900/50">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width={32} height={32} className="h-8 w-8"/>
                                <div className="flex items-center">
                                    <span className="font-bold text-lg mr-2">4.9</span>
                                    <div className="flex text-brand-accent">
                                        {[...Array(5)].map((_, i) => <Icon key={i} path="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="w-5 h-5" />)}
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-6 flex-grow flex flex-col transition-all duration-300 ${isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                                <blockquote className="flex-grow">
                                    <p className="text-gray-300 italic text-lg leading-relaxed">"{review.quote}"</p>
                                </blockquote>
                                <footer className="mt-4 text-sm text-slate-300">
                                    - <span className="font-bold text-white">{review.name}</span> ({review.location})
                                </footer>
                            </div>
                            {/* UPDATED: Animation is now on a transform property */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900/50 rounded-b-xl overflow-hidden">
                                <div key={currentReviewIndex} className="h-full bg-brand-accent origin-left" style={{ animation: 'progress-bar-fill 5s linear forwards' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-800/50 transition-colors">
                            <div className="flex-shrink-0 bg-navy-800 rounded-full p-3 border border-blue-900/50">
                                <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Nationwide Warranties</h4>
                                <p className="text-slate-300 text-sm">Peace of mind with up to 26 months of coverage on our premium ranges.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-800/50 transition-colors">
                            <div className="flex-shrink-0 bg-navy-800 rounded-full p-3 border border-blue-900/50">
                                <Icon path="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Guaranteed Fitment</h4>
                                <p className="text-slate-300 text-sm">Our expert technicians ensure the correct battery is installed professionally, every time.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-800/50 transition-colors">
                            <div className="flex-shrink-0 bg-navy-800 rounded-full p-3 border border-blue-900/50">
                                <Icon path="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Free Battery Testing</h4>
                                <p className="text-slate-300 text-sm">Get a comprehensive, no-obligation health check for your battery and alternator.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofBanner;