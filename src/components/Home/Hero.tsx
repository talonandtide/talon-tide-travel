
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Compass, Map } from 'lucide-react';
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
      {/* Enhanced Background Media with Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        {useVideoFallback ? (
          // Fallback Images with luxury treatment
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
          // Videos with luxury treatment
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
        
        {/* Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-luxury" />
        <div className="absolute inset-0 bg-texture-canvas opacity-20" />
        
        {/* Floating Safari Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-talon-brass/20 rounded-full blur-3xl animate-luxury-float opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-talon-copper/15 rounded-full blur-2xl animate-luxury-float opacity-40" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-talon-gold/25 rounded-full blur-2xl animate-luxury-float opacity-50" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Safari Compass Decoration */}
      <div className="absolute top-8 right-8 z-10 opacity-30">
        <div className="relative w-16 h-16 animate-luxury-float">
          <Compass className="w-full h-full text-talon-brass drop-shadow-luxury" style={{animationDelay: '2s'}} />
          <div className="absolute inset-0 rounded-full border-2 border-talon-gold/30 animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
      </div>

      {/* Enhanced Content with Safari Styling */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-md md:max-w-3xl">
          {/* Ornate Title Treatment */}
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-talon-brass rounded-full animate-brass-glow"></div>
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-talon-copper rounded-full animate-brass-glow" style={{animationDelay: '1s'}}></div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-talon-ivory font-serif leading-tight animate-luxury-fade-in">
              Where <span className="relative">
                <span className="text-talon-gold">Wild</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-gold opacity-60 blur-sm"></div>
              </span> Meets{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-talon-brass to-talon-copper bg-clip-text text-transparent">
                  Refined
                </span>
                <div className="absolute -inset-2 bg-talon-gold/10 blur-xl rounded-lg"></div>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="relative">
            <p className="text-talon-champagne text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl font-light animate-luxury-fade-in leading-relaxed tracking-wide canvas-texture backdrop-blur-luxury p-6 rounded-sm border border-talon-brass/20" style={{ animationDelay: '300ms' }}>
              Exclusive, ethical wildlife experiences curated by conservation experts for the discerning traveler. 
              <span className="block mt-2 text-talon-brass font-serif italic">
                Adventures worthy of the finest expedition journals.
              </span>
            </p>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap gap-6 animate-luxury-fade-in" style={{ animationDelay: '600ms' }}>
            <Link to="/experiences" className="group relative">
              <div className="absolute -inset-1 bg-gradient-brass rounded-sm blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative btn-primary trunk-border px-10 py-5 text-lg font-medium">
                <Map className="mr-3" size={20} />
                Explore Expeditions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
            
            <Link to="/about" className="group relative">  
              <div className="relative btn-secondary interactive-element px-10 py-5 text-lg font-medium">
                <Compass className="mr-3" size={20} />
                Our Legacy
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer group" onClick={scrollToAbout}>
        <div className="flex flex-col items-center text-talon-champagne animate-luxury-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="mb-4 p-3 rounded-full border border-talon-brass/30 backdrop-blur-luxury group-hover:border-talon-brass/60 transition-all duration-300 group-hover:shadow-brass">
            <span className="block text-xs uppercase tracking-[0.2em] mb-2 font-serif">Begin Journey</span>
            <ChevronDown size={24} className="animate-bounce drop-shadow-luxury group-hover:text-talon-brass transition-colors" />
          </div>
          <div className="w-0.5 h-8 bg-gradient-to-b from-talon-brass/60 to-transparent"></div>
        </div>
      </div>

      {/* Safari Expedition Badge */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="canvas-texture backdrop-blur-luxury p-4 rounded-sm border border-talon-brass/30 animate-luxury-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="text-talon-champagne text-xs uppercase tracking-widest font-serif">
            Est. 2024
          </div>
          <div className="text-talon-brass text-sm font-medium">
            Talon & Tide
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
