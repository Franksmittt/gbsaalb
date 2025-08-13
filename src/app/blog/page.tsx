// FILE: src/app/blog/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const mockPosts = [
    { id: 1, slug: 'how-to-extend-battery-life', title: "How to Extend Your Car Battery's Life", category: 'Maintenance', date: 'August 1, 2025', excerpt: 'Simple tips and tricks to get the most out of your battery and avoid unexpected failures.', imageUrl: '/images/blog-post-1.jpg', featured: true },
    { id: 2, slug: '5-signs-battery-dying', title: "5 Signs Your Battery is About to Die", category: 'Diagnostics', date: 'July 28, 2025', excerpt: "Learn to recognize the warning signs before you get stranded. Don't get caught unprepared.", imageUrl: '/images/blog-post-2.jpg', featured: false },
    { id: 3, slug: 'agm-vs-lead-acid', title: "AGM vs. Lead-Acid: Which is Right for You?", category: 'Technology', date: 'July 22, 2025', excerpt: 'A breakdown of the technology to help you make an informed decision for your vehicle.', imageUrl: '/images/blog-post-3.jpg', featured: false },
    { id: 4, slug: 'importance-correct-fitment', title: "The Importance of Correct Battery Fitment", category: 'Installation', date: 'July 15, 2025', excerpt: "Why professional installation is crucial for your vehicle's health and your battery's lifespan.", imageUrl: '/images/blog-post-4.jpg', featured: false },
    { id: 5, slug: 'jump-starting-safely', title: "Jump-Starting a Car Safely: A Step-by-Step Guide", category: 'Maintenance', date: 'July 9, 2025', excerpt: 'Everything you need to know to safely jump-start a vehicle without damaging its electronics.', imageUrl: '/images/blog-post-5.jpg', featured: false },
];

const categories = ['All', 'Maintenance', 'Diagnostics', 'Technology', 'Installation'];

const BlogPostCard = ({ post }: { post: typeof mockPosts[0] }) => (
    <a href={`/blog/${post.slug}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
            <Image 
                src={post.imageUrl}
                alt={`Thumbnail for blog post titled "${post.title}"`}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6">
            <p className="text-sm text-navy-700 font-semibold mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-navy-800 transition-colors">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <span className="font-semibold text-navy-800">Read More →</span>
        </div>
    </a>
);

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    
    useEffect(() => {
        document.title = 'Battery Guides & Expert Advice | Global Batteries Alberton';
    }, []);

    const featuredPost = mockPosts.find(p => p.featured);
    const regularPosts = mockPosts.filter(p => !p.featured && (activeCategory === 'All' || p.category === activeCategory));

    return (
        <div className="bg-gray-50">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="bg-navy-800 text-white py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Expert Advice & Battery Guides</h1>
                        <p className="text-lg text-navy-300 max-w-3xl mx-auto">Your trusted resource for battery maintenance, diagnostics, and technology from the specialists at Global Batteries Alberton.</p>
                    </div>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <a href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="overflow-hidden rounded-lg">
                                    <Image 
                                        src={featuredPost.imageUrl}
                                        alt={`Featured post: ${featuredPost.title}`}
                                        width={800}
                                        height={500}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-navy-700 font-semibold mb-2">Featured Article</p>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-navy-800 transition-colors">{featuredPost.title}</h2>
                                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                                    <span className="font-bold text-lg text-navy-800">Read More →</span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            
                {/* Posts Grid & Filters */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map(category => (
                                <button 
                                    key={category} 
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === category ? 'bg-navy-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map(post => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Newsletter CTA */}
                <div className="bg-navy-800 py-16">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h2 className="text-3xl font-bold mb-2">Stay Powered Up</h2>
                        <p className="mb-6">Get the latest battery tips and exclusive offers delivered to your inbox.</p>
                        <div className="flex justify-center">
                            <input type="email" placeholder="Enter your email" className="w-full max-w-sm px-4 py-3 rounded-l-md text-gray-800" />
                            <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-r-md hover:bg-gray-700">Subscribe</button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}