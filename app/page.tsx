import { Metadata } from 'next';
import { cn } from '@/lib/utils';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PhilosophyPillarsGrid } from '@/components/sections/PhilosophyPillarsGrid';
import Programmes from '@/components/sections/Programmes';
import Founder from '@/components/sections/Founder';
import Testimonials from '@/components/sections/Testimonials';
import MediaFeatures from '@/components/sections/MediaFeatures';
import { CTABanner } from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: {
    default: 'Da Di Learning Studio',
    template: '%s | Da Di Learning Studio',
  },
  description: 'A new kind of Chinese enrichment — where language meets life.',
  openGraph: {
    title: 'Da Di Learning Studio',
    description: 'A new kind of Chinese enrichment — where language meets life.',
    url: 'https://dadi-learning.com',
    siteName: 'Da Di Learning Studio',
    images: [
      {
        url: 'https://dadi-learning.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Da Di Learning Studio',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Da Di Learning Studio',
    description: 'A new kind of Chinese enrichment — where language meets life.',
    images: ['https://dadi-learning.com/og-image.png'],
    creator: '@dadilearning',
  },
};

export default function Home() {
  return (
    <main className={cn(
      'min-h-screen flex flex-col',
      'bg-background text-foreground',
      'transition-colors duration-200'
    )}>
      <Hero />
      <About />
      <section id="philosophy" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Teaching Philosophy</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              We believe in a holistic approach to learning Chinese that nurtures both the mind and heart.
            </p>
          </div>
          
          <PhilosophyPillarsGrid />
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/philosophy" className="flex items-center gap-1">
                Learn more about our philosophy
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Programmes />
      <Founder />
      <Testimonials />
      <MediaFeatures />
      <CTABanner
        title="Ready to Begin Your Child's Mandarin Journey?"
        subtitle="Experience our unique approach to Chinese enrichment with a free trial class."
        buttonText="Book a Free Trial"
        buttonLink="/contact"
        variant="primary"
      />
    </main>
  );
}
