
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6", 
        scrolled ? "bg-white/80 backdrop-blur-md shadow-luxury" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="z-50">
          <h1 className={cn(
            "logo-text text-2xl md:text-3xl transition-all duration-300",
            scrolled ? "text-midnight" : "text-white"
          )}>
            Talon <span className="text-champagne">&</span> Tide
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
                "hover:text-champagne transition-colors duration-300",
                scrolled ? "text-midnight" : "text-white"
              )}
            >
              <Instagram size={18} />
            </a>
            <Link 
              to="/contact" 
              className={cn(
                "hover:text-champagne transition-colors duration-300",
                scrolled ? "text-midnight" : "text-white"
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
            scrolled ? "text-midnight" : "text-white"
          )} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Nav Panel */}
        <div className={cn(
          "fixed inset-0 bg-midnight/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center gap-6 text-white">
            <NavLinks mobile />
          </nav>
          <div className="flex items-center gap-6 text-white">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-champagne transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <Link 
              to="/contact" 
              className="hover:text-champagne transition-colors duration-300"
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
            "font-sans text-sm uppercase tracking-wider transition-colors duration-300 hover:text-champagne relative",
            mobile ? "text-white py-1" : isScrolled ? "text-midnight" : "text-white",
            location.pathname === link.path ? "after:absolute after:w-full after:h-[1px] after:bg-champagne after:-bottom-1 after:left-0" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Header;
