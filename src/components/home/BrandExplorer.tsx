// FILE: src/components/home/BrandExplorer.tsx (REPLACE ENTIRE FILE)
'use client';

import Image from 'next/image';

export default function BrandExplorer() {
  const brands = [
    {
      name: 'Willard',
      description:
        'South Africa’s most trusted automotive battery brand with up to 25-month warranty.',
      image: '/images/brands/willard.jpg',
      link: '#',
    },
    {
      name: 'Exide',
      description:
        'High-performance batteries built for durability and innovation in modern vehicles.',
      image: '/images/brands/exide.jpg',
      link: '#',
    },
    {
      name: 'Novax',
      description:
        'Affordable reliability designed to power everyday drivers across South Africa.',
      image: '/images/brands/novax.jpg',
      link: '#',
    },
    {
      name: 'Enertec',
      description:
        'Premium AGM and specialty batteries for motorcycles, ATVs, and marine use.',
      image: '/images/brands/enertec.jpg',
      link: '#',
    },
    {
      name: 'Global Batteries',
      description:
        'Our own brand – exceptional value, reliable power, and nationwide warranty support.',
      image: '/images/brands/global.jpg',
      link: '#',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#001f3f] to-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold uppercase mb-4">Shop by Brand</h2>
        <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
          Explore trusted battery brands – premium quality, long warranties, and unbeatable performance.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,102,255,0.6)] border-2 border-transparent hover:border-blue-700"
            >
              <Image
                src={brand.image}
                alt={`${brand.name} Batteries`}
                width={400}
                height={180}
                className="w-full h-44 object-cover"
              />

              <div className="absolute inset-0 bg-[rgba(0,31,63,0.9)] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{brand.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{brand.description}</p>
                <a
                  href={brand.link}
                  className="inline-block px-5 py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Shop {brand.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}