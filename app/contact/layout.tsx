import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Da Di Learning Studio',
  description: 'Get in touch with Da Di Learning Studio. Visit our location, send us a message, or connect with us on social media.',
  openGraph: {
    title: 'Contact Us | Da Di Learning Studio',
    description: 'Get in touch with Da Di Learning Studio. Visit our location, send us a message, or connect with us on social media.',
    url: 'https://dadilearningstudio.com/contact',
    siteName: 'Da Di Learning Studio',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Da Di Learning Studio',
    description: 'Get in touch with Da Di Learning Studio. Visit our location, send us a message, or connect with us on social media.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
