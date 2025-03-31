
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          console.log('Newsletter video is in view, attempting to play');
          videoRef.current.play().catch(err => 
            console.log('Newsletter video autoplay prevented:', err)
          );
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
    <section className="relative py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            src="https://assets.mixkit.co/videos/preview/mixkit-trees-in-a-forest-at-sunset-5098-large.mp4"
            onError={(e) => console.error('Newsletter video error:', e)}
            onLoadedData={() => console.log('Newsletter video loaded successfully')}
          >
          </video>
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
              className="flex-grow bg-talon-navy/30 border border-talon-ivory/30 rounded-sm px-6 py-4 focus:outline-none focus:border-talon-gold text-talon-ivory placeholder:text-talon-ivory/50 shadow-lg"
            />
            <button 
              type="submit"
              className="bg-talon-gold hover:bg-talon-gold/80 text-talon-green flex items-center justify-center gap-2 px-8 py-4 rounded-sm transition-colors duration-300 uppercase tracking-wide text-sm font-medium shadow-lg group"
            >
              Subscribe
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
