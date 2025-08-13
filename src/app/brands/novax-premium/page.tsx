// FILE: src/app/brands/novax-premium/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import NovaxPremiumClientPage from '@/components/brands/NovaxPremiumClientPage';

// SEO FIX: Metadata is now in a Server Component, which is allowed.
export const metadata: Metadata = {
  title: 'Novax Premium Batteries | Global Batteries Alberton',
  description: 'Shop the full range of Novax Premium batteries. Get superior performance and a 26-month warranty. Your trusted battery specialists in Alberton.',
};

export default function NovaxPremiumPage() {
  return <NovaxPremiumClientPage />;
}
