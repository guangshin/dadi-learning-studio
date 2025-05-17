"use client";

import { motion } from 'framer-motion';

interface PillarDetailProps {
  chinese: string;
  pinyin: string;
  title: string;
  proverb: string;
  translation: string;
  description: string;
  color: string;
  reverse?: boolean;
}

export function PillarDetail({
  chinese,
  pinyin,
  title,
  proverb,
  translation,
  description,
  color,
  reverse = false,
}: PillarDetailProps) {
  return (
    <section className={`py-16 ${reverse ? 'bg-white' : 'bg-[#FAF9F6]'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <span 
                className="text-9xl font-bold opacity-10 absolute -top-10 -left-6"
                style={{ color }}
              >
                {chinese}
              </span>
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4 relative z-10 font-quicksand">
                {chinese} · {title}
              </h2>
              <p className="text-xl text-[#2C2C2C]/80 mb-6 font-opensans">
                {pinyin}
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 relative">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: color }}></div>
                <p className="text-2xl italic text-[#2C2C2C] mb-2 font-noto">
                  "{proverb}"
                </p>
                <p className="text-[#2C2C2C]/70 font-opensans">
                  "{translation}"
                </p>
              </div>
              
              <p className="text-[#2C2C2C]/90 leading-relaxed font-opensans">
                {description}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/images/philosophy/${chinese.toLowerCase()}.jpg)`,
                backgroundColor: `${color}20`
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
