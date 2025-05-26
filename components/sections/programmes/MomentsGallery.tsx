'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { processImageUrl } from '@/lib/clientUtils';

type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

import { fetchGalleryImages } from '@/lib/fetchGalleryImages';

// Remove static galleryImages


export function MomentsGallery() {
  const [galleryImages, setGalleryImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0); // Track loaded images
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    
    // Fetch gallery images with proper error handling
    fetchGalleryImages()
      .then(images => {
        if (mounted) {
          console.log(`Received ${images.length} gallery images`);
          
          // Filter out any images with empty src
          const validImages = images.filter((img: ImageItem) => img.src && img.src.trim() !== '');
          
          if (validImages.length === 0 && images.length > 0) {
            // We got images but all URLs are empty - likely a data structure issue
            console.error('Gallery images returned but all have empty URLs');
            setError('Image data format issue. Please check console for details.');
          } else {
            setGalleryImages(validImages);
          }
          
          setLoading(false);
        }
      })
      .catch(e => {
        console.error('Error in gallery fetch:', e);
        setError(e.message || 'Failed to load gallery');
        setLoading(false);
      });
      
    return () => { mounted = false; };
  }, []);

  const scrollInterval = useRef<NodeJS.Timeout>();

  // Duplicate the images for infinite scroll effect
  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // pixels per frame
    let scrollPosition = 0;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (isPaused) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset scroll position for infinite effect
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    scrollInterval.current = setInterval(scroll, 16); // ~60fps

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        {loading && (
          <div className="flex space-x-6 mb-8 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 rounded-lg overflow-hidden bg-gray-200 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" style={{backgroundSize: '200% 100%'}} />
              </div>
            ))}
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 mb-6">{error}</div>
        )}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Moments at Da Di</h2>
          <p className="text-gray-600 mb-8">
            Snapshots of joyful learning, creative play, and meaningful connection.
          </p>
          
          <p className="text-lg text-text/80 leading-relaxed mb-8">
            At Da Di Learning Studio, we believe Mandarin should be joyful, meaningful, and empowering. Whether your child is just starting out, preparing for major exams, or learning Mandarin for work and life — we meet every learner where they are.
            <br /><br />
            Our classrooms are full of energy, laughter, focus, and calm. Here's a peek into our daily moments.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar pb-8 -mx-4 md:-mx-8 px-4 md:px-8"
        >
          <div className="flex space-x-6">
            {duplicatedImages.map((image, index) => (
              <div 
                key={`${image.src}-${index}`}
                className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative w-full h-full bg-gray-100">
                  {image.src ? (
                    <Image
                      src={processImageUrl(image.src)} // Process URL to ensure compatibility
                      alt={image.alt || 'Da Di Learning Studio gallery image'}
                      width={image.width || 800}
                      height={image.height || 600}
                      className="w-full h-full object-cover"
                      priority={index < 4}
                      onLoadingComplete={() => setImagesLoaded(prev => prev + 1)}
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.src}`, e);
                        // Show the error but don't break the UI
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                      unoptimized // Use this if Next.js image optimization causes issues
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image Unavailable
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Custom scrollbar for touch devices */
        @media (hover: none) {
          .no-scrollbar {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          
          .no-scrollbar > div > div {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
