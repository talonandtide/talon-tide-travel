
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
    <section className="py-20 bg-talon-green text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-talon-ivory animate-fade">
            Follow the <span className="text-talon-gold">Journey</span>
          </h2>
          <p className="text-talon-ivory/80 mb-8 animate-fade animate-delay-100">
            Subscribe for exclusive updates, ethical travel insights, and be the first to know when our carefully curated experiences are available for booking.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 animate-fade animate-delay-200">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-grow bg-talon-navy/30 border border-talon-ivory/20 rounded-sm px-4 py-3 focus:outline-none focus:border-talon-gold text-talon-ivory placeholder:text-talon-ivory/50"
            />
            <button 
              type="submit"
              className="bg-talon-gold hover:bg-talon-gold/80 text-talon-green flex items-center justify-center gap-2 px-6 py-3 rounded-sm transition-colors duration-300 uppercase tracking-wide text-sm"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-xs text-talon-ivory/60 mt-4 animate-fade animate-delay-300">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
