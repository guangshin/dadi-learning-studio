'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface ReviewsComponentProps {
  id?: string;
  title: string;
  subtitle?: string;
  maxItems?: number;
  testimonials?: Testimonial[];
  variant?: 'light' | 'dark';
}

export function ReviewsComponent({
  id,
  title,
  subtitle = '',
  maxItems = 4,
  testimonials: externalTestimonials,
  variant = 'dark',
}: ReviewsComponentProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Load testimonials from props or fallback to default
  useEffect(() => {
    if (externalTestimonials && externalTestimonials.length > 0) {
      setTestimonials(externalTestimonials);
    } else {
      // Dynamically import to avoid server-side rendering issues
      import('@/data/testimonials').then((module) => {
        setTestimonials(module.testimonials.slice(0, maxItems));
      });
    }
  }, [externalTestimonials, maxItems]);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Background and text colors based on variant
  const containerClasses = variant === 'dark' 
    ? 'bg-primary/10 text-foreground' // Light primary color background for dark variant
    : 'bg-accent/10 text-foreground'; // Light accent color background for light variant
    
  const cardClasses = variant === 'dark'
    ? 'bg-white/90 backdrop-blur-sm text-foreground shadow-md' // White background with blur for dark variant
    : 'bg-white/90 backdrop-blur-sm text-foreground shadow-md'; // White background with blur for light variant

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      id={id}
      className={`py-16 ${containerClasses} scroll-mt-24`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/80 text-gray-800 flex items-center justify-center shadow-lg hover:bg-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/80 text-gray-800 flex items-center justify-center shadow-lg hover:bg-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          
          {/* Single Testimonial */}
          <div 
            ref={containerRef}
            className={`max-w-3xl mx-auto ${variant === 'dark' ? 'bg-white/90' : 'bg-white/90'} rounded-xl p-8 min-h-[200px] flex flex-col justify-center relative overflow-hidden shadow-lg`}
          >
            <div className="relative z-10">
              <blockquote className="text-xl italic mb-6">"{currentTestimonial.quote}"</blockquote>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="text-center">
                  <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute top-4 right-4 text-6xl opacity-10 ${
              variant === 'dark' ? 'text-primary' : 'text-accent'
            }`}>"</div>
          </div>
          
          {/* Dots indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
