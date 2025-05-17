import { Metadata } from 'next';
import { ProgramIntro } from '@/components/sections/ProgramIntro';
import { ProgramGrid } from '@/components/sections/ProgramGrid';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Our Programmes | Da Di Learning Studio',
  description: 'Explore our range of Mandarin programmes designed for all ages - from preschoolers to adults. Discover the perfect learning path for you or your child.',
};

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen">
      <ProgramIntro />
      <ProgramGrid />
      <Testimonials />
    </main>
  );
}
