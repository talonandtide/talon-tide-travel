import React from 'react';

const TrustedPartners = () => {
  const partners = [
    // Luxury Hotels
    { name: 'Aman', category: 'luxury' },
    { name: 'Four Seasons', category: 'luxury' },
    { name: 'Rosewood', category: 'luxury' },
    { name: 'Ritz-Carlton', category: 'luxury' },
    { name: 'Relais & Châteaux', category: 'luxury' },
    
    // Conservation Organizations
    { name: 'National Geographic Expeditions', category: 'conservation' },
    { name: 'WWF Travel', category: 'conservation' },
    { name: 'Red Panda Network', category: 'conservation' },
    { name: 'Galápagos Conservancy', category: 'conservation' },
    { name: 'African Parks', category: 'conservation' },
    { name: 'Panthera', category: 'conservation' },
    
    // Expedition Companies
    { name: 'Abercrombie and Kent', category: 'expedition' },
    { name: 'Quark Expeditions', category: 'expedition' },
    { name: '&Beyond', category: 'expedition' },
  ];

  // Duplicate the array for seamless infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-talon-sand/20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade">Trusted <span className="font-script text-script-lg text-talon-gold">Partners</span></h2>
          <p className="text-lg text-talon-navy/80 animate-fade animate-delay-100">
            Working with the world's finest hotels, conservation organizations, and expedition leaders
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-talon-sand/20 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-talon-sand/20 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white/60 backdrop-blur-sm px-6 py-4 rounded-sm shadow-sm border border-talon-sand/30 hover:shadow-md transition-all duration-300 hover:bg-white/80">
                  <span className="text-talon-navy font-medium whitespace-nowrap text-sm md:text-base">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </section>
  );
};

export default TrustedPartners;