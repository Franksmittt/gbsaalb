// FILE: src/components/brands/TechSpecsTable.tsx
import React from 'react';
import Link from 'next/link';

interface ProductTechSpec {
    id: string;
    name: string;
    tech: { ah: string; cca: string; length: string; width: string; height: string; }
}

export default function TechSpecsTable({ products }: { products: ProductTechSpec[] }) {
    return (
        <div className="bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Technical Specifications</h2>
                <div className="overflow-x-auto rounded-lg border border-gray-700">
                    <table className="w-full text-left">
                        <thead className="bg-gray-800">
                             <tr>
                                <th className="py-3 px-4 font-semibold uppercase text-sm text-gray-400">Model</th>
                                <th className="py-3 px-4 font-semibold uppercase text-sm text-gray-400 text-center">Amp Hour (AH)</th>
                                <th className="py-3 px-4 font-semibold uppercase text-sm text-gray-400 text-center">CCA</th>
                                <th className="py-3 px-4 font-semibold uppercase text-sm text-gray-400">Dimensions (L x W x H)</th>
                                <th className="py-3 px-4"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {products.map((product, index) => (
                                <tr key={product.id} className={`border-t border-gray-700 ${index % 2 === 0 ? 'bg-gray-800/40' : 'bg-gray-800/20'}`}>
                                    <td className="py-3 px-4 font-bold text-white">{product.name}</td>
                                    <td className="py-3 px-4 text-center">{product.tech.ah}</td>
                                    <td className="py-3 px-4 text-center">{product.tech.cca}</td>
                                    <td className="py-3 px-4">{`${product.tech.length} x ${product.tech.width} x ${product.tech.height}`}</td>
                                    <td className="py-3 px-4 text-right">
                                        <Link href={`/products/${product.id}`} className="font-semibold text-navy-400 hover:text-brand-yellow">View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}