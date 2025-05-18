"use client";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#A5D66F]/10">
      <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6 font-quicksand">
              Get In Touch
            </h1>
            <div className="w-20 h-1.5 bg-[#A5D66F] rounded-full mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-[#2C2C2C]/80 leading-relaxed font-opensans mb-8">
              Ready to experience the Da Di difference? Book a trial class or reach out with any questions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
