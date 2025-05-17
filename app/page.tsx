import { Metadata } from 'next';
// // import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Philosophy from '@/components/sections/Philosophy';
import Programmes from '@/components/sections/Programmes';
import Founder from '@/components/sections/Founder';
import Testimonials from '@/components/sections/Testimonials';
import MediaFeatures from '@/components/sections/MediaFeatures';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

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
      <Philosophy />
      <Programmes />
      <Founder />
      <Testimonials />
      <MediaFeatures />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
