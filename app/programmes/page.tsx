import { Metadata } from 'next';
import { ProgrammeHero } from '@/components/sections/programmes/ProgrammeHero';
import { ProgrammesSection } from '@/components/sections/programmes/ProgrammesSection';
import { FAQSection } from '@/components/sections/programmes/FAQSection';
import { ReviewsComponent } from '@/components/shared/ReviewsComponent';
import { CTABanner } from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: 'Our Programmes | Da Di Learning Studio',
  description: 'Explore our range of Mandarin programmes designed for all ages - from preschoolers to adults. Discover the perfect learning path for you or your child.',
};

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgrammeHero />
      <ProgrammesSection />
      <ReviewsComponent 
        id="reviews"
        title="What Our Community Says"
        subtitle="Hear from parents and learners who have experienced the Da Di difference."
        maxItems={4}
        variant="dark"
      />
      <FAQSection />
      <CTABanner
        title="Still deciding?"
        subtitle="Let us help you choose the right programme for your needs."
        buttonText="Book a Free Trial Class"
        buttonLink="/contact"
        variant="primary"
      />
    </main>
  );
}
