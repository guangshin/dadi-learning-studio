import { getBaseUrl } from './clientUtils';

export interface Branch {
  id: string;
  title: string;
  address: string;
  operatingHours: string;
  mapEmbedUrl: string;
  iframe: string;
}

/**
 * Fetch branch information from the CMS
 */
export async function fetchBranches(): Promise<Branch[]> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/cms?type=branches`, {
      cache: 'no-store',
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch branches: ${response.status}`);
    }

    const data = await response.json();
    return data.branches || [];
  } catch (error) {
    console.error('Error fetching branches:', error);
    
    // Return default branch if fetching fails
    return [{
      id: "eunos",
      title: "Eunos Branch (Main Studio)",
      address: "10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075 (Opposite Eunos MRT)",
      operatingHours: "Wednesday to Sunday: 9:00 AM - 6:00 PM\nMonday and Tuesday: Closed\nPublic Holidays: Closed",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785197998048!2d103.89041258255615!3d1.319989299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18335cf5ef73%3A0xdf6e31cfca048cfd!2sDa%20Di%20Learning%20Studio!5e0!3m2!1sen!2ssg!4v1716347995637!5m2!1sen!2ssg",
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763132830001!2d103.90070659999999!3d1.3177573999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181a92e11a3d%3A0x484e3638ce52c330!2sKampong%20Ubi%20Community%20Centre!5e0!3m2!1sen!2smy!4v1748256926235!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }];
  }
}
