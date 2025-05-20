import { Metadata } from 'next';
import { getBlogPost } from '@/lib/blogApi';

export default async function Head({ params }: { params: { slug: string } }) {
  // Fetch blog post data
  const post = await getBlogPost(params.slug);
  const title = post?.title || 'Blog Post | Da Di Blog';
  const description = post?.excerpt || 'Read the latest from Da Di Learning Studio.';
  const canonical = `https://dadi.com.sg/blog/${params.slug}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
    </>
  );
}
