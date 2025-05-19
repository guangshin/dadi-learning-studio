'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { fetchAllBlogPosts } from '@/lib/fetchBlog';
import type { BlogPost } from '@/lib/fetchBlog';
import { processImageUrl, extractTextFromHtml, calculateReadTime } from '@/lib/clientUtils';

// Fallback placeholder image
const PLACEHOLDER_IMAGE = '/images/placeholder.svg';

export function BlogList() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetchAllBlogPosts();
        setBlogPosts(posts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch blog posts'));
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 text-center">
        <div className="animate-pulse flex flex-col items-center justify-center">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-red-500">Error: {error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  if (blogPosts.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => {
        // Extract a preview from the HTML content using utility function
        const contentPreview = extractTextFromHtml(post.content, 200);
        
        // Process the image URL to ensure it's valid
        const imageUrl = processImageUrl(post.coverImage?.url, PLACEHOLDER_IMAGE);
        
        // Categorize posts based on content (just a simple example)
        const category = post.title.toLowerCase().includes('mandarin') 
          ? 'Mandarin' 
          : post.title.toLowerCase().includes('chinese') 
            ? 'Chinese' 
            : 'Education';
            
        // Calculate read time using utility function
        const readTime = calculateReadTime(post.content);
        
        return (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#4C9A2A]/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#4C9A2A]/10 text-[#4C9A2A]">
                      {category}
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
                      <span>{readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-[#4C9A2A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {contentPreview}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#4C9A2A]/10 transition-colors">
                    <div className="flex items-center">
                      <span className="text-[#4C9A2A] font-medium text-sm group-hover:text-[#4C9A2A]/80 transition-colors">
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
        );
      })}
    </div>
  );
}
