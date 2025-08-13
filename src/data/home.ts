// FILE: src/data/home.ts
import { Brand, Testimonial } from '@/types';

export const brands: Brand[] = [
    { id: 1, name: 'Willard', warranty: '25-month warranty', imageUrl: '/images/brands/willard-logo.png' },
    { id: 2, name: 'Exide', warranty: '24-month warranty', imageUrl: '/images/brands/exide-logo.png' },
    { id: 3, name: 'Enertec', warranty: '18-month warranty', imageUrl: '/images/brands/enertec-logo.png' },
    { id: 4, name: 'Novax', warranty: '18-month warranty', imageUrl: '/images/brands/novax-logo.png' },
    { id: 5, name: 'Varta', warranty: '24-month warranty', imageUrl: '/images/brands/varta-logo.png' },
    { id: 6, name: 'Optima', warranty: '24-month warranty', imageUrl: '/images/brands/optima-logo.png' },
];

export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John D.',
      location: 'Alberton',
      quote: 'Exceptional service and the right battery for my bakkie every time. The free fitment is a huge plus!',
      avatarUrl: '/images/testimonials/avatar1.jpg',
      branch: 'Alberton'
    },
    {
      id: 2,
      name: 'Sarah P.',
      location: 'Meyerton',
      quote: "My car's start-stop system needed a specific AGM battery. The team knew exactly what I needed and had it in stock. Highly recommended!",
      avatarUrl: '/images/testimonials/avatar2.jpg',
      branch: 'Alberton'
    },
    {
      id: 3,
      name: 'Mike V.',
      location: 'Brackenhurst',
      quote: 'Fast, friendly, and efficient. They tested my old battery, confirmed it was failing, and replaced it in under 15 minutes. Great experience.',
      avatarUrl: '/images/testimonials/avatar3.jpg',
      branch: 'Alberton'
    }
];