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
    const response = await fetch("/api/cms", {
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
      console.log('No image URL found for key:', key, asset);
      return null;
    }
    
    return asset.image.url;
  } catch (error) {
    console.error(`Error fetching image asset with key ${key}:`, error);
    return null;
  }
}

export async function fetchAllProgrammeImages() {
  console.log('Starting to fetch all programme images...');
  try {
    const response = await fetch("/api/cms", {
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
    console.log('Raw CMS response:', data);
    
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
          console.log(`Found image: ${asset.key} => ${imageUrl}`);
          assets[asset.key] = imageUrl;
        } else {
          console.log(`No valid image URL found for key: ${asset.key}`, asset);
        }
      }
    });
    
    console.log('Processed assets:', assets);
    return assets;
  } catch (error) {
    console.error('Error fetching programme images:', error);
    return {};
  }
}
