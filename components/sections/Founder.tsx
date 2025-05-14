"use client";

import Image from 'next/image';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';
import { QuoteIcon } from 'lucide-react';

const Founder = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="founder" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Founder</h2>
          <p className="text-gray-700 leading-relaxed">
            The vision and passion behind Da Di Learning Studio
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFE066] rounded-full opacity-20"></div>
              <Image
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
                alt="Ben Lim, Founder of Da Di Learning Studio"
                width={500}
                height={600}
                className="rounded-2xl relative z-10 w-full lg:max-w-lg object-cover h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#9BC53D] rounded-full opacity-20"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl font-bold mb-3">Ben Lim</h3>
            <p className="text-[#9BC53D] font-medium mb-6">Father of 6. Champion of Mindful Education.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              After years of watching his own children struggle with Chinese language learning, Ben realized that exam scores don't equate to language confidence or a love for learning.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              This insight led him to develop the Da Di approach — combining language acquisition with mindfulness practices that build not just academic skills, but confidence, creativity, and a genuine connection to Chinese culture.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              In 2023, Ben and his daughter won the prestigious Speak Mandarin Family Talent Competition, demonstrating the effectiveness of his innovative teaching philosophy.
            </p>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex">
                <QuoteIcon className="text-[#9BC53D] h-8 w-8 mr-4 flex-shrink-0" />
                <p className="text-lg italic text-gray-800">
                  "At Da Di, Mandarin is not a subject. It's a way to connect — with others, with culture, and with self."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;