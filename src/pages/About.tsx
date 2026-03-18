
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1920&auto=format&fit=crop" 
            alt="Elephants walking at golden hour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-talon-midnight/70 via-talon-midnight/50 to-talon-midnight/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-ivory mb-6 animate-fade-in">Our <span className="font-script text-script-lg text-talon-gold">Story</span></h1>
            <p className="text-lg text-talon-ivory/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Where passion for wildlife conservation meets luxury travel expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title animate-fade">Meet <span className="font-script text-script-lg text-talon-gold">Lindsay</span></h2>
              <p className="mb-4 animate-fade animate-delay-100">
                I spent over a decade as a zookeeper at some of the country's top AZA-accredited zoos, caring for everything from lions, tigers, and rhinos to cassowaries and brown bears. My specialties were big cats, African hoofstock, and pachyderms, animals that leave everyone who interacts with them in awe. I led countless private, behind-the-scenes experiences, where I learned what discerning guests truly seek: access, meaning, and the chance to connect with animals in a way that feels rare and unforgettable.
              </p>
              <p className="mb-6 animate-fade animate-delay-200">
                Still, I found myself dreaming of the wild, and seeing the animals I worked with in their natural habitats. That dream is what sparked Talon & Tide. I built this platform to connect travelers with the world's most extraordinary wildlife experiences -  from behind-the-scenes encounters at leading zoos and aquariums to expeditions that bring you face to face with nature on its own terms. You keep the power to book directly; I make sure every experience you find is worthy of your trust.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade animate-delay-300">
                <a href="https://app.talonandtide.com" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  Explore the App
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-secondary">
                  Connect With Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/42e1cde9-5c7a-4efa-9536-cce93f56b5ee.png"
                alt="Lindsay with baboons in their natural habitat"
                className="w-full h-auto rounded-sm shadow-lg animate-fade" />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-lg rounded-sm max-w-xs animate-fade animate-delay-200">
                <blockquote className="font-serif text-talon-green italic text-lg">
                  "True luxury is knowing your extraordinary experience also makes a positive impact."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Image Break */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1920&auto=format&fit=crop" 
          alt="Wild horses running across a misty plain" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-talon-midnight/10 via-transparent to-talon-midnight/10" />
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-talon-green text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-talon-ivory animate-fade">Our <span className="font-script text-script-lg text-talon-gold">Mission</span></h2>
            <p className="text-xl text-talon-ivory/90 mb-10 animate-fade animate-delay-100">
              To curate wildlife experiences that uphold the highest standards of both luxury and ethics, ensuring extraordinary encounters that benefit animals, local communities, and travelers alike.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-200">
                <h3 className="font-serif text-xl mb-4 text-talon-gold">For Wildlife</h3>
                <p className="text-talon-ivory/80">
                  We only endorse experiences that respect natural behaviors, provide appropriate habitats, and actively contribute to conservation efforts.
                </p>
              </div>
              <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-300">
                <h3 className="font-serif text-xl mb-4 text-talon-gold">For Communities</h3>
                <p className="text-talon-ivory/80">
                  We prioritize experiences that employ local staff, use sustainable resources, and invest in community development.
                </p>
              </div>
              <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-400">
                <h3 className="font-serif text-xl mb-4 text-talon-gold">For Travelers</h3>
                <p className="text-talon-ivory/80">
                  We ensure every experience delivers unparalleled access, comfort, and authentic connections with wildlife and nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12 animate-fade">Our Expert <span className="font-script text-script-lg text-talon-gold">Network</span></h2>
            <p className="mb-6 animate-fade animate-delay-100">
              Our recommendations are shaped by conversations with people who know wildlife, travel, and conservation from the ground up. We draw on the knowledge of:
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4 animate-fade animate-delay-200">
                <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-talon-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-talon-green mb-1">Conservation Scientists</h3>
                  <p className="text-talon-navy/80">
                    Whose insights help us understand the real conservation impact behind each experience.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 animate-fade animate-delay-300">
                <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-talon-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-talon-green mb-1">Veterinarians</h3>
                  <p className="text-talon-navy/80">
                    Whose expertise informs how we think about animal welfare and care standards.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 animate-fade animate-delay-400">
                <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-talon-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-talon-green mb-1">Local Guides & Experts</h3>
                  <p className="text-talon-navy/80">
                    Who bring on-the-ground perspective and cultural authenticity to what we recommend.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 animate-fade animate-delay-500">
                <div className="bg-talon-gold/20 p-2 rounded-sm h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-talon-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-talon-green mb-1">Luxury Travel Specialists</h3>
                  <p className="text-talon-navy/80">
                    Who help us understand what elevated hospitality looks like in remote destinations.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 justify-center animate-fade animate-delay-600">
              <a href="https://app.talonandtide.com/explore" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Explore Experiences on the App
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-luxury p-10 text-center">
              <h3 className="font-serif text-2xl text-talon-green mb-4">For Travelers</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-6">
                Browse vetted wildlife experiences and book directly with operators you can trust.
              </p>
              <a 
                href="https://app.talonandtide.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary group"
              >
                Explore the App
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="card-luxury p-10 text-center">
              <h3 className="font-serif text-2xl text-talon-green mb-4">For Operators</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-6">
                Get your conservation work in front of travelers who value ethics. No fees to be listed.
              </p>
              <Link to="/for-operators" className="btn-secondary group">
                Partner With Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

};

export default About;