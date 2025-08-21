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
          '950': '#0A192F',
          '900': '#0F172A', 
          '850': '#172A46',
          '800': '#1E3A8A', 
          '700': '#1D4ED8', 
          '400': '#60A5FA', 
        },
        'brand': {
          // UPDATED: A darker, more accessible blue for primary actions. Contrast ratio of 6.53:1 with white text.
          'blue': '#1D4ED8', 
          // UPDATED: A slightly darker shade for the hover state.
          'blue-hover': '#1E40AF',
          'accent': '#FFD300', 
        },
        // Legacy colors kept for compatibility
        primary: '#1E3A8A', 
        secondary: '#1D4ED8', 
        accent: '#FFD300', 
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
        'spin-slow': 'spin-slow 8s linear infinite',
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