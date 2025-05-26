import { useEffect, useState } from 'react';
import { fetchBranches, type Branch } from '@/lib/fetchBranches';

// Default fallback data in case CMS fails
const FALLBACK_BRANCH: Branch = {
  id: 'eunos',
  title: 'Eunos Branch (Main Studio)',
  address: '10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075 (Opposite Eunos MRT)',
  operatingHours: 'Wednesday to Sunday: 9:00 AM - 6:00 PM\nMonday and Tuesday: Closed\nPublic Holidays: Closed',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785197998048!2d103.89041258255615!3d1.319989299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18335cf5ef73%3A0xdf6e31cfca048cfd!2sDa%20Di%20Learning%20Studio!5e0!3m2!1sen!2ssg!4v1716347995637!5m2!1sen!2ssg',
  iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763132830001!2d103.90070659999999!3d1.3177573999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181a92e11a3d%3A0x484e3638ce52c330!2sKampong%20Ubi%20Community%20Centre!5e0!3m2!1sen!2smy!4v1748256926235!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};

export function LocationMap() {
  const [mainBranch, setMainBranch] = useState<Branch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadBranchData = async () => {
      try {
        const branches = await fetchBranches();
        if (branches && branches.length > 0 && branches[0].mapEmbedUrl) {
          // Use first branch as main location if it has map URL
          setMainBranch(branches[0]);
          console.log('Loaded main branch for map:', branches[0]);
        } else if (branches && branches.length > 0) {
          // Branch exists but missing map URL, use fallback URL
          const branch = branches[0];
          setMainBranch({
            ...branch,
            mapEmbedUrl: FALLBACK_BRANCH.mapEmbedUrl,
            iframe: branch.iframe || FALLBACK_BRANCH.iframe
          });
          console.log('Using branch from CMS with fallback map URL');
        } else {
          // No branches found, use complete fallback
          console.warn('No branches found in CMS, using fallback data');
          setMainBranch(FALLBACK_BRANCH);
        }
      } catch (error) {
        console.error('Error loading branch data for map:', error);
        // Set fallback data
        setMainBranch(FALLBACK_BRANCH);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBranchData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="h-full rounded-xl overflow-hidden shadow-md">
        <div className="h-full bg-gray-100 flex items-center justify-center">
          <div className="text-center p-8 animate-pulse">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-6"></div>
            <div className="h-48 bg-gray-200 rounded-lg w-full mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!mainBranch) {
    return null;
  }
  
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md">
      <div className="h-full bg-white">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-[#F0F7E6] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-[#4C9A2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{mainBranch.title}</h3>
          <p className="text-foreground/70 mb-4">{mainBranch.address}</p>
          
          <div className="mt-6 aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {mainBranch.mapEmbedUrl ? (
              <iframe
                src={mainBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${mainBranch.title} on Google Maps`}
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                <span>Map not available</span>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mainBranch.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#4C9A2A] hover:text-[#3e7e22]"
            >
              View on Google Maps
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
