'use client';
import { motion } from 'framer-motion';

const pillars = [
  {
    id: 1,
    chinese: '问',
    pinyin: 'Wèn',
    english: 'Ask',
    description: 'Encouraging curiosity and inquiry-based learning. We believe that asking questions is the foundation of understanding.',
    color: 'from-accent to-primary',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
  },
  {
    id: 2,
    chinese: '思',
    pinyin: 'Sī',
    english: 'Analyze',
    description: 'Developing critical thinking and analytical skills to understand the deeper meaning behind the language.',
    color: 'from-primary to-accent',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
  {
    id: 3,
    chinese: '修',
    pinyin: 'Xiū',
    english: 'Apply',
    description: 'Practical application of language skills in real-life situations to ensure meaningful learning.',
    color: 'from-primary to-accent',
    bgColor: 'bg-background',
    textColor: 'text-text',
  },
  {
    id: 4,
    chinese: '静',
    pinyin: 'Jìng',
    english: 'Stillness',
    description: 'Cultivating mindfulness and focus to enhance learning and retention of the language.',
    color: 'from-primary to-accent',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
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

export function PhilosophyPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Four Pillars of Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our teaching methodology is built on these four interconnected principles
          </p>
        </div>

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
              className={`p-6 rounded-2xl ${pillar.bgColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-3xl font-bold text-white bg-primary`}>
                {pillar.chinese}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{pillar.english}</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">{pillar.pinyin}</p>
              <p className="text-gray-700">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 bg-background rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Our Approach Works
            </h3>
            <p className="text-gray-600 mb-6">
              By combining these four principles, we create a learning environment where students don't just memorize characters and phrases, but develop a deep, lasting understanding and appreciation for the Chinese language and culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 rounded-lg p-2">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Proven Results</h4>
                  <p className="mt-1 text-gray-600">Our students consistently achieve top scores in school examinations and language proficiency tests.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Safe Learning Environment</h4>
                  <p className="mt-1 text-gray-600">We prioritize creating a supportive space where students feel comfortable making mistakes and growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
