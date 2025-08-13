// FILE: src/components/home/ExpertAdvicePreview.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const articles = [
    {
        id: 1,
        category: 'Pro Tip',
        title: 'How to Safely Clean Battery Terminals',
        excerpt: 'Corrosion is the #1 enemy of a good connection. Learn the professional method to clean your terminals and extend your battery’s life.',
        imageUrl: '/images/blog/clean-terminals.jpg',
        href: '/blog/how-to-clean-terminals'
    },
    {
        id: 2,
        category: 'Tech Explained',
        title: 'Why Start-Stop Cars Need an AGM Battery',
        excerpt: 'Using the wrong battery in a Start-Stop vehicle can cause serious damage. Learn why an AGM or EFB is essential for your car\'s complex electronics.',
        imageUrl: '/images/blog/start-stop-battery.jpg',
        href: '/blog/agm-vs-efb'
    },
    {
        id: 3,
        category: 'Diagnostics',
        title: '5 Warning Signs of a Failing Battery',
        excerpt: 'Your car often gives you clues before you get stranded. Learn to recognize the warning signs before it’s too late to act.',
        imageUrl: '/images/blog/warning-signs.jpg',
        href: '/blog/5-signs-battery-dying'
    }
];

export default function ExpertAdvicePreview() {
    // State to track the currently hovered/active article
    const [activeArticleId, setActiveArticleId] = useState(articles[0].id);
    const activeArticle = articles.find(a => a.id === activeArticleId) || articles[0];

    return (
        <div className="py-20 bg-blueprint">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">From the Technician's Desk</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Our experts share their knowledge to help you get the most out of your battery and vehicle. Select a topic to learn more.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl">
                    {/* Left Column: "Holographic" Image Viewer */}
                    <div className="relative h-80 lg:h-full w-full rounded-xl overflow-hidden">
                        {articles.map(article => (
                            <Image
                                key={article.id}
                                src={article.imageUrl}
                                alt={article.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className={`transition-opacity duration-500 ease-in-out 
                                            ${activeArticleId === article.id ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                         <div className="absolute bottom-6 left-6">
                            <h3 className="text-3xl font-bold text-white drop-shadow-lg">{activeArticle.title}</h3>
                         </div>
                    </div>

                    {/* Right Column: Interactive Article List */}
                    <div className="flex flex-col">
                        {articles.map(article => (
                            <Link 
                                key={article.id}
                                href={article.href}
                                onMouseEnter={() => setActiveArticleId(article.id)}
                                className={`group p-6 border-l-4 transition-colors duration-200 
                                            ${activeArticleId === article.id 
                                                ? 'bg-navy-800/20 border-brand-yellow' 
                                                : 'border-transparent hover:bg-navy-800/10'
                                            }`}
                            >
                                <span className="text-sm font-bold text-navy-400 uppercase">{article.category}</span>
                                <h4 className={`text-xl font-bold mt-1 transition-colors duration-200 
                                            ${activeArticleId === article.id 
                                                ? 'text-white' 
                                                : 'text-gray-300 group-hover:text-white'
                                            }`}>
                                    {article.title}
                                </h4>
                                <p className={`mt-2 text-gray-400 transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100
                                            ${activeArticleId === article.id ? '!max-h-40 !opacity-100' : ''}`}>
                                    {article.excerpt}
                                </p>
                            </Link>
                        ))}
                         <div className="mt-auto pt-6">
                            <Link href="/blog" className="font-bold text-white hover:text-brand-yellow transition-colors flex items-center gap-2">
                                View All Guides & Advice
                                <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-5 h-5"/>
                            </Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}