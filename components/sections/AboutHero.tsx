import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Our Story
            </h1>
            <p className="text-xl text-text/80 mb-8">
              Founded with a passion for Mandarin education, Da Di Learning Studio has been helping students of all ages discover the joy of learning Chinese.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-pink-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Passionate native-speaking teachers</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-pink-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Proven teaching methodology</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-pink-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Engaging and interactive lessons</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Students learning Mandarin at Da Di"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-xl font-medium">Ben Lim</p>
                  <p className="text-accent">Founder, Da Di Learning Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
