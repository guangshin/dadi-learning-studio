"use client";

import { useEffect, useState } from "react";
import { PhilosophyHero } from "@/components/sections/philosophy/PhilosophyHero";
import { PillarsOverview } from "@/components/sections/philosophy/PillarsOverview";
import { PillarDetail } from "@/components/sections/philosophy/PillarDetail";
import { CTABanner } from "@/components/shared/CTABanner";
import { fetchImagesByKey } from "@/lib/fetchPlasmicImages";

export default function PhilosophyPage() {
  const [images, setImages] = useState<
    Record<
      string,
      { src: string; alt: string; width?: number; height?: number }
    >
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImagesByKey([
      "philosophy-hero",
      "Philosophy-wen",
      "Philosophy-si",
      "Philosophy-jing",
      "Philosophy-xiu",
    ])
      .then(setImages)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen">
      <PhilosophyHero
        image={!loading ? images["philosophy-hero"] : undefined}
        loading={loading}
      />
      <PillarsOverview />

      {/* Individual Pillar Details */}
      <PillarDetail
        id="pillar-wen"
        chinese="问"
        pinyin="wèn"
        title="Ask"
        proverb="问中求知，知而能言"
        translation="In asking, we gain knowledge; through knowledge, we speak with confidence."
        description="We nurture curiosity through Mandarin questions and discussions, building confident communicators who actively engage with the language."
        color="#4C9A2A"
        image={images["Philosophy-wen"] ?? undefined}
      />

      <PillarDetail
        id="pillar-si"
        chinese="思"
        pinyin="sī"
        title="Analyze"
        proverb="专中入思，思中成长"
        translation="Through focused reflection, true growth emerges."
        description="Mastering Mandarin requires keen observation — of tones, strokes, and nuance. Students are guided to pause, analyze, and reflect, sharpening both comprehension and critical thinking. Mindful breathing and writing enhance their clarity and presence."
        color="#7BC043"
        reverse
        image={images["Philosophy-si"] ?? undefined}
      />

      <PillarDetail
        id="pillar-xiu"
        chinese="修"
        pinyin="xiū"
        title="Apply"
        proverb="持之进修，修中蜕变"
        translation="Through committed practice, transformation begins."
        description="Beyond textbooks, students apply Mandarin in real-life conversations. They learn to speak with clarity, listen with empathy, and communicate with purpose. Respect, gratitude, and kindness are woven into every word."
        color="#B2D732"
        image={images["Philosophy-xiu"] ?? undefined}
      />

      {/* Special Stillness Section */}
      <PillarDetail
        id="pillar-jing"
        chinese="静"
        pinyin="jìng"
        title="Stillness"
        proverb="心静凝神，慧通万事"
        translation="When the heart is still, the mind can focus — and with focus, all things are possible."
        description={
          "At Da Di, every lesson includes a 15mins of mindfulness practice — a sacred pause for breathing, reflection, and emotional reset. This practice of 静 (Stillness) is not just about being quiet; it's about cultivating presence and awareness. Students learn to center themselves, developing focus that carries through their language learning journey. These mindful moments help our learners become not just better speakers — but better people: calm, resilient, and ready to connect deeply with others."
        }
        color="#A5D66F"
        reverse={true}
        image={images["Philosophy-jing"] ?? undefined}
      />

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
