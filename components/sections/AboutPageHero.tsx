'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function AboutPageHero() {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/cms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            collection: 'imageAsset', 
            filters: { key: 'about-hero' } 
          })
        });
        const data = await response.json();
        if (data?.data?.[0]?.data?.image?.url) {
          setImage({
            src: data.data[0].data.image.url,
            alt: data.data[0].data.alt || 'Da Di Learning Studio classroom'
          });
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
              {/* Fallback image */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${!loading && !image ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src="/images/classroom.jpg"
                  alt="Da Di Learning Studio classroom"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* CMS Image */}
              {!loading && image?.src && (
                <div className="absolute inset-0 transition-opacity duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
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
