// FILE: src/app/products/[productId]/page.tsx
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductByHandle, getAllProducts } from '@/lib/shopify';
import ProductImages from '@/components/products/ProductImages';
import ProductDetails from '@/components/products/ProductDetails';
import RelatedProducts from '@/components/products/RelatedProducts';
import type { Metadata } from 'next';

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductByHandle(params.productId);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: product.name,
    description: product.description.replace(/<[^>]+>/g, '').substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.replace(/<[^>]+>/g, '').substring(0, 160),
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { productId } = params;
  const product = await getProductByHandle(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ProductImages images={[{ url: product.imageUrl, altText: product.name }]} />
          <ProductDetails product={product} />
        </div>
        <div className="mt-16" dangerouslySetInnerHTML={{ __html: product.description }} />
      </main>
      <Suspense fallback={<div>Loading related products...</div>}>
        <RelatedProducts 
          currentProductId={product.id} 
          currentProductType={product.type}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map(product => ({
    productId: product.id,
  }));
}