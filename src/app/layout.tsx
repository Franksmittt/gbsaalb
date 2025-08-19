// FILE: src/app/layout.tsx (REPLACE ENTIRE FILE)
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import LiveChatWidget from '@/components/ui/LiveChatWidget';

// Restored the original Figtree font
const figtree = Figtree({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree', 
});

// Kept the updated metadata for local targeting
export const metadata: Metadata = {
  title: {
    default: 'Global Batteries Alberton | Car, Truck, Solar & Motorcycle Batteries',
    template: '%s | Global Batteries Alberton',
  },
  description: 'Your trusted battery store in Alberton, South Africa. Shop top brands like Willard, Exide & Novax for car batteries, solar solutions, and more. Free battery testing & fitment available.',
  metadataBase: new URL('https://www.globalbatteriesalberton.co.za'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://cdn.shopify.com" />
        {/* SCHEMA MARKUP: Added for Local Business SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "Global Batteries Alberton",
              "image": "https://www.globalbatteriesalberton.co.za/images/logo-placeholder.png",
              "@id": "https://www.globalbatteriesalberton.co.za",
              "url": "https://www.globalbatteriesalberton.co.za",
              "telephone": "+27118692427",
              "priceRange": "R - RRRR",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 Voortrekker Street, New Redruth",
                "addressLocality": "Alberton",
                "postalCode": "1449",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -26.2669,
                "longitude": 28.1245
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/GlobalBatteriesAlberton/"
              ] 
            }
          `}
        </script>
      </head>
      <body>
        <main>{children}</main>
        <LiveChatWidget />
      </body>
    </html>
  );
}