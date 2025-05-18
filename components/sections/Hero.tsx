'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CalligraphyAnimation from './CalligraphyAnimation';

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToContact}
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-green-600 hover:bg-green-50 hover:border-green-700 text-green-700 hover:text-green-800 transition-colors"
              >
                Learn More
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

      {/* Scroll indicator */}
      <motion.div 
        className={cn(
          'absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center',
          'transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-muted-foreground/70 rounded-full"
            animate={{
              y: [0, 10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
