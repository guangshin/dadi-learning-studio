export function CallToAction() {
  return (
    <section className="py-16 bg-accentground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-foreground/70">
            Ready to Begin Your Mandarin Journey?
          </h2>
          <p className="text-xl text-text mb-8 max-w-2xl mx-auto">
            Experience the Da Di difference with a trial class. Our dedicated teachers are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-primary transition-colors duration-200"
            >
              Book a Trial Class
            </a>
            <a
              href="/programmes"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-text bg-primary hover:bg-accent transition-colors duration-200"
            >
              Explore Our Programmes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
