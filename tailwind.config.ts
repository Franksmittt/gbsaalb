// FILE: tailwind.config.ts (REPLACE ENTIRE FILE)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          '900': '#0F172A', // A darker navy for backgrounds
          '800': '#1E3A8A', // Primary Navy Blue
          '700': '#1D4ED8', // Secondary Navy Blue
          '400': '#60A5FA', // Lighter accent
        },
        'brand': {
          'yellow': '#FFD300', // Primary Accent Yellow
        },
        // Semantic color names for universal styling
        primary: '#1E3A8A', // navy-800
        secondary: '#1D4ED8', // navy-700
        accent: '#FFD300', // brand-yellow
        'neutral-black': '#000000',
        'neutral-white': '#FFFFFF',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(96, 165, 250, 0.7)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite', // Slower spin for hero buttons
        'marquee': 'marquee 50s linear infinite',
        'marquee-reverse': 'marquee-reverse 50s linear infinite',
        'background-pan': 'background-pan 15s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;