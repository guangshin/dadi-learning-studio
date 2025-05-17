import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/AboutHero';
import Founder from '@/components/sections/Founder';
import { Timeline } from '@/components/sections/Timeline';
import { TeamSection } from '@/components/sections/TeamSection';
import Link from 'next/link';

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
      <AboutHero />

      {/* Founder Section */}
      <section className="py-20 bg-[#E4F2E0]">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row items-center gap-16 rounded-3xl shadow-lg bg-white">
          <div className="lg:w-1/2 px-6 py-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">A Father. An Educator. A Mission.</h2>
            <div className="text-lg text-foreground/80 space-y-4">
              <p>Ben Lim is a father of six and an educator with over 15 years of experience nurturing young minds.</p>
              <p>He has seen the full arc of a child’s Mandarin journey — the early enthusiasm, the pressure of exams, and sometimes, the eventual silence.</p>
              <p>When his older children scored well in school but struggled to speak fluently, Ben realized something painful but powerful: academic success doesn’t guarantee language confidence.</p>
              <p>Determined to change this pattern, Ben stepped onto the national stage with his youngest daughter in 2023 and won the Speak Mandarin Campaign Family Talent Competition.</p>
              <p>Through that joyful experience, he rediscovered what truly helps children embrace Mandarin: play, purpose, and presence.</p>
              <p>In 2025, he founded Da Di Learning Studio — a space where Mandarin is lived, not memorized. Where language builds not just vocabulary, but confidence, character, and calm.</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center px-6 py-10">
            <Founder />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7EA16B] mb-10">From Preschool Roots to a New Language Movement</h2>
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Milestone 1 */}
              <div className="flex-1 bg-white rounded-2xl p-10 shadow-lg border border-[#E4F2E0]">
                <div className="flex items-center mb-4">
                  <span className="inline-block w-12 h-12 bg-[#7EA16B] rounded-full mr-4 flex items-center justify-center text-white font-bold text-2xl shadow">2010</span>
                  <span className="text-lg font-semibold text-accent">My Little Gems Preschool</span>
                </div>
                <p className="text-foreground/80">Founded to nurture bilingual learners in a warm, mindfulness-based environment.</p>
              </div>
              {/* Milestone 2 */}
              <div className="flex-1 bg-white rounded-2xl p-10 shadow-lg border border-[#E4F2E0]">
                <div className="flex items-center mb-4">
                  <span className="inline-block w-12 h-12 bg-[#7EA16B] rounded-full mr-4 flex items-center justify-center text-white font-bold text-2xl shadow">2025</span>
                  <span className="text-lg font-semibold text-accent">Da Di Learning Studio</span>
                </div>
                <p className="text-foreground/80">Launched to empower students to think deeply, speak confidently, and grow with heart.</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Link href="https://mylittlegems.sg" target="_blank" className="text-[#7EA16B] hover:underline font-medium text-lg">&rarr; Learn more about My Little Gems</Link>
          </div>
        </div>
      </section>

      {/* Why Da Di Section */}
      <WhyDaDi />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Footer */}
      <AboutCTA />
    </main>
  );
}
