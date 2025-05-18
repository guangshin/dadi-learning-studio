'use client';

import { ProgrammeCard } from './ProgrammeCard';
import { BookOpen, Users, MessageSquare, Activity, Heart, BookMarked, GraduationCap, Globe, Music, Palette, Users2, Star } from 'lucide-react';

export function ProgrammesSection() {
  const programs = [
    {
      title: 'Preschool Chinese Programme',
      tagline: 'Mandarin Magic: Growing Confident Little Communicators',
      summary: 'Da Di\'s preschool learners don\'t just memorise — they explore, express, and grow. We create a nurturing environment where children build a joyful relationship with Mandarin from day one.',
      details: [
        'Lessons are full of stories, songs, and movement, encouraging children to speak naturally and listen attentively. At the same time, we begin laying foundations for reading and writing — all while cultivating a calm and curious mindset.',
        'What to expect:',
        '• A warm, playful setting that encourages expressive speech',
        '• Hands-on writing prep through creative play',
        '• Guided mindfulness moments to support focus and self-regulation',
        '• A safe space where your child grows in confidence — ready for Primary 1 and beyond'
      ],
      features: [
        {
          title: 'Immersive Learning',
          description: 'Engaging activities that make Mandarin fun and natural',
          icon: <Globe className="w-3 h-3" />
        },
        {
          title: 'Creative Play',
          description: 'Learning through stories, songs, and imaginative play',
          icon: <Palette className="w-3 h-3" />
        },
        {
          title: 'Social Development',
          description: 'Group activities that build confidence and social skills',
          icon: <Users2 className="w-3 h-3" />
        },
        {
          title: 'Mindfulness',
          description: 'Short exercises to improve focus and emotional regulation',
          icon: <Activity className="w-3 h-3" />
        },
        {
          title: 'Phonics & Sounds',
          description: 'Fun introduction to Mandarin sounds and tones',
          icon: <Music className="w-3 h-3" />
        },
        {
          title: 'Character Recognition',
          description: 'Early exposure to Chinese characters through play',
          icon: <BookMarked className="w-3 h-3" />
        }
      ],
      color: 'green1' as const,
      image: '/images/preschool.jpg'
    },
    {
      title: 'Primary School Chinese Programme',
      tagline: 'Mandarin Adventures: Building Skills, Growing Confidence',
      summary: 'Primary years are where Mandarin confidence truly takes off. At Da Di, we blend MOE-aligned academics with expressive language practice and emotional awareness — so students grow as both thinkers and communicators.',
      details: [
        'Whether your child is discovering storytelling in P1 or preparing for PSLE in P6, we guide them to stay calm, write smart, and speak with joy — all while building strong Mandarin foundations through play, practice, and mindfulness.',
        '',
        'TABS_START',
        'P1–P3',
        'P4–P6',
        'TABS_END'
      ],
      tabContentP1P3: [
        '**Fun with Words, Joy in Learning**',
        'In the lower primary years, we focus on nurturing a love for the language through fun, games, and expressive communication.',
        '',
        '**What to expect:**',
        '• Strong foundation in all language skills (speaking, listening, reading, writing)',
        '• Interactive learning through games, songs, and creative storytelling',
        '• Weekly composition and oral practice',
        '• Confidence-building roleplay and conversations',
        '• Gentle mindfulness for better focus',
        '',
        'Goal: Help every child look forward to Chinese class and use Mandarin naturally.'
      ],
      tabContentP4P6: [
        '**Power Up for PSLE — With Heart and Skills**',
        'Upper primary is when academic pressure rises. We provide the strategy, confidence, and skills to excel.',
        '',
        '**What to expect:**',
        '• Master PSLE composition and comprehension techniques',
        '• Real-world scenarios for practical learning',
        '• Step-by-step exam strategy guidance',
        '• Mindfulness to reduce test anxiety',
        '• Supportive environment for growth',
        '',
        'Outcome: Students communicate powerfully and think clearly under pressure.'
      ],
      features: [
        {
          title: 'MOE-Aligned',
          description: 'Curriculum that complements school learning',
          icon: <GraduationCap className="w-3 h-3" />
        },
        {
          title: 'Exam Preparation',
          description: 'Focused practice for PSLE success',
          icon: <BookOpen className="w-3 h-3" />
        },
        {
          title: 'Interactive Learning',
          description: 'Engaging activities that make learning fun',
          icon: <Users className="w-3 h-3" />
        },
        {
          title: 'Writing Skills',
          description: 'Step-by-step composition guidance',
          icon: <MessageSquare className="w-3 h-3" />
        },
        {
          title: 'Oral Excellence',
          description: 'Confidence-building speaking practice',
          icon: <Activity className="w-3 h-3" />
        },
        {
          title: 'Mindfulness',
          description: 'Techniques to reduce test anxiety',
          icon: <Heart className="w-3 h-3" />
        }
      ],
      color: 'green2' as const,
      image: '/images/primary.jpg'
    },
    {
      title: 'Secondary School Chinese Programme',
      tagline: 'Master Mandarin: Speak Well, Think Deep, Shine Bright',
      summary: 'Mandarin at the secondary level becomes a bridge — to culture, to career, and to self-expression. We equip teens with the tools to write clearly, speak thoughtfully, and approach the O-Level syllabus with purpose and confidence.',
      details: [
        'Through real-world topics, cultural discussions, and structured writing drills, students move beyond memorisation and into mastery — all within a calm, focused learning environment.',
        'What to expect:',
        '• Academic rigour (O-Level focus) with emotional support',
        '• Practical writing: essays, reports, opinion pieces',
        '• Guided oral practice to build fluency and poise',
        '• A safe space for identity, discussion, and growth'
      ],
      features: [
        {
          title: 'Exam Excellence',
          description: 'Targeted O-Level preparation',
          icon: <Star className="w-3 h-3" />
        },
        {
          title: 'Critical Thinking',
          description: 'Analysis of texts and media',
          icon: <MessageSquare className="w-3 h-3" />
        },
        {
          title: 'Debate & Discussion',
          description: 'Confident expression of ideas',
          icon: <Users className="w-3 h-3" />
        },
        {
          title: 'Academic Writing',
          description: 'Structured essay composition',
          icon: <BookOpen className="w-3 h-3" />
        },
        {
          title: 'Business Chinese',
          description: 'Formal communication skills',
          icon: <GraduationCap className="w-3 h-3" />
        },
        {
          title: 'Stress Management',
          description: 'Mindfulness for exam success',
          icon: <Activity className="w-3 h-3" />
        }
      ],
      color: 'green3' as const,
      image: '/images/secondary.jpg'
    },
    {
      title: 'Adult Chinese Programme',
      tagline: 'Mandarin for Life: Connect, Communicate, and Grow',
      summary: 'Da Di Communicators is designed for adults from all walks of life — working professionals, expats, or heritage learners — who want to use Mandarin in real life.',
      details: [
        'Whether you\'re ordering food, chatting with friends, or giving a work presentation, our sessions blend practical phrases, cultural fluency, and confidence-building speaking practice.',
        'What to expect:',
        '• Level-based progression (Beginner to Intermediate+)',
        '• Hands-on conversation and real-life simulations',
        '• Flexible options tailored to your schedule',
        '• Friendly, low-pressure learning environment',
        '• You don\'t have to be perfect — you just have to start.'
      ],
      features: [
        {
          title: 'Conversational Focus',
          description: 'Real-life speaking practice',
          icon: <MessageSquare className="w-3 h-3" />
        },
        {
          title: 'Business Chinese',
          description: 'Workplace communication skills',
          icon: <Users className="w-3 h-3" />
        },
        {
          title: 'Cultural Insights',
          description: 'Understanding Chinese culture',
          icon: <Globe className="w-3 h-3" />
        },
        {
          title: 'Flexible Learning',
          description: 'Tailored to your schedule',
          icon: <Activity className="w-3 h-3" />
        },
        {
          title: 'Practical Skills',
          description: 'For travel and daily life',
          icon: <BookMarked className="w-3 h-3" />
        },
        {
          title: 'Confidence Building',
          description: 'Supportive learning environment',
          icon: <Star className="w-3 h-3" />
        }
      ],
      color: 'yellow' as const,
      image: '/images/adult.jpg'
    }
  ];

  // Map program types to their corresponding IDs
  const programTypes = ['preschool', 'primary', 'secondary', 'adult'];

  return (
    <section id="programmes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programmes</h2>
          <p className="text-lg text-gray-600">
            Designed to meet learners at every stage of their Mandarin journey
          </p>
        </div>
        
        <div className="space-y-24">
          {programs.map((program, index) => {
            // Clean up program props by removing unused properties
            const { testimonial, showGalleryAfter, ...programProps } = program as any;
            // Add ID based on program type
            const programId = programTypes[index] || `program-${index}`;
                            
            return (
              <div key={index} id={programId} className="scroll-mt-24">
                <ProgrammeCard {...programProps} />
              </div>
            );
          })}
        </div>

        {/* Single instance of Moments at Da Di Gallery */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Moments at Da Di
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-xs">Classroom moment {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
