export function ProgramIntro() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Our Programmes
          </h1>
          <p className="text-xl text-text/80 mb-8">
            At Da Di Learning Studio, we believe in making Mandarin learning joyful, meaningful, and empowering for every student, regardless of age or proficiency level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              🎯 Personalized Learning
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent text-text">
              🎨 Interactive Activities
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              📚 Comprehensive Curriculum
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
