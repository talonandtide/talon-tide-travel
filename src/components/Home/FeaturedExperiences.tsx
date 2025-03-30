
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
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade">Curated Experiences</h2>
          <p className="max-w-2xl mx-auto text-talon-stone animate-fade animate-delay-100">
            Preview the types of exclusive wildlife encounters we're carefully vetting for your future journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-talon-green/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-white">{exp.title}</h3>
                  <p className="text-talon-ivory/80 text-sm">{exp.location}</p>
                </div>
              </div>
              <p className="text-sm text-talon-navy mb-4">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade">
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
