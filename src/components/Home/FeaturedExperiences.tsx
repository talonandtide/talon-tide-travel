
import React, { useState } from 'react';
import { ArrowRight, MapPin, Award, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const experiences = [
  {
    id: 1,
    title: 'Private Wildlife Sanctuary',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    description: 'Exclusive behind-the-scenes access to conservation projects with private luxury accommodations.',
    path: "/experiences",
    badge: "Conservation Focus"
  },
  {
    id: 2,
    title: 'Marine Conservation Retreat',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Dive alongside marine biologists while enjoying the comfort of a five-star eco-resort.',
    path: "/experiences",
    badge: "Marine Focus"
  },
  {
    id: 3,
    title: 'Amazon Rainforest Wildlife Expedition',
    location: 'Brazil',
    image: 'https://media.gadventures.com/media-server/cache/d6/f5/d6f51f81aef674f7f3442d9f9622c718.jpg',
    description: 'Trek through pristine rainforest with expert naturalists and retreat to exclusive luxury lodges.',
    path: "/experiences",
    badge: "Expedition"
  },
  {
    id: 4,
    title: 'Arctic Wildlife Expedition',
    location: 'Svalbard, Norway',
    image: 'https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Venture through pristine Arctic landscapes to witness polar bears, walruses, and other remarkable wildlife.',
    path: "/experiences/arctic-expedition",
    badge: "Arctic Exclusive"
  },
];

const FeaturedExperiences = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-talon-parchment via-talon-ivory to-talon-champagne/30 relative overflow-hidden">
      {/* Safari Texture Overlays */}
      <div className="absolute inset-0 bg-texture-canvas opacity-30"></div>
      <div className="absolute inset-0 bg-texture-linen opacity-20"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-talon-brass/10 rounded-full blur-3xl animate-luxury-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-talon-teak/5 rounded-full blur-2xl animate-luxury-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 scroll-reveal">
          <div className="relative inline-block mb-8">
            <div className="absolute -top-6 -left-6 w-3 h-3 bg-talon-brass rounded-full animate-brass-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-talon-copper rounded-full animate-brass-glow" style={{animationDelay: '1s'}}></div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-talon-green mb-4 relative">
              <span className="bg-gradient-to-r from-talon-green via-talon-emerald to-talon-green bg-clip-text">
                Curated
              </span>{' '}
              <span className="relative">
                <span className="text-talon-brass">Expeditions</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-brass opacity-60 blur-sm"></div>
              </span>
            </h2>
            <div className="ornate-divider w-32 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto canvas-texture backdrop-blur-luxury p-8 rounded-sm border border-talon-brass/20 shadow-luxury">
            <p className="text-xl text-talon-navy font-light leading-relaxed mb-4">
              Preview the types of exclusive wildlife encounters we're carefully vetting for your future journeys.
            </p>
            <div className="flex items-center justify-center gap-2 text-talon-brass text-sm font-serif">
              <Award size={16} />
              <span>Each experience personally evaluated by our conservation experts</span>
            </div>
          </div>
        </div>
        
        {/* Desktop Grid with Enhanced Luxury Cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="group scroll-reveal expedition-card safari-hover relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === exp.id ? 'scale-110 brightness-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/90 via-talon-midnight/50 to-transparent" />
                  <div className="absolute inset-0 bg-texture-canvas opacity-20" />
                  
                  {/* Safari Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="bg-gradient-brass px-3 py-1 rounded-sm text-xs font-medium text-talon-midnight shadow-brass">
                      {exp.badge}
                    </div>
                  </div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 canvas-texture backdrop-blur-luxury border border-talon-brass/30 text-talon-champagne px-3 py-1 rounded-sm text-xs shadow-luxury">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 transform transition-all duration-500">
                    <div className="mb-4">
                      <h3 className="text-2xl font-serif text-talon-champagne mb-3 drop-shadow-luxury group-hover:text-white transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-talon-sand/90 text-sm leading-relaxed drop-shadow-text group-hover:text-talon-champagne transition-colors">
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Enhanced CTA */}
                    <Link 
                      to={exp.path}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-4"
                    >
                      <div className="flex items-center gap-2 canvas-texture backdrop-blur-luxury px-4 py-2 rounded-sm border border-talon-brass/40 text-talon-brass hover:bg-talon-brass hover:text-talon-midnight shadow-brass">
                        <Compass size={14} />
                        <span>Explore Journey</span>
                        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                  
                  {/* Hover Shine Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                    hoveredId === exp.id ? 'translate-x-full' : '-translate-x-full'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={exp.id} className="md:basis-1/2">
                  <div className="expedition-card safari-hover relative overflow-hidden">
                    <div className="aspect-[4/5]">
                      <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/90 via-talon-midnight/50 to-transparent" />
                      <div className="absolute inset-0 bg-texture-canvas opacity-20" />
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-brass px-3 py-1 rounded-sm text-xs font-medium text-talon-midnight shadow-brass">
                        {exp.badge}
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex items-center gap-1 canvas-texture backdrop-blur-luxury border border-talon-brass/30 text-talon-champagne px-3 py-1 rounded-sm text-xs">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                    
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-xl font-serif text-talon-champagne mb-2 drop-shadow-luxury">{exp.title}</h3>
                      <p className="text-talon-sand/90 text-xs mb-4 drop-shadow-text">{exp.description}</p>
                      <Link 
                        to={exp.path} 
                        className="inline-flex items-center gap-2 canvas-texture backdrop-blur-luxury px-4 py-2 rounded-sm border border-talon-brass/40 text-talon-brass text-sm hover:bg-talon-brass hover:text-talon-midnight transition-all shadow-brass"
                      >
                        <Compass size={14} />
                        <span>Explore Journey</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-talon-brass text-talon-brass hover:bg-talon-brass hover:text-talon-midnight shadow-brass" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-talon-brass text-talon-brass hover:bg-talon-brass hover:text-talon-midnight shadow-brass" />
            </div>
          </Carousel>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 scroll-reveal">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-brass opacity-20 blur-xl rounded-lg"></div>
            <Link to="/experiences" className="group relative">
              <div className="canvas-texture backdrop-blur-luxury p-8 rounded-sm border-2 border-talon-brass/40 shadow-luxury hover:shadow-expedition transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-center gap-4 text-talon-green hover:text-talon-brass transition-colors">
                  <Award className="group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-xl font-serif font-medium">View All Expeditions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <p className="text-talon-stone text-sm mt-2 font-light">
                  Discover your next extraordinary wildlife adventure
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
