// FILE: src/components/SiteLayout.tsx
"use client";

import dynamic from 'next/dynamic';
import Analytics from "@/components/Analytics";

// Dynamically import client-side only components here with ssr: false
const LiveChatWidget = dynamic(() => import('@/components/ui/LiveChatWidget'), {
  ssr: false,
});

export default function SiteLayout() {
  return (
    <>
      <LiveChatWidget />
      <Analytics />
    </>
  );
}