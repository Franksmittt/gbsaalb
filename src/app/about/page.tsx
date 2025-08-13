// FILE: src/app/about/page.tsx
"use client";

import React, { useEffect } from 'react'; // FIX: Imported useEffect
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
// FIX: Removed unused Metadata import

const TeamMemberCard = ({ name, role, imgSrc }: { name: string, role: string, imgSrc: string }) => (
    <div className="text-center">
        <Image 
            src={imgSrc}
            alt={`Headshot of ${name}, ${role}`}
            width={400}
            height={400}
            className="rounded-full w-48 h-48 mx-auto mb-4 object-cover shadow-lg"
        />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-navy-700">{role}</p>
    </div>
);

const ValueCard = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Icon path={iconPath} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


export default function AboutPage() {
    
    // SEO: Set page title on the client side for this mockup
    useEffect(() => {
        document.title = 'About Us | Global Batteries Alberton';
    }, []);

    return (
        <div className="bg-gray-50">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative h-80">
                    <Image 
                        src="/images/about-hero.jpg"
                        alt="The Global Batteries Alberton storefront"
                        fill
                        style={{objectFit:"cover"}}
                        className="opacity-40"
                    />
                    <div className="absolute inset-0 bg-navy-800 bg-opacity-60 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-extrabold">About Us</h1>
                            <p className="text-xl mt-2">Your Trusted Battery Specialists Since Day One</p>
                        </div>
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Global Batteries Alberton isn&apos;t just a store; it&apos;s the heart of our operations and our longest-standing commitment to the community. Founded on the simple principle of providing the right battery, with the right advice, at the right price, our Alberton branch quickly became the go-to hub for battery expertise in Gauteng. From here, we not only serve our local customers but also manage our entire e-commerce operation, dispatching reliable power across South Africa every single day.
                        </p>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">What Drives Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ValueCard 
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                title="Uncompromising Quality"
                                description="We stock only the most reliable battery brands, ensuring every product we sell meets our high standards for performance and longevity."
                            />
                            <ValueCard 
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                                title="Expert Technical Service"
                                description="Our technicians are battery specialists. From free testing and fitment to complex BMW coding, we provide service you can trust."
                            />
                            <ValueCard 
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                                title="Customer-First Approach"
                                description="Your needs are our priority. We're here to offer honest advice and practical solutions to keep you powered up and on the road."
                            />
                        </div>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Meet the Experts</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <TeamMemberCard name="John Doe" role="Founder & Lead Technician" imgSrc="/images/team-member-1.jpg" />
                            <TeamMemberCard name="Jane Smith" role="Store Manager" imgSrc="/images/team-member-2.jpg" />
                            <TeamMemberCard name="Sipho Williams" role="Battery Specialist" imgSrc="/images/team-member-3.jpg" />
                        </div>
                    </div>
                </div>

                {/* Our Branches Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Visit Our Branches</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-navy-800">Alberton (Main)</h3>
                                <p className="mt-2 text-gray-600">Call: 011 869 2427</p>
                                <p className="text-gray-600">WhatsApp: 079 320 3014</p>
                            </div>
                             <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-navy-800">Vanderbijlpark</h3>
                                <p className="mt-2 text-gray-600">Call: 016 023 0161</p>
                                <p className="text-gray-600">WhatsApp: 071 139 4043</p>
                            </div>
                             <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-navy-800">Sasolburg</h3>
                                <p className="mt-2 text-gray-600">Call: 016 976 2076</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
