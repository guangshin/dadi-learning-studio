import { Metadata } from 'next';
import { BlogList } from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Da Di Learning Studio',
  description: 'Insights, tips, and stories about learning Mandarin and Chinese culture.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text text-center mb-16">Insights & Articles</h1>
        <BlogList />
      </div>
    </main>
  );
}
