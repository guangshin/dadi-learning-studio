import Image from 'next/image';

export function AboutPageHero() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/classroom.jpg"
                alt="Da Di Learning Studio classroom"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              More Than Language.<br />
              <span className="text-primary">A Way to Grow.</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Mandarin at Da Di is more than memorisation. It's a life-enriching journey of connection, 
              presence, and purpose — guided by decades of experience and a heart for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
