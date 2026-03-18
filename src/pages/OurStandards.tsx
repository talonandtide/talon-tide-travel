
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, ArrowRight, Sparkles, Eye, Heart, Star, Camera, Globe, Megaphone, Handshake } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

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

      {/* How We Discover Operators */}
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
                desc: "Nothing replaces being there. We arrive as a guest, experience the operation as naturally as possible, and see what your visitors see — that's how we make sure our coverage honestly reflects the real thing."
              },
              {
                icon: Megaphone,
                title: "We Tell Your Story",
                desc: "When an experience meets our standards, we promote it across everything we have — social media, our email community, and featured placement on the Talon & Tide platform."
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

      {/* What We Bring — Hosted Editorial Visits */}
      <section className="py-20 bg-talon-green text-talon-ivory">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-talon-ivory mb-4">What We <span className="font-script text-3xl md:text-4xl text-talon-gold">Bring</span> to Every Visit</h2>
            <p className="text-talon-ivory/80 max-w-3xl mx-auto text-lg leading-relaxed">
              A Talon & Tide editorial visit is part of how we vet experiences — and when an operator meets our standards, 
              here's what they receive at no cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in">
              <Camera className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Original Content & Storytelling</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                We document the experience as we go — no crew, no production setup, just authentic moments 
                captured naturally during the visit. Content you're welcome to use in your own marketing, too.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Star className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Editorial Feature & App Listing</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                Operators who meet our standards receive a full editorial feature — written with professional wildlife knowledge — 
                plus a dedicated listing on the Talon & Tide platform, seen by conservation-minded travelers actively 
                looking for experiences like yours.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Globe className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">Multi-Channel Promotion</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                Featured operators are promoted across our social channels, email community, and the Talon & Tide app — 
                reaching engaged audiences who care about ethical wildlife experiences.
              </p>
            </div>
            <div className="bg-talon-navy/20 p-8 rounded-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Heart className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-talon-gold mb-3">A Credible Endorsement</h3>
              <p className="text-talon-ivory/80 leading-relaxed">
                A Talon & Tide feature isn't a paid ad — it's an editorial endorsement from a team with real wildlife expertise. 
                That distinction matters to the travelers who use our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosted Editorial Visits — The Exchange */}
      <section className="py-20 bg-talon-sand/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Hosted Editorial <span className="font-script text-script-lg text-talon-gold">Visits</span></h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
            <p className="text-lg text-talon-navy/80 max-w-3xl mx-auto leading-relaxed">
              Great storytelling starts with being there. Our editorial visits are how we experience your work firsthand — 
              and for operators who meet our standards, we give that story the audience it deserves.
            </p>
          </div>

          <div className="card-luxury p-10 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Handshake className="text-talon-gold flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-serif text-2xl text-talon-green mb-3">A Partnership, Not a Transaction</h3>
                <p className="text-talon-navy/80 leading-relaxed mb-4">
                  We work with operators of every size — from small rehabilitation centres and community-led tours 
                  to large-scale lodges and conservation programmes. A hosted editorial visit means you provide access 
                  to your experience (a behind-the-scenes tour, a VIP guest experience, or a seat on your next trip), 
                  and we get to see your work up close as part of our vetting process. For operators who meet our standards, 
                  that visit becomes the foundation for professional editorial coverage, original media, and ongoing promotion.
                </p>
                <p className="text-talon-navy/80 leading-relaxed mb-4">
                  There's no fee for editorial visits. This is how responsible travel journalism works — 
                  operators host, and editorial teams deliver honest, expert coverage that drives real interest. 
                  It's a value exchange that benefits both sides, regardless of your marketing budget.
                </p>
                <p className="text-talon-navy/70 leading-relaxed text-sm italic">
                  Every feature on Talon & Tide begins with being there. That's what makes our recommendations 
                  worth trusting — and what makes your listing stand out from anything else online.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <p className="font-serif text-5xl text-talon-gold mb-2">79%</p>
              <p className="text-talon-navy/80 text-sm leading-relaxed">
                of consumers say authentic, firsthand content directly influences their purchasing decisions
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="font-serif text-5xl text-talon-gold mb-2">4.5×</p>
              <p className="text-talon-navy/80 text-sm leading-relaxed">
                higher engagement on authentic storytelling content compared to traditional advertising
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="font-serif text-5xl text-talon-gold mb-2">70%</p>
              <p className="text-talon-navy/80 text-sm leading-relaxed">
                of travelers are more likely to book after seeing real, trusted content about an experience
              </p>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link 
              to="/contact?subject=invite-visit" 
              className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Invite Us to Visit
              <ArrowRight size={18} />
            </Link>
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
              Editorial coverage is always free. For operators who want to go further, optional sponsorships 
              put your experience in front of even more conservation-minded travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-luxury p-8 hover:shadow-luxury-hover transition-all duration-300 animate-fade-in">
              <Sparkles className="text-talon-gold mb-4" size={28} />
              <h3 className="font-serif text-2xl text-talon-green mb-4">Promoted Listings</h3>
              <p className="text-talon-navy/80 leading-relaxed mb-4">
                Boost your visibility with premium placement across the platform — featured positioning in search results, 
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">Common <span className="font-script text-script-lg text-talon-gold">Questions</span></h2>
            <div className="w-24 h-1 bg-talon-gold mx-auto mb-8"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {[
              {
                q: "What does a hosted editorial visit involve?",
                a: "We visit your operation as a guest — experiencing your tours, meeting your team, and seeing your conservation work up close. This is how we vet experiences firsthand. For operators who meet our standards, we produce a full editorial feature, original media, and a dedicated listing on the Talon & Tide platform. The whole process is collaborative, relaxed, and designed to tell your story authentically."
              },
              {
                q: "Do I need a marketing budget to work with Talon & Tide?",
                a: "Not at all. Editorial visits are provided at no cost — they're built on a value exchange, not a fee. You share your experience, and we assess it firsthand. If your operation meets our standards, we deliver professional content and promotion as part of the feature. Optional sponsorships exist for operators who want additional visibility, but they're never required."
              },
              {
                q: "We're a small non-profit — is this really for us?",
                a: "Absolutely. We work with organisations of every size, from small rehabilitation centres and community-led tours to large safari lodges. Some of the most compelling stories come from the smallest operations. If you're doing meaningful conservation work, we want to help more people find you."
              },
              {
                q: "What do you need from us during a visit?",
                a: "Just access to your experience — whether that's a behind-the-scenes tour, a guest spot on a trip, or a VIP walkthrough of your facility. We handle all the content creation. Many operators find the visit is a genuinely enjoyable experience for their team, too."
              },
              {
                q: "How is this different from a paid review or influencer visit?",
                a: "Talon & Tide is an editorial platform, not an influencer channel. Our founder has a decade of professional wildlife management experience, and every feature is written with that expertise. We don't accept payment for editorial outcomes — our recommendations are based on what we experience firsthand, which is exactly why our users trust them."
              },
              {
                q: "What are sponsorships, and are they separate from editorial visits?",
                a: "Completely separate. Sponsorships are optional visibility tools — like promoted placement in search results or making your listing accessible to all users. They never influence our editorial decisions. Think of the editorial visit as the foundation, and sponsorships as an optional amplifier."
              },
              {
                q: "What happens if an operator doesn't meet your standards after a visit?",
                a: "It's not a pass or fail — it's a conversation. If something doesn't align with our standards, we'll share honest, constructive feedback privately. Many operators use that insight to strengthen their offering and reconnect with us down the line. Our goal is always to support great conservation work, and sometimes that means helping operators get there rather than simply turning them away."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-luxury px-6 border-none">
                <AccordionTrigger className="font-serif text-lg text-talon-green hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-talon-navy/80 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-talon-green mb-6">
            Ready to <span className="font-script text-script-lg text-talon-gold">Partner?</span>
          </h2>
          <p className="text-xl text-talon-navy/80 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Whether you're a small non-profit, a community-led tour, or a world-class safari lodge — 
            if you're doing meaningful conservation work, we'd love to see it for ourselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact?subject=invite-visit" 
              className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Invite Us to Visit
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
