
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';

const OurStandards = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Our <span className="font-script text-script-lg text-talon-gold">Standards</span></h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Where professional expertise meets ethical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-talon-ivory">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">
              Why Talon & Tide is <span className="font-script text-script-lg text-talon-gold">Different</span>
            </h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-lg text-talon-navy leading-relaxed font-light max-w-4xl mx-auto">
              Talon & Tide represents a new standard in wildlife experience curation — where professional 
              zoological expertise meets ethical excellence. Our background in wildlife care means we understand 
              the science, ethics, and passion behind every recommendation, and we know the difference between 
              a genuine conservation experience and a good marketing team.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Professional <span className="font-script text-script-lg text-talon-gold">Foundation</span></h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in animate-delay-200">
              <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-talon-gold/10 rounded-full flex-shrink-0">
                    <GraduationCap className="text-talon-gold" size={28} />
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
                      field researchers, and expedition leaders who provide insights into conservation 
                      work happening globally.
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
                      truly impactful experiences from typical tourist attractions — knowledge that guides 
                      every recommendation we make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-10 rounded-lg shadow-luxury animate-fade-in animate-delay-300">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl text-talon-green mb-6">Our <span className="font-script text-script-lg text-talon-gold">Mission</span></h3>
                <div className="w-16 h-1 bg-talon-gold mx-auto mb-6"></div>
              </div>
              <p className="text-talon-navy mb-6 leading-relaxed text-lg">
                To vet, curate, and showcase wildlife experiences that inspire, educate, and 
                contribute meaningfully to conservation — whether through dedicated conservation 
                organizations, expertly-guided expeditions, or encounters in pristine natural habitats.
              </p>
              <blockquote className="border-l-4 border-talon-gold pl-6 italic text-talon-navy/80 text-lg">
                "Talon & Tide is here to show you what's worth doing — and who's doing it right."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* How We Vet — mirrors PWA vetting process */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-talon-ivory mb-4">Our Vetting <span className="font-script text-3xl md:text-4xl text-talon-gold">Process</span></h2>
            <p className="text-talon-ivory/80 max-w-2xl mx-auto">
              We evaluate at two levels — the operator and the experience. The people running the experience matter as much as the experience itself.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: 1, title: "Initial Research", desc: "We identify operators claiming high ethical standards and exceptional wildlife encounters." },
              { step: 2, title: "Operator Evaluation", desc: "Operators are evaluated on animal welfare practices, staff expertise, and conservation commitment." },
              { step: 3, title: "Field Evaluation", desc: "Each operator is cross-referenced with wildlife professionals who have firsthand experience. Our founder personally reviews each before it goes live." },
              { step: 4, title: "Final Selection", desc: "Only experiences that meet our standards make it into our curated collection on the platform." },
              { step: 5, title: "Ongoing Monitoring", desc: "We remove listings when standards slip or concerns arise. Every recommendation is a current one, not permanent." }
            ].map((item, index) => (
              <div key={item.step} className={`bg-talon-navy/20 p-6 rounded-sm animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-talon-gold h-10 w-10 rounded-full flex items-center justify-center text-talon-green font-serif text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl mb-3 text-talon-gold">{item.title}</h3>
                <p className="text-talon-ivory/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Will & Won't List — mirrors PWA exclusions */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Where We Draw the <span className="font-script text-script-lg text-talon-gold">Line</span></h2>
            <p className="text-talon-navy/60 text-sm mt-2">
              The clearest proof of our standards is what we refuse to list.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="card-luxury p-8 animate-fade-in animate-delay-100">
              <h3 className="font-serif text-xl text-talon-green mb-4">What will never appear on Talon & Tide</h3>
              <p className="text-talon-navy/80 mb-4 text-sm">Regardless of any commercial relationship, we do not list experiences that involve:</p>
              <ul className="space-y-3 text-talon-navy/80 text-sm">
                {[
                  "Direct physical contact with most wild or captive big cats in commercial settings",
                  "Animals kept in conditions that compromise their welfare for the purpose of tourist access",
                  "Performances or trained behaviors that require animals to act against their natural instincts",
                  "Facilities with documented, unresolved violations of animal welfare regulations",
                  "Commercial harvest, trade, or handling of wild animals for tourism purposes",
                  "\"Sanctuaries\" functioning primarily as tourist attractions without genuine conservation focus",
                  "Wild animal feeding or touching experiences outside of a captive environment",
                  "Captive breeding programs designed solely for tourism revenue"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-talon-gold mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-talon-navy/50 text-xs italic mt-4">
                This list is not exhaustive. Our standards evolve as conservation science and animal welfare research advances.
              </p>
            </div>

            <div className="card-luxury p-8 animate-fade-in animate-delay-200">
              <h3 className="font-serif text-xl text-talon-green mb-4">Gray areas we may include</h3>
              <p className="text-talon-navy/80 text-sm leading-relaxed mb-3">
                Animal encounters are never black and white — which is exactly why Talon & Tide exists. 
                We may include experiences where we believe the overall impact is positive, always with 
                transparent ethics notes explaining the trade-offs and our reasoning.
              </p>
              <p className="text-talon-navy/50 text-xs italic">
                No listing on Talon & Tide is a blanket endorsement. Every recommendation comes with the context needed to make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">For Experience <span className="font-script text-script-lg text-talon-gold">Partners</span></h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-br from-talon-green/5 to-talon-navy/5 p-12 rounded-lg shadow-luxury animate-fade-in animate-delay-200">
            <p className="text-lg text-talon-navy mb-8 leading-relaxed font-light">
              When Talon & Tide reaches out to your organization, it's because we recognize the important 
              work you're doing and believe it aligns with what we look for: authentic, educational, and 
              impactful wildlife experiences. We're not evaluators or critics — we're advocates looking 
              to celebrate providers doing meaningful conservation work.
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
                    Visibility to conservation-minded, respectful audiences
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Opportunity to share your mission with engaged users
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
                    Editorial independence — operators cannot pay for listings or favorable reviews
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-talon-gold mt-1 flex-shrink-0" />
                    Long-term partnership mindset
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <p className="text-talon-navy/80 mb-4">
                Believe your experience meets our standards? Our review process is entirely editorial — no payment is required or accepted to be considered.
              </p>
              <Link 
                to="/for-operators" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Learn About Partnerships
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-talon-sand/30">
        <div className="container max-w-5xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-8">
            See Our Standards in <span className="font-script text-script-lg text-talon-gold">Action</span>
          </h2>
          <p className="text-xl text-talon-navy/80 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Explore our full vetting criteria, exclusion lists, and the science behind our evaluations on the Talon & Tide platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://app.talonandtide.com/standards" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Standards on the App
              <ArrowRight size={18} />
            </a>
            <Link 
              to="/for-operators" 
              className="btn-secondary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default OurStandards;
