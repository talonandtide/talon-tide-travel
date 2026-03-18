import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { Mail, Instagram, MapPin, ArrowRight, ExternalLink, Camera } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLocation } from 'react-router-dom';

const APP_URL = 'https://app.talonandtide.com';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setSubject(subjectParam);
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      setIsSubmitting(true);
      const formData = new FormData(form);
      const templateParams = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        organization: formData.get('organization'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_email: 'hello@talonandtide.com',
        form_name: 'Contact Form'
      };
      const result = await emailjs.send('contact_service', 'template_ih1v52f', templateParams, 'kfwhy7VZD5cyq76uF');
      if (result.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We'll be in touch soon. Thank you for your interest in Talon & Tide."
        });
        form.reset();
        setSubject('');
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
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">
              Get in <span className="font-script text-script-lg text-talon-gold">Touch</span>
            </h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Whether you're an operator interested in partnership, press, or have a general inquiry — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="section-title animate-fade">Send Us a <span className="font-script text-script-lg text-talon-gold">Message</span></h2>
              <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
                We read every message carefully and respond within 48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade animate-delay-200">
                    <Label htmlFor="firstName" className="block text-talon-navy text-sm mb-2">First Name</Label>
                    <Input type="text" id="firstName" name="firstName" required className="input-field" placeholder="Jordan" />
                  </div>
                  <div className="animate-fade animate-delay-300">
                    <Label htmlFor="lastName" className="block text-talon-navy text-sm mb-2">Last Name (optional)</Label>
                    <Input type="text" id="lastName" name="lastName" className="input-field" placeholder="Avery" />
                  </div>
                </div>
                
                <div className="animate-fade animate-delay-400">
                  <Label htmlFor="email" className="block text-talon-navy text-sm mb-2">Email</Label>
                  <Input type="email" id="email" name="email" required className="input-field" placeholder="you@email.com" />
                </div>

                <div className="animate-fade animate-delay-500">
                  <Label htmlFor="organization" className="block text-talon-navy text-sm mb-2">Organization (optional)</Label>
                  <Input type="text" id="organization" name="organization" className="input-field" placeholder="Your zoo, sanctuary, or tour company" />
                </div>
                
                <div className="animate-fade animate-delay-600">
                  <Label htmlFor="subject" className="block text-talon-navy text-sm mb-2">What's this about?</Label>
                  <Select name="subject" value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="input-field w-full">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operator-submission">Submit my experience for review</SelectItem>
                      <SelectItem value="hosted-trips">Hosted trip partnership</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship inquiry</SelectItem>
                      <SelectItem value="photographer-collaboration">Photography collaboration</SelectItem>
                      <SelectItem value="report-concern">Report a concern about a listing</SelectItem>
                      <SelectItem value="press">Press & media</SelectItem>
                      <SelectItem value="general">General inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="animate-fade animate-delay-700">
                  <Label htmlFor="message" className="block text-talon-navy text-sm mb-2">Message</Label>
                  <Textarea id="message" name="message" rows={6} required className="input-field" placeholder="Tell us more about your inquiry..." />
                </div>
                
                <div className="animate-fade animate-delay-800">
                  <button type="submit" className="btn-primary w-full justify-center" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="lg:pl-8">
              <h2 className="section-title animate-fade">Connect With <span className="font-script text-script-lg text-talon-gold">Us</span></h2>
              <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
                We're always open to partnerships that align with our conservation mission.
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
                    <a href="https://www.instagram.com/talonandtide/" target="_blank" rel="noopener noreferrer" className="text-talon-navy hover:text-talon-gold transition-colors duration-300">
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
                    <p className="text-talon-navy">Orlando, Florida, USA</p>
                    <p className="text-sm text-talon-stone mt-1">With a global network of wildlife specialists</p>
                  </div>
                </div>
              </div>
              
              {/* Traveler CTA */}
              <div className="border border-talon-green/20 rounded-sm p-6 bg-talon-sand/20 animate-fade animate-delay-500">
                <h3 className="font-serif text-xl mb-4 text-talon-green">Looking to Explore Experiences?</h3>
                <p className="text-talon-navy/80 text-sm mb-4">
                  Visit the Talon & Tide app to browse our full collection of vetted wildlife experiences.
                </p>
                <a 
                  href={APP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center group"
                >
                  Explore the App
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Photographer Callout */}
              <div className="border border-talon-green/20 rounded-sm p-6 bg-talon-sand/20 mt-6 animate-fade animate-delay-700">
                <div className="flex items-start gap-3">
                  <Camera size={20} className="text-talon-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-talon-green mb-2">Wildlife Photographer?</h3>
                    <p className="text-talon-navy/80 text-sm mb-3">
                      We collaborate with photographers for editorial visits and features. Get in touch if you'd like to work with us.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubject('photographer-collaboration');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-sm text-talon-gold hover:text-talon-green transition-colors font-medium inline-flex items-center gap-1"
                    >
                      Send us a message <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Inquiries */}
              <div className="border border-talon-green/20 rounded-sm p-6 bg-talon-sand/20 mt-6 animate-fade animate-delay-600">
                <h3 className="font-serif text-xl mb-4 text-talon-green">Inquiries Welcome</h3>
                <ul className="space-y-2 mb-4 text-talon-navy">
                  {["Operator submissions & partnerships", "Hosted trip collaborations", "Sponsorship opportunities", "Press and media inquiries"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-talon-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
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
