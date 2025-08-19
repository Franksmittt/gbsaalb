// FILE: src/components/home/ServiceHub.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const services = [
  {
    iconPath: "M17.6,15.2l-2.2-2.2a1,1,0,0,0-1.4,0L13,14a1,1,0,0,1-1.4,0L7,9.4a1,1,0,0,1,0-1.4l1-1a1,1,0,0,0,0-1.4L5.8,3.4a1,1,0,0,0-1.4,0L2.7,5.1A1,1,0,0,0,2.6,6,12.6,12.6,0,0,0,18,21.4a1,1,0,0,0,.9-.1l1.7-1.7a1,1,0,0,0,0-1.4Z",
    title: "Emergency Call-Out",
    description: "In the Alberton area? We can come to you for a jump-start to get you to our store safely.",
    ctaText: "Call Us Now",
    href: "tel:0118692427"
  },
  {
    iconPath: "M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H7v2a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V18h2a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z",
    title: "Visit Our Workshop",
    description: "Come to our fully-equipped Alberton branch for a free, no-obligation battery and alternator test.",
    ctaText: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=Global+Batteries+Alberton"
  },
  {
    iconPath: "M21.9,12.6,19,15.5l-3.3-3.3a1,1,0,0,0-1.4,0L13,13.5,10.7,11.2a1,1,0,0,0-1.4,0L4.5,16,2.1,13.6a1,1,0,0,0-1.4,1.4l3,3a1,1,0,0,0,1.4,0l5.4-5.4,2.3,2.3a1,1,0,0,0,1.4,0L19,12.5l2.9,2.9a1,1,0,0,0,1.4-1.4Z",
    title: "Expert Terminal Repair",
    description: "We specialize in repairing and rebuilding melted or damaged lead battery terminals.",
    // SEO FIX: Changed "Learn More" to be more descriptive
    ctaText: "Learn About Terminal Repair",
    href: "/services/battery-terminal-repair"
  }
];

const ServiceHub = () => {
  return (
    <div className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Don't Get Stranded.</h2>
          <p className="mt-4 text-lg text-gray-300">
            A flat battery is more than an inconvenience. Our Alberton team is ready to help with expert services to get you back on the road, fast.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-navy-900 p-8 rounded-xl border border-blue-900/50 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-navy-800 text-blue-400">
                  <Icon path={service.iconPath} className="w-8 h-8" />
                </div>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
              </div>
              <div className="mt-6 w-full">
                <Link href={service.href} className="inline-block w-full text-center bg-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors">
                  {service.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHub;