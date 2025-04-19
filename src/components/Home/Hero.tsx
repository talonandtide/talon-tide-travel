
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Updated reliable video sources with WebM and MP4 options
const heroVideos = [
  {
    url: 'https://cdn.coverr.co/videos/coverr-elephant-walking-in-the-wilderness-2733/1080p.mp4',
    type: 'video/mp4'
  },
  {
    url: 'https://cdn.coverr.co/videos/coverr-aerial-shot-of-a-lake-5061/1080p.mp4',
    type: 'video/mp4'
  },
  {
    url: 'https://cdn.coverr.co/videos/coverr-wild-horses-running-5364/1080p.mp4',
    type: 'video/mp4'
  }
];

// Reliable fallback images
const fallbackImages = [
  'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1920',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1920',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?q=80&w=1920'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useVideoFallback, setUseVideoFallback] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Set up rotation interval
  useEffect(() => {
    console.log('Hero component mounted, testing video playback...');
    
    // Check if videos can be played
    const checkVideoPlayback = async () => {
      try {
        const testVideo = document.createElement('video');
        testVideo.muted = true;
        testVideo.playsInline = true;
        testVideo.src = heroVideos[0].url;
        
        testVideo.addEventListener('error', () => {
          console.log('Video test failed, switching to fallback images');
          setUseVideoFallback(true);
        });
        
        testVideo.addEventListener('loadeddata', () => {
          console.log('Video test succeeded, can play videos');
          setVideoLoaded(true);
        });
        
        // Explicitly load the video
        testVideo.load();
        await testVideo.play().catch(err => {
          console.log('Video autoplay failed:', err);
          setUseVideoFallback(true);
        });
      } catch (error) {
        console.log('Video test exception:', error);
        setUseVideoFallback(true);
      }
    };
    
    checkVideoPlayback();
    
    // Only start rotation after checking video capability
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % (useVideoFallback ? fallbackImages.length : heroVideos.length));
        setIsTransitioning(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [useVideoFallback]);

  // Log component state changes
  useEffect(() => {
    console.log('Hero state update - Using fallback:', useVideoFallback, 'Current index:', currentIndex);
  }, [useVideoFallback, currentIndex]);

  // Preload all videos when not using fallback
  useEffect(() => {
    if (!useVideoFallback) {
      heroVideos.forEach((video, index) => {
        const preloadVideo = new Audio(video.url);
        preloadVideo.load();
        console.log(`Preloading video ${index}...`);
      });
    }
  }, [useVideoFallback]);

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
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}?auto=format&fit=crop&w=1920&q=80')` }}
            />
          ))
        ) : (
          // Videos
          heroVideos.map((video, index) => (
            <div
              key={`video-${index}`}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {currentIndex === index && (
                <video
                  key={`video-element-${index}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadedData={() => console.log(`Video ${index} loaded successfully`)}
                  onError={(e) => {
                    console.error(`Error playing video ${index}:`, e);
                    setUseVideoFallback(true);
                  }}
                >
                  <source src={video.url} type={video.type} />
                  Your browser does not support the video tag.
                </video>
              )}
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
