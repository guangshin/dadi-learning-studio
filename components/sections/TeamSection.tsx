import Image from 'next/image';

const team = [
  {
    name: 'Ben Lim',
    role: 'Founder & Lead Educator',
    bio: 'With over 15 years of teaching experience, Ben is passionate about making Mandarin learning fun and effective.',
    image: '/images/team/ben-lim.jpg',
  },
  {
    name: 'Wei Ling',
    role: 'Head of Preschool Program',
    bio: 'Specializing in early childhood education, Wei Ling creates engaging activities for our youngest learners.',
    image: '/images/team/wei-ling.jpg',
  },
  {
    name: 'Jia Hui',
    role: 'Primary School Specialist',
    bio: 'Jia Hui helps primary school students build strong foundations in Mandarin through interactive lessons.',
    image: '/images/team/jia-hui.jpg',
  },
  {
    name: 'Marcus Tan',
    role: 'Secondary & Adult Program',
    bio: 'Marcus focuses on exam preparation and business Mandarin for our older students.',
    image: '/images/team/marcus-tan.jpg',
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-foreground/70">
            Passionate educators dedicated to your Mandarin learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4 w-full">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-foreground/70 line-clamp-3">{member.bio}</p>
                <button className="mt-4 text-primary hover:text-accent font-medium text-sm flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Join our team of passionate educators
          </p>
          <a
            href="/contact?subject=Career"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary transition-colors duration-200"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
