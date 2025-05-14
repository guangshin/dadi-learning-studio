import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Philosophy from '@/components/sections/Philosophy';
import Programmes from '@/components/sections/Programmes';
import Founder from '@/components/sections/Founder';
import Testimonials from '@/components/sections/Testimonials';
import MediaFeatures from '@/components/sections/MediaFeatures';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Philosophy />
        <Programmes />
        <Founder />
        <Testimonials />
        <MediaFeatures />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ThemeProvider>
  );
}