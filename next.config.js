// FILE: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This is the correct way to whitelist image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;