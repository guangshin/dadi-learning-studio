import Image from 'next/image';

export function AboutFounder() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Founder — <span className="text-primary">Ben Lim</span>
              </h2>
              
              <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic border-l-4 border-primary pl-6 py-2 mb-8">
                Father of six. Champion of mindful education. Builder of safe spaces to grow in Mandarin and in life.
              </blockquote>

              <div className="space-y-6 text-foreground/80">
                <p>
                  With over 15 years of experience in education, Ben has dedicated his life to creating learning environments where children thrive. As a father of six, he understands the challenges and joys of raising bilingual children in today's fast-paced world.
                </p>
                <p>
                  It was while teaching his own children that Ben had a profound realization. Despite excelling in exams, his older children struggled to speak Mandarin with confidence. This disconnect between academic success and practical language use became the catalyst for change.
                </p>
                <p>
                  In 2023, Ben and his youngest daughter took the stage together, winning the prestigious Speak Mandarin Family Talent Competition. This experience reinforced his belief that language learning should be joyful, engaging, and deeply connected to real life.
                </p>
                <p className="font-medium">
                  In 2010, Ben founded <span className="text-primary">My Little Gems Preschool</span> — a bilingual, heart-led preschool that continues to thrive today, laying the foundation for what would eventually become Da Di Learning Studio.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-md mx-auto shadow-xl">
              <Image
                src="/BenFounder.png"
                alt="Ben Lim, Founder of Da Di Learning Studio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
