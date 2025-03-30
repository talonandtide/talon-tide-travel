
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    title: 'Private Wildlife Sanctuary',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    description: 'Exclusive behind-the-scenes access to conservation projects with private luxury accommodations and personalized safari experiences guided by conservation specialists.',
    duration: '7 days',
    ethicalRating: 5,
  },
  {
    id: 2,
    title: 'Marine Conservation Retreat',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Dive alongside marine biologists while enjoying the comfort of a five-star eco-resort. Participate in reef restoration projects and encounter marine wildlife in their natural habitat.',
    duration: '10 days',
    ethicalRating: 5,
  },
  {
    id: 3,
    title: 'Rainforest Wildlife Expedition',
    location: 'Costa Rica',
    image: 'https://images.unsplash.com/photo-1469033363950-eb392a20d59e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Trek through pristine rainforest with expert naturalists and retreat to exclusive luxury lodges. Encounter diverse wildlife while supporting local conservation initiatives.',
    duration: '8 days',
    ethicalRating: 5,
  },
  {
    id: 4,
    title: 'Arctic Wildlife Expedition',
    location: 'Norway',
    image: 'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Observe polar wildlife in their natural habitat while staying in sustainable, luxury accommodations. Expert guides ensure respectful wildlife viewing and educational experiences.',
    duration: '6 days',
    ethicalRating: 5,
  },
  {
    id: 5,
    title: 'African Elephant Sanctuary',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    description: 'Connect with rescued elephants in a sanctuary setting, guided by elephant specialists. Luxury tented camp accommodations provide comfort while maintaining an immersive wilderness experience.',
    duration: '5 days',
    ethicalRating: 5,
  },
  {
    id: 6,
    title: 'Galapagos Exclusive Voyage',
    location: 'Ecuador',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Cruise the Galapagos Islands on a luxury yacht with an expert naturalist. Experience close encounters with unique wildlife while supporting conservation research.',
    duration: '12 days',
    ethicalRating: 5,
  },
];

const Experiences = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Curated Experiences</h1>
            <p className="text-lg text-talon-navy/80 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              A preview of the exclusive wildlife journeys we're carefully vetting for future offerings.
            </p>
            <div className="inline-block border border-talon-green/20 bg-white/80 rounded-sm px-6 py-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <p className="text-talon-navy text-sm">
                <strong>Coming Soon:</strong> These experiences will be available for booking in the near future. Subscribe to our newsletter for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences List */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="bg-white rounded-sm shadow-sm overflow-hidden animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 bg-talon-navy/80 text-white text-xs px-3 py-1 rounded-sm">
                      <MapPin size={12} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1 bg-talon-green/80 text-white text-xs px-3 py-1 rounded-sm">
                      {experience.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl mb-2 text-talon-green">{experience.title}</h2>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="text-xs text-talon-gold">Ethical Rating:</div>
                    <div className="flex">
                      {[...Array(experience.ethicalRating)].map((_, i) => (
                        <Star key={i} size={14} fill="#BC9A5F" color="#BC9A5F" />
                      ))}
                    </div>
                  </div>
                  <p className="text-talon-navy text-sm mb-6">{experience.description}</p>
                  <button className="btn-secondary w-full justify-center">
                    Stay Updated
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 animate-fade">Our Vetting Process</h2>
            <p className="text-talon-ivory/80 animate-fade animate-delay-100">
              Every experience featured on Talon & Tide undergoes a thorough evaluation process to ensure it meets our high standards for ethics, animal welfare, conservation impact, and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-200">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4">1</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Initial Research</h3>
              <p className="text-talon-ivory/80 text-sm">
                We identify experiences that claim to uphold high ethical standards and offer exceptional wildlife encounters.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-300">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4">2</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Expert Review</h3>
              <p className="text-talon-ivory/80 text-sm">
                Our network of wildlife professionals evaluates each experience based on animal welfare, conservation impact, and authenticity.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-400">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4">3</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Site Visit</h3>
              <p className="text-talon-ivory/80 text-sm">
                We personally visit and assess each experience, evaluating everything from wildlife interaction protocols to accommodation quality.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-500">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4">4</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Final Selection</h3>
              <p className="text-talon-ivory/80 text-sm">
                Only experiences that excel in all categories make it into our curated collection, ensuring they meet both ethical and luxury standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title animate-fade">Stay Informed</h2>
            <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
              Our curated experiences will be available for booking soon. Subscribe to our newsletter to be the first to know when these extraordinary journeys become available.
            </p>
            <Link to="/" className="btn-primary animate-fade animate-delay-200">
              Follow the Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiences;
