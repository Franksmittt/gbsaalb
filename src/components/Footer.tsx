// FILE: src/components/Footer.tsx (REPLACE ENTIRE FILE)
import React from 'react';
import Link from 'next/link';
import Icon from './ui/Icon';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Branches */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Branches</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Alberton (Main)</p>
                <a href="tel:0118692427" className="hover:text-white transition-colors inline-block py-1">Call: 011 869 2427</a><br/>
                <a href="https://wa.me/27793203014" className="hover:text-white transition-colors inline-block py-1">WhatsApp: 079 320 3014</a>
              </div>
              <div>
                <p className="font-semibold text-white">Vanderbijlpark</p>
                <a href="tel:0160230161" className="hover:text-white transition-colors inline-block py-1">Call: 016 023 0161</a><br/>
                <a href="https://wa.me/27711394043" className="hover:text-white transition-colors inline-block py-1">WhatsApp: 071 139 4043</a>
              </div>
              <div>
                <p className="font-semibold text-white">Sasolburg</p>
                <a href="tel:0169762076" className="hover:text-white transition-colors inline-block py-1">Call: 016 976 2076</a>
              </div>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/shop?type=Automotive" className="hover:text-white transition-colors inline-block py-1">Automotive Batteries</Link></li>
              <li><Link href="/shop?type=Stop-Start" className="hover:text-white transition-colors inline-block py-1">Stop-Start (AGM/EFB)</Link></li>
              <li><Link href="/shop?type=Truck" className="hover:text-white transition-colors inline-block py-1">Truck & Commercial</Link></li>
              <li><Link href="/shop?type=Motorcycle" className="hover:text-white transition-colors inline-block py-1">Motorcycle</Link></li>
              <li><Link href="/shop?type=Security" className="hover:text-white transition-colors inline-block py-1">Security & Gate</Link></li>
              <li><Link href="/shop?type=Solar" className="hover:text-white transition-colors inline-block py-1">Solar & Deep-Cycle</Link></li>
              <li><Link href="/shop?type=Accessories" className="hover:text-white transition-colors inline-block py-1">Accessories</Link></li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors inline-block py-1">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors inline-block py-1">Expert Advice</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors inline-block py-1">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors inline-block py-1">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors inline-block py-1">Refund Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors inline-block py-1">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Charged</h3>
            <p className="text-sm text-slate-300 mb-4">Get battery tips, news, and exclusive offers delivered to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-brand-blue text-white font-bold p-2 rounded-r-md hover:bg-brand-blue-hover transition-colors" aria-label="Subscribe to newsletter">
                <Icon path="M9.71,17.29a1,1,0,0,1,0-1.42L13.59,12,9.71,8.12a1,1,0,0,1,1.42-1.42l4.58,4.58a1,1,0,0,1,0,1.42l-4.58,4.58A1,1,0,0,1,9.71,17.29Z" className="w-6 h-6"/>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Global Batteries Alberton. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}