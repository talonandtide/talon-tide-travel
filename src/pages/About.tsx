
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Our <span className="font-script text-script-lg text-talon-gold">Story</span></h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
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
                Still, I always found myself dreaming of the wild—and seeing the animals I worked with in their natural habitats. That dream is what sparked Talon & Tide. I built this company to bridge both worlds: the thoughtfully curated encounters at leading zoos and aquariums, and the extraordinary wildlife tours that bring you face to face with nature on its own terms. Every experience I recommend is carefully vetted for both quality and ethics, so your journey not only inspires wonder but also supports conservation, helping ensure these moments of connection are possible for generations to come.
              </p>
              <Link to="/contact" className="btn-primary animate-fade animate-delay-300">
                Connect With Us
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/42e1cde9-5c7a-4efa-9536-cce93f56b5ee.png"
                alt="Lindsay with baboons in their natural habitat"
                className="w-full h-auto rounded-sm shadow-lg animate-fade"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-lg rounded-sm max-w-xs animate-fade animate-delay-200">
                <blockquote className="font-serif text-talon-green italic text-lg">
                  "True luxury is knowing your extraordinary experience also makes a positive impact."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
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
              At Talon & Tide, we don't work alone. Every experience we curate is evaluated by a network of wildlife professionals, including:
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
                    Who evaluate the conservation impact and sustainability of each wildlife experience.
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
                    Who assess animal welfare standards and healthcare protocols.
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
                    Who ensure experiences accurately represent local culture and provide authentic insights.
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
                    Who evaluate accommodations, service standards, and overall guest experience.
                  </p>
                </div>
              </li>
            </ul>
            <div className="text-center animate-fade animate-delay-600">
              <Link to="/experiences" className="btn-secondary">
                Explore Our Curated Experiences
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Affiliations */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-12 animate-fade">Trusted <span className="font-script text-script-lg text-talon-gold">Partnerships</span></h2>
            <div className="bg-white/80 p-8 rounded-sm shadow-lg animate-fade animate-delay-100">
              <p className="text-lg text-talon-navy/90 mb-6 leading-relaxed">
                Talon & Tide is a proud independent affiliate of WorldVia and Travel Leaders Network, meaning our clients benefit from exclusive access to world-renowned hotels, expedition leaders, and conservation experiences, many of which have been recognized by Forbes, Condé Nast Traveler, and Travel + Leisure.
              </p>
              <p className="text-lg text-talon-navy/90 leading-relaxed">
                Our global network includes over 2,200 suppliers and industry insiders, ensuring VIP treatment, custom-curated itineraries, and unmatched attention to ethical details. Behind the scenes, your journey is supported by a legacy of excellence, so you can explore with confidence, knowing you're in expert hands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
