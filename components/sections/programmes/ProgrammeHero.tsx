import Link from 'next/link';

export function ProgrammeHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-[#f5f7f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            Mandarin Programmes for Every Stage of Growth
          </h1>
          <p className="text-xl text-text/80 mb-8 max-w-3xl mx-auto">
            From confident little communicators to fluent professionals, our programmes empower every learner with joy, mindfulness, and real-life Mandarin skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#programmes"
              className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Explore Our Programmes
            </Link>
            <Link 
              href="/contact?subject=Trial%20Class"
              className="px-8 py-4 bg-white text-primary border-2 border-primary font-medium rounded-lg hover:bg-primary/5 transition-colors duration-200"
            >
              Book a Trial Class
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
