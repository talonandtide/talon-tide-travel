
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroVideos = [
  {
    url: 'https://cdn.coverr.co/videos/coverr-elephant-walking-in-the-savannah-2633/1080p.mp4',
    type: 'video/mp4'
  },
  {
    url: 'https://cdn.coverr.co/videos/coverr-a-blue-whale-swimming-in-deep-ocean-5227/1080p.mp4',
    type: 'video/mp4'
  },
  {
    url: 'https://cdn.coverr.co/videos/coverr-moose-grazing-in-wild-1268/1080p.mp4',
    type: 'video/mp4'
  }
];

// Fallback images if videos fail to load
const fallbackImages = [
  'https://images.unsplash.com/photo-1469041908917-89bc00316a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80',
  'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useVideoFallback, setUseVideoFallback] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Initialize video elements
  useEffect(() => {
    // Preload videos
    heroVideos.forEach((video, index) => {
      const videoElement = document.createElement('video');
      videoElement.src = video.url;
      videoElement.preload = 'auto';
      
      // Handle loading errors
      videoElement.onerror = () => {
        console.error(`Error loading video: ${video.url}`);
        setUseVideoFallback(true);
      };
    });

    // Log when component loads
    console.log('Hero component mounted with videos:', heroVideos);
  }, []);

  // Rotation effect for videos/images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
        setIsTransitioning(false);
      }, 1000);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  // Handle video playback
  useEffect(() => {
    if (!useVideoFallback) {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          if (index === currentVideoIndex) {
            // Ensure current video is playing
            videoRef.play().catch(err => {
              console.error(`Error playing video: ${err.message}`);
              setUseVideoFallback(true);
            });
            console.log(`Playing video at index ${index}`);
          }
        }
      });
    }
  }, [currentVideoIndex, useVideoFallback]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Media with Crossfade */}
      <div className="absolute inset-0 z-0">
        {useVideoFallback ? (
          // Fallback Images
          fallbackImages.map((image, index) => (
            <div
              key={`fallback-${index}`}
              className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${
                currentVideoIndex === index 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))
        ) : (
          // Videos
          heroVideos.map((video, index) => (
            <div
              key={`video-${index}`}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
                currentVideoIndex === index 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              <video
                ref={el => videoRefs.current[index] = el}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => {
                  console.error(`Error with video ${index}`);
                  setUseVideoFallback(true);
                }}
              >
                <source src={video.url} type={video.type} />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        )}
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
