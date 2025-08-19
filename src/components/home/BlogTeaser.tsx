// FILE: src/components/home/BlogTeaser.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

// Updated mock data to include a category for the tag
const mockPosts: (BlogPost & { category: string })[] = [
  {
    id: '1',
    title: "The Truth About Stop-Start Batteries (AGM vs EFB)",
    date: "August 12, 2025",
    excerpt: "Modern vehicles demand modern power. We break down the difference between AGM and EFB batteries...",
    imageUrl: "/images/blog/start-stop-battery.jpg",
    href: "/blog/agm-vs-efb-batteries",
    category: "Tech Guide"
  },
  {
    id: '2',
    title: "5 Warning Signs Your Car Battery is About to Fail",
    date: "August 05, 2025",
    excerpt: "Don't get caught stranded. Learn the subtle signs your battery is giving you before it's too late.",
    imageUrl: "/images/blog/warning-signs.jpg",
    href: "/blog/5-warning-signs",
    category: "Maintenance"
  },
  {
    id: '3',
    title: "DIY Guide: How to Safely Clean Corroded Battery Terminals",
    date: "July 28, 2025",
    excerpt: "A little maintenance goes a long way. Our step-by-step guide to cleaning your terminals for a better connection.",
    imageUrl: "/images/blog/clean-terminals.jpg",
    href: "/blog/how-to-clean-terminals",
    category: "DIY Guide"
  }
];

export default function BlogTeaser() {
  return (
    <section className="w-full bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Car Battery Tips & Maintenance Guides</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-3xl mx-auto">Learn how to spot a failing <strong>car battery</strong>, understand <strong>AGM technology</strong>, and perform basic <strong>battery maintenance</strong> with our expert guides from Global Batteries Alberton.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
                <Link key={post.id} href={post.href} className="group blog-card rounded-lg border border-slate-700/50 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/50">
                    <div className="overflow-hidden">
                        <Image 
                            src={post.imageUrl} 
                            alt={`Blog post image for ${post.title}`}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-slate-400 text-sm">{post.date}</p>
                                <span className="bg-slate-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                            </div>
                            <h3 className="font-bold text-xl text-white mb-4">{post.title}</h3>
                            <p className="text-slate-400">{post.excerpt}</p>
                        </div>
                        <div className="text-white font-semibold mt-6 transition-colors group-hover:text-slate-300">
                            Read More <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};