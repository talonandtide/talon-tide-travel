import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Newsletter from '@/components/Home/Newsletter';
import InstagramFeed from '@/components/Home/InstagramFeed';
import { ArrowRight, Shield, Eye, Heart, Users, Handshake, Globe, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import usePageMeta from '@/hooks/usePageMeta';

const APP_URL = 'https://app.talonandtide.com';

const animals = ['golden eagle', 'reindeer', 'manta ray', 'flying fox', 'ibex', 'tiger', 'narwhal', 'pangolin', 'snow leopard', 'humpback whale'];

const Index = () => {
  usePageMeta({
    title: 'Talon & Tide',
    description: 'The world\'s first platform for ethically vetted wildlife experiences. Every safari, zoo encounter, and conservation expedition is personally evaluated by wildlife professionals.'
  });
  const [currentAnimal, setCurrentAnimal] = useState(0);

  useEffect(() => {
    emailjs.init('kfwhy7VZD5cyq76uF');

    const animalInterval = setInterval(() => {
      setCurrentAnimal((prev) => (prev + 1) % animals.length);
    }, 2000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-fade').forEach((el) => observer.observe(el));

    return () => {
      clearInterval(animalInterval);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 h-full w-full bg-cover bg-center" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1920&auto=format&fit=crop')`
          }} />
          <div className="absolute inset-0 bg-gradient-to-r from-talon-midnight/80 via-talon-green/60 to-transparent" />
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-talon-ivory font-serif leading-tight mb-6 animate-fade-in drop-shadow-text-lg">
              Where Can I See a{' '}
              <span className="font-script text-script-xl md:text-script-2xl text-talon-gold transition-all duration-300">
                {animals[currentAnimal]}
              </span>
              ?
            </h1>
            <p className="text-talon-ivory text-lg md:text-xl mb-10 max-w-xl font-light animate-fade-in drop-shadow-text tracking-wide" style={{ animationDelay: '200ms' }}>
              The world's first platform for ethically vetted wildlife experiences -  every operation personally evaluated by wildlife professionals.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group">
                
                Explore Experiences
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/for-operators" className="btn-secondary group">
                Partner With Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-talon-sand/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            { icon: Shield, title: "Professionally Vetted", desc: "Every experience is personally evaluated by wildlife professionals in animal care, conservation, research, and veterinary fields -  never based on public reviews or marketing claims." },
            { icon: Eye, title: "Beyond the Brochure", desc: "We know the difference between genuine conservation and a good marketing team. Every listing is evaluated for real animal welfare impact." },
            { icon: Heart, title: "Conservation First", desc: "Only experiences that genuinely benefit wildlife, habitats, and the communities who protect them make it onto the platform." }].
            map((item) =>
            <div key={item.title} className="flex items-start gap-4 animate-fade">
                <div className="p-3 bg-talon-gold/10 rounded-full flex-shrink-0">
                  <item.icon className="text-talon-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-talon-green mb-2">{item.title}</h3>
                  <p className="text-talon-navy/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Is Talon & Tide */}
      <section className="py-20 bg-talon-ivory">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/lovable-uploads/cb726662-17d2-4a79-9eea-bb944badb6d4.png"
                alt="Underwater stingray encounter with diver"
                className="rounded-sm w-full h-auto object-cover animate-fade" />
              
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
                The Platform for <span className="font-script text-script-lg text-talon-gold">Ethical Wildlife Travel</span>
              </h2>
              <p className="mb-6 animate-fade animate-delay-100 text-talon-navy/90 leading-relaxed">Talon & Tide is the only platform where every wildlife experience is vetted by professionals who've spent their careers working in conservation. 

              </p>
              <p className="mb-8 animate-fade animate-delay-200 text-talon-navy/90 leading-relaxed">Browse vetted safari operators, zoo encounters, marine expeditions, and conservation missions - then book directly with the operators. We put the power back in your hands.

              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-fade animate-delay-300 group">
                
                Start Exploring
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-24 bg-gradient-to-b from-white to-talon-sand/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
              Three Ways to <span className="font-script text-script-lg">Explore</span>
            </h2>
            <p className="max-w-2xl mx-auto text-talon-navy font-light text-lg animate-fade animate-delay-100">
              Every experience on the platform falls into one of three curated collections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
            {
              title: "Signature Wildlife Journeys",
              description: "Elevated, immersive itineraries in wild habitats. From tracking snow leopards to diving with whale sharks -  vetted for ethics and unforgettable moments.",
              image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920&auto=format&fit=crop"
            },
            {
              title: "Zoo & Aquarium Encounters",
              description: "Exclusive behind-the-scenes access to top accredited institutions worldwide. Private tours, VIP moments, and meaningful animal connections.",
              image: "https://zoo.sandiegozoo.org/sites/default/files/styles/hero_with_nav_gradient/public/hero/jaguar_hero_0.png?itok=GS2zQ4x2"
            },
            {
              title: "Conservation Expeditions",
              description: "Step into the field with real conservationists -  from rhino dehorning to leopard collaring. These small group trips offer rare access few travelers ever witness.",
              image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
            }].
            map((category, index) =>
            <div key={index} className="group animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden card-luxury h-full">
                  <div className="relative overflow-hidden h-80">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-talon-midnight/80 via-talon-midnight/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-talon-green mb-4 group-hover:text-talon-gold transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-talon-navy/80 text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <a
                    href={`${APP_URL}/explore`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 transition-colors font-medium">
                    
                      Browse on the App <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Built by a Zookeeper */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
                Built by a Zookeeper
              </h2>
              <p className="mb-6 animate-fade animate-delay-100 text-talon-navy/90 leading-relaxed">
                After a decade in exotic animal care at top AZA-accredited facilities, founder Lindsay saw firsthand the difference between a moment that looks good on Instagram and one that actually <em>does</em> good -  for animals, conservation, and local communities.
              </p>
              <p className="mb-6 animate-fade animate-delay-200 text-talon-navy/90 leading-relaxed">
                Wildlife tourism is never going away -  and it shouldn't. But not all encounters are created equal, and online reviews can't tell you the difference. That's why Lindsay built Talon & Tide.
              </p>
              <blockquote className="border-l-4 border-talon-gold pl-6 italic text-talon-navy/80 text-lg mb-8 animate-fade animate-delay-300">
                "The most incredible wildlife moments don't require a single compromise -  not for the animals, not for the communities, and not for you."
              </blockquote>
              <Link to="/about" className="btn-secondary animate-fade animate-delay-400 group">
                Read Our Full Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="order-2">
              <img
                alt="Lindsay, founder of Talon & Tide"
                className="rounded-sm w-full h-auto object-cover animate-fade animate-delay-100"
                src="/lovable-uploads/91752c72-542b-4652-a411-d30016f1da40.jpg" />
              
            </div>
          </div>
        </div>
      </section>

      {/* How The Platform Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
              How It <span className="font-script text-script-lg">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
            { number: "1", title: "Browse", description: "Explore vetted wildlife experiences by species, destination, or type on the Talon & Tide app." },
            { number: "2", title: "Discover", description: "Read expert insights, ethics notes, and conservation context for every experience." },
            { number: "3", title: "Save & Compare", description: "Build lists, follow species, and save your favorites. Upgrade for full access to booking details." },
            { number: "4", title: "Book Direct", description: "Connect directly with operators with confidence that your choice is ethical." }].
            map((step, index) =>
            <div key={index} className="text-center animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-talon-green text-talon-ivory h-16 w-16 rounded-full flex items-center justify-center text-2xl font-serif mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl mb-4 text-talon-green">{step.title}</h3>
                <p className="text-talon-navy/80 text-sm leading-relaxed">{step.description}</p>
              </div>
            )}
          </div>

          <div className="text-center animate-fade">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group">
              
              Start Exploring Free
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* For Operators CTA */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6 animate-fade">
              Are You a Wildlife <span className="font-script text-script-lg text-talon-gold">Operator?</span>
            </h2>
            <p className="text-talon-ivory/80 text-lg mb-12 animate-fade animate-delay-100 max-w-2xl mx-auto">
              From small rehabilitation centers to world-class safari lodges -  if you're doing meaningful conservation work, 
              we'd love to see it for ourselves. Our hosted editorial visits are how great operators get discovered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
              { icon: Globe, title: "Get Featured", desc: "We visit, experience your work firsthand, and create original editorial content -  all at no cost to you." },
              { icon: Users, title: "Reach the Right Travelers", desc: "Your listing reaches conservation-minded travelers actively looking for ethical wildlife experiences." },
              { icon: Handshake, title: "Optional Sponsorships", desc: "Boost visibility with promoted placement. Sponsorships never influence our editorial standards." }].
              map((item) =>
              <div key={item.title} className="bg-talon-navy/20 p-8 rounded-sm animate-fade">
                  <item.icon className="text-talon-gold mb-4" size={32} />
                  <h3 className="font-serif text-xl mb-3 text-talon-gold">{item.title}</h3>
                  <p className="text-talon-ivory/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/for-operators" className="bg-talon-gold hover:bg-talon-gold/90 text-talon-green px-8 py-4 rounded-sm text-lg font-medium transition-colors duration-300 inline-flex items-center gap-2">
                Partner With Us
                <ArrowRight size={18} />
              </Link>
              <Link to="/our-standards" className="border border-talon-ivory/30 hover:bg-talon-ivory/10 text-talon-ivory px-8 py-4 rounded-sm text-lg font-medium transition-colors duration-300 inline-flex items-center gap-2">
                Our Standards
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Features / Pricing Teaser */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-talon-green mb-6 animate-fade">
              Choose Your <span className="font-script text-script-lg text-talon-gold">Path</span>
            </h2>
            <p className="max-w-2xl mx-auto text-talon-navy/80 text-lg animate-fade animate-delay-100">
              From free browsing to full Conservationist access -  the app has a plan for every explorer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
            { tier: "Visitor", price: "Free", desc: "Browse experiences, read ethics notes, and discover what's out there.", features: ["Browse all experiences", "Read ethics notes", "View categories"] },
            { tier: "Naturalist", price: "Free", desc: "Create an account to save favorites, follow species, and build lists.", features: ["Everything in Visitor", "Save to lists", "Follow species", "Species search"] },
            { tier: "Conservationist", price: "From $4.99/mo", desc: "Full access -  booking details, expert guides, priority support.", features: ["Everything in Naturalist", "Full booking details", "Supplier info & links", "Conservation field guides"] }].
            map((plan, index) =>
            <div key={plan.tier} className={`card-luxury p-8 text-center animate-fade ${index === 2 ? 'ring-2 ring-talon-gold' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                {index === 2 &&
              <div className="text-xs bg-talon-gold text-talon-green px-3 py-1 rounded-full font-medium mb-4 inline-block">
                    Full Access
                  </div>
              }
                <h3 className="font-serif text-2xl text-talon-green mb-2">{plan.tier}</h3>
                <p className="text-2xl font-bold text-talon-navy mb-4">{plan.price}</p>
                <p className="text-talon-navy/70 text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((f) =>
                <li key={f} className="flex items-start gap-2 text-sm text-talon-navy/80">
                      <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>

          <div className="text-center animate-fade">
            <a
              href={`${APP_URL}/pricing`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group">
              
              See Full Pricing on the App
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <InstagramFeed />
    </Layout>);

};

export default Index;