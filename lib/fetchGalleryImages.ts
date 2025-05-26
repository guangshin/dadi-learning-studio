import { getBaseUrl, processImageUrl } from './clientUtils';
import { fetchWithRetry } from './fetchWithRetry';

/**
 * Fetch all images from the 'Gallery' collection in Plasmic CMS via the API route
 * Uses retry logic to prevent timeout issues on local development
 */
export async function fetchGalleryImages() {
  try {
    console.log('Fetching gallery images...');
    const url = `${getBaseUrl()}/api/cms`;
    
    // Use fetchWithRetry for better reliability
    const response = await fetchWithRetry(
      url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: 'gallery', filters: { limit: 100 } })
      },
      3,    // 3 retries
      10000 // 10 second timeout
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch gallery images: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Received ${data.rows?.length || 0} gallery images from CMS`);
    
    // Plasmic CMS returns rows with data fields
    // Ensure we're properly processing image URLs for Next.js compatibility
    return (data.rows || []).map((row: any) => {
      // Log the structure of the first image to help debug
      if (data.rows && data.rows[0] === row) {
        console.log('Sample gallery image data:', JSON.stringify(row.data, null, 2));
      }
      
      // Get image URL, process it if needed
      const imageUrl = row.data.image?.url || '';
      
      return {
        src: imageUrl,
        alt: row.data.alt || row.data.key || 'Gallery image',
        width: row.data.image?.width || 400,
        height: row.data.image?.height || 300,
      };
    });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return []; // Return empty array instead of throwing to prevent UI from breaking
  }
}
