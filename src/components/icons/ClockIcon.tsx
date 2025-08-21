// FILE: src/components/icons/ClockIcon.tsx (CREATE NEW FILE)
import React from 'react';

export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx="15.5" cy="17.5" r="12.5"/>
    <polyline points="15 9 15 18 19 14"/>
    <line x1="14" y1="2" x2="18" y2="2"/>
    <line x1="25" y1="4" x2="28" y2="7"/>
  </svg>
);