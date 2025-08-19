// FILE: src/app/layout.tsx (REPLACE ENTIRE FILE)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LiveChatWidget from '@/components/ui/LiveChatWidget';

// PERFORMANCE FIX: Set adjustFontFallback to true (boolean, not string)
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true, 
});

export const metadata: Metadata = {
  title: {
    default: 'Global Batteries Alberton | Your Trusted Battery Specialists',
    template: '%s | Global Batteries Alberton',
  },
  description: 'Your trusted battery specialists in Alberton for cars, trucks, and solar solutions. We offer free testing, fitment, and expert advice on top brands like Willard, Exide, and Novax.',
  metadataBase: new URL('https://www.globalbatteriesalberton.co.za'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white">
        <main>{children}</main>
        <LiveChatWidget />
      </body>
    </html>
  );
}