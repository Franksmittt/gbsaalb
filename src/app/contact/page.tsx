// FILE: src/app/contact/page.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClockIcon } from '@/components/icons/ClockIcon';
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon';
import { PhoneHandsetIcon } from '@/components/icons/PhoneHandsetIcon';
import { LocationPinIcon } from '@/components/icons/LocationPinIcon';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Global Batteries Alberton. Find our address, phone number, and opening hours. We are here to help with all your battery needs.',
};

const contactDetails = [
  {
    icon: LocationPinIcon,
    title: 'Our Address',
    content: '6 Voortrekker Street, New Redruth, Alberton, 1449',
    href: 'https://www.google.com/maps/search/?api=1&query=-26.2669,28.1245',
  },
  {
    icon: PhoneHandsetIcon,
    title: 'Call Us',
    content: 'Alberton: 011 869 2427',
    href: 'tel:0118692427',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    content: 'info@globalbatteriesalberton.co.za',
    href: 'mailto:info@globalbatteriesalberton.co.za',
  },
  {
    icon: ClockIcon,
    title: 'Opening Hours',
    content: 'Mon - Fri: 7:30 - 17:30 | Sat & PH: 8:00 - 13:00',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-navy-950 text-white">
        <section className="relative w-full py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              We're here to help with all your battery needs. Reach out to our expert team in Alberton today.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-900 rounded-lg shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                {contactDetails.map((item) => {
                  const IconComponent = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper 
                      key={item.title}
                      {...(item.href && { href: item.href, target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-start group"
                    >
                      <div className="flex-shrink-0 bg-navy-850 p-3 rounded-lg mr-5">
                        <IconComponent className="w-7 h-7 text-brand-blue group-hover:text-sky-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-slate-300 group-hover:text-white transition-colors">{item.content}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 bg-navy-850 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-navy-850 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-3 bg-navy-850 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:bg-brand-blue-hover hover:-translate-y-1 shadow-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}