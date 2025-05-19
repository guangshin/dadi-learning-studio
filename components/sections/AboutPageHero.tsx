'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchImagesByKey } from '@/lib/fetchPlasmicImages';

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImagesByKey = {
  [key: string]: ImageData;
};

export function AboutPageHero() {
  const [image, setImage] = useState<ImageData>({
    src: '/images/classroom.jpg',
    alt: 'Da Di Learning Studio classroom',
    width: 800,
    height: 600
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const images: ImagesByKey = await fetchImagesByKey(['about-hero']);
        const imageKey = 'about-hero';
        if (images && images[imageKey]?.src) {
          setImage(images[imageKey]);
        }
      } catch (error) {
        console.error('Error fetching hero image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              {!loading ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized={image.src.startsWith('http')}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 animate-pulse"></div>
              )}
              
              {/* Skeleton loader */}
              {loading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              More Than Language.<br />
              <span className="text-primary">A Way to Grow.</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Mandarin at Da Di is more than memorisation. It's a life-enriching journey of connection, 
              presence, and purpose — guided by decades of experience and a heart for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
