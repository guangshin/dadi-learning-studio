import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Da Di Learning Studio',
  description: 'Insights, tips, and stories about learning Mandarin and Chinese culture.',
  openGraph: {
    title: 'Blog | Da Di Learning Studio',
    description: 'Insights, tips, and stories about learning Mandarin and Chinese culture.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
