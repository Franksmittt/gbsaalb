// FILE: src/components/home/Testimonials.tsx (CREATE NEW FILE)
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';
import Icon from '@/components/ui/Icon';

// Mock data for testimonials. Later, this can come from a CMS.
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jaco V.',
    location: 'Alberton',
    quote: "The free battery test was so quick and professional. They identified the problem with my alternator, not just the battery. Saved me a huge headache. The go-to guys in Alberton!",
    avatarUrl: '/images/avatars/avatar-1.jpg', // Placeholder - add images to public/images/avatars/
    branch: 'Alberton'
  },
  {
    id: 2,
    name: 'Brenda M.',
    location: 'Vanderbijlpark',
    quote: "Excellent service from the team in Vanderbijlpark. They had the exact Willard battery for my Fortuner in stock and fitted it in 15 minutes. Highly recommended.",
    avatarUrl: '/images/avatars/avatar-2.jpg', // Placeholder
    branch: 'Vanderbijlpark'
  },
  {
    id: 3,
    name: 'Sipho K.',
    location: 'Sasolburg',
    quote: "My gate motor battery died during load shedding. The Sasolburg branch sorted me out with a reliable solution at a great price. Thank you!",
    avatarUrl: '/images/avatars/avatar-3.jpg', // Placeholder
    branch: 'Sasolburg'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Hear From Our Customers</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're proud to serve our communities across Gauteng. Here's what people are saying about us.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-gray-800">4.9</span>
            <div className="flex text-yellow-400">
              <Icon path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-6 h-6" />
              <Icon path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-6 h-6" />
              <Icon path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-6 h-6" />
              <Icon path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-6 h-6" />
              <Icon path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-6 h-6" />
            </div>
            <span className="ml-2 text-gray-500">(Based on 200+ Google Reviews)</span>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Avatar of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="rounded-full bg-gray-200"
                />
                <div>
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.branch} Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;