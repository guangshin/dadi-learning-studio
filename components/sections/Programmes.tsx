"use client";

import { Button } from '@/components/ui/button';
import ProgrammeCard from '../shared/ProgrammeCard';
import { BabyIcon, RocketIcon, TargetIcon, UserIcon } from 'lucide-react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';

const Programmes = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Programmes Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our age-appropriate programmes nurture language skills and cultivate mindfulness, 
            designed specifically for each stage of learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProgrammeCard
              title="Preschool"
              subtitle="Ages 3–7"
              description="Mandarin Magic: Growing Confident Little Communicators"
              icon={<BabyIcon className="w-7 h-7" />}
              color="#FFE066"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProgrammeCard
              title="Primary School"
              subtitle="P1–P6"
              description="Mandarin Adventures: Building Skills, Growing Confidence"
              icon={<RocketIcon className="w-7 h-7" />}
              color="#9BC53D"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProgrammeCard
              title="Secondary School"
              subtitle="Sec 1–4"
              description="Master Mandarin: Speak Well, Think Deep, Shine Bright"
              icon={<TargetIcon className="w-7 h-7" />}
              color="#BFE140"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProgrammeCard
              title="Adult Learners"
              subtitle="All Levels"
              description="Mandarin for Life: Connect, Communicate, and Grow"
              icon={<UserIcon className="w-7 h-7" />}
              color="#9BC53D"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            className="border-[#9BC53D] text-[#9BC53D] hover:bg-[#9BC53D]/10"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Full Programmes Breakdown
          </Button>
          <Button 
            className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white ml-4"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Trial Class
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programmes;