// FILE: src/components/home/BestSellers.tsx (REPLACE ENTIRE FILE)

import Link from 'next/link';
import Image from 'next/image';
import { getCollectionProducts } from '@/lib/shopify';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => (
    <div className="border border-slate-700/50 rounded-lg flex flex-col transition-transform duration-300 hover:-translate-y-2">
        <div className="bg-white p-4 rounded-t-lg">
            <Link href={`/shop/${product.id}`} className="block aspect-square relative">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    className="w-full h-full object-contain"
                />
            </Link>
        </div>
        <div className="p-4 flex flex-col flex-grow bg-navy-850 rounded-b-lg">
            <h3 className="font-bold text-lg text-white flex-grow">{product.name}</h3>
            <p className="text-2xl font-bold text-white mt-4">R{product.price.toFixed(2)}</p>
        </div>
    </div>
);


export default async function BestSellers() {
  let products: Product[] = [];
  let fetchError = false;
  
  try {
    products = await getCollectionProducts('best-sellers');
  } catch (err) {
    fetchError = true;
    console.error('Shopify API fetch failed for "best-sellers":', err);
  }

  if (fetchError || products.length === 0) {
    return (
        <section className="w-full bg-navy-900 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">Our Best Sellers</h2>
                {fetchError ? (
                  <p className="text-red-400 mt-4 font-semibold">An error occurred while fetching products. Please check your Shopify connection.</p>
                ) : (
                  <p className="text-slate-400 mt-4 font-semibold">The "best-sellers" collection is currently empty.</p>
                )}
            </div>
        </section>
    );
  }

  return (
    <section className="w-full bg-navy-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Best Sellers</h2>
            <p className="text-slate-300 mt-4 text-lg max-w-3xl mx-auto">The most trusted and popular power solutions, chosen by our customers in Alberton and beyond.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}