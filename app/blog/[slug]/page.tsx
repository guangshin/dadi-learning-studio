import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';

// This would normally fetch from a CMS
async function getPost(slug: string) {
  // In a real app, you would fetch this from your CMS
  const posts = [
    {
      id: '1',
      slug: '5-fun-ways-to-practice-mandarin',
      title: '5 Fun Ways to Practice Mandarin with Your Child',
      content: `
        <p>Learning Mandarin can be a fun and rewarding experience for children when approached in the right way. Here are five engaging activities to make language learning enjoyable for your little ones at home:</p>
        
        <h2>1. Sing-Along Sessions</h2>
        <p>Children love music, and singing is a fantastic way to learn new words and phrases. Create a playlist of popular Chinese children's songs and have regular sing-along sessions. Encourage your child to mimic the pronunciation and actions.</p>
        
        <h2>2. Story Time with Props</h2>
        <p>Use props and visual aids when reading Chinese storybooks. Point to pictures and name objects in Mandarin. Ask simple questions about the story to encourage comprehension and speaking practice.</p>
        
        <h2>3. Label Your Home</h2>
        <p>Create colorful labels for everyday items around your home with their Chinese names. This visual reinforcement helps with character recognition and vocabulary building.</p>
        
        <h2>4. Cooking Together</h2>
        <p>Prepare simple Chinese dishes together while naming ingredients and cooking actions in Mandarin. This multisensory approach makes learning more memorable.</p>
        
        <h2>5. Language Games</h2>
        <p>Incorporate Mandarin into board games or create simple matching games with Chinese characters and pictures. Make it a fun family activity!</p>
        
        <p>Remember, the key is to keep it light, fun, and pressure-free. Celebrate small victories and make language learning a natural part of your child's daily routine.</p>
      `,
      excerpt: 'Discover engaging activities to make Mandarin learning enjoyable for your little ones at home.',
      date: '2025-05-10',
      category: 'Parenting Tips',
      image: '/images/blog/practice-mandarin.jpg',
      readTime: '5 min read',
      author: {
        name: 'Li Wei',
        role: 'Lead Preschool Educator',
        image: '/images/team/li-wei.jpg',
      },
    },
  ];

  return posts.find((post) => post.slug === slug) || null;
}

export async function generateStaticParams() {
  // Return all slugs for static generation
  return [
    { slug: '5-fun-ways-to-practice-mandarin' }
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Da Di Learning Studio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <time dateTime={post.date} className="mr-4">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-accent max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{post.author.name}</h3>
            <p className="text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Read Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* You would map through related posts here */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">The Importance of Early Language Learning</h3>
            <p className="text-gray-600 line-clamp-2">Research shows that early exposure to a second language has numerous cognitive benefits for children.</p>
            <a href="/blog/early-language-learning" className="mt-3 inline-flex items-center text-sm font-medium text-accent hover:text-accent">
              Read more <span className="ml-1">→</span>
            </a>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Cultural Insights: Mid-Autumn Festival</h3>
            <p className="text-gray-600 line-clamp-2">Learn about the traditions and stories behind one of the most important Chinese festivals.</p>
            <a href="/blog/mid-autumn-festival" className="mt-3 inline-flex items-center text-sm font-medium text-accent hover:text-accent">
              Read more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
