'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Sample images - replace with your actual image paths
const galleryImages: ImageItem[] = [
  {
    src: '/images/gallery/classroom-1.jpg',
    alt: 'Students engaged in a classroom activity',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/activity-1.jpg',
    alt: 'Children participating in a learning game',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/classroom-2.jpg',
    alt: 'Teacher working with small group',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/activity-2.jpg',
    alt: 'Students presenting their work',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/classroom-3.jpg',
    alt: 'Interactive learning session',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/activity-3.jpg',
    alt: 'Group activity in progress',
    width: 400,
    height: 300,
  },
  {
    src: '/images/gallery/classroom-4.jpg',
    alt: 'Students working on projects',
    width: 400,
    height: 300,
  },
];

export function MomentsGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-6">
            {duplicatedImages.map((image, index) => (
              <div 
                key={`${image.src}-${index}`}
                className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative w-full h-full bg-gray-100">
                  {/* Replace with your actual Image component */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {image.alt}
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-cover"
                    priority={index < 4} // Only prioritize first few images
                  /> */}
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
