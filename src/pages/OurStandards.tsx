
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, ArrowRight, GraduationCap, Sparkles, Eye, Heart, Star, Camera, Globe, Megaphone } from 'lucide-react';

const OurStandards = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Our <span className="font-script text-script-lg text-talon-gold">Standards</span></h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              How we find, experience, and champion the world's best wildlife operators.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-talon-ivory">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">
              Why Talon & Tide is <span className="font-script text-script-lg text-talon-gold">Different</span>
            </h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-lg text-talon-navy leading-relaxed font-light max-w-4xl mx-auto">
              Talon & Tide was founded by a former zookeeper with a decade of hands-on wildlife management experience.
              We're not a review site — we're a platform built to recognize and amplify the operators doing 
              genuinely meaningful conservation work. When we feature your experience, it carries the weight of 
              professional understanding, not just a star rating.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work With Operators */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">How We <span className="font-script text-script-lg text-talon-gold">Discover</span> Great Operators</h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-talon-navy/80 max-w-3xl mx-auto text-lg leading-relaxed">
              We believe the best way to understand an experience is to live it. Our process is built around 
              real relationships, real visits, and honest storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                title: "We Research",
                desc: "We identify operators doing exceptional conservation work — through our network, word of mouth, or operators reaching out directly. If you're doing great work, we want to hear about it."
              },
              {
                icon: Camera,
                title: "We Experience It Firsthand",
                desc: "Nothing replaces being there. We visit operators to experience the work up close — seeing the animals, meeting the teams, and understanding the story behind the conservation. This is how we know what to champion."
              },
              {
                icon: Megaphone,
                title: "We Tell Your Story",
                desc: "When an experience meets our standards, we promote it across everything we have — social media, our email community, and featured placement on the Talon & Tide platform. Your story reaches the right people."
              }
            ].map((item, index) => (
              <div key={item.title} className="card-luxury p-8 text-center hover:shadow-luxury-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-4 bg-talon-gold/10 rounded-full inline-flex mb-6">
                  <item.icon className="text-talon-gold" size={28} />
                </div>
                <h3 className="font-serif text-2xl text-talon-green mb-4">{item.title}</h3>
                <p className="text-talon-navy/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Operators Gain */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-talon-ivory mb-4">What a Partnership <span className="font-script text-3xl md:text-4xl text-talon-gold">Looks Like</span></h2>
            <p className="text-talon-ivory/80 max-w-3xl mx-auto text-lg">
              When you partner with Talon & Tide, you gain a dedicated advocate with the professional credibility 
              to back you up — and the audience to make it count.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in">
              <Star className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Professional Recognition</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                A Talon & Tide feature isn't a paid ad — it's an editorial endorsement from a team with real wildlife expertise. 
                That distinction matters to the conservation-minded travelers who use our platform.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Globe className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Multi-Channel Promotion</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                Featured operators are promoted across our social channels, email community, and the Talon & Tide app — 
                reaching engaged audiences who are actively looking for ethical wildlife experiences.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Heart className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Conservation Storytelling</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                We don't just list you — we tell your story. Your conservation mission, your team's dedication, 
                and the real impact of your work get the spotlight they deserve.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Users className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">The Right Visitors</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                Our audience isn't looking for the cheapest option — they're looking for the most meaningful one. 
                Talon & Tide connects you with travelers who respect your work and value what you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship / Promoted Content */}
      <section className="py-20 bg-talon-ivory">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Amplify Your <span className="font-script text-script-lg text-talon-gold">Reach</span></h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-lg text-talon-navy/80 max-w-3xl mx-auto leading-relaxed">
              Beyond editorial features, operators can invest in promoted visibility on the platform — 
              putting your experience in front of even more conservation-minded travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300 animate-fade-in">
              <Sparkles className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Promoted Listings</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-4">
                Sponsor your listing for premium placement across the platform — featured positioning in search results, 
                category collections, and homepage highlights. All sponsored content is clearly labeled, maintaining the 
                trust our users expect.
              </p>
              <ul className="space-y-2">
                {["Priority placement in search and categories", "Featured in curated collections and newsletters", "Social media spotlights to our engaged community"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-talon-navy/80">
                    <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Award className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Open Access Sponsorship</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-4">
                Make your full listing available to all Talon & Tide users — not just subscribers. 
                Open access sponsorships give your experience maximum exposure while supporting the platform 
                that's championing your work.
              </p>
              <ul className="space-y-2">
                {["Full listing visible to all platform visitors", "Maximum reach across the entire user base", "Direct support for the platform promoting your mission"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-talon-navy/80">
                    <CheckCircle size={16} className="text-talon-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-talon-navy/60 mt-8 italic animate-fade-in">
            Sponsorships support visibility — they never influence editorial decisions or vetting outcomes.
          </p>
        </div>
      </section>

      {/* Where We Draw the Line — kept concise */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Where We Draw the <span className="font-script text-script-lg text-talon-gold">Line</span></h2>
            <p className="text-talon-navy/60 text-sm mt-2">
              The clearest proof of our standards is what we refuse to feature.
            </p>
          </div>

          <div className="card-luxury p-8 animate-fade-in animate-delay-100">
            <p className="text-talon-navy/80 mb-4 text-sm">Regardless of any commercial relationship, we do not feature experiences that involve:</p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-talon-navy/80 text-sm">
              {[
                "Direct contact with big cats in commercial settings",
                "Animals kept in compromised conditions for tourist access",
                "Forced performances against natural instincts",
                "Unresolved animal welfare violations",
                "Commercial harvest or trade of wild animals for tourism",
                "\"Sanctuaries\" functioning primarily as tourist attractions",
                "Wild animal feeding or touching outside captive environments",
                "Captive breeding solely for tourism revenue"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-talon-gold mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-talon-navy/50 text-xs italic mt-6">
              This list evolves as conservation science advances. Gray areas are handled with transparent ethics notes — no listing is a blanket endorsement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-6">
            Ready to <span className="font-script text-script-lg text-talon-gold">Partner?</span>
          </h2>
          <p className="text-xl text-talon-navy/80 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            If you're running a wildlife experience you're proud of, we'd love to see it for ourselves. 
            Reach out and let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/for-operators" 
              className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Learn About Partnerships
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact?subject=operator-submission" 
              className="btn-secondary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default OurStandards;
