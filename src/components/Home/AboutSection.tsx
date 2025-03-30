
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-24 bg-sandbeige">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                alt="Wildlife conservation expert"
                className="rounded-sm w-full h-auto object-cover shadow-luxury animate-fade"
              />
              <div className="absolute -bottom-8 -right-8 bg-champagne p-8 rounded-sm shadow-luxury animate-fade animate-delay-200">
                <p className="text-sm text-midnight font-serif italic">
                  "True luxury is an experience that respects both wildlife and local communities."
                </p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="section-title animate-fade">Our Journey</h2>
              <p className="mb-6 text-charcoal/80 animate-fade animate-delay-100">
                Founded by Lindsay, a former zookeeper with a decade of experience, Talon & Tide bridges the gap between luxury travel and ethical wildlife tourism. Our mission is to curate extraordinary animal encounters that uphold the highest standards of conservation and guest experience.
              </p>
              <p className="mb-8 text-charcoal/80 animate-fade animate-delay-200">
                Drawing on a global network of wildlife professionals, each experience we endorse has been thoroughly vetted to ensure it contributes positively to conservation efforts and respects the natural behaviors and needs of the animals.
              </p>
              <Link to="/about" className="btn-primary animate-fade animate-delay-300">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
