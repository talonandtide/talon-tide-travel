import Layout from '../components/Layout/Layout';
import { Check, Star, MapPin, Calendar } from 'lucide-react';

const Pricing = () => {
  const features = [
    {
      name: "Curated animal experiences",
      essential: "3-5 experiences suggested",
      refined: "3-5 experiences suggested",
      luxury: "3-5 experiences suggested"
    },
    {
      name: "Destination-specific packing list",
      essential: true,
      refined: true,
      luxury: true
    },
    {
      name: "Field Notes: ethical insights",
      essential: true,
      refined: true,
      luxury: true
    },
    {
      name: "Curated playlists, books & films",
      essential: true,
      refined: true,
      luxury: true
    },
    {
      name: "Mobile app delivery (offline)",
      essential: true,
      refined: true,
      luxury: true
    },
    {
      name: "Elevated hotel recommendations (4-5 stars)",
      essential: false,
      refined: "3 options",
      luxury: "3 options"
    },
    {
      name: "Priority delivery",
      essential: false,
      refined: false,
      luxury: true
    },
    {
      name: "Nearby stopover suggestions",
      essential: false,
      refined: false,
      luxury: true
    },
    {
      name: "Airport experience guide",
      essential: false,
      refined: false,
      luxury: "Maps & lounge access"
    },
    {
      name: "Trip enhancements",
      essential: false,
      refined: false,
      luxury: "Private transfers, VIP viewings"
    },
    {
      name: "Booking support",
      essential: "When applicable",
      refined: "When applicable",
      luxury: "When applicable"
    }
  ];

  const tiers = [
    {
      name: "Essential Explorer",
      price: "$150",
      description: "Perfect for focused wildlife encounters",
      popular: false,
      icon: MapPin
    },
    {
      name: "Refined Wanderer", 
      price: "$200",
      description: "Enhanced comfort for discerning travelers",
      popular: true,
      icon: Star
    },
    {
      name: "Luxury Curator",
      price: "$300", 
      description: "The ultimate in personalized travel curation",
      popular: false,
      icon: Calendar
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-talon-gold mx-auto" />;
    }
    if (value === false) {
      return <span className="text-talon-navy/30 text-sm">—</span>;
    }
    return <span className="text-sm text-talon-navy font-medium">{value}</span>;
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative bg-talon-sand/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">
              Investment
            </h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in mb-4" style={{ animationDelay: '200ms' }}>
              Thoughtfully curated wildlife experiences designed for the conscious luxury traveler.
            </p>
            <div className="inline-flex items-center gap-2 bg-talon-gold/10 px-4 py-2 rounded-full animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Star className="w-4 h-4 text-talon-gold" />
              <span className="text-sm text-talon-navy font-medium">We only work with elevated accommodation (4-5 stars)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Headers */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="hidden md:block"></div>
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <div 
                    key={tier.name}
                    className={`card-luxury p-6 text-center relative ${tier.popular ? 'ring-2 ring-talon-gold' : ''} animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-talon-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <Icon className="w-8 h-8 text-talon-green mx-auto mb-3" />
                    <h3 className="font-serif text-xl text-talon-green mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-talon-navy">{tier.price}</span>
                    </div>
                    <p className="text-sm text-talon-navy/70 mb-4">{tier.description}</p>
                    <a href="#/contact" className="btn-primary w-full text-sm text-center block">Get Started</a>
                  </div>
                );
              })}
            </div>

            {/* Comparison Table */}
            <div className="card-luxury overflow-hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-talon-sand/20 px-6 py-4 border-b border-talon-sand/40">
                <h3 className="font-serif text-xl text-talon-green">What's Included</h3>
              </div>
              
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-4 ${
                    index % 2 === 0 ? 'bg-talon-sand/5' : 'bg-white'
                  } border-b border-talon-sand/20 last:border-b-0`}
                >
                  <div className="font-medium text-talon-navy">
                    {feature.name}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.essential)}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.refined)}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(feature.luxury)}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-12 space-y-4 text-center">
              <div className="bg-talon-sand/10 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <h4 className="font-serif text-lg text-talon-green mb-3">Booking & Accommodation Details</h4>
                <div className="space-y-3 text-sm text-talon-navy/80">
                  <p>
                    Some experiences come pre-packaged and may already include lodging or transport. 
                    If not, select elevated hotel options will be suggested for a seamless trip.
                  </p>
                  <p>
                    Booking support may be available if your experience is with a vetted supplier. 
                    Please inquire if you'd like help securing your chosen experience.
                  </p>
                </div>
              </div>

              <p className="text-sm text-talon-navy/60 leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
                Prices reflect research, strategy, and a curated mobile app experience. Travel is not booked unless otherwise agreed upon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;