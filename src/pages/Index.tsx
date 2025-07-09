import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import Newsletter from '@/components/Home/Newsletter';
import InstagramFeed from '@/components/Home/InstagramFeed';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const testimonials = [
  {
    id: 1,
    title: "Ultra-Luxury Birding Expedition in Papua New Guinea",
    quote: "I never imagined a birding trip could feel like a five-star expedition. We had private helicopters, luxury lodge stays, and exclusive access to species most people only dream of seeing. Talon & Tide made it seamless — this was the most unforgettable travel experience of my life.",
    author: "Nathan M.",
    location: "Papua New Guinea, 2024"
  },
  {
    id: 2,
    title: "VIP Weekend Zoo Escape + Luxury Hotel",
    quote: "I only had a weekend off, but Lindsay turned it into something I never expected. A private behind-the-scenes tour followed by surprise champagne waiting for me at my five-star suite nearby. It felt like I'd been away for a week - I came home refreshed and ready to book a longer trip!",
    author: "Camille D.",
    location: "Atlanta, 2025"
  },
  {
    id: 3,
    title: "Conservation Mission: Leopard Collaring",
    quote: "We weren't just observing, we were part of it. Lindsay placed us with real conservation fieldworkers on a leopard collaring trip, and I'll never forget working with the vet team work up close. I wasn't just seeing them - I was feeling and smelling them too. This was way more than the safari we originally anticipated.",
    author: "Michael R.",
    location: "Namibia, 2024"
  },
  {
    id: 4,
    title: "Humpback Whale Dive with Nat Geo Photographer",
    quote: "Swimming beside a humpback mother and calf changed me forever. But having a National Geographic photographer coaching our shots? These are the best shots of my life and I couldn't be more satisfied.",
    author: "Sarah L.",
    location: "Tonga, 2024"
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'The Ethics of Wildlife Tourism',
    excerpt: 'How to ensure your wildlife encounters contribute positively to conservation efforts.',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  },
  {
    id: 2,
    title: 'Sustainable Luxury: Beyond Greenwashing',
    excerpt: 'Navigating the complex landscape of truly sustainable luxury accommodations.',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
  },
  {
    id: 3,
    title: 'Conservation Success Stories: From the Field',
    excerpt: 'Inspiring examples of wildlife tourism initiatives making a tangible difference.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

    // Auto-scroll testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with updated copy */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 h-full w-full bg-cover bg-center"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1920&auto=format&fit=crop')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-talon-midnight/80 via-talon-green/60 to-transparent" />
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-talon-ivory font-serif leading-tight mb-6 animate-fade-in drop-shadow-text-lg">
              Where Wild Meets <span className="font-script text-script-xl md:text-script-2xl text-talon-gold">Refined</span>
            </h1>
            <p className="text-talon-ivory text-lg md:text-xl mb-10 max-w-xl font-light animate-fade-in drop-shadow-text tracking-wide" style={{ animationDelay: '200ms' }}>
              Exclusive, ethical wildlife experiences curated by conservation experts for the discerning traveler.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/experiences" className="btn-primary group">
                Explore Experiences
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="#what-we-do" className="btn-secondary group">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-talon-ivory">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Wildlife conservation expert"
                  className="rounded-sm w-full h-auto object-cover animate-fade"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">What We <span className="font-script text-script-lg">Do</span></h2>
              <p className="mb-6 animate-fade animate-delay-100 text-talon-navy/90 leading-relaxed">
                Not all travel experiences are created equal. At Talon & Tide, we specialize in connecting you with animal encounters and conservation travel that are truly extraordinary, and thoroughly vetted by professionals who've spent their lives working in conservation behind the scenes.
              </p>
              <p className="mb-6 animate-fade animate-delay-200 text-talon-navy/90 leading-relaxed">
                Whether you're dreaming of tracking snow leopards in the mountains, diving with leopard seals, or unlocking behind-the-scenes access to top zoos, your journey begins with a question only we know how to answer:
              </p>
              <p className="mb-8 animate-fade animate-delay-300 text-talon-green font-serif text-4xl italic">
                "Where can I see a ___?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Categories Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-talon-sand/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 drop-shadow-sm animate-fade">
              Curated <span className="font-script text-script-lg">Experiences</span>
            </h2>
            <p className="max-w-2xl mx-auto text-talon-navy font-light text-lg animate-fade animate-delay-100">
              Three distinct collections designed for travelers who want more than just a safari.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Signature Wildlife Journeys",
                description: "Elevated, immersive itineraries in wild habitats. Thoughtfully tailored for those who seek the rare, the intimate, and the unforgettable.",
                image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
                path: "/experiences"
              },
              {
                title: "Zoo & Aquarium Encounters",
                description: "Exclusive access to top institutions around the world with behind-the-scenes access, private tours, and curated VIP moments.",
                image: "https://zoo.sandiegozoo.org/sites/default/files/styles/hero_with_nav_gradient/public/hero/jaguar_hero_0.png?itok=GS2zQ4x2",
                path: "/experiences"
              },
              {
                title: "Insider Wildlife Expeditions",
                description: "Step into the field with real conservationists — from rhino dehorning to leopard collaring, these small group trips offer rare access to wildlife efforts few travelers ever witness.",
                image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
                path: "/experiences"
              }
            ].map((category, index) => (
              <div key={index} className="group animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden card-luxury h-full">
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/80 via-talon-midnight/40 to-transparent" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-talon-green mb-4 group-hover:text-talon-gold transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-talon-navy/80 text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <Link 
                      to={category.path}
                      className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 transition-colors font-medium"
                    >
                      → Explore This Collection
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade">
            <p className="text-talon-green mb-6 text-2xl font-serif font-medium text-center">
              Not seeing your dream trip? That's the point. We don't sell packages - we create them.
            </p>
            <Link to="/contact" className="btn-primary group">
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
                Founded by a zookeeper. Built for travelers who want more than a <span className="font-script text-script-lg">safari</span>.
              </h2>
              <p className="mb-6 animate-fade animate-delay-100 text-talon-navy/90 leading-relaxed">
                After a decade in exotic animal care, I saw firsthand the difference between a moment that looks good on Instagram, and one that actually <em>does</em> good - to support animals, conservation, and local communities.
              </p>
              <p className="mb-6 animate-fade animate-delay-200 text-talon-navy/90 leading-relaxed">
                Not all experiences support the animals they showcase, and not all "eco-tourism" is actually ethical.
              </p>
              <p className="mb-8 animate-fade animate-delay-300 text-talon-navy/90 leading-relaxed">
                Talon & Tide is here to show you what's worth doing - and who's doing it right.
              </p>
              <p className="font-script text-script-lg text-talon-gold animate-fade animate-delay-400">
                Lindsay
              </p>
            </div>
            
            <div className="order-2 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Lindsay, founder of Talon & Tide"
                  className="rounded-sm w-full h-auto object-cover animate-fade animate-delay-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
              How It <span className="font-script text-script-lg">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Inquire & Align",
                description: "Fill out our short form with your travel dreams or favorite animals."
              },
              {
                number: "2", 
                title: "We Curate Your Experience",
                description: "We present you with personally vetted, conservation-conscious options tailored to your style."
              },
              {
                number: "3",
                title: "You Travel With Confidence", 
                description: "You travel knowing your trip was designed with ethics, luxury, and impact in mind."
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-talon-green text-talon-ivory h-16 w-16 rounded-full flex items-center justify-center text-2xl font-serif mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl mb-4 text-talon-green">{step.title}</h3>
                <p className="text-talon-navy/80 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade">
            <Link to="/contact" className="btn-primary group">
              → Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Snapshots - Testimonials */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 animate-fade">
              Experience <span className="font-script text-script-lg">Snapshots</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentTestimonial === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <h3 className="font-serif text-2xl mb-6 text-talon-gold">{testimonial.title}</h3>
                    <blockquote className="text-lg mb-6 leading-relaxed italic px-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <span className="text-talon-gold">– {testimonial.author}</span>
                      <span className="text-talon-ivory/80 ml-2">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-talon-gold' : 'bg-talon-ivory/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Field Notes From the Wild */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
              Field Notes From the <span className="font-script text-script-lg">Wild</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id} 
                className="group animate-fade" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-sm overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-3 text-talon-green group-hover:text-talon-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-talon-navy mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-talon-gold text-sm">
                      → Read More
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade">
            <Link to="/blog" className="btn-secondary group">
              View All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <InstagramFeed />
    </Layout>
  );
};

export default Index;