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
 * Uses a fallback mechanism to try direct Plasmic API if internal API fails
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('[fetchAllBlogPosts] Starting fetch operation...');
    
    // Try the internal API first
    console.log('[fetchAllBlogPosts] Trying internal API...');
    const url = `${getBaseUrl()}/api/cms`;
    console.log('[fetchAllBlogPosts] Fetching from internal URL:', url);
    
    try {
      const response = await fetch(url, {
        method: "POST",
        cache: 'no-store',
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify({
          collection: "blog",
          where: { published: true },
          orderBy: { date: 'desc' },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`[fetchAllBlogPosts] Successfully fetched ${data?.rows?.length || 0} blog posts via internal API`);
        
        // Process the data and return
        return processAndFormatBlogPosts(data);
      } else {
        const contentType = response.headers.get('content-type') || '';
        let errorDetail = '';
        
        try {
          errorDetail = await response.text();
        } catch (err) {
          errorDetail = String(err);
        }
        
        console.error('[fetchAllBlogPosts] Internal API Error:', {
          status: response.status,
          statusText: response.statusText,
          contentType,
          error: errorDetail
        });
        
        throw new Error(`Internal API error: ${response.status}`);
      }
    } catch (internalApiError) {
      console.error('[fetchAllBlogPosts] Failed with internal API, trying direct Plasmic API...', internalApiError);
      
      // Try direct Plasmic API as fallback
      // Fetch directly from Plasmic
      const CMS_ID = process.env.PLASMIC_PROJECT_ID;
      const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN;
      
      if (!CMS_ID || !PUBLIC_TOKEN) {
        console.error('[fetchAllBlogPosts] Missing required Plasmic environment variables');
        return [];
      }
      
      const queryObj = { published: true };
      const query = '?q=' + encodeURIComponent(JSON.stringify(queryObj));
      const plasmicUrl = `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/blog/query${query}`;
      
      console.log('[fetchAllBlogPosts] Trying direct Plasmic API:', plasmicUrl);
      
      const authToken = `${CMS_ID}:${PUBLIC_TOKEN}`;
      const directResponse = await fetch(plasmicUrl, {
        method: 'GET',
        headers: {
          'x-plasmic-api-cms-tokens': authToken,
        },
        cache: 'no-store',
      });
      
      if (!directResponse.ok) {
        console.error('[fetchAllBlogPosts] Direct Plasmic API also failed:', {
          status: directResponse.status,
          statusText: directResponse.statusText,
        });
        return [];
      }
      
      const directData = await directResponse.json();
      console.log(`[fetchAllBlogPosts] Successfully fetched ${directData?.rows?.length || 0} blog posts via direct Plasmic API`);
      
      // Process the data and return
      return processAndFormatBlogPosts(directData);
    }
  } catch (error) {
    console.error('[fetchAllBlogPosts] Critical error fetching blog posts:', error);
    return [];
  }
}

/**
 * Helper function to process and format raw blog posts data from CMS
 */
function processAndFormatBlogPosts(data: any): BlogPost[] {
  try {
    if (!data || (!data.rows && !Array.isArray(data))) {
      console.error('[processAndFormatBlogPosts] Invalid data format:', data);
      return [];
    }
    
    // Handle different data formats from Plasmic or our internal API
    const items = data.rows || data;
    
    if (!Array.isArray(items) || items.length === 0) {
      console.log('[processAndFormatBlogPosts] No blog posts found');
      return [];
    }
    
    console.log(`[processAndFormatBlogPosts] Processing ${items.length} blog posts`);
    
    // Map the items to our blog post schema
    const posts = items.map((item: any) => {
      const post = item.data || item;
      
      // Handle different coverImage formats
      let coverImage = undefined;
      if (post.coverImage) {
        if (typeof post.coverImage === 'object' && post.coverImage.url) {
          coverImage = post.coverImage;
        } else if (typeof post.coverImage === 'string') {
          coverImage = { url: post.coverImage };
        }
      }
      
      // Create a blog post object conforming to our schema
      const blogPost: BlogPost = {
        id: post.id || item.id,
        title: post.title || 'Untitled Blog Post',
        slug: post.slug || '',
        author: post.author || 'Da Di Learning Studio',
        date: post.date || new Date().toISOString(),
        coverImage,
        content: post.content || '',
        published: post.published !== false, // Default to published unless explicitly false
      };
      
      try {
        // Validate using the schema
        return BlogPostSchema.parse(blogPost);
      } catch (validationError) {
        console.error(`[processAndFormatBlogPosts] Validation error for post ${blogPost.slug}:`, validationError);
        return null;
      }
    }).filter(Boolean) as BlogPost[];
    
    return posts;
  } catch (error) {
    console.error('[processAndFormatBlogPosts] Error processing blog posts:', error);
    return [];
  }
}

/**
 * Fetches a single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    
    // Try direct API connection to Plasmic if possible (more reliable in production)
    const directApiEnabled = process.env.NEXT_PUBLIC_USE_DIRECT_PLASMIC_API === 'true';
    
    // Get URL based on environment
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/cms`;
    console.log('Fetching from URL:', url);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Using direct API?', directApiEnabled);
    
    const response = await fetch(url, {
      method: "POST",
      cache: 'no-store', // Ensure we don't get cached responses
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify({
        collection: "blog",
        where: { slug },
        limit: 1,
      }),
    });

    // Enhanced error handling
    if (!response.ok) {
      const contentType = response.headers.get('content-type') || '';
      let errorDetail;
      
      if (contentType.includes('application/json')) {
        // If the response is JSON, parse it
        errorDetail = await response.json();
      } else {
        // Otherwise, get the text
        const errorText = await response.text();
        errorDetail = { text: errorText };
      }
      
      console.error('CMS API Error:', {
        status: response.status,
        statusText: response.statusText,
        contentType,
        error: errorDetail
      });
      
      throw new Error(`HTTP error! status: ${response.status} - Content type: ${contentType}`);
    }

    const data = await response.json();
    console.log('Raw blog post response:', typeof data === 'object' ? 'Valid JSON object' : typeof data);
    
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
