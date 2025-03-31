
import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
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
  },
  {
    id: 2,
    title: 'Marine Conservation Retreat',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Dive alongside marine biologists while enjoying the comfort of a five-star eco-resort.',
  },
  {
    id: 3,
    title: 'Rainforest Wildlife Expedition',
    location: 'Costa Rica',
    image: 'https://images.unsplash.com/photo-1469033363950-eb392a20d59e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Trek through pristine rainforest with expert naturalists and retreat to exclusive luxury lodges.',
  },
  {
    id: 4,
    title: 'Arctic Wildlife Expedition',
    location: 'Norway',
    image: 'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Observe polar wildlife in their natural habitat while staying in sustainable, luxury accommodations.',
  },
];

const FeaturedExperiences = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-talon-sand/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-talon-green mb-6 drop-shadow-sm animate-fade">
            Curated <span className="text-talon-gold">Experiences</span>
          </h2>
          <p className="max-w-2xl mx-auto text-talon-navy font-light text-lg animate-fade animate-delay-100">
            Preview the types of exclusive wildlife encounters we're carefully vetting for your future journeys.
          </p>
        </div>
        
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="group animate-fade relative overflow-hidden card-luxury"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden h-96">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === exp.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/80 via-talon-midnight/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-talon-ivory/90 text-talon-midnight px-3 py-1 rounded-sm text-xs">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif text-white mb-2 drop-shadow-text">{exp.title}</h3>
                    <p className="text-talon-ivory/90 text-sm mb-4 opacity-80 drop-shadow-text">{exp.description}</p>
                    <Link 
                      to="/experiences" 
                      className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 transition-colors"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={exp.id} className="md:basis-1/2">
                  <div className="relative overflow-hidden rounded-sm card-luxury">
                    <div className="aspect-[4/5]">
                      <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/80 via-talon-midnight/40 to-transparent" />
                    </div>
                    
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-talon-ivory/90 text-talon-midnight px-3 py-1 rounded-sm text-xs">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                    
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-xl font-serif text-white mb-2 drop-shadow-text">{exp.title}</h3>
                      <p className="text-talon-ivory/90 text-xs mb-4 drop-shadow-text">{exp.description}</p>
                      <Link 
                        to="/experiences" 
                        className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 transition-colors"
                      >
                        View Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-talon-gold text-talon-gold hover:bg-talon-gold hover:text-white" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-talon-gold text-talon-gold hover:bg-talon-gold hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-16 animate-fade">
          <Link to="/experiences" className="btn-secondary group">
            View All Experiences
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
