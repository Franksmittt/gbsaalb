// FILE: src/app/shop/[productId]/page.tsx (REPLACE ENTIRE FILE)

import { getProductByHandle, getAllProducts } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/types';
import type { Metadata } from 'next';

// UPDATED: More explicit typing for the generateMetadata function's props
export async function generateMetadata(
  { params }: { params: { productId: string } }
): Promise<Metadata> {
  const product = await getProductByHandle(params.productId);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Global Batteries Alberton`,
    description: product.description.substring(0, 155),
    openGraph: {
      images: [product.imageUrl],
    },
  };
}

// UPDATED: Added an explicit return type for clarity and type safety
export async function generateStaticParams(): Promise<{ productId: string }[]> {
  const products = await getAllProducts();
  
  if (!products || products.length === 0) {
    return [];
  }

  return products.map((product: Product) => ({
    productId: product.id,
  }));
}

// UPDATED: Simplified the props type to be more direct
export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getProductByHandle(params.productId);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-navy-950 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Column */}
            <div>
              <div className="relative w-full h-96 bg-white rounded-lg overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>
            </div>

            {/* Details Column */}
            <div>
              <p className="font-semibold text-sky-400 mb-2">{product.brand}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-brand-accent mb-6">R{product.price.toFixed(2)}</p>
              <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>
              <button className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:bg-brand-blue-hover hover:-translate-y-1 shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}