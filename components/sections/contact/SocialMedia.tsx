'use client';

import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6" />,
    url: 'https://www.instagram.com/dadilearningstudio/',
    color: 'text-pink-600 hover:text-pink-700',
    bgColor: 'bg-pink-50 hover:bg-pink-100',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="h-6 w-6" />,
    url: 'https://www.facebook.com/profile.php?id=61575097831744',
    color: 'text-blue-600 hover:text-blue-700',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    name: 'Email',
    icon: <Mail className="h-6 w-6" />,
    url: 'mailto:contact@dadi.com.sg',
    color: 'text-[#A5D66F] hover:text-[#8bbf5f]',
    bgColor: 'bg-[#F0F7E6] hover:bg-[#E5F0D8]',
  },
];

export function SocialMedia() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <div className="text-center">
        <h4 className="text-lg font-medium text-[#2C2C2C] mb-6 font-quicksand">Connect With Us</h4>
        <p className="text-sm text-[#2C2C2C]/70 mb-6 font-opensans max-w-md mx-auto">
          Follow us on social media for the latest updates, tips, and insights about learning Mandarin.
        </p>
      </div>
      
      <div className="flex justify-center gap-5">
        {socialLinks.map((social) => (
          <div key={social.name} className="transition-transform hover:-translate-y-0.5">
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bgColor} ${social.color} p-3.5 rounded-xl transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md`}
              aria-label={`Visit our ${social.name} page`}
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
