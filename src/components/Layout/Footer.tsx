import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const APP_URL = 'https://app.talonandtide.com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const templateParams = {
        email: email,
        to_email: 'hello@talonandtide.com',
        date: new Date().toLocaleString(),
        form_name: 'Footer Newsletter'
      };
      
      const result = await emailjs.send(
        'contact_service',
        'template_lde17cj',
        templateParams,
        'kfwhy7VZD5cyq76uF'
      );
      
      if (result.status === 200) {
        toast.success("Thank you for subscribing!");
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-talon-green text-talon-ivory py-16" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/">
              <h2 className="font-serif text-2xl mb-4">
                Talon <span className="text-talon-gold">&</span> Tide
              </h2>
            </Link>
            <p className="text-sm text-talon-ivory/80 mb-6">
              Ethically vetted wildlife experiences curated by conservation professionals.
            </p>
            <div className="flex items-center mt-auto gap-4">
              <a 
                href="https://www.instagram.com/talonandtide/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Talon & Tide on Instagram"
                className="text-talon-ivory hover:text-talon-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:hello@talonandtide.com" 
                aria-label="Email Talon & Tide"
                className="text-talon-ivory hover:text-talon-gold transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-talon-gold">Navigation</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/our-standards">Our Standards</FooterLink>
              <FooterLink to="/for-operators">For Operators</FooterLink>
              <FooterLink to="/blog">Journal</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </nav>
          </div>

          {/* For Travelers */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-talon-gold">For Travelers</h3>
            <nav className="flex flex-col gap-2">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-talon-ivory/80 hover:text-talon-gold transition-colors duration-300 flex items-center gap-1">
                Explore Experiences <ExternalLink size={12} />
              </a>
              <a href={`${APP_URL}/signup`} target="_blank" rel="noopener noreferrer" className="text-sm text-talon-ivory/80 hover:text-talon-gold transition-colors duration-300 flex items-center gap-1">
                Create Free Account <ExternalLink size={12} />
              </a>
              <a href={`${APP_URL}/pricing`} target="_blank" rel="noopener noreferrer" className="text-sm text-talon-ivory/80 hover:text-talon-gold transition-colors duration-300 flex items-center gap-1">
                Pricing & Plans <ExternalLink size={12} />
              </a>
            </nav>
          </div>

          {/* For Operators */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-talon-gold">For Operators</h3>
            <nav className="flex flex-col gap-2">
              <FooterLink to="/for-operators">Partner With Us</FooterLink>
              <FooterLink to="/our-standards">Our Standards</FooterLink>
              <FooterLink to="/contact?subject=invite-visit">Invite Us to Visit</FooterLink>
              <FooterLink to="/contact?subject=sponsorship">Sponsorship Inquiry</FooterLink>
            </nav>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-talon-gold">Follow the Journey</h3>
            <p className="text-sm text-talon-ivory/80 mb-4">
              Sign up for exclusive insights into ethical wildlife travel and new experiences.
            </p>
            <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input 
                id="footer-email"
                type="email" 
                placeholder="Your email" 
                className="bg-talon-navy/30 text-talon-ivory placeholder:text-talon-ivory/50 border border-talon-ivory/20 px-3 py-2 rounded-sm flex-grow focus:outline-none focus:border-talon-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button 
                type="submit" 
                className="bg-talon-gold hover:bg-talon-gold/80 text-talon-green px-4 py-2 rounded-sm transition-colors duration-300 flex items-center"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? '...' : <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-talon-ivory/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-talon-ivory/60">
            &copy; {new Date().getFullYear()} Talon & Tide. All rights reserved.
          </p>
          <p className="text-xs text-talon-ivory/60">
            Wildlife photographer? <Link to="/contact?subject=photographer-collaboration" className="text-talon-gold hover:text-talon-ivory transition-colors">We'd love to collaborate.</Link>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-talon-ivory/60 hover:text-talon-gold">Privacy Policy</a>
            <a href="#" className="text-xs text-talon-ivory/60 hover:text-talon-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <Link 
    to={to}
    className="text-sm text-talon-ivory/80 hover:text-talon-gold transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Footer;
