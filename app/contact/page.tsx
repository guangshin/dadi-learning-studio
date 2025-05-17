import { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { LocationMap } from '@/components/sections/LocationMap';
import { ContactInfo } from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | Da Di Learning Studio',
  description: 'Get in touch with us to learn more about our Mandarin programmes or to book a trial class.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-text text-center mb-12">Get In Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
            <div className="mt-12">
              <ContactInfo />
            </div>
          </div>
          <div className="h-full">
            <LocationMap />
          </div>
        </div>
      </div>
    </main>
  );
}
