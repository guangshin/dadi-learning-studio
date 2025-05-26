import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary/5 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to begin your child's Mandarin journey with us?
          </h3>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the Da Di difference with a trial class and see how we make learning Mandarin joyful and effective.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact#BookTrialClass">
              Book a Trial Class
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
