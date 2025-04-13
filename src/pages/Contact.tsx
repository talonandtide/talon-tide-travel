
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Mail, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      setIsSubmitting(true);
      
      // For the contact form, we send all form fields
      const formData = new FormData(form);
      const templateParams = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_email: 'hello@talonandtide.com',
        form_name: 'Contact Form'
      };
      
      const result = await emailjs.send(
        'contact_service',
        'template_lde17cj',
        templateParams,
        'kfwhy7VZD5cyq76uF'
      );
      
      if (result.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We'll be in touch soon. Thank you for your interest in Talon & Tide."
        });
        
        // Reset the form
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message", { 
        description: "Please try again later or email us directly at hello@talonandtide.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Get in Touch</h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Whether you're interested in our future offerings, press inquiries, or potential collaborations, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <div>
              <h2 className="section-title animate-fade">Send Us a Message</h2>
              <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade animate-delay-200">
                    <label htmlFor="firstName" className="block text-talon-navy text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="input-field"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="animate-fade animate-delay-300">
                    <label htmlFor="lastName" className="block text-talon-navy text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="input-field"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="animate-fade animate-delay-400">
                  <label htmlFor="email" className="block text-talon-navy text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="Your email address"
                  />
                </div>
                <div className="animate-fade animate-delay-500">
                  <label htmlFor="subject" className="block text-talon-navy text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="input-field"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="animate-fade animate-delay-600">
                  <label htmlFor="message" className="block text-talon-navy text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="input-field"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="animate-fade animate-delay-700">
                  <button 
                    type="submit" 
                    className="btn-primary w-full justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Info Column */}
            <div className="lg:pl-8">
              <h2 className="section-title animate-fade">Connect With Us</h2>
              <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
                Follow our journey as we develop our portfolio of ethical wildlife experiences. We're always open to partnerships that align with our mission.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 animate-fade animate-delay-200">
                  <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                    <Mail size={20} className="text-talon-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-talon-green mb-1">Email</h3>
                    <a href="mailto:hello@talonandtide.com" className="text-talon-navy hover:text-talon-gold transition-colors duration-300">
                      hello@talonandtide.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-fade animate-delay-300">
                  <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                    <Instagram size={20} className="text-talon-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-talon-green mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/talonandtide/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-talon-navy hover:text-talon-gold transition-colors duration-300"
                    >
                      @talonandtide
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-fade animate-delay-400">
                  <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                    <MapPin size={20} className="text-talon-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-talon-green mb-1">Based In</h3>
                    <p className="text-talon-navy">
                      San Francisco, California, USA
                    </p>
                    <p className="text-sm text-talon-stone mt-1">
                      With a global network of wildlife specialists
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-talon-green/20 rounded-sm p-6 bg-talon-sand/20 animate-fade animate-delay-500">
                <h3 className="font-serif text-xl mb-4 text-talon-green">Inquiries Welcome</h3>
                <ul className="space-y-2 mb-4 text-talon-navy">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-talon-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Press and media opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-talon-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Partnership and collaboration proposals
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-talon-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Early access requests for future experiences
                  </li>
                </ul>
                <p className="text-sm text-talon-stone">
                  We aim to respond to all inquiries within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
