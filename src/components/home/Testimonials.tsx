// FILE: src/components/home/Testimonials.tsx (REPLACE ENTIRE FILE)
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

interface NewTestimonial {
  id: number;
  name: string;
  role: string;
  avatarText: string;
  quote: string;
  rating: number;
}

const newMockTestimonials: NewTestimonial[] = [
    { id: 1, name: 'Thabo M.', role: 'BMW X5 Owner, Meyersdal', avatarText: 'TM', rating: 5, quote: "My X5's battery died and I was worried about the complex coding. Global Alberton had the right AGM battery and coded it for free. Exceptional service." },
    { id: 2, name: 'Annelize V.', role: 'Ford Ranger Driver, Brackenhurst', avatarText: 'AV', rating: 5, quote: "Stuck at home before a big meeting. Their call-out service jump-started me in 20 minutes, and I was at their shop for a new Willard 652 straight after. Lifesavers!" },
    { id: 3, name: 'Ben P.', role: 'Small Business Owner, Alrode', avatarText: 'BP', rating: 5, quote: "I rely on them for everything from my bakkie to the gate motor batteries for my workshop. Their free testing saves me money and their advice is always spot-on." },
    { id: 4, name: 'David N.', role: 'Logistics Manager, Alrode South', avatarText: 'DN', rating: 5, quote: "Our fleet of trucks runs on batteries from Global. The durability is excellent and their bulk pricing is fair. They understand the demands of commercial vehicles." },
    { id: 5, name: 'Susan R.', role: 'Homeowner, Randhart', avatarText: 'SR', rating: 5, quote: "Got a new generator battery just before the last big storm. The peace of mind is priceless. The staff were knowledgeable and helped me choose the right one." },
    { id: 6, name: 'Johan C.', role: 'Classic Car Enthusiast, New Redruth', avatarText: 'JC', rating: 5, quote: "The lead terminal on my '72 Capri's battery was a mess. They rebuilt it perfectly. It's rare to find that kind of old-school skill these days. True craftsmen." },
    { id: 7, name: 'Mike K.', role: 'Motorcyclist, Brackendowns', avatarText: 'MK', rating: 5, quote: "Needed a new Enertec battery for my bike before a weekend trip. They had the exact model, fitted it while I waited, and I was on the road in 15 minutes." },
    { id: 8, name: 'Lerato F.', role: 'Student, Verwoerdpark', avatarText: 'LF', rating: 5, quote: "My car was struggling to start. They tested the alternator and battery for free, showed me the results, and explained my options clearly. Got a great deal on a Novax." },
    { id: 9, name: 'Gary S.', role: 'Security Co. Owner, Raceview', avatarText: 'GS', rating: 5, quote: "We buy all our gate and alarm batteries from Global Alberton. Reliability is non-negotiable in our business, and their products have never let us down." },
    { id: 10, name: 'Nisha P.', role: 'Online Shopper, Bedfordview', avatarText: 'NP', rating: 5, quote: "Ordered a specific battery on their Shopify store. The process was simple, and it was dispatched from the Alberton branch the same day. Great e-commerce experience." },
];

const TestimonialCard = ({ testimonial }: { testimonial: NewTestimonial }) => (
    <div className="bg-navy-850 p-8 rounded-lg border border-slate-700/50 shadow-lg w-96 flex-shrink-0 flex flex-col">
        <div className="flex items-center mb-5">
            <Image 
                src={`https://placehold.co/56x56/FFFFFF/0A192F?text=${testimonial.avatarText}`} 
                alt={`Avatar for ${testimonial.name}`} 
                width={56}
                height={56}
                className="w-14 h-14 rounded-full mr-4 border-2 border-sky-400"
            />
            <div>
                <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
        </div>
        <div className="flex items-center mb-4 text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Icon key={i} path="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" className="w-5 h-5" />
            ))}
        </div>
        <p className="text-slate-300 leading-relaxed flex-grow">
            "{testimonial.quote}"
        </p>
    </div>
);

const Testimonials = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scroller.setAttribute("data-animated", "true");
            
            const scrollerInner = scroller.querySelector(".scroller__inner");
            if (scrollerInner && scrollerInner.children.length === newMockTestimonials.length) {
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            }
        }
    }, []);

    return (
        <section className="w-full mx-auto py-16 md:py-24 bg-navy-950">
            <div className="text-center mb-16 max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Trusted Car Battery Specialists in Alberton
                </h2>
                <p className="text-slate-400 mt-4 text-lg max-w-3xl mx-auto">
                    Hear directly from drivers about our fast <strong>car battery replacement</strong>, <strong>free battery testing</strong>, and expert service on leading brands like <strong>Willard</strong> and <strong>Novax</strong>.
                </p>
            </div>
            <div className="scroller" ref={scrollerRef}>
                <div className="scroller__inner">
                    {newMockTestimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;