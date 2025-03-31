
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Use mp4 format videos that work more reliably
const heroVideos = [
  'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-putting-food-in-a-shelter-for-43313-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-marine-turtles-swimming-underwater-1492-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-white-tiger-lying-down-and-stretching-14539-large.mp4'
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Initialize videoRefs
  if (videoRefs.current.length !== heroVideos.length) {
    videoRefs.current = Array(heroVideos.length).fill(null);
  }

  useEffect(() => {
    // Create refs for each video
    videoRefs.current = videoRefs.current.slice(0, heroVideos.length);
    
    // Try to play the current video
    const playCurrentVideo = () => {
      const currentVideo = videoRefs.current[currentVideoIndex];
      if (currentVideo) {
        console.log(`Attempting to play hero video ${currentVideoIndex}`);
        currentVideo.play().catch(err => {
          console.error(`Hero video ${currentVideoIndex} play error:`, err);
        });
      }
    };

    // Initial play attempt
    playCurrentVideo();
    
    // Set up rotation interval
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
        setIsTransitioning(false);
        setTimeout(playCurrentVideo, 100);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentVideoIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Videos with Crossfade */}
      <div className="absolute inset-0 z-0">
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
              ref={el => {
                if (el) videoRefs.current[index] = el;
              }}
              src={video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => console.error(`Hero video ${index} error:`, e)}
              onLoadedData={() => console.log(`Hero video ${index} loaded successfully`)}
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
