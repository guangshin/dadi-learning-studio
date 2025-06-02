import { getBaseUrl, processImageUrl } from './clientUtils';

// Types for Teacher data
export interface Teacher {
  id: string;
  name: string;
  level: string;
  description: string;
  photo: string;
  imageAlt?: string;
}

interface TeacherResponse {
  rows: Array<{
    id: string;
    data: {
      name: string;
      level: string;
      description: string;
      photo: {
        url: string;
        name: string;
        size: number;
        mimetype: string;
        imageMeta: {
          width: number;
          height: number;
        };
      };
    };
  }>;
  total?: number;
}

/**
 * Fetches teachers from the CMS
 */
export async function fetchTeacher(page = 1, limit = 10): Promise<{ teachers: Teacher[]; total?: number }> {
  try {
    const url = `${getBaseUrl()}/api/cms`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection: "teacher", // Changed from "teachers" to "teacher"
        limit,
        skip: (page - 1) * limit,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TeacherResponse = await response.json();
    
    // Transform the data to match our frontend needs
    const teachers: Teacher[] = (data.rows || []).map((row) => {
      const photoUrl = row.data.photo?.url || '/images/placeholder-teacher.svg';
      const name = row.data.name || 'Unnamed Teacher';
      const level = row.data.level || '';
      const description = row.data.description || '';
      
      return {
        id: row.id,
        name,
        level,
        description,
        photo: photoUrl,
        imageAlt: `${name}, ${level}`,
      };
    });

    return {
      teachers,
      total: data.total,
    };
  } catch (error) {
    console.error('Error in fetchTeacher:', error);
    throw error;
  }
}
