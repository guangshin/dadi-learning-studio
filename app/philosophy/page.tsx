import { Metadata } from 'next';
import { PhilosophyHero } from '@/components/sections/PhilosophyHero';
import { PhilosophyPillars } from '@/components/sections/PhilosophyPillars';
import { CallToAction } from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'Our Philosophy | Da Di Learning Studio',
  description: 'Discover our unique teaching philosophy based on the four pillars: 问 (Ask), 思 (Analyze), 修 (Apply), and 静 (Stillness).',
};

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen">
      <PhilosophyHero />
      <PhilosophyPillars />
      <CallToAction />
    </main>
  );
}
