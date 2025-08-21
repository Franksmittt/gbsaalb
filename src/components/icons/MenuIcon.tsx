// FILE: src/components/icons/MenuIcon.tsx (CREATE NEW FILE)
import React from 'react';

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <rect x="5" y="13" width="22" height="6"/>
    <rect x="5" y="3" width="22" height="6"/>
    <rect x="5" y="23" width="22" height="6"/>
  </svg>
);