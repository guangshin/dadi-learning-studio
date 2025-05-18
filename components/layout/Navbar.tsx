"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/shared/Logo';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navLinks = [
    { name: 'About', href: '/about' },
    { 
      name: 'Programmes', 
      href: '/programmes',
      submenu: [
        { name: 'Preschool (Ages 3-6)', href: '/programmes#preschool' },
        { name: 'Primary School (P1-P6)', href: '/programmes#primary' },
        { name: 'Secondary School', href: '/programmes#secondary' },
        { name: 'Adults', href: '/programmes#adult' },
        { name: 'Reviews', href: '/programmes#reviews' },
        { name: 'FAQs', href: '/programmes#faq' },
      ]
    },
    { name: 'Our Philosophy', href: '/philosophy' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

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
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 no-underline hover:no-underline">
          <Logo height={40} className="text-foreground" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 py-2 px-3 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary hover:bg-primary/10'
                )}
                onMouseEnter={() => link.submenu && setIsProgrammesOpen(true)}
                onMouseLeave={() => link.submenu && setIsProgrammesOpen(false)}
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown className={cn(
                    'h-4 w-4 transition-transform',
                    isProgrammesOpen && link.href === '/programmes' ? 'rotate-180' : ''
                  )} />
                )}
              </Link>
              
              {link.submenu && (
                <div 
                  className={cn(
                    'absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 transition-all duration-200',
                    isProgrammesOpen && link.href === '/programmes' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
                  )}
                  onMouseEnter={() => setIsProgrammesOpen(true)}
                  onMouseLeave={() => setIsProgrammesOpen(false)}
                >
                  {link.submenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent"
                      onClick={() => setIsProgrammesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">
              Book a Trial
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-primary/10 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'pt-20 pb-6'
        )}
        style={{
          width: '85%',
          maxWidth: '320px',
        }}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  'block px-3 py-3 text-base font-medium rounded-md transition-colors',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary hover:bg-primary/10'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md"
                      onClick={() => {
                        setIsOpen(false);
                        setIsProgrammesOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 pt-6 border-t border-gray-200 mt-4">
          <Button 
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/contact">
              Book a Trial
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;