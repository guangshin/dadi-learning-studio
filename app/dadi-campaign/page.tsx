'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ReviewsComponent } from '@/components/shared/ReviewsComponent';
import Image from 'next/image';

// Reusing existing components but with campaign-specific content
export default function CampaignPage() {
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/contact-dadi/30min');

  // Fetch calendly URL from CMS (reusing same contact info as contact page)
  useEffect(() => {
    const fetchCalendlyUrl = async () => {
      try {
        const response = await fetch('/api/cms?type=contactInfo');
        if (response.ok) {
          const data = await response.json();
          if (data.calendlyUrl) {
            setCalendlyUrl(data.calendlyUrl);
          }
        }
      } catch (error) {
        console.error('Error fetching calendly URL:', error);
      }
    };

    fetchCalendlyUrl();
  }, []);

  return (
    <main className="min-h-screen bg-[#F9FAF7]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Hero text */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                More Than Grades — <span className="text-[#4C9A2A]">Mandarin for Life</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Nurture confidence, focus, and joy through real communication — not just exam drills.
              </p>
              <div className="hidden lg:block">
                <p className="text-lg font-semibold text-[#4C9A2A] mb-4">Or Book a Trial Class Instantly</p>
                <Link
                  href={calendlyUrl}
                  target="_blank"
                  className="inline-flex items-center text-lg text-[#4C9A2A] hover:text-[#3e7e22] transition-colors"
                >
                  <span>Open Calendly</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-6 bg-[#A5D66F] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-[#2C2C2C]">Book Your Free Trial Class</h3>
                </div>
                <ContactForm />
                <div className="mt-6 lg:hidden text-center">
                  <p className="text-lg font-semibold text-[#4C9A2A] mb-4">Or Book a Trial Class Instantly</p>
                  <Link
                    href={calendlyUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#A5D66F] hover:bg-[#8BC34A] transition-colors duration-200 w-full"
                  >
                    Open Calendly
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Da Di */}
      <section className="py-16 bg-[#F5F7F0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Why Parents Trust Da Di</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique approach to Mandarin education makes learning effective, enjoyable, and meaningful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#4C9A2A]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4C9A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Story-Based Learning</h3>
              <p className="text-gray-600">
                We use captivating stories to teach language in context, making vocabulary and grammar naturally meaningful.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#7BC043]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#7BC043]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Confident Speaking Practice</h3>
              <p className="text-gray-600">
                Our small classes ensure every child gets regular speaking practice to build real-world confidence.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#B2D732]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#B2D732]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Mindful, Calm Classrooms</h3>
              <p className="text-gray-600">
                Our classrooms are designed for focus and mindful learning, with practices that develop attention and emotional awareness.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#FDE74C]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE74C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">MOE-Aligned Preparation</h3>
              <p className="text-gray-600">
                While we teach for life, we ensure students are well-prepared for MOE requirements and exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Levels Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Our Programmes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect programme for your learning journey, from preschool to adult levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Preschool Card */}
            <Link href="/programmes#preschool" className="block">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className="h-48 relative bg-[#4C9A2A]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#4C9A2A]">幼</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4C9A2A] mb-2">Preschool</h3>
                  <p className="text-gray-600 mb-4">Ages 3-6</p>
                  <p className="text-sm text-gray-500">
                    A fun, immersive introduction to Mandarin through stories, games, and songs.
                  </p>
                </div>
              </div>
            </Link>
            
            {/* Primary Card */}
            <Link href="/programmes#primary" className="block">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className="h-48 relative bg-[#7BC043]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#7BC043]">小</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#7BC043] mb-2">Primary</h3>
                  <p className="text-gray-600 mb-4">Ages 7-12</p>
                  <p className="text-sm text-gray-500">
                    Building strong foundations for MOE requirements while fostering a love for the language.
                  </p>
                </div>
              </div>
            </Link>
            
            {/* Secondary Card */}
            <Link href="/programmes#secondary" className="block">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className="h-48 relative bg-[#B2D732]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#B2D732]">中</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#B2D732] mb-2">Secondary</h3>
                  <p className="text-gray-600 mb-4">Ages 13-16</p>
                  <p className="text-sm text-gray-500">
                    Preparing for 'O' and 'N' levels with confidence, critical thinking, and communication skills.
                  </p>
                </div>
              </div>
            </Link>
            
            {/* Adult Card */}
            <Link href="/programmes#adult" className="block">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div className="h-48 relative bg-[#FDE74C]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#FDE74C]">成</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FDE74C] mb-2">Adult</h3>
                  <p className="text-gray-600 mb-4">All levels</p>
                  <p className="text-sm text-gray-500">
                    Learn practical Mandarin for travel, business, or personal enrichment at your own pace.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F5F7F0]">
        <ReviewsComponent 
          title="What Parents and Students Say"
          subtitle="Hear from families who have experienced the Da Di difference."
          maxItems={3}
          variant="light"
        />
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-[#F5F7F0] p-8 md:p-12 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Deciding?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're happy to answer any questions — or help you pick the right level.
            </p>
            <Link
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#A5D66F] hover:bg-[#8BC34A] transition-colors duration-200"
            >
              Contact Us
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Or WhatsApp us at{' '}
              <a href="https://wa.me/6586998667" className="text-[#4C9A2A] hover:underline">
                +65 8699 8667
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
