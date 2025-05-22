import { getBaseUrl, processImageUrl } from './clientUtils';

interface ImageAsset {
  id: string;
  key: string;
  image: {
    url: string;
    name: string;
    size: number;
    mimetype: string;
    imageMeta?: {
      width: number;
      height: number;
    };
  };
  alt?: string;
}

export async function fetchImageAsset(key: string): Promise<string | null> {
  try {
    const url = `${getBaseUrl()}/api/cms`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "imageAsset",
        where: { key },
        limit: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const asset = data.rows?.[0]?.data;
    
    if (!asset?.image?.url) {

      return null;
    }
    
    return asset.image.url;
  } catch (error) {
    console.error(`Error fetching image asset with key ${key}:`, error);
    return null;
  }
}

export async function fetchAllProgrammeImages() {

  try {
    const url = `${getBaseUrl()}/api/cms`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "imageAsset",
        where: {
          key: {
            $in: ["preschool", "primary-school", "secondary-school", "adult"]
          }
        },
        limit: 10
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

    
    const assets: Record<string, string> = {};
    
    // Handle both direct array and rows property
    const items = Array.isArray(data) ? data : (data.rows || []);
    
    items.forEach((item: any) => {
      const asset = item.data || item;
      if (asset?.key) {
        // Handle the case where image is an object with a url property
        const imageUrl = typeof asset.image === 'object' && asset.image?.url 
          ? asset.image.url 
          : typeof asset.image === 'string' 
            ? asset.image 
            : null;
            
        if (imageUrl) {

          assets[asset.key] = imageUrl;
        } else {

        }
      }
    });
    

    return assets;
  } catch (error) {
    console.error('Error fetching programme images:', error);
    return {};
  }
}
