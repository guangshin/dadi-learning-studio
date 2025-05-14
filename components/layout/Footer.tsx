import Link from 'next/link';
import { PhoneCall, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#9BC53D] flex items-center justify-center">
                <span className="text-white font-bold">大地</span>
              </div>
              <span className="font-semibold text-lg">Da Di Learning Studio</span>
            </div>
            <p className="text-gray-600 mb-6">
              A new kind of Chinese enrichment — where language meets life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-[#9BC53D]/10 flex items-center justify-center text-[#9BC53D]">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#9BC53D]/10 flex items-center justify-center text-[#9BC53D]">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-600 hover:text-[#9BC53D] transition-colors">About Us</Link></li>
              <li><Link href="#philosophy" className="text-gray-600 hover:text-[#9BC53D] transition-colors">Our Philosophy</Link></li>
              <li><Link href="#programmes" className="text-gray-600 hover:text-[#9BC53D] transition-colors">Programmes</Link></li>
              <li><Link href="#founder" className="text-gray-600 hover:text-[#9BC53D] transition-colors">Meet Our Founder</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-[#9BC53D] transition-colors">Contact Us</Link></li>
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
                <span className="text-gray-600">+65 8699 8667</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#9BC53D]" />
                <span className="text-gray-600">contact@dadi.com.sg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Da Di Learning Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;