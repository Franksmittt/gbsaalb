// FILE: src/components/ExpertAdvicePreview.tsx (New file)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
    { title: "How to Extend Your Car Battery's Life", excerpt: 'Simple tips to get the most out of your battery and avoid unexpected failures.', imageUrl: '/images/advice-battery-care.jpg', href: '#' },
    { title: "5 Signs Your Battery is About to Die", excerpt: 'Learn to recognize the warning signs before you get stranded.', imageUrl: '/images/advice-warning-signs.jpg', href: '#' },
    { title: "AGM vs. Lead-Acid: Which is Right for You?", excerpt: 'A breakdown of the technology to help you make an informed decision.', imageUrl: '/images/advice-agm-vs-lead.jpg', href: '#' },
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
    <Link href={article.href} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
            <Image 
                src={article.imageUrl}
                alt={`Thumbnail for blog post: ${article.title}`}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-navy-800">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
            <span className="font-semibold text-navy-800">Read More &rarr;</span>
        </div>
    </Link>
);

const ExpertAdvicePreview = () => (
    <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">From Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.title} article={article} />
                ))}
            </div>
        </div>
    </div>
);

export default ExpertAdvicePreview;