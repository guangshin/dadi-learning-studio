import { CalendarIcon, BookOpenIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    id: 1,
    year: '2010',
    title: 'Humble Beginnings',
    description: 'Started as a small tuition center in Kampong Ubi, focusing on preschool Mandarin.',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    year: '2014',
    title: 'Expanding Horizons',
    description: 'Launched primary school programs and introduced our unique teaching methodology.',
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    year: '2018',
    title: 'New Location',
    description: 'Opened our second center to accommodate growing student numbers.',
    icon: CalendarIcon,
  },
  {
    id: 4,
    year: '2023',
    title: 'Digital Transformation',
    description: 'Launched online learning platform to reach students beyond Singapore.',
    icon: SparklesIcon,
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-xl text-foreground/70">
            From a small classroom to a leading Mandarin learning center
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-accent/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 px-4 mb-8 md:mb-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent/10 text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                    <p className="text-foreground/70 mb-2">{item.description}</p>
                    <span className="text-sm font-medium text-accent">{item.year}</span>
                  </div>
                  
                  {/* Middle dot */}
                  <div className="hidden md:flex items-center justify-center w-6 h-6 mx-4 bg-accent/10 rounded-full z-10"></div>
                  
                  {/* Spacer for even items */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
