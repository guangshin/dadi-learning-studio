"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/Where-Mandarin-meets-Mindfulness.png"
                alt="Where Mandarin meets Mindfulness illustration"
                width={600}
                height={400}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-[#9BC53D] font-semibold">大地</p>
                <p className="text-sm text-gray-700">Earth. Foundation. Growth.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Where Mandarin meets Mindfulness
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Da Di Learning Studio, we believe in nurturing the mind and spirit — just as the earth nurtures life.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Inspired by the quiet strength and generosity of 大地, our unique programme blends the richness of the Chinese language with the practice of mindfulness.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether it's learning to speak Mandarin fluently, training the mind to be present, or cultivating kindness and resilience, Da Di is where learners grow — deep, steady, and strong.
              </p>
              <Button 
                className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white"
                onClick={() => {
                  const philosophySection = document.getElementById('philosophy');
                  if (philosophySection) {
                    philosophySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Discover Our Philosophy
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;