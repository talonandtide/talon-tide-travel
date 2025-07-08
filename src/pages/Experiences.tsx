
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const signatureJourneys = [
  {
    id: 1,
    title: 'Private Safari Experience',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    description: 'Exclusive behind-the-scenes access to conservation projects with private luxury accommodations and personalized safari experiences guided by conservation specialists.',
    duration: '7 days',
    ethicalRating: 5,
    path: "/contact",
  },
  {
    id: 2,
    title: 'Marine Conservation Retreat',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Dive alongside marine biologists while enjoying the comfort of a five-star eco-resort. Participate in reef restoration projects and encounter marine wildlife in their natural habitat.',
    duration: '10 days',
    ethicalRating: 5,
    path: "/contact",
  },
  {
    id: 3,
    title: 'Amazon Rainforest Wildlife Expedition',
    location: 'Brazil',
    image: 'https://media.gadventures.com/media-server/cache/d6/f5/d6f51f81aef674f7f3442d9f9622c718.jpg',
    description: 'Trek through pristine rainforest with expert naturalists and retreat to exclusive luxury lodges. Encounter diverse wildlife while supporting local conservation initiatives.',
    duration: '8 days',
    ethicalRating: 5,
    path: "/contact",
  },
  {
    id: 4,
    title: 'Arctic Wildlife Expedition',
    location: 'Svalbard, Norway',
    image: 'https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Embark on an unforgettable polar expedition aboard a luxury vessel to witness the majestic polar bears, walruses, and Arctic wildlife in their pristine natural habitat.',
    duration: '12 days',
    ethicalRating: 5,
    path: "/experiences/arctic-expedition",
  },
];

const conservationEncounters = [
  {
    id: 1,
    title: 'San Diego Zoo | Exclusive VIP Experience',
    location: 'San Diego, California',
    image: 'https://zoo.sandiegozoo.org/sites/default/files/styles/hero_with_nav_gradient/public/hero/jaguar_hero_0.png?itok=GS2zQ4x2',
    description: 'Embark on a personalized journey through one of the world\'s most renowned zoos. Get up-close encounters with incredible wildlife and exclusive behind-the-scenes access to animal care areas and conservation facilities.',
    duration: '1 day',
    ethicalRating: 5,
    path: "/contact",
  },
  {
    id: 2,
    title: 'Brevard Zoo | Okapi Encounter',
    location: 'Melbourne, Florida',
    image: 'https://brevardzoo.org/wp-content/smush-webp/2024/09/240917_8-scaled.jpg.webp',
    description: 'Meet these extraordinary "forest giraffes" up close and learn about their conservation story. Experience a unique opportunity to interact with these rare creatures while supporting vital conservation efforts.',
    duration: '1 day',
    ethicalRating: 5,
    path: "/contact",
  },
  {
    id: 3,
    title: 'Duke Lemur Center | Walking with Lemurs',
    location: 'Durham, North Carolina',
    image: 'https://lemur.duke.edu/wordpress/wp-content/uploads/2020/08/NHE-1.png',
    description: 'Walk alongside free-ranging lemurs in their forested habitat while learning about these fascinating primates from expert guides. A unique opportunity to observe these endangered species up close.',
    duration: '1 day',
    ethicalRating: 5,
    path: "/contact",
  },
];

