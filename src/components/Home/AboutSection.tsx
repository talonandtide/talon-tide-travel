
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-talon-ivory">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <video
                src="https://player.vimeo.com/external/368278117.sd.mp4?s=28a7a5f976a82484ddddff38233ed78cf4d6fc8f&profile_id=164&oauth2_token_id=57447761" // conservation expert with animals
                autoPlay
                muted
                loop
                playsInline
                className="rounded-sm w-full h-auto object-cover animate-fade"
              />
              <div className="absolute -bottom-6 -right-6 bg-talon-gold p-6 rounded-sm animate-fade animate-delay-200">
                <p className="text-sm text-talon-green font-serif italic">
                  "True luxury is an experience that respects both wildlife and local communities."
                </p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title animate-fade">Our Journey</h2>
            <p className="mb-6 animate-fade animate-delay-100">
              Founded by Lindsay, a former zookeeper with a decade of experience, Talon & Tide bridges the gap between luxury travel and ethical wildlife tourism. Our mission is to curate extraordinary animal encounters that uphold the highest standards of conservation and guest experience.
            </p>
            <p className="mb-8 animate-fade animate-delay-200">
              Drawing on a global network of wildlife professionals, each experience we endorse has been thoroughly vetted to ensure it contributes positively to conservation efforts and respects the natural behaviors and needs of the animals.
            </p>
            <Link to="/about" className="btn-primary animate-fade animate-delay-300">
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
