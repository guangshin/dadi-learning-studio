/**
 * Direct Plasmic CMS API fetching logic
 * This bypasses our internal API route to avoid potential routing/execution issues on Vercel
 */

import { BlogPostSchema, type BlogPost } from './fetchBlog';

/**
 * Directly fetch a blog post from Plasmic CMS API
 * Used as a fallback when our internal API route fails
 */
export async function fetchBlogPostDirectFromPlasmic(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`Directly fetching blog post from Plasmic with slug: ${slug}`);
    
    // Ensure we have the required environment variables
    const CMS_ID = process.env.PLASMIC_PROJECT_ID;
    const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN;
    
    if (!CMS_ID || !PUBLIC_TOKEN) {
      console.error('Missing required Plasmic environment variables');
      return null;
    }
    
    // Construct the query for fetching by slug
    const queryObj = { slug };
    const query = '?q=' + encodeURIComponent(JSON.stringify(queryObj));
    const url = `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/blog/query${query}`;
    
    console.log('Fetching directly from Plasmic URL:', url);
    
    // Use public token for read operations
    const authToken = `${CMS_ID}:${PUBLIC_TOKEN}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-plasmic-api-cms-tokens': authToken,
      },
      cache: 'no-store', // Ensure we don't get cached responses
      next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Direct Plasmic API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      return null;
    }
    
    const data = await response.json();
    console.log('Plasmic API response received:', typeof data === 'object' ? 'Valid JSON' : typeof data);
    
    // Process the Plasmic CMS response, which has rows
    if (!data.rows || !data.rows.length) {
      console.log('No blog post found with slug:', slug);
      return null;
    }
    
    // Get actual post data from Plasmic response
    const plasmicPost = data.rows[0];
    const post = plasmicPost.data || plasmicPost;
    
    console.log('Raw post from Plasmic:', post);
    
    if (!post) {
      console.error('Invalid post data format from Plasmic');
      return null;
    }
    
    // Handle coverImage which could be in different formats
    let coverImage = undefined;
    if (post.coverImage) {
      if (typeof post.coverImage === 'object' && post.coverImage.url) {
        coverImage = post.coverImage;
      } else if (typeof post.coverImage === 'string') {
        coverImage = { url: post.coverImage };
      }
    }
    
    // Generate fallback values for required fields
    const generatedId = plasmicPost.id || `post-${Date.now()}`;
    const generatedTitle = post.title || 'Untitled Blog Post';
    const generatedSlug = post.slug || slug; // Use the requested slug as fallback
    
    // Format the post data to match our schema with fallbacks for all required fields
    const formattedPost = {
      id: generatedId,
      title: generatedTitle,
      slug: generatedSlug,
      author: post.author || 'Da Di Learning Studio',
      date: post.date || new Date().toISOString(),
      coverImage: coverImage || { url: '/images/placeholder.svg' },
      content: post.content || '<p>Content coming soon</p>',
      published: post.published !== false, // Default to published unless explicitly false
    };
    
    console.log('Formatted post before validation:', formattedPost);
    
    try {
      // Validate using the schema
      const validatedPost = BlogPostSchema.parse(formattedPost);
      return validatedPost;
    } catch (validationError) {
      console.error('Validation error for post:', validationError);
      return null;
    }
    
  } catch (error) {
    console.error('Error fetching blog post directly from Plasmic:', error);
    return null;
  }
}
