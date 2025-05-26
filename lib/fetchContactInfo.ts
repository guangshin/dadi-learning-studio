import { getBaseUrl } from './clientUtils';

export interface ContactInfo {
  phone: string;
  email: string;
  calendlyUrl: string;
  instagramLink: string;
  facebookLink: string;
}

/**
 * Fetch contact information from the CMS
 */
export async function fetchContactInfo(): Promise<ContactInfo> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/cms?type=contactInfo`, {
      cache: 'no-store',
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contact info: ${response.status}`);
    }

    const data = await response.json();
    return data.contactInfo;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    
    // Return default values if fetching fails
    return {
      phone: "+6586998667",
      email: "contact@dadi.com.sg",
      calendlyUrl: "https://calendly.com/contact-dadi/2hrs",
      instagramLink: "https://www.instagram.com/dadilearningstudio",
      facebookLink: "https://www.facebook.com/profile.php?id=61575097831744"
    };
  }
}