const Experiences = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Curated Experiences</h1>
            <div className="space-y-6 text-talon-navy/80">
              <p className="text-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                Whether it's a once-in-a-lifetime journey across wild landscapes or an intimate behind-the-scenes moment at a conservation center, we curate meaningful experiences that honor both animals and adventure.
              </p>
              <p className="text-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
                Our experiences reflect a commitment to ethical travel, thoughtful connection, and unforgettable memories — no matter how close or far you go.
              </p>
            </div>
            <div className="mt-12 inline-block border border-talon-green/20 bg-white/80 rounded-sm px-6 py-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <p className="text-talon-navy text-sm">
                <strong>Coming Soon:</strong> These experiences will be available for booking in the near future. Subscribe to our newsletter for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6 animate-fade">
              Signature Wildlife <span className="font-script">Journeys</span>
            </h2>
            <p className="text-talon-navy/80 text-lg animate-fade animate-delay-100">
              Discover unforgettable, conservation-centered travel experiences curated with care and rooted in ethical engagement. These multi-day journeys highlight some of the world's most extraordinary animal encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureJourneys.map((experience, index) => (
              <div key={experience.id} className="bg-white rounded-sm shadow-sm overflow-hidden animate-fade group" style={{ animationDelay: `${index * 100}ms` }}>
                <Link to={experience.path} className="block">
                  <div className="relative h-64">
                    <img 
                      src={experience.image} 
                      alt={experience.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                      <div className="flex items-center gap-1 bg-talon-navy/80 text-white text-xs px-3 py-1 rounded-sm">
                        <MapPin size={12} />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1 bg-talon-green/80 text-white text-xs px-3 py-1 rounded-sm">
                        {experience.duration}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6 group-hover:bg-talon-sand/10 transition-colors duration-500">
                  <h2 className="font-serif text-2xl mb-2 text-talon-green group-hover:text-talon-gold transition-colors duration-300">{experience.title}</h2>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="text-xs text-talon-gold">Ethical Rating:</div>
                    <div className="flex">
                      {[...Array(experience.ethicalRating)].map((_, i) => (
                        <Star key={i} size={14} fill="#BC9A5F" color="#BC9A5F" />
                      ))}
                    </div>
                  </div>
                  <p className="text-talon-navy text-sm mb-6">{experience.description}</p>
                  <Link to={experience.path} className="btn-secondary w-full justify-center group-hover:bg-talon-gold/10 transition-colors duration-300">
                    {experience.path === "/contact" ? "Stay Updated" : "View Details"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <Separator className="my-4 bg-talon-stone/20" />
      </div>

      <section className="py-20 bg-talon-sand/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6 animate-fade">
              Conservation Encounters & Behind-the-Scenes <span className="font-script">Tours</span>
            </h2>
            <p className="text-talon-navy/80 text-lg animate-fade animate-delay-100">
              From world-renowned zoos to pioneering aquariums and conservation centers, these thoughtfully vetted encounters offer meaningful, ethical ways to connect with animals — often with rare behind-the-scenes access few travelers ever experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conservationEncounters.map((experience, index) => (
              <div key={experience.id} className="bg-white rounded-sm shadow-sm overflow-hidden animate-fade group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 bg-talon-navy/80 text-white text-xs px-3 py-1 rounded-sm">
                      <MapPin size={12} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1 bg-talon-green/80 text-white text-xs px-3 py-1 rounded-sm">
                      {experience.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6 group-hover:bg-talon-sand/10 transition-colors duration-500">
                  <h2 className="font-serif text-2xl mb-2 text-talon-green group-hover:text-talon-gold transition-colors duration-300">{experience.title}</h2>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="text-xs text-talon-gold">Ethical Rating:</div>
                    <div className="flex">
                      {[...Array(experience.ethicalRating)].map((_, i) => (
                        <Star key={i} size={14} fill="#BC9A5F" color="#BC9A5F" />
                      ))}
                    </div>
                  </div>
                  <p className="text-talon-navy text-sm mb-6">{experience.description}</p>
                  <Link to="/contact" className="btn-secondary w-full justify-center group-hover:bg-talon-gold/10 transition-colors duration-300">
                    Stay Updated
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-talon-sand/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6 animate-fade">
              Insider Wildlife <span className="font-script">Expeditions</span>
            </h2>
            <p className="text-talon-navy/80 text-lg animate-fade animate-delay-100">
              Join the professionals, not the tourists. Step into the field with real conservationists — from rhino dehorning to leopard collaring, these small group trips offer rare access to wildlife efforts few travelers ever witness. Led by zookeepers, researchers, and rescue teams, these expeditions are curated for travelers who want more than just a safari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                id: 1,
                title: 'Rhino Conservation Mission',
                location: 'South Africa',
                image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
                description: 'Work alongside veterinarians and researchers in rhino dehorning and monitoring operations.',
                duration: '6 days',
                ethicalRating: 5,
              },
              {
                id: 2,
                title: 'Leopard Collaring Expedition',
                location: 'Namibia',
                image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3634&q=80',
                description: 'Join wildlife researchers in tracking and collaring leopards for conservation data collection.',
                duration: '8 days',
                ethicalRating: 5,
              },
              {
                id: 3,
                title: 'Sea Turtle Research Mission',
                location: 'Costa Rica',
                image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
                description: 'Participate in sea turtle nesting research and beach conservation with marine biologists.',
                duration: '5 days',
                ethicalRating: 5,
              },
            ].map((experience, index) => (
              <div key={experience.id} className="bg-white rounded-sm shadow-sm overflow-hidden animate-fade group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 bg-talon-navy/80 text-white text-xs px-3 py-1 rounded-sm">
                      <MapPin size={12} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1 bg-talon-green/80 text-white text-xs px-3 py-1 rounded-sm">
                      {experience.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6 group-hover:bg-talon-sand/10 transition-colors duration-500">
                  <h2 className="font-serif text-2xl mb-2 text-talon-green group-hover:text-talon-gold transition-colors duration-300">{experience.title}</h2>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="text-xs text-talon-gold">Ethical Rating:</div>
                    <div className="flex">
                      {[...Array(experience.ethicalRating)].map((_, i) => (
                        <Star key={i} size={14} fill="#BC9A5F" color="#BC9A5F" />
                      ))}
                    </div>
                  </div>
                  <p className="text-talon-navy text-sm mb-6">{experience.description}</p>
                  <Link to="/contact" className="btn-secondary w-full justify-center group-hover:bg-talon-gold/10 transition-colors duration-300">
                    Stay Updated
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 animate-fade">Our Vetting <span className="font-script">Process</span></h2>
            <p className="text-talon-ivory/80 animate-fade animate-delay-100">
              Every experience featured on Talon & Tide undergoes a thorough evaluation process to ensure it meets our high standards for ethics, animal welfare, conservation impact, and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-200 hover:bg-talon-navy/30 transition-colors duration-300 group">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4 group-hover:scale-110 transition-transform duration-300">1</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Initial Research</h3>
              <p className="text-talon-ivory/80 text-sm">
                We identify experiences that claim to uphold high ethical standards and offer exceptional wildlife encounters.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-300 hover:bg-talon-navy/30 transition-colors duration-300 group">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4 group-hover:scale-110 transition-transform duration-300">2</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Expert Review</h3>
              <p className="text-talon-ivory/80 text-sm">
                Our network of wildlife professionals evaluates each experience based on animal welfare, conservation impact, and authenticity.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-400 hover:bg-talon-navy/30 transition-colors duration-300 group">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4 group-hover:scale-110 transition-transform duration-300">3</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Site Visit</h3>
              <p className="text-talon-ivory/80 text-sm">
                We personally visit and assess each experience, evaluating everything from wildlife interaction protocols to accommodation quality.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-6 rounded-sm animate-fade animate-delay-500 hover:bg-talon-navy/30 transition-colors duration-300 group">
              <div className="bg-talon-gold h-12 w-12 rounded-full flex items-center justify-center text-talon-green font-serif text-xl mb-4 group-hover:scale-110 transition-transform duration-300">4</div>
              <h3 className="font-serif text-xl mb-4 text-talon-gold">Final Selection</h3>
              <p className="text-talon-ivory/80 text-sm">
                Only experiences that excel in all categories make it into our curated collection, ensuring they meet both ethical and luxury standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title animate-fade">Stay Informed</h2>
            <p className="mb-8 text-talon-navy animate-fade animate-delay-100">
              Our curated experiences will be available for booking soon. Subscribe to our newsletter to be the first to know when these extraordinary journeys become available.
            </p>
            <Link to="/" className="btn-primary animate-fade animate-delay-200 group">
              Follow the Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiences;
