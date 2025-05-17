import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

// Mock data - in a real app, this would come from a CMS
const blogPosts = [
  {
    id: '1',
    title: '5 Fun Ways to Practice Mandarin with Your Child',
    excerpt: 'Discover engaging activities to make Mandarin learning enjoyable for your little ones at home.',
    date: '2025-05-10',
    category: 'Parenting Tips',
    image: '/images/blog/practice-mandarin.jpg',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Importance of Early Language Learning',
    excerpt: 'Research shows that early exposure to a second language has numerous cognitive benefits for children.',
    date: '2025-04-28',
    category: 'Education',
    image: '/images/blog/early-learning.jpg',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Cultural Insights: Mid-Autumn Festival',
    excerpt: 'Learn about the traditions and stories behind one of the most important Chinese festivals.',
    date: '2025-04-15',
    category: 'Culture',
    image: '/images/blog/mid-autumn.jpg',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Overcoming the Fear of Speaking Mandarin',
    excerpt: 'Practical tips for adult learners to build confidence in speaking Mandarin.',
    date: '2025-03-30',
    category: 'Learning Tips',
    image: '/images/blog/speaking-mandarin.jpg',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'The Role of Calligraphy in Chinese Culture',
    excerpt: 'Explore the art of Chinese calligraphy and its significance in Chinese heritage.',
    date: '2025-03-18',
    category: 'Culture',
    image: '/images/blog/calligraphy.jpg',
    readTime: '9 min read',
  },
  {
    id: '6',
    title: 'Preparing for PSLE Chinese: A Parent\'s Guide',
    excerpt: 'Essential strategies to help your child excel in the PSLE Chinese examination.',
    date: '2025-03-05',
    category: 'Education',
    image: '/images/blog/psle-preparation.jpg',
    readTime: '10 min read',
  },
];

export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article key={post.id} className="group">
          <Link href={`/blog/${post.id}`}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="text-accent font-medium text-sm">
                      Read more
                      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
