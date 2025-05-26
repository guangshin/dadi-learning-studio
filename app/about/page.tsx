import { Metadata } from "next";
import Link from "next/link";
import { AboutPageHero } from "@/components/sections/AboutPageHero";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { WhyDaDi as WhyDaDiComponent } from "@/components/sections/WhyDaDi";
import { PhilosophyPillarsGrid } from "@/components/sections/PhilosophyPillarsGrid";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { ConfuciusQuote } from "@/components/sections/ConfuciusQuote";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Da Di Learning Studio",
  description:
    "Discover our story, meet our passionate team, and learn about our journey in making Mandarin learning joyful and effective.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F1]">
      {/* Hero Section */}
      <AboutPageHero />

      {/* Founder Section */}
      <AboutFounder />

      {/* The Heart Behind Da Di */}
      <WhyDaDiComponent />

      {/* Da Di Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our approach to learning is built on four timeless principles
            </p>
          </div>
          <PhilosophyPillarsGrid />
          <div className="text-center mt-12">
            <Link
              href="/philosophy"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
            >
              Learn more about our philosophy
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AboutTeam />

      {/* Confucius Quote */}
      <ConfuciusQuote />

      {/* CTA Section */}
      <CTABanner
        title="Inspired by our story?"
        subtitle="Reach out to learn how Da Di's philosophy can support your child's journey."
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="primary"
      />
    </main>
  );
}
