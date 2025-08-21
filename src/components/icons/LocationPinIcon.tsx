// FILE: src/components/icons/LocationPinIcon.tsx (CREATE NEW FILE)
import React from 'react';

export const LocationPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M25,11c0,5-9,19-9,19S7,16,7,11a9,9,0,0,1,18,0Z"/>
    <circle cx="16" cy="10" r="3"/>
  </svg>
);