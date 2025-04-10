
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:py-6", 
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="z-50">
          <h1 className={cn(
            "font-serif text-xl md:text-2xl transition-all duration-300",
            scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          )}>
            Talon <span className="text-talon-gold">&#38;</span> Tide
          </h1>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLinks isScrolled={scrolled} />
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover:text-talon-gold transition-colors duration-300",
                scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              )}
            >
              <Instagram size={18} />
            </a>
            <Link 
              to="/contact" 
              className={cn(
                "hover:text-talon-gold transition-colors duration-300",
                scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              )}
            >
              <Mail size={18} />
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Button */}
        <button 
          className={cn(
            "z-50 lg:hidden",
            scrolled ? "text-talon-green" : "text-talon-ivory drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          )} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Nav Panel */}
        <div className={cn(
          "fixed inset-0 bg-talon-green/95 backdrop-blur-sm flex flex-col justify-center items-center gap-8 transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center gap-6 text-talon-ivory">
            <NavLinks mobile />
          </nav>
          <div className="flex items-center gap-6 text-talon-ivory">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-talon-gold transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <Link 
              to="/contact" 
              className="hover:text-talon-gold transition-colors duration-300"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, isScrolled = false }) => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/blog', label: 'Journal' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
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
