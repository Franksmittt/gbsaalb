// FILE: src/components/brands/CustomerReviews.tsx
import React from 'react';
import Icon from '@/components/ui/Icon';

interface Review {
    quote: string;
    author: string;
    rating: number;
}

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 text-brand-yellow">
        {[...Array(5)].map((_, i) => (
            <Icon key={i} path="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" className={`w-5 h-5 ${i < rating ? 'text-brand-yellow' : 'text-gray-300'}`} />
        ))}
    </div>
);


export default function CustomerReviews({ brandName, reviews }: { brandName: string, reviews: Review[] }) {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">What Drivers Are Saying About {brandName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map(review => (
                        <div key={review.author} className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col">
                            <StarRating rating={review.rating} />
                            <p className="text-gray-700 my-4 flex-grow">"{review.quote}"</p>
                            <p className="font-semibold text-gray-800">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}