import { BookOpenIcon, AcademicCapIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    id: 1,
    title: 'Preschool',
    subtitle: 'Mandarin Magic (Ages 3-6)',
    description: 'Fun, play-based learning that introduces young children to Mandarin through songs, stories, and interactive activities.',
    icon: SparklesIcon,
    features: [
      'Phonics & vocabulary building',
      'Storytelling & role-play',
      'Arts & crafts in Mandarin',
      'Small class sizes',
    ],
    color: 'accent',
  },
  {
    id: 2,
    title: 'Primary School',
    subtitle: 'Mandarin Adventures (P1-P6)',
    description: 'Comprehensive program aligned with MOE syllabus, focusing on building strong foundations in reading, writing, and speaking.',
    icon: BookOpenIcon,
    features: [
      'Composition & comprehension',
      'Oral & listening skills',
      'Exam preparation',
      'Interactive e-learning',
    ],
    color: 'primary',
  },
  {
    id: 3,
    title: 'Secondary School',
    subtitle: 'Master Mandarin (Sec 1-5)',
    description: 'Advanced program focusing on essay writing, comprehension, and critical thinking skills for academic excellence.',
    icon: AcademicCapIcon,
    features: [
      'Essay writing techniques',
      'Comprehension strategies',
      'Oral exam preparation',
      'Literature appreciation',
    ],
    color: 'neutral',
  },
  {
    id: 4,
    title: 'Adults',
    subtitle: 'Mandarin for Life',
    description: 'Practical Mandarin courses for adults, from beginner to advanced levels, focusing on real-life communication.',
    icon: UserGroupIcon,
    features: [
      'Conversational Mandarin',
      'Business Chinese',
      'HSK preparation',
      'Cultural immersion',
    ],
    color: 'primary',
  },
];

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/30',
    hover: 'hover:bg-primary/20',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/30',
    hover: 'hover:bg-accent/20',
  },
  neutral: {
    bg: 'bg-background',
    text: 'text-text',
    border: 'border-gray-200',
    hover: 'hover:bg-background/80',
  },
};

export function ProgramGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            const colors = colorMap[program.color as keyof typeof colorMap];
            
            return (
              <div 
                key={program.id}
                className={`relative p-6 rounded-xl border ${colors.border} ${colors.bg} ${colors.hover} transition-colors duration-300 h-full flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-4">{program.subtitle}</p>
                <p className="text-foreground/70 mb-6 flex-grow">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className={`h-5 w-5 ${colors.text} mr-2 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={`/contact?program=${encodeURIComponent(program.title)}`}
                  className={`mt-auto inline-flex items-center font-medium ${colors.text} hover:underline`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which program is right for you?</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Book a free consultation with our education specialists to assess your needs and recommend the best learning path.
          </p>
          <a
            href="/contact?subject=Consultation"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-primary transition-colors duration-200"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
