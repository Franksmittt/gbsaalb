// FILE: src/components/utils/LazyLoad.tsx (CREATE NEW FILE)
"use client";

import React, { useState, useRef, useEffect } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  placeholderHeight?: string;
}

const LazyLoad = ({ children, placeholderHeight = '550px' }: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when the placeholder is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible
          observer.disconnect();
        }
      },
      {
        // Start loading just before it enters the viewport
        rootMargin: '100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : placeholderHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;