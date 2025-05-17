import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Li Wei',
    role: 'Lead Mandarin Educator',
    quote: 'I teach so children feel brave using Mandarin.',
    image: '/images/team/li-wei.jpg'
  },
  {
    name: 'Mei Ling',
    role: 'Early Years Specialist',
    quote: "Every child's first Mandarin words are magical moments.",
    image: '/images/team/mei-ling.jpg'
  },
  {
    name: 'Jia Hao',
    role: 'Primary Program Coordinator',
    quote: 'Building confidence through storytelling and play.',
    image: '/images/team/jia-hao.jpg'
  },
  {
    name: 'Xiao Ying',
    role: 'Mindfulness & Mandarin Coach',
    quote: 'Language learning begins with presence and patience.',
    image: '/images/team/xiao-ying.jpg'
  }
];

export function AboutTeam() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Educators
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            At Da Di, our educators are mentors — not just instructors. They guide students with warmth, presence, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-foreground/80 italic">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
