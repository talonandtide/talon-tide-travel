
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Updated video URLs from more reliable sources
const heroVideos = [
  {
    url: 'https://player.vimeo.com/external/477294131.sd.mp4?s=591d864400f6bf6bbd7775a69c950df6870e3f7a&profile_id=164&oauth2_token_id=57447761',
    type: 'video/mp4'
  },
  {
    url: 'https://player.vimeo.com/external/291619888.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761',
    type: 'video/mp4'
  },
  {
    url: 'https://player.vimeo.com/external/517090025.sd.mp4?s=60f2a93f5e9972759ee65c5b9b187621452a6eb9&profile_id=165&oauth2_token_id=57447761',
    type: 'video/mp4'
  }
];

// Updated reliable fallback images
const fallbackImages = [
  'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  'https://images.unsplash.com/photo-1518877593221-1f28583780b4',
  'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useVideoFallback, setUseVideoFallback] = useState(false);

  // Set up rotation interval
  useEffect(() => {
    // Immediately check if videos can be played
    const testVideoElement = document.createElement('video');
    testVideoElement.muted = true;
    testVideoElement.src = heroVideos[0].url;
    testVideoElement.addEventListener('error', () => {
      console.log('Video test failed, using fallback images');
      setUseVideoFallback(true);
    });
    
    // Try to play test video
    const playPromise = testVideoElement.play();
    if (playPromise !== undefined) {
      playPromise
        .catch(error => {
          console.log('Video autoplay failed:', error);
          setUseVideoFallback(true);
        });
    }

    // Set up rotation interval
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % (useVideoFallback ? fallbackImages.length : heroVideos.length));
        setIsTransitioning(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [useVideoFallback]);

  // Log component load
  useEffect(() => {
    console.log('Hero component mounted, using fallback:', useVideoFallback);
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
              style={{ backgroundImage: `url('${image}')` }}
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
                  onError={() => {
                    console.error(`Error playing video ${index}`);
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
