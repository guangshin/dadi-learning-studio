import { z } from 'zod';
import { getBaseUrl, processImageUrl } from './clientUtils';

// Define a Zod schema for blog posts to ensure type safety
export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  author: z.string(),
  date: z.string(), // ISO date string
  coverImage: z.object({
    url: z.string(),
    alt: z.string().optional(),
  }).optional(),
  content: z.string(), // HTML content
  published: z.boolean().default(true),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

/**
 * Fetches all published blog posts from the CMS
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching all blog posts...');
    const url = `${getBaseUrl()}/api/cms`;
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "blog",
        where: { published: true },
        orderBy: { date: 'desc' },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CMS API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Raw blog posts response:', data);
    
    // Handle API response structure (rows array or direct array)
    const items = Array.isArray(data) ? data : (data.rows || []);
    
    // Map and validate each blog post
    const blogPosts = items.map((item: any) => {
      const post = item.data || item;
      
      // Handle coverImage which could be in different formats based on CMS
      let coverImage = undefined;
      
      if (post.coverImage) {
        if (typeof post.coverImage === 'object' && post.coverImage.url) {
          coverImage = post.coverImage;
        } else if (typeof post.coverImage === 'string') {
          coverImage = { url: post.coverImage };
        }
      }
      
      // Format the post data to match our schema
      const formattedPost = {
        id: post.id || item.id,
        title: post.title,
        slug: post.slug,
        author: post.author,
        date: post.date,
        coverImage,
        content: post.content,
        published: post.published !== undefined ? post.published : true
      };
      
      // Validate with Zod schema
      return BlogPostSchema.parse(formattedPost);
    }).filter(Boolean);
    
    console.log(`Fetched ${blogPosts.length} blog posts`);
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetches a single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    const url = `${getBaseUrl()}/api/cms`;
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "blog",
        where: { slug },
        limit: 1,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CMS API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Raw blog post response:', data);
    
    // Handle API response structure
    const items = Array.isArray(data) ? data : (data.rows || []);
    if (!items.length) return null;
    
    const post = items[0].data || items[0];
    
    // Handle coverImage which could be in different formats
    let coverImage = undefined;
    
    if (post.coverImage) {
      if (typeof post.coverImage === 'object' && post.coverImage.url) {
        coverImage = post.coverImage;
      } else if (typeof post.coverImage === 'string') {
        coverImage = { url: post.coverImage };
      }
    }
    
    // Format the post data to match our schema
    const formattedPost = {
      id: post.id || items[0].id,
      title: post.title,
      slug: post.slug,
      author: post.author,
      date: post.date,
      coverImage,
      content: post.content,
      published: post.published !== undefined ? post.published : true
    };
    
    // Validate with Zod schema
    return BlogPostSchema.parse(formattedPost);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}
