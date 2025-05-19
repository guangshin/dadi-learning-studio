import { getBaseUrl, processImageUrl } from './clientUtils';

// Fetch all images from the 'Gallery' collection in Plasmic CMS via your API route
export async function fetchGalleryImages() {
  const url = `${getBaseUrl()}/api/cms`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ collection: 'gallery', filters: { limit: 100 } })
  });
  if (!response.ok) throw new Error('Failed to fetch gallery images');
  const data = await response.json();
  // Plasmic CMS returns rows with data fields
  return (data.rows || []).map((row: any) => ({
    src: row.data.image?.url || '',
    alt: row.data.alt || row.data.key || 'Gallery image',
    width: row.data.image?.width || 400,
    height: row.data.image?.height || 300,
  }));
}
