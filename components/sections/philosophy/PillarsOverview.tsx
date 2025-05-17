"use client";

import { motion } from 'framer-motion';

const pillars = [
  {
    chinese: '问',
    pinyin: 'Wèn',
    title: 'Ask',
    description: 'Cultivate curiosity through meaningful questions.',
    color: '#4C9A2A',
    bgColor: 'bg-[#4C9A2A]/10',
  },
  {
    chinese: '思',
    pinyin: 'Sī',
    title: 'Analyze',
    description: 'Encourage mindful reflection and critical thinking.',
    color: '#7BC043',
    bgColor: 'bg-[#7BC043]/10',
  },
  {
    chinese: '修',
    pinyin: 'Xiū',
    title: 'Apply',
    description: 'Apply Mandarin in real life with purpose and kindness.',
    color: '#B2D732',
    bgColor: 'bg-[#B2D732]/10',
  },
  {
    chinese: '静',
    pinyin: 'Jìng',
    title: 'Stillness',
    description: 'Be still, focused, and emotionally present.',
    color: '#FDE74C',
    bgColor: 'bg-[#FDE74C]/10',
  },
];

export function PillarsOverview() {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4 font-quicksand">
            The Four Pillars of Our Approach
          </h2>
          <p className="text-xl text-[#2C2C2C]/80 max-w-3xl mx-auto font-opensans">
            Our teaching philosophy is built on these interconnected principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.chinese}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${pillar.bgColor} hover:shadow-lg transition-all duration-300`}
            >
              <div 
                className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-4xl font-bold"
                style={{ color: pillar.color }}
              >
                {pillar.chinese}
              </div>
              <h3 className="text-xl font-bold mb-1 text-[#2C2C2C] font-quicksand">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#2C2C2C]/80 mb-2 font-opensans">
                {pillar.pinyin}
              </p>
              <p className="text-[#2C2C2C]/90 font-opensans">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
