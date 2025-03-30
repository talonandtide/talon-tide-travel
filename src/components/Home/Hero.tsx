
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469041908917-89bc00316a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-md md:max-w-lg">
          <h1 className="hero-title text-white mb-2 animate-fade-in">
            Where Wild Meets <span className="text-gradient">Refined</span>
          </h1>
          <p className="hero-subtitle text-talon-sand mb-8 max-w-md font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
            Exclusive, ethical wildlife experiences curated by conservation experts for the discerning traveler.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link to="/experiences" className="btn-primary">
              Explore Experiences
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-secondary">
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-subtle-pulse">
        <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-champagne to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
