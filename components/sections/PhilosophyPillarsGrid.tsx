'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    id: 1,
    chinese: '问',
    pinyin: 'Wèn',
    english: 'Ask',
    description: 'Encouraging curiosity and inquiry-based learning. We believe that asking questions is the foundation of understanding.',
    color: '#4C9A2A',
    bgColor: 'bg-[#4C9A2A]/10',
    textColor: 'text-[#4C9A2A]',
  },
  {
    id: 2,
    chinese: '思',
    pinyin: 'Sī',
    english: 'Analyze',
    description: 'Developing critical thinking and analytical skills to understand the deeper meaning behind the language.',
    color: '#7BC043',
    bgColor: 'bg-[#7BC043]/10',
    textColor: 'text-[#7BC043]',
  },
  {
    id: 3,
    chinese: '行',
    pinyin: 'Xíng',
    english: 'Act',
    description: 'Practical application of language skills in real-life situations to ensure meaningful learning.',
    color: '#B2D732',
    bgColor: 'bg-[#B2D732]/10',
    textColor: 'text-[#B2D732]',
  },
  {
    id: 4,
    chinese: '悟',
    pinyin: 'Wù',
    english: 'Understand',
    description: 'Gaining insight and achieving mastery through reflection and understanding.',
    color: '#FDE74C',
    bgColor: 'bg-[#FDE74C]/10',
    textColor: 'text-[#FDE74C]',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PhilosophyPillarsGrid() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {pillars.map((pillar) => (
        <motion.div
          key={pillar.id}
          variants={item}
          className={`p-6 rounded-2xl ${pillar.bgColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[${pillar.color}]/20`}
          style={{
            '--pillar-color': pillar.color,
            '--pillar-bg-color': `${pillar.color}1a`,
            '--pillar-hover-color': `${pillar.color}33`,
          } as React.CSSProperties}
        >
          <div 
            className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-3xl font-bold text-white"
            style={{ backgroundColor: pillar.color }}
          >
            {pillar.chinese}
          </div>
          <h3 className={`text-xl font-bold mb-1 ${pillar.textColor}`}>{pillar.english}</h3>
          <p className={`text-sm font-medium mb-3 ${pillar.textColor}/80`}>{pillar.pinyin}</p>
          <p className="text-foreground/80">{pillar.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
