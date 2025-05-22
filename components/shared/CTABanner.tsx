import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function CTABanner({
  title = "Still deciding?",
  subtitle = "Let us help you choose the right programme for your needs.",
  buttonText = "Book a Free Trial Class",
  buttonLink = "/contact",
  className = "",
  variant = 'primary',
}: CTABannerProps) {
  const isExternal = buttonLink?.startsWith('http');
  // Add hash to contact page links
  const href = isExternal ? buttonLink : 
    buttonLink === '/contact' ? `${buttonLink}#enquiryform` : buttonLink;
  
  const containerClasses = cn(
    'py-16 px-4 sm:px-6 lg:px-8',
    {
      'bg-primary/10': variant === 'primary',
      'bg-yellow-100/80': variant === 'secondary',
    },
    className
  );

  const buttonVariant = variant === 'primary' ? 'default' : 'secondary';

  return (
    <section className={containerClasses}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
          variant === 'primary' ? 'text-foreground' : 'text-foreground'
        }`}>
          {title}
        </h2>
        <p className={`mb-8 max-w-2xl mx-auto text-lg ${
          variant === 'primary' ? 'text-muted-foreground' : 'text-muted-foreground/90'
        }`}>
          {subtitle}
        </p>
        <div className="flex justify-center">
          {isExternal ? (
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              {buttonText}
            </a>
          ) : (
            <Button
              asChild
              size="lg"
              variant={buttonVariant}
              className="px-8 py-6 text-base"
            >
              <Link href={href}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
