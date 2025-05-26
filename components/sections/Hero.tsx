'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CalligraphyAnimation from './CalligraphyAnimation';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed scrollToContact as we're using direct navigation now

  return (
    <section 
      id="home"
      className={cn(
        'relative min-h-screen flex flex-col md:flex-row items-center pt-20 pb-12 overflow-hidden',
        'bg-gradient-to-b from-background to-background/80',
        'transition-colors duration-200'
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 flex-1 flex flex-col-reverse md:flex-row items-center justify-between w-full">
        {/* Headline and CTA */}
        <div className="max-w-3xl w-full md:w-2/3 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Mandarin.</span>{' '}
              <span className="text-foreground/90">Mindfulness.</span>{' '}
              <span className="text-foreground/80">Mastery.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A new kind of Chinese enrichment — where language meets life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
                <Link href="/programmes" className="text-white hover:text-white">
                  Start Your Journey
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-green-600 hover:bg-green-50 hover:border-green-700 text-green-700 hover:text-green-800 transition-colors"
              >
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Calligraphy Animation */}
        <motion.div 
          className={cn(
            'w-full md:w-1/3 flex justify-center items-center',
            'transition-opacity duration-300',
            isVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CalligraphyAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator removed as requested */}
    </section>
  );
};

export default Hero;
