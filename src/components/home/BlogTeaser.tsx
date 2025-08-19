// FILE: src/components/home/BlogTeaser.tsx (CREATE NEW FILE)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types'; // We'll use the BlogPost type we defined earlier

// Mock data for 3 blog posts. Later, this will come from your Sanity CMS.
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Truth About Stop-Start Batteries (AGM vs EFB)",
    date: "August 12, 2025",
    excerpt: "Modern vehicles demand modern power. We break down the difference between AGM and EFB batteries...",
    imageUrl: "/images/blog/start-stop-battery.jpg",
    href: "/blog/agm-vs-efb-batteries"
  },
  {
    id: '2',
    title: "5 Warning Signs Your Car Battery is About to Fail",
    date: "August 05, 2025",
    excerpt: "Don't get caught stranded. Learn the subtle signs your battery is giving you before it's too late.",
    imageUrl: "/images/blog/warning-signs.jpg",
    href: "/blog/5-warning-signs"
  },
  {
    id: '3',
    title: "DIY Guide: How to Safely Clean Corroded Battery Terminals",
    date: "July 28, 2025",
    excerpt: "A little maintenance goes a long way. Our step-by-step guide to cleaning your terminals for a better connection.",
    imageUrl: "/images/blog/clean-terminals.jpg",
    href: "/blog/how-to-clean-terminals"
  }
];

const BlogTeaser = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">From the Workshop: Expert Advice</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tap into our years of experience with battery tips, maintenance guides, and the latest in power technology.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <Link key={post.id} href={post.href} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={post.imageUrl}
                  alt={`Blog post image for ${post.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
                <div className="mt-4 font-bold text-blue-600 group-hover:text-blue-500">
                  Read More &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTeaser;