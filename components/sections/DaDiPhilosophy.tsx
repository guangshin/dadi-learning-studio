export function DaDiPhilosophy() {
  const pillars = [
    {
      character: '问',
      pinyin: 'Wèn',
      title: 'Ask',
      description: 'Be curious. Ask questions boldly.'
    },
    {
      character: '思',
      pinyin: 'Sī',
      title: 'Analyze',
      description: 'Think deeply. Observe and reflect.'
    },
    {
      character: '修',
      pinyin: 'Xiū',
      title: 'Apply',
      description: 'Use Mandarin in real-life situations.'
    },
    {
      character: '静',
      pinyin: 'Jìng',
      title: 'Be Still',
      description: 'Focus with calm and intention.'
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Da Di Philosophy
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our approach to learning is built on four timeless principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl font-bold text-primary mb-4">
                {pillar.character}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-foreground/60 mb-2">{pillar.pinyin}</p>
              <p className="text-foreground/80">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
