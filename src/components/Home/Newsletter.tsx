
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the email to a server
    toast.success("Thank you for subscribing!", {
      description: "You'll receive updates on our latest ethical wildlife experiences."
    });
    
    // Reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  
  return (
    <section className="py-24 bg-midnight text-white relative overflow-hidden">
      {/* Background pattern element */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white drop-shadow-text animate-fade">
            Follow the <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 animate-fade animate-delay-100">
            Subscribe for exclusive updates, ethical travel insights, and be the first to know when our carefully curated experiences are available for booking.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 animate-fade animate-delay-200">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-grow bg-white/10 border border-white/20 rounded-sm px-6 py-4 focus:outline-none focus:border-champagne text-white placeholder:text-white/40 shadow-luxury"
            />
            <button 
              type="submit"
              className="bg-champagne hover:bg-champagne/80 text-midnight flex items-center justify-center gap-2 px-8 py-4 rounded-sm transition-colors duration-300 uppercase tracking-wide text-sm font-medium shadow-luxury hover:shadow-luxury-hover"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-xs text-white/50 mt-6 animate-fade animate-delay-300">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
