// FILE: src/components/ui/Breadcrumbs.tsx
import React from 'react';
import Icon from './Icon';
import Link from 'next/link'; // Use Next.js Link for navigation

interface Crumb {
    name: string;
    href: string;
}

const Breadcrumbs = ({ crumbs }: { crumbs: Crumb[] }) => (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
                <Link href="/" className="block transition hover:text-gray-700">
                    <span className="sr-only"> Home </span>
                    <Icon path="M3,12l9-9,9,9" className="h-4 w-4" />
                </Link>
            </li>
            {crumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <Link
                        href={crumb.href}
                        className={`block transition hover:text-gray-700 ${index === crumbs.length - 1 ? 'font-bold text-navy-800' : ''}`}
                    >
                        {crumb.name}
                    </Link>
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;