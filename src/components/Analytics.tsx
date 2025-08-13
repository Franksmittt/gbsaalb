// FILE: src/components/Analytics.tsx
"use client";

import React from 'react';
import Script from 'next/script';

const Analytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
  const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || '00000000';

  return (
    <>
      {/* Google Analytics 4 */}
      {/* OPTIMIZATION: Switched to lazyOnload to defer script execution until after the page is fully loaded and idle. */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      {/* Hotjar */}
      {/* OPTIMIZATION: Switched to lazyOnload to prevent blocking the main thread. */}
      <Script id="hotjar-analytics" strategy="lazyOnload">
        {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
};

export default Analytics;