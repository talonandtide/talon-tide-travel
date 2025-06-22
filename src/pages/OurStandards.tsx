
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
              Talon & Tide represents a new paradigm in wildlife tourism - where former zoological professionals 
              apply the same rigorous standards used in accredited institutions to curate exceptional travel experiences. 
              We don't just book trips; we validate missions, assess welfare standards, and ensure every experience 
              contributes meaningfully to conservation.
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
                  <h3 className="font-serif text-xl text-talon-green mb-2">Zoological Background</h3>
                  <p className="text-talon-navy">
                    Founded by a former zookeeper with hands-on experience in animal care, conservation programs, 
                    and educational initiatives at accredited zoological institutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="text-talon-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-talon-green mb-2">Expert Network</h3>
                  <p className="text-talon-navy">
                    Collaborative relationships with conservation biologists, veterinarians, and wildlife specialists 
                    who provide insights into best practices and facility assessments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-talon-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl text-talon-green mb-2">Industry Standards</h3>
                  <p className="text-talon-navy">
                    Application of the same welfare and ethical standards used in AZA-accredited institutions 
                    to evaluate and select partner facilities worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-talon-green/5 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-talon-green mb-4">Our Mission</h3>
              <p className="text-talon-navy mb-4">
                To bridge the gap between luxury travel and meaningful conservation impact by connecting 
                discerning travelers with facilities that share our commitment to animal welfare, 
                scientific research, and community engagement.
              </p>
              <p className="text-talon-navy italic">
                "We believe that exceptional wildlife experiences and exceptional animal care go hand in hand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-16 bg-talon-sand/10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-talon-green text-center mb-12">
            Our Comprehensive Vetting Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Facility Assessment</h3>
              </div>
              <p className="text-talon-navy">
                Evaluation of animal housing, enrichment programs, veterinary care, and staff qualifications 
                using professional zoological standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Conservation Impact</h3>
              </div>
              <p className="text-talon-navy">
                Review of research contributions, field conservation support, and measurable conservation outcomes 
                that extend beyond the facility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Educational Value</h3>
              </div>
              <p className="text-talon-navy">
                Assessment of interpretive programs, staff expertise, and the facility's ability to create 
                meaningful learning experiences for visitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Community Engagement</h3>
              </div>
              <p className="text-talon-navy">
                Evaluation of local employment, community benefits, and sustainable tourism practices 
                that support regional conservation efforts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Accreditation Review</h3>
              </div>
              <p className="text-talon-navy">
                Verification of relevant accreditations (AZA, EAZA, ZAA) and ongoing compliance with 
                international welfare and conservation standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-talon-gold" size={24} />
                <h3 className="font-serif text-xl text-talon-green">Site Verification</h3>
              </div>
              <p className="text-talon-navy">
                Personal site visits by our team to validate facility claims, assess guest experience quality, 
                and build relationships with conservation partners.
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
              When Talon & Tide reaches out to your facility, it represents our belief that your work aligns 
              with the highest standards of animal welfare and conservation impact. We seek partnerships with 
              facilities that are leaders in their field - organizations whose missions we are proud to support 
              and whose stories we want to share with our clients.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl text-talon-green mb-3">What This Means for You</h3>
                <ul className="space-y-2 text-talon-navy">
                  <li>• Recognition as a conservation leader</li>
                  <li>• Access to engaged, conservation-minded travelers</li>
                  <li>• Opportunity to showcase your mission and impact</li>
                  <li>• Professional evaluation that validates your standards</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-talon-green mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-talon-navy">
                  <li>• Respectful, professional interactions</li>
                  <li>• Understanding of your operational constraints</li>
                  <li>• Promotion of your conservation message</li>
                  <li>• Long-term partnership approach</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg">
              <p className="text-talon-navy italic text-center">
                "We don't just visit facilities - we champion the work of conservation organizations 
                that are making a real difference for wildlife and communities worldwide."
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
