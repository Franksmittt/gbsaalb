// FILE: src/app/contact/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/Icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// --- HELPER FUNCTION FOR DYNAMIC OPENING HOURS ---
const getBranchStatus = () => {
    // SAST is UTC+2
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Johannesburg" }));
    const day = now.getDay(); // Sunday = 0, Saturday = 6
    const hour = now.getHours();

    const isWeekday = day >= 1 && day <= 5;
    const isSaturday = day === 6;

    let status = { text: "Closed", color: "text-red-500" };

    if (isWeekday && hour >= 8 && hour < 17) {
        status = { text: "Open Now - Closes at 5:00 PM", color: "text-green-600" };
    } else if (isSaturday && hour >= 8 && hour < 13) {
        status = { text: "Open Now - Closes at 1:00 PM", color: "text-green-600" };
    } else {
        if (isWeekday && hour < 8) status.text = "Closed - Opens at 8:00 AM";
        if (isSaturday && hour < 8) status.text = "Closed - Opens at 8:00 AM";
        if (day === 0 || (isSaturday && hour >= 13)) status.text = "Closed - Opens Monday at 8:00 AM";
    }
    return status;
};


const ContactInfoCard = ({ branch, phone, whatsapp, address, status }: { branch: string, phone: string, whatsapp?: string, address: string, status: { text: string, color: string } }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
        <h3 className="text-2xl font-bold text-navy-800 mb-2">{branch}</h3>
        <p className={`font-semibold mb-4 ${status.color}`}>{status.text}</p>
        <address className="not-italic text-gray-600 space-y-4 flex-grow">
            <p className="flex items-start">
                <Icon path="M6.62,10.79a15.25,15.25,0,0,0,6.59,6.59l2.2-2.2a1,1,0,0,1,1-.24,11.36,11.36,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.24,1Z" className="w-5 h-5 mr-3 mt-1 text-navy-700 flex-shrink-0" />
                <span><strong>Call:</strong> <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">{phone}</a></span>
            </p>
            {whatsapp && (
                <p className="flex items-start">
                    <Icon path="M12.04,2C6.58,2,2.13,6.45,2.13,12a9.74,9.74,0,0,0,1.88,5.55,1,1,0,0,0,.8.4h.1a1,1,0,0,0,.75-.31,1,1,0,0,0,.15-1.09,7.54,7.54,0,0,1-.13-1.5,7.68,7.68,0,0,1,6.54-7.53A7.73,7.73,0,0,1,20,11.75a7.54,7.54,0,0,1-1.28,4.24,1,1,0,0,0,.15,1.09,1,1,0,0,0,.75.31h.1a1,1,0,0,0,.8-.4A9.74,9.74,0,0,0,22,12C21.95,6.45,17.5,2,12.04,2Z" className="w-5 h-5 mr-3 mt-1 text-navy-700 flex-shrink-0" />
                    <span><strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsapp.replace(/\s/g, '')}`} className="hover:underline">{whatsapp}</a></span>
                </p>
            )}
            <p className="flex items-start">
                <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11.5A3.5,3.5,0,1,1,15.5,10,3.5,3.5,0,0,1,12,13.5Z" className="w-5 h-5 mr-3 mt-1 text-navy-700 flex-shrink-0" />
                <span>{address}</span>
            </p>
        </address>
    </div>
);

const QuickHelpCard = ({ title, description, buttonText, href, iconPath }: { title: string, description: string, buttonText: string, href: string, iconPath: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
        <Icon path={iconPath} className="w-12 h-12 text-navy-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a href={href} className="mt-auto bg-navy-800 text-white font-bold py-2 px-6 rounded-md hover:bg-navy-700 transition duration-300">
            {buttonText}
        </a>
    </div>
);

export default function ContactPage() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const [branchStatus, setBranchStatus] = useState({ text: "Loading...", color: "text-gray-500" });

    useEffect(() => {
        document.title = 'Contact Us | Global Batteries Alberton';
        setBranchStatus(getBranchStatus());
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('Thank you for your message!');
        setFormState({ name: '', email: '', message: '' });
    };
    
    return (
        <div className="bg-gray-50">
            <Header />
            <main>
                {/* Hero Section */}
                <div className="relative h-80">
                    <Image 
                        src="/images/contact-hero.jpg"
                        alt="The interior of the Global Batteries Alberton store"
                        fill
                        style={{objectFit:"cover"}}
                        className="opacity-30"
                    />
                    <div className="absolute inset-0 bg-navy-800 bg-opacity-70 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                            <h1 className="text-5xl font-extrabold">Get In Touch</h1>
                            <p className="text-xl mt-2 max-w-2xl mx-auto">We&apos;re here to help with expert advice, battery testing, and all your power needs.</p>
                        </div>
                    </div>
                </div>

                {/* NEW: Quick Help Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">How Can We Help You Today?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <QuickHelpCard 
                                title="Find My Battery"
                                description="Use our interactive tool to find the exact battery for your vehicle's make, model, and year."
                                buttonText="Go to Finder"
                                href="/#vehicle-finder" // Link to the finder on the homepage
                                iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                            />
                            <QuickHelpCard 
                                title="Book a Free Test"
                                description="Is your battery feeling weak? Schedule a free, no-obligation battery and alternator test at our Alberton branch."
                                buttonText="Call to Book"
                                href="tel:0118692427"
                                iconPath="M9,22A1,1,0,0,1,8,21V18H4A2,2,0,0,1,2,16V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6V16A2,2,0,0,1,20,18H16V21A1,1,0,0,1,15,22H9ZM4,6V16H20V6Z"
                            />
                            <QuickHelpCard 
                                title="Check Warranty"
                                description="Have a question about your warranty? Contact our support team directly for a quick answer."
                                buttonText="Ask on WhatsApp"
                                href="https://wa.me/27793203014"
                                iconPath="M12,12A6,6,0,1,0,6,6,6,6,0,0,0,12,12ZM12,2A10,10,0,0,0,5.12,4.4A1,1,0,0,0,6,6.18,8,8,0,1,1,12,18a1,1,0,0,0,0,2,10,10,0,0,0,0-20Z"
                            />
                        </div>
                    </div>
                </div>

                {/* Branch Info Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Branches</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <ContactInfoCard 
                                branch="Alberton (Main)"
                                phone="011 869 2427"
                                whatsapp="079 320 3014"
                                address="New Redruth, Alberton, Gauteng, South Africa"
                                status={branchStatus}
                            />
                             <ContactInfoCard 
                                branch="Vanderbijlpark"
                                phone="016 023 0161"
                                whatsapp="071 139 4043"
                                address="Vanderbijlpark, Gauteng, South Africa"
                                status={branchStatus} // This would need unique logic per branch in a real app
                            />
                             <ContactInfoCard 
                                branch="Sasolburg"
                                phone="016 976 2076"
                                address="Sasolburg, Free State, South Africa"
                                status={branchStatus} // This would need unique logic per branch in a real app
                            />
                        </div>
                    </div>
                </div>

                {/* Map and Form Section */}
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Find Our Main Branch</h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                                {/* ESLINT FIX: Replaced " with &quot; to fix parsing error */}
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.303964251104!2d28.12201307541813!3d-26.28435197702754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f2412555555%3A0x833a4d3f64245e2b!2sGlobal%20Batteries%20Alberton!5e0!3m2!1sen!2sza!4v1691490000000!5m2!1sen!2sza" 
                                    width="100%" 
                                    height="450" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location of Global Batteries Alberton"
                                ></iframe>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" value={formState.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-800"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-navy-800 text-white font-bold py-3 px-6 rounded-md hover:bg-navy-700 transition duration-300">
                                    Send Message
                                </button>
                                {formStatus && <p className="text-center text-green-600 font-semibold">{formStatus}</p>}
                            </form>
                        </div>
                    </div>
                </div>

                {/* NEW: SEO FAQ Section */}
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-8">Your Questions, Answered</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">Where can I buy car batteries in Alberton?</h3>
                                <p className="text-gray-600 mt-1">Global Batteries Alberton is your premier destination for car batteries in Alberton, Gauteng. Our main branch is conveniently located in New Redruth, offering a wide selection of brands and free fitment services.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">Do you offer free battery installation near me?</h3>
                                <p className="text-gray-600 mt-1">Yes! We offer free, professional battery fitment and testing at all our branches, including Alberton, Vanderbijlpark, and Sasolburg. Stop by anytime for a complimentary check-up.</p>
                            </div>
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg">How do I know which battery my car needs?</h3>
                                <p className="text-gray-600 mt-1">The easiest way is to use our &quot;Find My Battery&quot; tool on our homepage. Alternatively, you can call or WhatsApp our Alberton branch at 079 320 3014, and our experts will help you find the perfect match for your vehicle.</p>
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
