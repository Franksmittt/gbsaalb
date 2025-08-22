// FILE: src/components/icons/CartIcon.tsx
import React from 'react';
export const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
    <polyline points="2 5 6 5 8 21 26 21 30 8 7 8"/>
    <path d="M26,25H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H26"/>
    <circle cx="24" cy="26" r="1"/>
    <circle cx="12" cy="26" r="1"/>
  </svg>
);