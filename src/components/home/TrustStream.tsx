// FILE: src/components/home/TrustStream.tsx
import React from 'react';
import Icon from '@/components/ui/Icon';
import { testimonials } from '@/data/home';

const Star = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-80 md:w-96 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mx-4">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                    <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
            </div>
            <div className="flex">
                <Star /><Star /><Star /><Star /><Star />
            </div>
        </div>
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    </div>
);

export default function TrustStream() {
    // We duplicate the testimonials to create a seamless infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="py-20 bg-blueprint overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">The Current of Trust</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our customers are saying.
                    </p>
                </div>
            </div>

            {/* The Marquee */}
            <div className="relative w-full flex flex-col gap-8">
                {/* To create the infinite loop, we render the duplicated list twice inside the flex container */}
                <div className="flex items-center group">
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                        {duplicatedTestimonials.map((t, i) => <TestimonialCard key={`a-${i}`} testimonial={t} />)}
                    </div>
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {duplicatedTestimonials.map((t, i) => <TestimonialCard key={`b-${i}`} testimonial={t} />)}
                    </div>
                </div>

                {/* Second row, scrolling in the opposite direction */}
                <div className="flex items-center group">
                    <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
                        {duplicatedTestimonials.map((t, i) => <TestimonialCard key={`c-${i}`} testimonial={t} />)}
                    </div>
                    <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]" aria-hidden="true">
                        {duplicatedTestimonials.map((t, i) => <TestimonialCard key={`d-${i}`} testimonial={t} />)}
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <a 
                    href="http://googleusercontent.com/search?q=Global+Batteries+Alberton+reviews" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300 shadow-lg"
                >
                    Read More Reviews on Google
                </a>
            </div>
        </div>
    );
}