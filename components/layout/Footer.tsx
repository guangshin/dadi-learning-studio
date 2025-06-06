'use client';

import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { PhoneCall, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ContactInfo, fetchContactInfo } from '@/lib/fetchContactInfo';

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "+6586998667",
    email: "contact@dadi.com.sg",
    calendlyUrl: "https://calendly.com/contact-dadi/2hrs",
    instagramLink: "https://www.instagram.com/dadilearningstudio",
    facebookLink: "https://www.facebook.com/people/Da-Di-Learning-Studio/61575097831744/"
  });
  
  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const info = await fetchContactInfo();
        setContactInfo(info);
      } catch (error) {
        console.error('Failed to load contact info for footer:', error);
      }
    };
    
    loadContactInfo();
  }, []);
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo height={50} />
            </div>
            <p className="text-gray-600 mb-6">
              A new kind of Chinese enrichment — where language meets life.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.facebookLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#4C9A2A]/10 flex items-center justify-center text-[#4C9A2A] hover:bg-[#4C9A2A]/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href={contactInfo.instagramLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#4C9A2A]/10 flex items-center justify-center text-[#4C9A2A] hover:bg-[#4C9A2A]/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[#4C9A2A] transition-colors">About</Link></li>
              <li><Link href="/philosophy" className="text-gray-600 hover:text-[#4C9A2A] transition-colors">Philosophy</Link></li>
              <li><Link href="/programmes" className="text-gray-600 hover:text-[#4C9A2A] transition-colors">Programmes</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#4C9A2A] transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#4C9A2A] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#9BC53D] mt-0.5" />
                <span className="text-gray-600">10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#9BC53D]" />
                <span className="text-gray-600">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#9BC53D]" />
                <span className="text-gray-600">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Da Di Learning Studio. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Designed by <a 
              href="https://www.zerotoonestudios.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-600 transition-colors"
            >
              Zero To One Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;