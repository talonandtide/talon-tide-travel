import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Mail, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tripType, setTripType] = useState('');
  
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
        tripType: formData.get('tripType'),
        animal: formData.get('animal'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_email: 'hello@talonandtide.com',
        form_name: 'Contact Form'
      };
      
      const result = await emailjs.send(
        'contact_service',
        'template_ih1v52f',
        templateParams,
        'kfwhy7VZD5cyq76uF'
      );
      
      if (result.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We'll be in touch soon. Thank you for your interest in Talon & Tide."
        });
        
        // Reset the form
        form.reset();
        setTripType('');
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
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Get in <span className="font-script text-script-lg text-talon-gold">Touch</span></h1>
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
              <h2 className="section-title animate-fade">Start Your <span className="font-script text-script-lg text-talon-gold">Journey</span></h2>
              <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
                We read every message carefully and respond with the same thoughtfulness we put into every journey we plan.
                Your inquiry won't go to a ticketing system or auto-responder — just a real human, here to help.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade animate-delay-200">
                    <Label htmlFor="firstName" className="block text-talon-navy text-sm mb-2">Your First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="input-field"
                      placeholder="Jordan"
                    />
                  </div>
                  <div className="animate-fade animate-delay-300">
                    <Label htmlFor="lastName" className="block text-talon-navy text-sm mb-2">Your Last Name (optional)</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="input-field"
                      placeholder="Avery"
                    />
                  </div>
                </div>
                
                <div className="animate-fade animate-delay-400">
                  <Label htmlFor="email" className="block text-talon-navy text-sm mb-2">Your Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="you@email.com"
                  />
                </div>
                
                <div className="animate-fade animate-delay-500">
                  <Label htmlFor="tripType" className="block text-talon-navy text-sm mb-2">
                    What kind of experience are you interested in?
                  </Label>
                  <Select name="tripType" value={tripType} onValueChange={setTripType}>
                    <SelectTrigger className="input-field w-full">
                      <SelectValue placeholder="Select an experience type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zoo-based">Zoo-based experience</SelectItem>
                      <SelectItem value="wildlife">Wildlife experience</SelectItem>
                      <SelectItem value="combo">Zoo + Wildlife Combo</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="animate-fade animate-delay-600">
                  <Label htmlFor="animal" className="block text-talon-navy text-sm mb-2">
                    Is there a specific animal you'd love to connect with?
                  </Label>
                  <Input
                    type="text"
                    id="animal"
                    name="animal"
                    className="input-field"
                    placeholder="I've always dreamed of meeting a cheetah!"
                  />
                </div>
                
                <div className="animate-fade animate-delay-700">
                  <Label htmlFor="subject" className="block text-talon-navy text-sm mb-2">How can we help?</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="input-field"
                    placeholder="I'd love help planning a custom itinerary"
                  />
                </div>
                
                <div className="animate-fade animate-delay-800">
                  <Label htmlFor="message" className="block text-talon-navy text-sm mb-2">Tell us more — we're listening!</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="input-field"
                    placeholder="Include your goals, preferred dates, or any other notes."
                  />
                </div>
                
                <div className="animate-fade animate-delay-900">
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
              
              {/* Pricing Information */}
              <div className="mt-8 space-y-4">
                <div className="bg-talon-sand/10 rounded-lg p-6 animate-fade animate-delay-1000">
                  <h4 className="font-serif text-lg text-talon-green mb-3">Investment Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-white rounded border border-talon-sand/30">
                      <h5 className="font-medium text-talon-navy mb-1">Essential Explorer</h5>
                      <span className="text-xl font-bold text-talon-green">$150</span>
                    </div>
                    <div className="text-center p-3 bg-talon-gold/5 rounded border border-talon-gold/30 ring-1 ring-talon-gold/20">
                      <h5 className="font-medium text-talon-navy mb-1">Refined Wanderer</h5>
                      <span className="text-xl font-bold text-talon-green">$200</span>
                      <div className="text-xs text-talon-gold font-medium mt-1">Most Popular</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded border border-talon-sand/30">
                      <h5 className="font-medium text-talon-navy mb-1">Luxury Curator</h5>
                      <span className="text-xl font-bold text-talon-green">$300</span>
                    </div>
                  </div>
                  <div className="text-sm text-talon-navy/80">
                    <p className="mb-2">Each package includes curated experiences, packing lists, ethical insights, and mobile app delivery.</p>
                    <a href="#/pricing" className="text-talon-gold hover:text-talon-green transition-colors">View detailed comparison →</a>
                  </div>
                </div>
                
                <div className="p-5 bg-talon-sand/20 border border-talon-gold/20 rounded-sm text-talon-navy/80 text-sm animate-fade animate-delay-1100">
                  <p>
                    <strong>A note on our process:</strong> We offer personalized planning for meaningful, animal-focused travel - from once-in-a-lifetime adventures to elevated day trips. A flat planning fee may apply depending on the scope of your request. We'll always confirm details before moving forward.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Info Column */}
            <div className="lg:pl-8">
              <h2 className="section-title animate-fade">Connect With <span className="font-script text-script-lg text-talon-gold">Us</span></h2>
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
                      Orlando, Florida, USA
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
