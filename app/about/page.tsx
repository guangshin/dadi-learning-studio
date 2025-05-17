import { Metadata } from 'next';
import Link from 'next/link';
import { AboutPageHero } from '@/components/sections/AboutPageHero';
import { AboutFounder } from '@/components/sections/AboutFounder';
import { WhyDaDi as WhyDaDiComponent } from '@/components/sections/WhyDaDi';
import { PhilosophyPillarsGrid } from '@/components/sections/PhilosophyPillarsGrid';
import { AboutTeam } from '@/components/sections/AboutTeam';
import { ConfuciusQuote } from '@/components/sections/ConfuciusQuote';
import { AboutCTA as AboutCTASection } from '@/components/sections/AboutCTA';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Da Di Learning Studio',
  description: 'Discover our story, meet our passionate team, and learn about our journey in making Mandarin learning joyful and effective.',
};

function WhyDaDi() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <blockquote className="text-2xl md:text-3xl font-semibold text-accent bg-accent/10 rounded-xl p-8 mb-8 shadow-sm">
            “Learning Chinese should be a joyful, mindful, and life-enriching experience — not just a race for grades.”
          </blockquote>
          <h2 className="text-3xl font-bold text-text mb-6">Why We Exist</h2>
          <p className="text-lg text-foreground/80 mb-6">
            At Da Di, we believe learning Chinese is like opening a treasure chest — full of stories, wisdom, and golden opportunities.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            But in today’s world, with distractions everywhere, many children find it hard to focus — and even harder to love the language.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Traditional Chinese classes often turn into drill, memorize, repeat. The joy disappears.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            That’s why we do things differently.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            We teach Mandarin through real conversations, meaningful stories, guided stillness, and mindful listening.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Our students don’t just prepare for exams — they learn to connect.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Because Mandarin isn’t just a subject. It’s a life skill — a way to express, to belong, to thrive.
          </p>
          <blockquote className="mt-10 p-6 bg-accent/10 rounded-xl text-xl text-accent italic border-l-4 border-accent">
            “学而时习之，不亦说乎？”<br/>
            <span className="block mt-2 text-base text-foreground/70">Is it not a joy to learn and to practice what you have learned?<br/>— Confucius</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-16 bg-[#E4F2E0]">
      <div className="container mx-auto px-4 text-center rounded-3xl shadow-xl max-w-2xl bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">Want to meet our team or experience a class first-hand?</h3>
        <Link href="/contact" className="inline-block mt-6 px-10 py-4 rounded-xl bg-[#7EA16B] hover:bg-[#A3C585] text-white font-bold text-lg shadow-lg transition-colors">Book a Trial Class</Link>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F1]">
      {/* Hero Section */}
      <AboutPageHero />

      {/* Founder Section */}
      <AboutFounder />

      {/* Why Da Di Exists */}
      <WhyDaDiComponent />

      {/* Da Di Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our approach to learning is built on four timeless principles
            </p>
          </div>
          <PhilosophyPillarsGrid />
          <div className="text-center mt-12">
            <Link 
              href="/philosophy" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
            >
              Learn more about our philosophy
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AboutTeam />

      {/* Confucius Quote */}
      <ConfuciusQuote />

      {/* CTA Section */}
      <AboutCTASection />
    </main>
  );
}
