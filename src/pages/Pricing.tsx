import Layout from '../components/Layout/Layout';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Essential Explorer",
      price: "$150",
      description: "Perfect for focused wildlife encounters",
      features: [
        "3–5 curated animal experiences around your target species",
        "Destination-specific packing list",
        "Field Notes: ethical insights from our founder",
        "Curated playlists, books, and films to inspire your journey",
        "Mobile app delivery, available offline",
        "Optional booking support (when applicable)"
      ]
    },
    {
      name: "Refined Wanderer", 
      price: "$200",
      description: "Enhanced comfort for discerning travelers",
      features: [
        "Everything in Essential Explorer",
        "3 upscale hotel recommendations (when not bundled)",
        "Optional booking support (when applicable)"
      ],
      popular: true
    },
    {
      name: "Luxury Curator",
      price: "$300", 
      description: "The ultimate in personalized travel curation",
      features: [
        "Everything in Refined Wanderer",
        "Priority delivery to the front of the line",
        "Nearby stopover suggestions for extended adventures",
        "Comprehensive airport experience guide with maps and lounge access",
        "Possible trip enhancements: private transfers, VIP viewings, behind-the-scenes upgrades (when available)",
        "Optional booking support (when applicable)"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative bg-talon-sand/30 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">
              Investment
            </h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Thoughtfully curated wildlife experiences designed for the conscious luxury traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div 
                key={tier.name}
                className={`card-luxury p-8 relative ${tier.popular ? 'ring-2 ring-talon-gold' : ''} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-talon-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl text-talon-green mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-talon-navy">{tier.price}</span>
                  </div>
                  <p className="text-talon-navy/70">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-talon-gold flex-shrink-0 mt-0.5" />
                      <span className="text-talon-navy/80 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button className="btn-primary w-full justify-center">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Fine Print */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-sm text-talon-navy/60 leading-relaxed">
              Prices reflect research, strategy, and a curated mobile app experience. Travel is not booked unless otherwise agreed upon.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;