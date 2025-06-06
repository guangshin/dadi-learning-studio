import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Metadata } from 'next';
import { fetchBlogPostBySlug } from '@/lib/fetchBlog';
import { fetchBlogPostDirectFromPlasmic } from '@/lib/plasmicDirectApi';
import { processImageUrl, extractTextFromHtml, calculateReadTime } from '@/lib/clientUtils';
import Link from 'next/link';

// Fallback placeholder image
const PLACEHOLDER_IMAGE = '/images/placeholder.svg';

// Fetch a post by slug from the CMS with fallback to direct Plasmic API
async function getPost(slug: string) {

  
  try {
    // First attempt: Try internal API

    let post = await fetchBlogPostBySlug(slug).catch(err => {
      console.error(`[getPost] Error with internal API:`, err);
      return null;
    });
    
    // If internal API fails, try direct Plasmic API
    if (!post) {

      post = await fetchBlogPostDirectFromPlasmic(slug).catch(err => {
        console.error(`[getPost] Error with direct Plasmic API:`, err);
        return null;
      });
      
      if (post) {

      }
    } else {

    }
    
    // Return null if not found or not published
    if (!post || !post.published) {

      return null;
    }
    
    return post;
  } catch (error) {
    console.error(`[getPost] Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

// Force fully dynamic rendering during runtime (not build time)
// This avoids build-time errors when trying to access API that doesn't exist yet
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

// Do not attempt to generate paths during build
// because we can't access the API yet
// We'll handle all slug generation at runtime
export function generateStaticParams() {

  // Return an empty array to avoid fetching during build
  // The pages will be generated on-demand at runtime
  return [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }

  // Create a content excerpt using utility function
  const contentExcerpt = extractTextFromHtml(post.content, 160);

  return {
    title: `${post.title} | Da Di Learning Studio Blog`,
    description: contentExcerpt,
    openGraph: {
      title: post.title,
      description: contentExcerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [{
        url: post.coverImage.url,
        alt: post.coverImage.alt || post.title,
      }] : [],
    },
    alternates: {
      canonical: `https://dadi-learning-studio.vercel.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  // Format the date
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  
  // Process the image URL to ensure it's valid
  const imageUrl = processImageUrl(post.coverImage?.url, PLACEHOLDER_IMAGE);

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-16">
      {/* Hero Image Section */}
      <div className="w-full mb-8 relative">
        <div className="relative h-[40vh] md:h-[50vh] w-full max-h-[600px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Title Card - Positioned to overlap with hero image */}
        <div className="max-w-3xl mx-auto -mt-20 bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm mb-3">
              <span className="font-medium">By {post.author}</span>
              <span className="mx-2">·</span>
              <time dateTime={post.date} className="italic">
                {formattedDate}
              </time>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-800 prose-headings:font-bold prose-a:text-[#4C9A2A] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-strong:text-[#4C9A2A]/90 prose-headings:leading-relaxed prose-p:leading-relaxed prose-li:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
          
          {/* Sidebar - Sticky on desktop */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">About the Author</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#4C9A2A]/20 rounded-full flex items-center justify-center text-[#4C9A2A] font-bold mr-3">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{post.author}</p>
                      <p className="text-sm text-[#4C9A2A]/80">Da Di Learning Studio</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Explore More</h3>
                <Link 
                  href="/blog"
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#4C9A2A] hover:bg-[#3e7e22] text-white font-medium rounded-lg transition-colors mb-3"
                >
                  Back to Insights
                </Link>
                <Link 
                  href="/contact#BookTrialClass"
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#F0F7E6] hover:bg-[#E0EDD1] text-[#4C9A2A] font-medium rounded-lg transition-colors"
                >
                  Book a Trial Class
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#F0F7E6] rounded-2xl p-8 shadow-sm border border-[#4C9A2A]/10 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoyed this article?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Explore more ways Da Di brings Mandarin to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="px-6 py-3 bg-white hover:bg-gray-50 text-[#4C9A2A] font-medium rounded-lg transition-colors border border-[#4C9A2A]/20 shadow-sm"
            >
              Read More Articles
            </Link>
            <Link 
              href="/contact#BookTrialClass"
              className="px-6 py-3 bg-[#4C9A2A] hover:bg-[#3e7e22] text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Book a Trial Class
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
