
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const OurStandards = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-talon-green via-talon-navy to-talon-midnight text-talon-ivory overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 drop-shadow-text-lg">Our Standards</h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Where Professional Expertise Meets Ethical Excellence
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-talon-ivory">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">
              Why Talon & Tide is Different
            </h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-lg text-talon-navy leading-relaxed font-light max-w-4xl mx-auto">
              Talon & Tide represents a new paradigm in wildlife tourism - where professional zoological 
              expertise meets luxury travel curation. We don't just book trips; we understand the science, 
              ethics, and passion behind exceptional wildlife experiences, whether in captivity or the wild. 
              Our background allows us to recognize and celebrate experiences that share our commitment to 
              wildlife conservation and meaningful guest encounters.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Professional Foundation</h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in animate-delay-200">
              <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-talon-gold/10 rounded-full flex-shrink-0">
                    <Award className="text-talon-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-talon-green mb-4">Zoological Expertise</h3>
                    <p className="text-talon-navy leading-relaxed">
                      Founded by a former zookeeper with hands-on experience in wildlife management, 
                      conservation programs, and educational initiatives. This background provides unique 
                      insight into what makes exceptional wildlife experiences across all settings.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-talon-gold/10 rounded-full flex-shrink-0">
                    <Users className="text-talon-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-talon-green mb-4">Expert Network</h3>
                    <p className="text-talon-navy leading-relaxed">
                      Collaborative relationships with conservation biologists, wildlife veterinarians, 
                      field researchers, and expedition leaders who provide insights into conservation work 
                      happening globally, from remote wilderness to urban conservation centers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-talon-gold/10 rounded-full flex-shrink-0">
                    <Shield className="text-talon-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-talon-green mb-4">Professional Understanding</h3>
                    <p className="text-talon-navy leading-relaxed">
                      Deep understanding of conservation challenges, wildlife behavior, and what distinguishes 
                      truly impactful experiences from typical tourist attractions - knowledge that guides 
                      every recommendation we make, regardless of setting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-10 rounded-lg shadow-luxury animate-fade-in animate-delay-300">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl text-talon-green mb-6">Our Mission</h3>
                <div className="w-16 h-1 bg-talon-gold mx-auto mb-6"></div>
              </div>
              <p className="text-talon-navy mb-6 leading-relaxed text-lg">
                To connect discerning travelers with wildlife experiences that inspire, educate, and 
                contribute meaningfully to conservation - whether encountering animals through dedicated 
                conservation organizations, on expertly-guided expeditions, or in their pristine natural habitats.
              </p>
              <blockquote className="border-l-4 border-talon-gold pl-6 italic text-talon-navy/80 text-lg">
                "We believe that exceptional wildlife experiences come from passionate, knowledgeable 
                people doing important work with wildlife - wherever that work takes place."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Our Collaborative Approach</h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Mission Alignment",
                description: "Understanding each provider's unique conservation mission and how their work contributes to broader wildlife protection efforts - from breeding programs to habitat preservation to sustainable expedition practices."
              },
              {
                icon: CheckCircle,
                title: "Educational Excellence", 
                description: "Recognizing providers that excel at creating meaningful connections between guests and wildlife, whether through expert-guided encounters, immersive field experiences, or transformative expedition moments."
              },
              {
                icon: CheckCircle,
                title: "Conservation Impact",
                description: "Highlighting providers whose work extends beyond their immediate operations - supporting field research, habitat protection, community conservation initiatives, or responsible wildlife tourism practices."
              },
              {
                icon: CheckCircle,
                title: "Professional Excellence",
                description: "Appreciating the expertise and dedication of guides, naturalists, and staff who work with wildlife daily, understanding the challenges and rewards of creating meaningful wildlife encounters."
              },
              {
                icon: CheckCircle,
                title: "Guest Experience Quality",
                description: "Evaluating how providers create transformative experiences that inspire guests to become conservation advocates long after their journey ends, regardless of the setting or type of encounter."
              },
              {
                icon: CheckCircle,
                title: "Partnership Building",
                description: "Building long-term relationships with experience providers to understand their evolving approaches and help connect them with travelers who share their conservation values and passion for wildlife."
              }
            ].map((item, index) => (
              <div key={index} className={`card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${100 + index * 100}ms` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-talon-gold/10 rounded-full">
                    <item.icon className="text-talon-gold" size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-talon-green">{item.title}</h3>
                </div>
                <p className="text-talon-navy leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">For Experience Partners</h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-12 rounded-lg shadow-luxury animate-fade-in animate-delay-200">
            <p className="text-lg text-talon-navy mb-8 leading-relaxed font-light">
              When Talon & Tide reaches out to your organization, it's because we recognize the important 
              work you're doing and believe it aligns with what our clients value most: authentic, 
              educational, and impactful wildlife experiences. We're not evaluators or critics - 
              we're advocates looking to celebrate and support providers doing meaningful conservation work.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-10">
              <div className="card-luxury p-8">
                <h3 className="font-serif text-2xl text-talon-green mb-6">What This Means for You</h3>
                <ul className="space-y-3 text-talon-navy">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Recognition as a conservation leader in your field
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Access to conservation-minded, respectful travelers
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Opportunity to share your mission with engaged audiences
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Support for your educational and conservation goals
                  </li>
                </ul>
              </div>
              
              <div className="card-luxury p-8">
                <h3 className="font-serif text-2xl text-talon-green mb-6">Our Commitment</h3>
                <ul className="space-y-3 text-talon-navy">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Respectful, professional collaboration
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Understanding of your operational realities
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Promotion of your conservation story
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Long-term partnership mindset
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <blockquote className="text-talon-navy italic text-lg leading-relaxed">
                "We don't just visit or book experiences - we champion the work of conservation-minded 
                providers that are making a real difference for wildlife worldwide."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-talon-green via-talon-navy to-talon-midnight text-talon-ivory">
        <div className="container max-w-5xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 drop-shadow-text">
            Experience the Difference
          </h2>
          <p className="text-xl mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Whether you're a traveler seeking meaningful wildlife experiences or an experience provider 
            interested in partnership, discover how professional expertise creates exceptional outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/experiences" 
              className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Experiences
            </a>
            <a 
              href="/contact" 
              className="btn-secondary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStandards;
