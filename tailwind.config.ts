// FILE: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // This content array is CRITICAL. It tells Tailwind where to look for styles.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          '800': '#1E3A8A',
          '700': '#1D4ED8',
          '400': '#60A5FA'
        },
        'brand': {
          'yellow': '#FFD300'
        }
      },
      animation: {
        'marquee': 'marquee 50s linear infinite',
      },
      // ... your other keyframes and animations
    },
  },
  plugins: [],
};
export default config;