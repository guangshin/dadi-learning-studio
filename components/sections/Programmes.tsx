"use client";

import { Button } from '@/components/ui/button';
import ProgrammeCard from '../shared/ProgrammeCard';
import { BabyIcon, RocketIcon, TargetIcon, UserIcon, BookOpen, Users, MessageSquare, Activity } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Programmes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const programmes = [
    {
      title: "Preschool",
      subtitle: "Ages 3–7",
      description: "Mandarin Magic: Growing Confident Little Communicators",
      icon: <BabyIcon className="w-6 h-6" />,
      color: "#FFD54F",
      features: [
        { icon: <BookOpen className="w-4 h-4" />, text: "Interactive Storytelling" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Basic Conversation" },
        { icon: <Activity className="w-4 h-4" />, text: "Fun Activities" }
      ]
    },
    {
      title: "Primary School",
      subtitle: "P1–P6",
      description: "Mandarin Adventures: Building Skills, Growing Confidence",
      icon: <RocketIcon className="w-6 h-6" />,
      color: "#81C784",
      features: [
        { icon: <BookOpen className="w-4 h-4" />, text: "Reading & Writing" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Conversation Practice" },
        { icon: <Users className="w-4 h-4" />, text: "Group Activities" }
      ]
    },
    {
      title: "Secondary School",
      subtitle: "Sec 1–4",
      description: "Master Mandarin: Speak Well, Think Deep, Shine Bright",
      icon: <TargetIcon className="w-6 h-6" />,
      color: "4CAF50",
      features: [
        { icon: <BookOpen className="w-4 h-4" />, text: "Advanced Curriculum" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Debate & Discussion" },
        { icon: <Activity className="w-4 h-4" />, text: "Exam Preparation" }
      ]
    },
    {
      title: "Adult Learners",
      subtitle: "All Levels",
      description: "Mandarin for Life: Connect, Communicate, and Grow",
      icon: <UserIcon className="w-6 h-6" />,
      color: "#81C784",
      features: [
        { icon: <MessageSquare className="w-4 h-4" />, text: "Conversational Focus" },
        { icon: <BookOpen className="w-4 h-4" />, text: "Practical Vocabulary" },
        { icon: <Users className="w-4 h-4" />, text: "Cultural Insights" }
      ]
    }
  ];

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Mandarin Programmes for Every Stage</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From confident little communicators to fluent professionals, our programmes empower every learner with joy, mindfulness, and real-life Mandarin skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programmes.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-6 pb-4 flex-1">
                  <div className={`w-12 h-12 rounded-full bg-opacity-20 flex items-center justify-center mb-4`} style={{ backgroundColor: `${program.color}20` }}>
                    <span style={{ color: program.color }}>{program.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{program.subtitle}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mt-4 space-y-2">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-gray-400">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Button 
                    className="w-full" 
                    style={{ backgroundColor: program.color, color: program.title === 'Preschool' ? '#333' : 'white' }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10 text-base h-12 px-8"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book a Free Trial Class
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programmes;
