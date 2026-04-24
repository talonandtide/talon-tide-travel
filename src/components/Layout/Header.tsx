
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, ExternalLink, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthTabPreference } from '@/hooks/useAuthTabPreference';

const APP_URL = 'https://app.talonandtide.com';
const SIGNIN_URL = `${APP_URL}/signin`;
const SIGNUP_URL = `${APP_URL}/signup`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-talon-gold focus:text-talon-green focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <header 
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:py-6", 
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
      >
      <div className="container flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="z-50" aria-label="Talon & Tide - Home">
          <span className={cn(
            "font-serif text-xl md:text-2xl transition-all duration-300",
            scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          )}>
            Talon <span className="text-talon-gold">&#38;</span> Tide
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <NavLinks isScrolled={scrolled} />
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/talonandtide/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Talon & Tide on Instagram"
              className={cn(
                "hover:text-talon-gold transition-colors duration-300",
                scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              )}
            >
              <Instagram size={18} />
            </a>
            <a
              href={SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-sans text-sm uppercase tracking-wide transition-colors duration-300 hover:text-talon-gold",
                scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              )}
            >
              Sign In
            </a>
            <a 
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-talon-gold hover:bg-talon-gold/90 text-talon-green px-4 py-2 rounded-sm text-sm font-medium transition-colors duration-300 flex items-center gap-2"
            >
              Sign Up
              <ExternalLink size={14} />
            </a>
          </div>
        </nav>

        <button 
          className={cn(
            "z-50 lg:hidden",
            scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          )} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={cn(
          "fixed inset-0 bg-talon-green/95 backdrop-blur-sm flex flex-col justify-center items-center gap-8 transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center gap-6 text-talon-ivory" aria-label="Mobile navigation">
            <NavLinks mobile />
          </nav>
          <div className="flex flex-col items-center gap-4">
            <a
              href={SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm uppercase tracking-wide text-talon-ivory hover:text-talon-gold transition-colors duration-300"
            >
              Sign In
            </a>
            <a 
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-talon-gold hover:bg-talon-gold/90 text-talon-green px-6 py-3 rounded-sm text-sm font-medium transition-colors duration-300 flex items-center gap-2"
            >
              Sign Up
              <ExternalLink size={14} />
            </a>
            <div className="flex items-center gap-6 text-talon-ivory">
              <a 
                href="https://www.instagram.com/talonandtide/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-talon-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:hello@talonandtide.com"
                className="hover:text-talon-gold transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

const NavLinks = ({ mobile = false, isScrolled = false }) => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/our-standards', label: 'Our Standards' },
    { path: '/for-operators', label: 'For Operators' },
    { path: '/blog', label: 'Journal' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={() => window.scrollTo(0, 0)}
          className={cn(
            "font-sans text-sm uppercase tracking-wide transition-colors duration-300 hover:text-talon-gold relative",
            mobile ? "text-talon-ivory py-1" : isScrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
            location.pathname === link.path ? "after:absolute after:w-full after:h-[1px] after:bg-talon-gold after:-bottom-1 after:left-0" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Header;
