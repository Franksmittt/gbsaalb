import { createClient } from '@sanity/client';
import { cache } from 'react';

export const sanityClient = createClient({
  projectId: 'your-sanity-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true, // Use CDN for faster fetches
});

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