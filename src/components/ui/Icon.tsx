// FILE: src/components/ui/Icon.tsx
import React from 'react';

const Icon = ({ path, className = "w-6 h-6" }: { path: string; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d={path} />
  </svg>
);

export default Icon;