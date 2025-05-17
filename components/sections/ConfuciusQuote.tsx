export function ConfuciusQuote() {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-8xl opacity-5 font-serif">"</div>
          <blockquote className="relative z-10 text-2xl md:text-3xl font-medium text-foreground/90 italic mb-6">
            学而时习之，不亦说乎？
          </blockquote>
          <p className="text-xl text-foreground/80">
            "Is it not a joy to learn and to practice what you have learned?"
          </p>
          <p className="mt-4 text-foreground/60">— Confucius</p>
        </div>
      </div>
    </section>
  );
}
