
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Send email using EmailJS
      // You'll need to replace these IDs with your own from EmailJS
      const result = await emailjs.send(
        'contact_service', // replace with your EmailJS service ID
        'template_lde17cj', // replace with your EmailJS template ID
        { 
          email: email,
          to_email: 'hello@talonandtide.com',
          date: new Date().toLocaleString(),
        },
        'kfwhy7VZD5cyq76uF' // replace with your EmailJS user ID
      );
      
      if (result.text === 'OK') {
        toast.success("Thank you for subscribing!", {
          description: "You'll receive updates on our latest ethical wildlife experiences."
        });
        
        setEmail('');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to subscribe", { 
        description: "Please try again later or contact us directly at hello@talonandtide.com." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2559&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-talon-green/90" />
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6 text-talon-ivory drop-shadow-text-lg animate-fade">
            Follow the <span className="text-talon-gold">Journey</span>
          </h2>
          <p className="text-talon-ivory/90 text-lg mb-12 leading-relaxed animate-fade animate-delay-100">
            Subscribe for exclusive updates, ethical travel insights, and be the first to know when our carefully curated experiences are available for booking.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 animate-fade animate-delay-200">
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-talon-navy/30 border border-talon-ivory/30 rounded-sm px-6 py-4 focus:outline-none focus:border-talon-gold text-talon-ivory placeholder:text-talon-ivory/50 shadow-lg"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-talon-gold hover:bg-talon-gold/80 text-talon-green flex items-center justify-center gap-2 px-8 py-4 rounded-sm transition-colors duration-300 uppercase tracking-wide text-sm font-medium shadow-lg group disabled:opacity-70"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-sm text-talon-ivory/60 mt-6 animate-fade animate-delay-300">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
