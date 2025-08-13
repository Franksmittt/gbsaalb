// FILE: src/components/TestimonialsSection.tsx
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        {/* ACCESSIBILITY FIX: Improved contrast for quote text */}
        <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
        <div className="flex items-center">
            <Image src={testimonial.avatarUrl} alt={`Avatar of ${testimonial.name}, a satisfied customer.`} width={48} height={48} loading="lazy" className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = ({ testimonials }: { testimonials: Testimonial[] }) => (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
      </div>
    </div>
);

export default TestimonialsSection;