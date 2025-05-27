import { Metadata } from 'next';
import { BlogList } from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Da Di Learning Studio',
  description: 'Insights, tips, and stories about learning Mandarin and Chinese culture.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-[#f5f7f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">Insights</h1>
            <p className="text-xl text-text/80 mb-8 max-w-3xl mx-auto">
              Stories, tips, and resources for your Mandarin learning journey.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <BlogList />
      </div>
    </main>
  );
}
