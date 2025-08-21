// FILE: src/components/home/BlogTeaser.tsx (REPLACE ENTIRE FILE)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { getAllPosts } from '@/lib/sanity';

export default async function BlogTeaser() {
  const posts: BlogPost[] = await getAllPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="w-full bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Car Battery Tips & Maintenance Guides</h2>
            <p className="text-slate-300 mt-4 text-lg max-w-3xl mx-auto">Learn how to spot a failing <strong>car battery</strong>, understand <strong>AGM technology</strong>, and perform basic <strong>battery maintenance</strong> with our expert guides from Global Batteries Alberton.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group blog-card rounded-lg border border-slate-700/50 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-950/50">
                    <div className="overflow-hidden relative h-48 w-full bg-slate-800">
                        {/* FIX: Check if mainImage exists before rendering */}
                        {post.mainImage && (
                            <Image 
                                src={post.mainImage} 
                                alt={`Blog post image for ${post.title}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-slate-300 text-sm">{formatDate(post.publishedAt)}</p>
                                {post.category && (
                                  <span className="bg-slate-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                                )}
                            </div>
                            <h3 className="font-bold text-xl text-white mb-4">{post.title}</h3>
                            <p className="text-slate-300">{post.excerpt}</p>
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