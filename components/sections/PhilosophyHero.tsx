import Image from 'next/image';

export function PhilosophyHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center
        ">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Our Philosophy
            </h1>
            <p className="text-xl text-text/80 mb-8">
              At Da Di Learning Studio, we believe in a holistic approach to language learning that nurtures both the mind and heart.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "The journey of a thousand miles begins with a single step."
              </blockquote>
              <p className="text-right text-gray-500">— 千里之行，始于足下 (Qiānlǐ zhī xíng, shǐ yú zúxià)</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative
          ">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/images/philosophy-hero.jpg"
                  alt="Students learning Mandarin at Da Di"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            
            
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
