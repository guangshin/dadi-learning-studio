import { Metadata } from 'next';
import { PhilosophyHero } from '@/components/sections/philosophy/PhilosophyHero';
import { PillarsOverview } from '@/components/sections/philosophy/PillarsOverview';
import { PillarDetail } from '@/components/sections/philosophy/PillarDetail';
import { StillnessSection } from '@/components/sections/philosophy/StillnessSection';
import { CTABanner } from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: 'Our Philosophy | Da Di Learning Studio',
  description: 'Discover our unique teaching philosophy based on the four pillars: 问 (Ask), 思 (Analyze), 修 (Apply), and 静 (Stillness).',
};

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen">
      <PhilosophyHero />
      <PillarsOverview />
      
      {/* Individual Pillar Details */}
      <PillarDetail
        id="pillar-wen"
        chinese="问"
        pinyin="Wèn"
        title="Ask"
        proverb="问中求知，知而能言"
        translation="In asking, we gain knowledge; through knowledge, we speak with confidence."
        description="Learning begins with curiosity. We encourage students to ask questions in Mandarin, uncover insights, and develop strong communication skills. Through interactive discussions, they gain confidence in using the language actively."
        color="#4C9A2A"
      />
      
      <PillarDetail
        id="pillar-si"
        chinese="思"
        pinyin="Sī"
        title="Analyze"
        proverb="专中入思，思中成长"
        translation="Through focused reflection, true growth emerges."
        description="Mastering Mandarin requires keen observation — of tones, strokes, and nuance. Students are guided to pause, analyze, and reflect, sharpening both comprehension and critical thinking. Mindful breathing and writing enhance their clarity and presence."
        color="#7BC043"
        reverse
      />
      
      <PillarDetail
        id="pillar-xiu"
        chinese="修"
        pinyin="Xiū"
        title="Apply"
        proverb="持之进修，修中蜕变"
        translation="Through committed practice, transformation begins."
        description="Beyond textbooks, students apply Mandarin in real-life conversations. They learn to speak with clarity, listen with empathy, and communicate with purpose. Respect, gratitude, and kindness are woven into every word."
        color="#B2D732"
      />
      
      {/* Special Stillness Section */}
      <StillnessSection />
      
      {/* Final CTA */}
      <CTABanner
        title="Experience Our Philosophy Firsthand"
        subtitle="Book a trial class to see how our unique approach can benefit your child's Mandarin learning journey."
        buttonText="Book a Free Trial Class"
        buttonLink="/contact"
        variant="primary"
      />
    </main>
  );
}
