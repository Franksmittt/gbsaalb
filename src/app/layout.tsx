import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata = {
  title: 'Global Batteries Alberton',
  description: 'Your trusted battery specialists in Alberton for cars, trucks, and solar solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <link rel="preconnect" href="https://your-sanity-project-id.api.sanity.io" />
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script
          src="https://static.hotjar.com/c/hotjar-0.js?sv=6"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}