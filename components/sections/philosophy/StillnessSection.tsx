"use client";

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '🧠',
    title: 'Focus with clarity',
    description: 'Enhance concentration and mental clarity for better learning outcomes.'
  },
  {
    icon: '💛',
    title: 'Respond with kindness',
    description: 'Develop emotional intelligence and compassionate communication.'
  },
  {
    icon: '🌸',
    title: 'Cultivate gratitude',
    description: 'Foster a positive mindset and appreciation for the learning journey.'
  }
];

export function StillnessSection() {
  return (
    <section className="py-20 bg-[#A5D66F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#FCE569] mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 p-8 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6 font-quicksand">
                静 (Jìng) – The Heart of Learning at Da Di
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-[#2C2C2C]/90 mb-6 font-opensans">
                  At Da Di, each Chinese lesson begins with a 15-minute mindfulness practice — breathing, reflection, and emotional reset. Through the practice of 静 (Stillness), children cultivate focus, kindness, and gratitude.
                </p>
                
                <div className="space-y-4 mt-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-white/50 rounded-lg"
                    >
                      <span className="text-3xl">{benefit.icon}</span>
                      <div>
                        <h4 className="font-bold text-[#2C2C2C] font-quicksand">{benefit.title}</h4>
                        <p className="text-[#2C2C2C]/80 text-sm font-opensans">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <p className="mt-8 text-[#2C2C2C]/90 font-opensans">
                  These mindful moments help our learners become not just better speakers — but better people: calm, resilient, and ready to connect deeply with others.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/philosophy/mindfulness.jpg)',
                backgroundColor: '#A5D66F'
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
