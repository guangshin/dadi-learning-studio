"use client";

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// Initialize the Plasmic loader
const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || "",
      token: process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN || "",
    },
  ],
  // Enable to use the latest version of Plasmic
  // preview: true,
});

// Helper function to fetch data from Plasmic CMS via our API route
export async function fetchFromCms<T = any>(
  collection: string,
  filters?: Record<string, any>
): Promise<T[]> {
  try {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collection,
        ...(filters && { filters }),
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('CMS API error:', data);
      throw new Error(data.error || 'Failed to fetch from CMS');
    }
    
    return data;
  } catch (error) {
    console.error(`Error fetching from CMS (${collection}):`, error);
    throw error; // Re-throw to let the component handle the error
  }
}

export { PLASMIC };
