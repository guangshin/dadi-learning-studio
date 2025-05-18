'use client';

import { motion } from 'framer-motion';

interface SectionHeaderCenteredProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeaderCentered({ title, subtitle, className = '' }: SectionHeaderCenteredProps) {
  return (
    <div className={`max-w-4xl mx-auto text-center mb-16 ${className}`}>
      <motion.h2 
        className="text-4xl font-medium text-[#2C2C2C] mb-4 font-quicksand relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
        <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-[#A5D66F] -translate-x-1/2 -translate-y-2"></span>
      </motion.h2>
      
      <motion.p 
        className="text-lg text-[#2C2C2C]/80 max-w-3xl mx-auto leading-relaxed font-opensans"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
