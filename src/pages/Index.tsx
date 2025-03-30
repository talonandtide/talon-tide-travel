
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import AboutSection from '@/components/Home/AboutSection';
import FeaturedExperiences from '@/components/Home/FeaturedExperiences';
import BlogPreview from '@/components/Home/BlogPreview';
import Newsletter from '@/components/Home/Newsletter';
import InstagramFeed from '@/components/Home/InstagramFeed';

const Index = () => {
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
