"use client";

import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import PhilosophyCard from '../shared/PhilosophyCard';
import { QuoteIcon } from 'lucide-react';

const Philosophy = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="philosophy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our teaching approach is built on four pillars that cultivate not just language skills, but lifelong habits of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PhilosophyCard 
              character="思" 
              pinyin="Sī" 
              meaning="Analyse" 
              description="Think deeply, reflect mindfully"
              color="#BFE140"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PhilosophyCard 
              character="修" 
              pinyin="Xiū" 
              meaning="Apply" 
              description="Use language in real life"
              color="#FFE066"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PhilosophyCard 
              character="静" 
              pinyin="Jìng" 
              meaning="Stillness" 
              description="Breathe, focus, grow with calm"
              color="#9BC53D"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12"
        >
          <div className="flex items-start">
            <QuoteIcon className="text-[#9BC53D] h-10 w-10 mr-4 flex-shrink-0" />
            <div>
              <p className="text-xl md:text-2xl font-medium mb-3 text-gray-800">
                "心静方能凝神，聚积会神万事通。"
              </p>
              <p className="text-gray-600">
                When the heart is still, the mind can focus — and with focus, all things are possible.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white"
            onClick={() => {
              const programmesSection = document.getElementById('programmes');
              if (programmesSection) {
                programmesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Experience Our Approach
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;