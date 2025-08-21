// FILE: src/components/icons/SearchIcon.tsx (CREATE NEW FILE)
import React from 'react';

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <circle cx="12.5" cy="12.5" r="10.5"/>
    <line x1="30" y1="30" x2="20" y2="20"/>
  </svg>
);