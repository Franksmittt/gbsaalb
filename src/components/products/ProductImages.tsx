// FILE: src/components/products/ProductImages.tsx
"use client";

import Image from 'next/image';

interface ImageProps {
  url: string;
  altText: string;
}

export default function ProductImages({ images }: { images: ImageProps[] }) {
  // For now, we'll just display the first image. 
  // This can be expanded into a gallery later.
  const primaryImage = images[0] || { url: '/images/placeholder.jpg', altText: 'Product image placeholder' };

  return (
    <div className="w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={primaryImage.url}
          alt={primaryImage.altText}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {/* Thumbnail gallery can be added here in the future */}
    </div>
  );
}