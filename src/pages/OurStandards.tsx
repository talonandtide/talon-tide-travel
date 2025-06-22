
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const OurStandards = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-talon-green to-talon-navy text-talon-ivory">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Our Standards</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Where Professional Expertise Meets Ethical Excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-talon-sand/10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-talon-green mb-6">
              Why Talon & Tide is Different
            </h2>
            <p className="text-lg text-talon-navy leading-relaxed">
              Talon & Tide represents a new paradigm in wildlife tourism - where professional zoological 
              expertise meets luxury travel curation. We don't just book trips; we understand the science, 
              ethics, and passion behind exceptional wildlife experiences, whether in captivity or the wild. 
              Our background allows us to recognize and celebrate facilities that share our commitment to 
              wildlife conservation and meaningful guest experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-talon-green text-center mb-12">
            Professional Foundation
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="text-talon-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-talon-green mb-2">Zoological Expertise</h3>
                  <p className="text-talon-navy">
                    Founded by a former zookeeper with hands-on experience in wildlife management, 
                    conservation programs, and educational initiatives. This background provides unique 
                    insight into what makes exceptional wildlife experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="text-talon-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-talon-green mb-2">Expert Network</h3>
                  <p className="text-talon-navy">
                    Collaborative relationships with conservation biologists, wildlife veterinarians, 
                    and field researchers who provide insights into conservation work happening globally, 
                    both in captive and wild settings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-talon-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-talon-green mb-2">Professional Understanding</h3>
                  <p className="text-talon-navy">
                    Deep understanding of conservation challenges, wildlife behavior, and what distinguishes 
                    truly impactful experiences from typical tourist attractions - knowledge that guides 
                    every recommendation we make.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-talon-green/5 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-talon-green mb-4">Our Mission</h3>
              <p className="text-talon-navy mb-4">
                To connect discerning travelers with wildlife experiences that inspire, educate, and 
                contribute meaningfully to conservation - whether encountering animals in professional 
                care or in their natural habitats.
              </p>
              <p className="text-talon-navy italic">
                "We believe that exceptional wildlife experiences come from passionate, knowledgeable 
                people doing important work with wildlife."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-talon-sand/10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-talon-green text-center mb-12">
            Our Collaborative Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Mission Alignment</h3>
              </div>
              <p className="text-talon-navy">
                Understanding each facility's unique conservation mission and how their work contributes 
                to broader wildlife protection efforts - from breeding programs to habitat restoration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Educational Excellence</h3>
              </div>
              <p className="text-talon-navy">
                Recognizing facilities that excel at creating meaningful connections between guests and 
                wildlife, whether through expert-guided encounters or immersive field experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Conservation Impact</h3>
              </div>
              <p className="text-talon-navy">
                Highlighting facilities whose work extends beyond their boundaries - supporting field 
                research, habitat protection, and community conservation initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Professional Excellence</h3>
              </div>
              <p className="text-talon-navy">
                Appreciating the expertise and dedication of staff who work daily with wildlife, 
                understanding the challenges and rewards of conservation work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Guest Experience Quality</h3>
              </div>
              <p className="text-talon-navy">
                Evaluating how facilities create transformative experiences that inspire guests to 
                become conservation advocates long after their visit ends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Partnership Building</h3>
              </div>
              <p className="text-talon-navy">
                Building long-term relationships with facilities to understand their evolving needs 
                and help connect them with travelers who share their conservation values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-talon-green text-center mb-12">
            For Conservation Partners
          </h2>
          <div className="bg-talon-green/5 p-8 rounded-lg">
            <p className="text-lg text-talon-navy mb-6 leading-relaxed">
              When Talon & Tide reaches out to your facility, it's because we recognize the important 
              work you're doing and believe it aligns with what our clients value most: authentic, 
              educational, and impactful wildlife experiences. We're not evaluators or critics - 
              we're advocates looking to celebrate and support facilities doing meaningful conservation work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl text-talon-green mb-3">What This Means for You</h3>
                <ul className="space-y-2 text-talon-navy">
                  <li>• Recognition as a conservation leader in your field</li>
                  <li>• Access to conservation-minded, respectful travelers</li>
                  <li>• Opportunity to share your mission with engaged audiences</li>
                  <li>• Support for your educational and conservation goals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-talon-green mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-talon-navy">
                  <li>• Respectful, professional collaboration</li>
                  <li>• Understanding of your operational realities</li>
                  <li>• Promotion of your conservation story</li>
                  <li>• Long-term partnership mindset</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg">
              <p className="text-talon-navy italic text-center">
                "We don't just visit facilities - we champion the work of conservation organizations 
                that are making a real difference for wildlife worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-talon-green text-talon-ivory">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Whether you're a traveler seeking meaningful wildlife experiences or a conservation organization 
            interested in partnership, discover how professional expertise creates exceptional outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/experiences" 
              className="btn-secondary inline-block px-8 py-3 bg-talon-gold text-talon-green rounded hover:bg-talon-gold/90 transition-colors"
            >
              Explore Experiences
            </a>
            <a 
              href="/contact" 
              className="btn-outline inline-block px-8 py-3 border border-talon-ivory text-talon-ivory rounded hover:bg-talon-ivory hover:text-talon-green transition-colors"
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
