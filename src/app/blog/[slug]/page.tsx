import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/sanity';

type Props = {
  params: { slug: string };
};

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | Global Batteries Alberton' };
  }
  return {
    title: `${post.title} | Global Batteries Alberton`,
    description: post.excerpt || 'Read the latest battery tips and insights from Global Batteries Alberton.',
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">
          By {post.author} | {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.mainImage && (
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-auto mb-6 rounded-lg"
          />
        )}
        <div className="text-gray-800">{post.excerpt}</div>
        {/* Add full content rendering here if available in Sanity schema */}
      </article>
    </main>
  );
}