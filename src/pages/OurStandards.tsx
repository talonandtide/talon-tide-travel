
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Shield, Award, Users, CheckCircle, Quote } from 'lucide-react';

const OurStandards = () => {
  return (
    <Layout>
      {/* Hero Section with Enhanced Visual Interest */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-talon-navy via-talon-green to-talon-emerald"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-talon-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-talon-sand/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-talon-ivory drop-shadow-text">
              Our Standards
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-talon-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto text-talon-sand leading-relaxed drop-shadow-text">
              Where Professional Expertise Meets Ethical Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction with Enhanced Card Design */}
      <section className="py-20 bg-gradient-to-b from-talon-ivory to-talon-sand/20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-8">
              Why Talon & Tide is Different
            </h2>
            <div className="w-16 h-1 bg-talon-gold mx-auto mb-8"></div>
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-lg shadow-luxury border border-talon-stone/20">
              <p className="text-lg md:text-xl text-talon-navy leading-relaxed font-light">
                Talon & Tide represents a new paradigm in wildlife tourism - where professional zoological 
                expertise meets luxury travel curation. We don't just book trips; we understand the science, 
                ethics, and passion behind exceptional wildlife experiences, whether in captivity or the wild. 
                Our background allows us to recognize and celebrate experiences that share our commitment to 
                wildlife conservation and meaningful guest encounters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials with Luxury Card Design */}
      <section className="py-20 bg-gradient-to-r from-talon-green/5 to-talon-navy/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-4">
              Professional Foundation
            </h2>
            <div className="w-16 h-1 bg-talon-gold mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Credentials Cards */}
            <div className="space-y-8 animate-fade-in animate-delay-200">
              {[
                {
                  icon: Award,
                  title: "Zoological Expertise",
                  description: "Founded by a former zookeeper with hands-on experience in wildlife management, conservation programs, and educational initiatives. This background provides unique insight into what makes exceptional wildlife experiences across all settings."
                },
                {
                  icon: Users,
                  title: "Expert Network",
                  description: "Collaborative relationships with conservation biologists, wildlife veterinarians, field researchers, and expedition leaders who provide insights into conservation work happening globally, from remote wilderness to urban conservation centers."
                },
                {
                  icon: Shield,
                  title: "Professional Understanding",
                  description: "Deep understanding of conservation challenges, wildlife behavior, and what distinguishes truly impactful experiences from typical tourist attractions - knowledge that guides every recommendation we make, regardless of setting."
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 border border-talon-stone/10 hover:border-talon-gold/30">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-talon-gold to-talon-bronze p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl text-talon-green mb-3">{item.title}</h3>
                        <p className="text-talon-navy leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Card with Enhanced Design */}
            <div className="animate-fade-in animate-delay-300">
              <div className="relative">
                {/* Background decorative element */}
                <div className="absolute -inset-4 bg-gradient-to-br from-talon-gold/20 to-talon-bronze/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-white to-talon-sand/30 p-10 rounded-xl shadow-luxury border border-talon-gold/20">
                  <div className="text-center mb-6">
                    <Quote className="text-talon-gold mx-auto mb-4" size={40} />
                    <h3 className="font-serif text-3xl text-talon-green">Our Mission</h3>
                    <div className="w-12 h-1 bg-talon-gold mx-auto mt-3"></div>
                  </div>
                  
                  <p className="text-talon-navy mb-6 leading-relaxed text-lg">
                    To connect discerning travelers with wildlife experiences that inspire, educate, and 
                    contribute meaningfully to conservation - whether encountering animals through dedicated 
                    conservation organizations, on expertly-guided expeditions, or in their pristine natural habitats.
                  </p>
                  
                  <div className="bg-talon-green/5 p-6 rounded-lg border-l-4 border-talon-gold">
                    <p className="text-talon-navy italic text-lg font-light">
                      "We believe that exceptional wildlife experiences come from passionate, knowledgeable 
                      people doing important work with wildlife - wherever that work takes place."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach with Enhanced Grid */}
      <section className="py-20 bg-gradient-to-b from-talon-sand/10 to-talon-ivory">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-6">
              Our Collaborative Approach
            </h2>
            <div className="w-16 h-1 bg-talon-gold mx-auto mb-6"></div>
            <p className="text-xl text-talon-navy max-w-3xl mx-auto font-light">
              How we evaluate and celebrate exceptional wildlife experience providers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mission Alignment",
                description: "Understanding each provider's unique conservation mission and how their work contributes to broader wildlife protection efforts - from breeding programs to habitat preservation to sustainable expedition practices."
              },
              {
                title: "Educational Excellence", 
                description: "Recognizing providers that excel at creating meaningful connections between guests and wildlife, whether through expert-guided encounters, immersive field experiences, or transformative expedition moments."
              },
              {
                title: "Conservation Impact",
                description: "Highlighting providers whose work extends beyond their immediate operations - supporting field research, habitat protection, community conservation initiatives, or responsible wildlife tourism practices."
              },
              {
                title: "Professional Excellence",
                description: "Appreciating the expertise and dedication of guides, naturalists, and staff who work with wildlife daily, understanding the challenges and rewards of creating meaningful wildlife encounters."
              },
              {
                title: "Guest Experience Quality",
                description: "Evaluating how providers create transformative experiences that inspire guests to become conservation advocates long after their journey ends, regardless of the setting or type of encounter."
              },
              {
                title: "Partnership Building",
                description: "Building long-term relationships with experience providers to understand their evolving approaches and help connect them with travelers who share their conservation values and passion for wildlife."
              }
            ].map((item, index) => (
              <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="h-full bg-white p-8 rounded-lg shadow-card hover:shadow-luxury transition-all duration-300 border border-talon-stone/10 hover:border-talon-gold/30 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-talon-gold to-talon-bronze p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="font-serif text-xl text-talon-green">{item.title}</h3>
                  </div>
                  <p className="text-talon-navy leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Partners Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-talon-green/10 to-talon-navy/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-6">
              For Experience Partners
            </h2>
            <div className="w-16 h-1 bg-talon-gold mx-auto"></div>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-talon-gold/10 to-talon-bronze/10 rounded-2xl blur-2xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-xl shadow-luxury border border-talon-gold/20">
                <p className="text-xl text-talon-navy mb-10 leading-relaxed font-light">
                  When Talon & Tide reaches out to your organization, it's because we recognize the important 
                  work you're doing and believe it aligns with what our clients value most: authentic, 
                  educational, and impactful wildlife experiences. We're not evaluators or critics - 
                  we're advocates looking to celebrate and support providers doing meaningful conservation work.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-gradient-to-br from-talon-sand/20 to-talon-champagne/30 p-8 rounded-lg border border-talon-stone/20">
                    <h3 className="font-serif text-2xl text-talon-green mb-6 flex items-center gap-3">
                      <Award className="text-talon-gold" size={28} />
                      What This Means for You
                    </h3>
                    <ul className="space-y-3 text-talon-navy">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Recognition as a conservation leader in your field
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Access to conservation-minded, respectful travelers
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Opportunity to share your mission with engaged audiences
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Support for your educational and conservation goals
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-talon-green/10 to-talon-emerald/10 p-8 rounded-lg border border-talon-stone/20">
                    <h3 className="font-serif text-2xl text-talon-green mb-6 flex items-center gap-3">
                      <Shield className="text-talon-gold" size={28} />
                      Our Commitment
                    </h3>
                    <ul className="space-y-3 text-talon-navy">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Respectful, professional collaboration
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Understanding of your operational realities
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Promotion of your conservation story
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-talon-gold mt-1 flex-shrink-0" size={16} />
                        Long-term partnership mindset
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10 p-8 bg-gradient-to-r from-talon-navy/5 to-talon-green/5 rounded-lg border-l-4 border-talon-gold">
                  <Quote className="text-talon-gold mb-4" size={32} />
                  <p className="text-talon-navy italic text-xl font-light leading-relaxed">
                    "We don't just visit or book experiences - we champion the work of conservation-minded 
                    providers that are making a real difference for wildlife worldwide."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-talon-green via-talon-navy to-talon-midnight relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-talon-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-talon-sand/5 rounded-full blur-3xl"></div>
        
        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-talon-ivory drop-shadow-text">
              Experience the Difference
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-talon-gold to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-talon-sand font-light max-w-4xl mx-auto drop-shadow-text">
              Whether you're a traveler seeking meaningful wildlife experiences or an experience provider 
              interested in partnership, discover how professional expertise creates exceptional outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/experiences" 
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-talon-gold to-talon-bronze text-talon-green rounded-lg hover:shadow-luxury-hover transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Explore Experiences
                <Award className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              </a>
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-talon-sand text-talon-sand rounded-lg hover:bg-talon-sand hover:text-talon-green transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Contact Us
                <Users className="group-hover:scale-110 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStandards;
