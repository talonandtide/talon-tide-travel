
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white pt-20 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/">
              <h2 className="font-serif text-3xl mb-6">
                Talon <span className="text-champagne">&</span> Tide
              </h2>
            </Link>
            <p className="text-white/70 mb-8 max-w-xs">
              Luxury wildlife experiences curated with ethics and expertise at the forefront.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-champagne transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:info@talonandtide.com"
                className="text-white hover:text-champagne transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-champagne">Navigation</h3>
            <nav className="flex flex-col gap-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/experiences">Experiences</FooterLink>
              <FooterLink to="/blog">Journal</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-champagne">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-champagne mt-1 shrink-0" />
                <span className="text-white/70 text-sm">
                  1234 Wildlife Way<br />
                  Seattle, WA 98101
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-champagne shrink-0" />
                <a href="mailto:hello@talonandtide.com" className="text-white/70 text-sm hover:text-champagne transition-colors duration-300">
                  hello@talonandtide.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-champagne shrink-0" />
                <a href="tel:+12065550123" className="text-white/70 text-sm hover:text-champagne transition-colors duration-300">
                  +1 (206) 555-0123
                </a>
              </div>
            </div>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-champagne">Follow the Journey</h3>
            <p className="text-white/70 text-sm mb-6">
              Sign up for exclusive insights into ethical wildlife travel and be the first to know when our curated experiences are available.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white placeholder:text-white/40 border border-white/20 px-4 py-2 rounded-sm flex-grow focus:outline-none focus:border-champagne"
              />
              <button 
                type="submit" 
                className="bg-champagne hover:bg-champagne/80 text-midnight px-3 py-2 rounded-sm transition-colors duration-300 flex items-center"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Talon & Tide. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-white/50 hover:text-champagne transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-white/50 hover:text-champagne transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <Link 
    to={to}
    className="text-sm text-white/70 hover:text-champagne transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Footer;
