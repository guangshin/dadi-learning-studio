"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import PhilosophyCard from '../shared/PhilosophyCard';
import { QuoteIcon } from 'lucide-react';

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section id="philosophy" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-text leading-relaxed">
            Our teaching approach is built on four pillars that cultivate not just language skills, but lifelong habits of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PhilosophyCard 
              character="问" 
              pinyin="Wèn" 
              meaning="Ask" 
              description="Be curious, explore, express"
              color="#9BC53D"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PhilosophyCard 
              character="思" 
              pinyin="Sī" 
              meaning="Analyse" 
              description="Think deeply, reflect mindfully"
              color="#9BC53D"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PhilosophyCard 
              character="行" 
              pinyin="Xíng" 
              meaning="Act" 
              description="Practice, apply, create"
              color="#9BC53D"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PhilosophyCard 
              character="悟" 
              pinyin="Wù" 
              meaning="Understand" 
              description="Gain insight, achieve mastery"
              color="#9BC53D"
            />
          </motion.div>
        </div>

        <motion.div 
          className="bg-background p-8 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <QuoteIcon className="w-8 h-8 text-[#9BC53D] mb-4" />
          <blockquote className="text-xl italic text-text mb-6">
            "At Da Di, we believe language learning is not just about memorizing words and grammar rules. 
            It's about developing a deeper understanding of oneself and the world through the lens of a new language."
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#9BC53D] flex items-center justify-center text-white font-bold text-xl mr-4">
              BL
            </div>
            <div>
              <p className="font-semibold">Ben Lim</p>
              <p className="text-foreground/70">Founder & Lead Educator</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
