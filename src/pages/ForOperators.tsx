import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, Globe, Users, Handshake, CheckCircle, Shield, ExternalLink, Send, AlertTriangle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = 'https://app.talonandtide.com';

const ForOperators = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">
              For <span className="font-script text-script-lg text-talon-gold">Operators</span>
            </h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Whether you run a small rehabilitation centre or a world-class safari lodge — if you're doing meaningful conservation work, we want to help more travelers find you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Talon & Tide */}
      <section className="py-20 bg-talon-ivory">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6">
              Why Partner With <span className="font-script text-script-lg text-talon-gold">Us?</span>
            </h2>
            <p className="text-lg text-talon-navy/80 max-w-3xl mx-auto leading-relaxed">
              Talon & Tide isn't a booking engine or a review aggregator. We're a curated platform where every listing is editorially vetted by wildlife professionals. When we reach out, it's because we recognize the important work you're doing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Conservation-Minded Travelers", desc: "Reach travelers who seek meaningful wildlife encounters and value ethics over the cheapest price." },
              { icon: Shield, title: "Editorial Integrity", desc: "Operators cannot pay to be listed or to receive favorable reviews. Sponsorships buy visibility, never editorial influence." },
              { icon: BarChart3, title: "Targeted Visibility", desc: "Your experience is seen by travelers actively searching for vetted, ethical wildlife encounters — not mass tourists." },
              { icon: Globe, title: "Global Reach", desc: "We feature experiences across safaris, marine expeditions, zoo encounters, and conservation field missions worldwide." },
              { icon: Handshake, title: "Long-Term Partnership", desc: "We build ongoing relationships with operators — supporting your conservation story and connecting you with aligned travelers." },
              { icon: CheckCircle, title: "Professional Vetting", desc: "Founded by a former AZA zookeeper. Every evaluation draws on real wildlife management experience." },
            ].map((item, index) => (
              <div key={item.title} className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-talon-gold/10 rounded-full">
                    <item.icon className="text-talon-gold" size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-talon-green">{item.title}</h3>
                </div>
                <p className="text-talon-navy/80 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6">
              Ways to <span className="font-script text-script-lg text-talon-gold">Partner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Get Listed */}
            <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-10 rounded-lg shadow-luxury">
              <Globe className="text-talon-gold mb-6" size={36} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Get Listed</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-6">
                Submit your wildlife experience for editorial review. Our vetting process is entirely editorial — no payment is required or accepted to be considered for listing.
              </p>
              <ul className="space-y-2 mb-8">
                {["Free to submit", "Editorial review by wildlife professionals", "Transparent ethics notes on every listing", "Direct booking links to your site"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-talon-navy/80">
                    <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact?subject=operator-submission" className="btn-primary w-full justify-center">
                Submit for Review
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Hosted Visits */}
            <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-10 rounded-lg shadow-luxury">
              <Users className="text-talon-gold mb-6" size={36} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Hosted Visits</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-6">
                Invite us to experience your operation firsthand. We visit as a guest — low-impact, no crews — and use that visit to create editorial content and evaluate your experience for the platform.
              </p>
              <ul className="space-y-2 mb-8">
                {["No cost to host — a simple value exchange", "We visit as a guest, not a production team", "Original media you're welcome to use", "Foundation for your editorial feature"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-talon-navy/80">
                    <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact?subject=invite-visit" className="btn-primary w-full justify-center">
                Invite Us to Visit
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sponsorships */}
            <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-10 rounded-lg shadow-luxury">
              <Handshake className="text-talon-gold mb-6" size={36} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Sponsorships</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-6">
                Increase your visibility on the platform with promoted placement. Sponsorships help keep Talon & Tide running — but they only buy visibility, never editorial influence.
              </p>
              <ul className="space-y-2 mb-8">
                {["Promoted experience placement", "Featured in category collections", "Newsletter and social inclusion", "All sponsored content clearly labeled"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-talon-navy/80">
                    <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact?subject=sponsorship" className="btn-primary w-full justify-center">
                Explore Sponsorship
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hosted Editorial Visits Teaser */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6">
            How We <span className="font-script text-script-lg text-talon-gold">Vet</span> Experiences
          </h2>
          <p className="text-lg text-talon-navy/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Every listing on Talon & Tide starts with a hosted editorial visit — we experience your work firsthand, 
            create original content, and tell your story to conservation-minded travelers. No fees, no crews, 
            just a relaxed guest experience that becomes the foundation for everything we publish.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card-luxury p-8">
              <h3 className="font-serif text-2xl text-talon-green mb-6">What Listing Means for You</h3>
              <ul className="space-y-3 text-talon-navy text-left">
                {[
                  "Recognition as a conservation leader in your field",
                  "Access to conservation-minded, respectful travelers",
                  "Original media content you can use too",
                  "Direct booking links — we never take a cut",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-8">
              <h3 className="font-serif text-2xl text-talon-green mb-6">Our Commitment to You</h3>
              <ul className="space-y-3 text-talon-navy text-left">
                {[
                  "Respectful, low-impact visits — no production setups",
                  "Transparent editorial process — no hidden criteria",
                  "Promotion across our platform and channels",
                  "Long-term partnership mindset",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/our-standards" className="btn-secondary group">
            Read About Our Standards & Process
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* See the Platform */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">
            See What Travelers <span className="font-script text-script-lg text-talon-gold">See</span>
          </h2>
          <p className="text-talon-ivory/80 text-lg mb-8 max-w-2xl mx-auto">
            Visit the Talon & Tide app to see how your experience would appear to conservation-minded travelers worldwide.
          </p>
          <a 
            href={APP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-talon-gold hover:bg-talon-gold/90 text-talon-green px-8 py-4 rounded-sm text-lg font-medium transition-colors duration-300 inline-flex items-center gap-2"
          >
            Visit the App
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Report a Concern */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-luxury p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-talon-gold/10 rounded-full">
                  <Send className="text-talon-gold" size={20} />
                </div>
                <h3 className="font-serif text-lg text-talon-green">Submit Your Experience</h3>
              </div>
              <p className="text-sm text-talon-navy/80 leading-relaxed mb-4">
                Believe your operation meets our standards? We welcome submissions from operators committed to animal welfare and conservation.
              </p>
              <Link to="/contact?subject=operator-submission" className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 font-medium">
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card-luxury p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-talon-gold/10 rounded-full">
                  <AlertTriangle className="text-talon-gold" size={20} />
                </div>
                <h3 className="font-serif text-lg text-talon-green">Report a Concern</h3>
              </div>
              <p className="text-sm text-talon-navy/80 leading-relaxed mb-4">
                Have concerns about a listed experience? Our editorial team takes every report seriously and investigates promptly.
              </p>
              <Link to="/contact?subject=report-concern" className="inline-flex items-center gap-2 text-sm text-talon-gold hover:text-talon-gold/80 font-medium">
                Report a concern <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForOperators;
