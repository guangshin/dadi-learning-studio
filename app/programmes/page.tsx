import { Metadata } from 'next';
import { ProgrammeHero } from '@/components/sections/programmes/ProgrammeHero';
import { MomentsGallery } from '@/components/sections/programmes/MomentsGallery';
import { ProgrammesSection } from '@/components/sections/programmes/ProgrammesSection';
import { FAQSection } from '@/components/sections/programmes/FAQSection';
import { ProgrammeCTA } from '@/components/sections/programmes/ProgrammeCTA';

export const metadata: Metadata = {
  title: 'Our Programmes | Da Di Learning Studio',
  description: 'Explore our range of Mandarin programmes designed for all ages - from preschoolers to adults. Discover the perfect learning path for you or your child.',
};

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgrammeHero />
      <MomentsGallery />
      <ProgrammesSection />
      <FAQSection />
      <ProgrammeCTA />
    </main>
  );
}
