"use client";

import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-[#9BC53D] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('philosophy')}
            className="text-sm font-medium hover:text-[#9BC53D] transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollToSection('programmes')}
            className="text-sm font-medium hover:text-[#9BC53D] transition-colors"
          >
            Programmes
          </button>
          <button
            onClick={() => scrollToSection('founder')}
            className="text-sm font-medium hover:text-[#9BC53D] transition-colors"
          >
            Founder
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-[#9BC53D] transition-colors"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white"
          >
            Book a Trial Class
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="py-2 text-sm font-medium hover:text-[#9BC53D] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="py-2 text-sm font-medium hover:text-[#9BC53D] transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('programmes')}
              className="py-2 text-sm font-medium hover:text-[#9BC53D] transition-colors"
            >
              Programmes
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="py-2 text-sm font-medium hover:text-[#9BC53D] transition-colors"
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-2 text-sm font-medium hover:text-[#9BC53D] transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white w-full"
            >
              Book a Trial Class
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;