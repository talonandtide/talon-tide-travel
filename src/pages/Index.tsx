
import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import AboutSection from '@/components/Home/AboutSection';
import FeaturedExperiences from '@/components/Home/FeaturedExperiences';
import BlogPreview from '@/components/Home/BlogPreview';
import Newsletter from '@/components/Home/Newsletter';
import InstagramFeed from '@/components/Home/InstagramFeed';

const Index = () => {
  useEffect(() => {
    // Intersection Observer to trigger animations and video playback when elements come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add show class for animations
          entry.target.classList.add('show');
          
          // Play videos when they come into view
          const video = entry.target.querySelector('video');
          if (video) {
            console.log('Found video element:', video);
            video.play().catch(err => console.log('Auto-play prevented:', err));
          }
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-fade');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
    
    // Observe videos separately to ensure they play
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach((el) => {
      observer.observe(el);
    });

    // Initial load - try to play videos that are already in view
    setTimeout(() => {
      document.querySelectorAll('video').forEach(video => {
        if (isElementInViewport(video)) {
          console.log('Playing video that is in viewport on load');
          video.play().catch(err => console.log('Initial play prevented:', err));
        }
      });
    }, 1000);

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
      videoContainers.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Helper function to check if element is in viewport
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <Layout>
      <Hero />
      <AboutSection />
      <FeaturedExperiences />
      <BlogPreview />
      <Newsletter />
      <InstagramFeed />
    </Layout>
  );
};

export default Index;
