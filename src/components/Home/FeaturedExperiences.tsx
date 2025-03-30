
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
];

const FeaturedExperiences = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade">Curated Experiences</h2>
          <p className="max-w-2xl mx-auto text-charcoal/80 animate-fade animate-delay-100">
            Preview the types of exclusive wildlife encounters we're carefully vetting for your future journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="content-card h-full flex flex-col">
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0">
                    <span className="text-xs uppercase tracking-wider text-champagne block mb-1">{exp.location}</span>
                    <h3 className="text-xl font-serif text-white drop-shadow-text">{exp.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-charcoal/80 text-sm mb-6 flex-grow">{exp.description}</p>
                  <Link to={`/experiences/${exp.id}`} className="text-midnight flex items-center gap-1 text-sm group-hover:text-champagne transition-colors duration-300">
                    Discover
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade">
          <Link to="/experiences" className="btn-secondary">
            View All Experiences
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
