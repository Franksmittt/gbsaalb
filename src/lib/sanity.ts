// FILE: src/lib/sanity.ts (REPLACE ENTIRE FILE)
import { createClient } from '@sanity/client';
import { cache } from 'react';

export const sanityClient = createClient({
  // Use the env variable for the project ID
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01', // Use a recent API version
  useCdn: true,
});

// Fetch a single post by its slug
export const getPostBySlug = cache(async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "author": author->name,
    publishedAt,
    excerpt
  }`;
  return sanityClient.fetch(query, { slug });
});

// NEW: Fetch the latest 3 blog posts for the teaser section
export const getAllPosts = cache(async () => {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    excerpt,
    "category": categories[0]->title // Fetches the title of the first category
  }`;
  return sanityClient.fetch(query);
});