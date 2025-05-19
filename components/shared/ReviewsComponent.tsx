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

  // Load testimonials from CMS, props, or fallback to default
  useEffect(() => {
    if (externalTestimonials && externalTestimonials.length > 0) {
      setTestimonials(externalTestimonials);
      return;
    }

    const fetchReviews = async () => {
      try {
        // Fetch all reviews from the 'reviews' collection
        const response = await fetch('/api/cms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            collection: 'reviews',
            limit: 50, // Fetch more than enough
            sort: { createdAt: -1 } // Show newest first
          })
        });
        
        const data = await response.json();
        console.log('Raw CMS response:', data);
        
        // Check both data.rows and data.data for compatibility
        const reviews = data.rows || data.data || [];
        
        if (reviews.length > 0) {
          // Map CMS data to match Testimonial type
          const formattedReviews = reviews.map((review: any) => {
            console.log('Processing review:', review);
            const reviewData = review.data || {};
            const createdAt = review.createdAt || review._createdAt;
            
            return {
              id: review.id || review._id || Math.random().toString(),
              name: reviewData.name || 'Anonymous',
              role: reviewData.role || 'Parent',
              avatar: reviewData.avatar?.url || '/images/avatar-placeholder.jpg',
              rating: reviewData.rating || 5,
              content: reviewData.quote || reviewData.content || reviewData.review || '',
              relationship: reviewData.relationship || reviewData.role || '',
              date: reviewData.date || (createdAt ? new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : '')
            };
          });
          
          console.log('Formatted reviews:', formattedReviews);
          setTestimonials(formattedReviews);
        } else {
          console.log('No reviews found in CMS, using default testimonials');
          const module = await import('@/data/testimonials');
          setTestimonials(module.testimonials);
        }  
      } catch (error) {
        console.error('Error fetching reviews:', error);
        const module = await import('@/data/testimonials');
        setTestimonials(module.testimonials);
      }
    };

    fetchReviews();
  }, [externalTestimonials]);

  // Check if mobile view
  useEffect(() => {
    // Only run this in the browser
    if (typeof window === 'undefined') return;
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
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

  // --- ReviewCard: handles show more/less state per testimonial ---
  function ReviewCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
    const [showFull, setShowFull] = useState(false);
    const maxWords = 40;
    function getTruncatedContent(html: string) {
      const plain = html.replace(/<[^>]+>/g, '');
      const words = plain.split(/\s+/);
      if (words.length <= maxWords) return html;
      let wordCount = 0, idx = 0;
      while (wordCount < maxWords && idx < html.length) {
        if (/\s/.test(html[idx]) && (idx === 0 || !/\s/.test(html[idx-1]))) wordCount++;
        idx++;
      }
      return html.slice(0, idx) + '...';
    }
    useEffect(() => { setShowFull(false); }, [testimonial.id]);
    const isLong = testimonial.content && testimonial.content.replace(/<[^>]+>/g, '').split(/\s+/).length > maxWords;
    const reviewContent = showFull || !isLong
      ? testimonial.content
      : getTruncatedContent(testimonial.content || '');
    return (
      <div className="text-center mt-8">
        <blockquote className="text-xl md:text-2xl italic text-foreground/90 mb-6">
          <span dangerouslySetInnerHTML={{ __html: reviewContent || '' }} />
          {isLong && (
            <button
              className="ml-2 text-primary underline text-sm font-medium hover:text-primary/80 transition-colors"
              onClick={() => setShowFull(v => !v)}
            >
              {showFull ? 'Show Less' : 'Show More'}
            </button>
          )}
        </blockquote>
        <div className="font-bold text-lg text-primary mb-1">{testimonial.name}</div>
        <div className="text-foreground/60 text-base">{testimonial.relationship || testimonial.role}</div>
      </div>
    );
  }

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
            <ReviewCard testimonial={currentTestimonial} />
            
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
