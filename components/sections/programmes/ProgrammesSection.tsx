'use client';

import { ProgrammeCard } from './ProgrammeCard';

export function ProgrammesSection() {
  const programs = [
    {
      title: 'Preschool Chinese Programme',
      tagline: 'Mandarin Magic: Growing Confident Little Communicators',
      summary: 'Through songs, games, stories, and lots of imagination, children build a strong, joyful relationship with Mandarin — right from the start. Our programme lays the foundation for confident, kind, and curious learners.',
      details: [
        'Mandarin immersion with music, rhymes, storytelling',
        'Play-based learning strategies',
        'Speech development through role-play and conversation',
        'Early writing via movement-based character recognition',
        'Hanyu Pinyin introduction through songs and games',
        '15-minute mindfulness in every session',
        'Prepares for Primary 1 with emotional and academic readiness'
      ],
      color: 'green' as const,
      image: '/images/preschool.jpg'
    },
    {
      title: 'Primary School Chinese Programme',
      tagline: 'Mandarin Adventures: Building Skills, Growing Confidence',
      summary: 'Our Primary School programme is designed to build a strong foundation in Mandarin while making learning enjoyable and engaging for young learners.',
      details: [
        'P1–P3: Fun and engaging lessons aligned with the MOE syllabus',
        'P4–P6: PSLE preparation with a focus on deep understanding',
        'Composition writing, comprehension, and oral techniques',
        'Real-life writing prompts and scenario-based practices',
        'Mindfulness tools for stress management and focus',
        'Encouraging logical thinking and self-expression'
      ],
      color: 'yellow' as const,
      image: '/images/primary.jpg'
    },
    {
      title: 'Secondary School Chinese Programme',
      tagline: 'Master Mandarin: Speak Well, Think Deep, Shine Bright',
      summary: 'We move beyond memorisation and exams to develop fluent, thoughtful communicators. Students gain tools to express ideas clearly in academic, professional, and personal contexts.',
      details: [
        'Creative essay writing and structured oral responses',
        'Formal/business Mandarin communication (emails, letters)',
        'Group discussions and debate training',
        'O-Level strategies and timed practices',
        'Mindfulness for clarity and calm under exam pressure',
        'Critical analysis of texts and media'
      ],
      color: 'green' as const,
      image: '/images/secondary.jpg'
    },
    {
      title: 'Adult Chinese Programme',
      tagline: 'Mandarin for Life: Connect, Communicate, and Grow',
      summary: 'For adults and professionals who want to speak confidently and navigate the Mandarin-speaking world. Our lessons are conversational, practical, and stress-free.',
      details: [
        'Everyday Mandarin for travel, dining, daily life',
        'Workplace-focused Mandarin (emails, meetings, presentations)',
        'Role-play and interactive real-life simulations',
        'Vocabulary retention and pronunciation drills',
        'Progressive fluency goals with real-time feedback',
        'Cultural insights and business etiquette'
      ],
      color: 'yellow' as const,
      image: '/images/adult.jpg'
    }
  ];

  return (
    <section id="programmes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programmes</h2>
          <p className="text-lg text-gray-600">
            Designed to meet learners at every stage of their Mandarin journey
          </p>
        </div>
        
        <div className="space-y-8">
          {programs.map((program, index) => (
            <ProgrammeCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
