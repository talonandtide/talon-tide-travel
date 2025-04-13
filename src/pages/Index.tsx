
import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import AboutSection from '@/components/Home/AboutSection';
import FeaturedExperiences from '@/components/Home/FeaturedExperiences';
import BlogPreview from '@/components/Home/BlogPreview';
import Newsletter from '@/components/Home/Newsletter';
import InstagramFeed from '@/components/Home/InstagramFeed';
import emailjs from 'emailjs-com';

const Index = () => {
  useEffect(() => {
    // Initialize EmailJS with user ID
    emailjs.init('kfwhy7VZD5cyq76uF');
    
    // Intersection Observer to trigger animations when elements come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-fade');
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

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
