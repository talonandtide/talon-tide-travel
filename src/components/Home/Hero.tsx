
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Replace static images with video sources
const heroVideos = [
  'https://player.vimeo.com/external/373500378.sd.mp4?s=ca0a4c09a78a2149364434c86da8d41798c8b0a5&profile_id=164&oauth2_token_id=57447761', // safari sunrise video
  'https://player.vimeo.com/external/438727472.sd.mp4?s=3e3ffdf7f63be95162832c36236bbe49a3f5bd3f&profile_id=164&oauth2_token_id=57447761', // underwater marine life
  'https://player.vimeo.com/external/517090081.sd.mp4?s=6a3cf6c0177f2818485bff889b7462ab6cf29856&profile_id=164&oauth2_token_id=57447761' // forest wildlife scene
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
        setIsTransitioning(false);
      }, 500);
    }, 10000); // Longer interval for videos

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Videos with Crossfade */}
      <div className="absolute inset-0 z-0 video-container">
        {heroVideos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              currentVideoIndex === index 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => console.log('Video error:', e)}
              onLoadedData={() => console.log(`Hero video ${index} loaded`)}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-talon-midnight/80 via-talon-green/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-talon-ivory font-serif leading-tight mb-6 animate-fade-in drop-shadow-text-lg">
            Where Wild Meets <span className="text-talon-gold">Refined</span>
          </h1>
          <p className="text-talon-ivory text-lg md:text-xl mb-10 max-w-xl font-light animate-fade-in drop-shadow-text tracking-wide" style={{ animationDelay: '200ms' }}>
            Exclusive, ethical wildlife experiences curated by conservation experts for the discerning traveler.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link to="/experiences" className="btn-primary group">
              Explore Experiences
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-secondary group">
              Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <div className="flex flex-col items-center text-talon-ivory">
          <span className="text-xs uppercase tracking-widest mb-2 drop-shadow-text">Discover</span>
          <ChevronDown size={20} className="drop-shadow-text" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
