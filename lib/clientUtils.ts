/**
 * Utility functions for client and server
 */

/**
 * Helper for getting the base URL in both client and server environments
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Browser should use relative path
    return '';
  }
  
  // SSR should use vercel url or localhost
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  
  return 'http://localhost:3000';
}

/**
 * Process image URL to ensure it's valid for Next.js Image component
 * @param url The image URL to process
 * @param fallback Fallback image URL if the input is invalid
 * @returns A valid image URL or the fallback
 */
export function processImageUrl(url?: string, fallback = '/images/placeholder.svg'): string {
  if (!url) return fallback;
  
  try {
    // Test if it's a valid URL
    new URL(url);
    return url;
  } catch (e) {
    // Handle relative URLs that failed during URL parsing
    if (url.startsWith('/')) {
      return url;
    }
    
    // Return fallback for invalid URLs
    console.warn(`Invalid image URL: ${url}, using fallback`);
    return fallback;
  }
}

/**
 * Extract plain text from HTML content
 * @param html HTML content
 * @param maxLength Maximum length of the excerpt
 * @returns Plain text excerpt
 */
export function extractTextFromHtml(html: string, maxLength = 160): string {
  if (!html) return '';
  
  // Create a temporary div to parse HTML
  let text;
  if (typeof document !== 'undefined') {
    // Client-side
    const div = document.createElement('div');
    div.innerHTML = html;
    text = div.textContent || div.innerText || '';
  } else {
    // Server-side
    // Remove HTML tags and replace common entities
    text = html.replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }
  
  // Trim and limit length
  return text.trim().slice(0, maxLength) + (text.length > maxLength ? '...' : '');
}

/**
 * Calculate estimated reading time
 * @param content The content to calculate reading time for
 * @param wordsPerMinute Average reading speed
 * @returns Formatted reading time string
 */
export function calculateReadTime(content: string, wordsPerMinute = 200): string {
  if (!content) return '1 min read';
  
  // Count words (roughly) by splitting on whitespace
  const wordCount = content.trim().split(/\s+/).length;
  
  // Calculate minutes
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return `${minutes} min read`;
}
