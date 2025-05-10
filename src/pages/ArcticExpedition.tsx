
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, MapPin, Star, Calendar, Clock, Ship, Anchor, Globe, Compass, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "@/components/ui/carousel";

const ArcticExpedition = () => {
  const highlights = [
    {
      title: "Arctic Wildlife",
      description: "Observe polar bears, walruses, seals, and Arctic fox in their natural habitat.",
      icon: <Star className="h-6 w-6 text-talon-gold" />
    },
    {
      title: "Expert Naturalists",
      description: "Be guided by wildlife specialists with intimate knowledge of Arctic ecosystems.",
      icon: <Compass className="h-6 w-6 text-talon-gold" />
    },
    {
      title: "Zodiac Excursions",
      description: "Daily expeditions bring you close to glaciers, icebergs, and wildlife.",
      icon: <Ship className="h-6 w-6 text-talon-gold" />
    },
    {
      title: "Sustainable Travel",
      description: "Our partners employ stringent environmental practices to minimize impact.",
      icon: <Globe className="h-6 w-6 text-talon-gold" />
    }
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Oslo, Norway",
      description: "Arrive in Oslo and transfer to your luxury hotel. Join fellow travelers for a welcome dinner and expedition briefing."
    },
    {
      day: "Day 2",
      title: "Longyearbyen, Svalbard",
      description: "Morning flight to Longyearbyen, the largest settlement in Svalbard. Tour this former mining town before boarding your expedition vessel."
    },
    {
      day: "Days 3-10",
      title: "Exploring Svalbard Archipelago",
      description: "Cruise through fjords and along the pack ice edge. Each day brings Zodiac excursions to witness wildlife and spectacular Arctic landscapes, adapted to ice conditions and wildlife sightings. Visit historic sites, research stations, and witness the midnight sun."
    },
    {
      day: "Day 11",
      title: "Longyearbyen",
      description: "Disembark and enjoy a guided tour of the Svalbard Museum before your flight back to Oslo for a farewell dinner."
    },
    {
      day: "Day 12",
      title: "Departure",
      description: "After breakfast, transfer to the airport for your international flight home."
    }
  ];

  const accommodations = [
    {
      name: "Arctic Explorer Vessel",
      description: "Our expedition ship combines luxury with purpose-built polar capabilities. Featuring spacious suites with ocean views, a restaurant serving gourmet cuisine, observation lounges, and a fleet of Zodiacs for daily excursions.",
      image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
    },
    {
      name: "Grand Hotel Oslo",
      description: "Historic five-star accommodation in the heart of Norway's capital, featuring elegant rooms, fine dining, and spa facilities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    }
  ];

  const includedItems = [
    "Luxury accommodations in Oslo and onboard",
    "All onboard meals, excursions, and enrichment activities",
    "Expert naturalist guides and wildlife spotters",
    "Zodiac landings, private briefings, and lectures",
    "Travel planning support from Talon & Tide"
  ];
  
  const shipImages = [
    {
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Arctic Explorer Vessel exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
      caption: "Expedition vessel cruising through ice"
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      caption: "Luxury accommodations"
    }
  ];

  return (
    <Layout>
      {/* Hero Section with updated glacier image */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509529711801-deac231925ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-talon-midnight/70 to-talon-midnight/90"></div>
        </div>
        <div className="container relative z-10 text-white">
          <div className="flex items-center gap-2 mb-4 text-sm font-light">
            <Link to="/" className="hover:text-talon-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/experiences" className="hover:text-talon-gold transition-colors">Experiences</Link>
            <span>/</span>
            <span className="text-talon-gold">Arctic Wildlife Expedition</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 animate-fade">Arctic Wildlife Expedition</h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-talon-midnight/50 backdrop-blur-sm text-talon-sand rounded-sm mb-8 animate-fade animate-delay-100">
              <MapPin size={16} className="text-talon-gold" />
              <span>Svalbard, Norway</span>
            </div>
            <p className="text-xl text-talon-sand/90 mb-8 leading-relaxed max-w-2xl animate-fade animate-delay-200">
              Embark on an unforgettable journey to the pristine wilderness of Svalbard, where majestic polar bears roam across expansive ice sheets and dramatic glaciers meet the Arctic Sea.
            </p>
            <div className="space-x-4 animate-fade animate-delay-300">
              <Link to="/contact" className="btn-primary group">
                Join the Waitlist
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#overview" className="btn-secondary">
                Explore Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-talon-sand/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center animate-fade">Journey Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-6 animate-fade" style={{ animationDelay: '100ms' }}>
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-talon-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-talon-green mb-2">Duration</h3>
                  <p className="text-talon-navy">12 days / 11 nights</p>
                </div>
              </div>
              <div className="flex gap-6 animate-fade" style={{ animationDelay: '200ms' }}>
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-talon-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-talon-green mb-2">Location</h3>
                  <p className="text-talon-navy">Oslo & Svalbard Archipelago, Norway</p>
                </div>
              </div>
              <div className="flex gap-6 animate-fade" style={{ animationDelay: '300ms' }}>
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-talon-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-talon-green mb-2">Best Season</h3>
                  <p className="text-talon-navy">June to August (Arctic Summer)</p>
                </div>
              </div>
              <div className="flex gap-6 animate-fade" style={{ animationDelay: '400ms' }}>
                <div className="flex-shrink-0">
                  <Anchor className="h-6 w-6 text-talon-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-talon-green mb-2">Activity Level</h3>
                  <p className="text-talon-navy">Moderate - Daily Zodiac excursions</p>
                </div>
              </div>
            </div>
            <Separator className="my-12 bg-talon-stone/20" />
            <div className="prose prose-talon max-w-none animate-fade" style={{ animationDelay: '500ms' }}>
              <p className="text-lg leading-relaxed text-talon-navy mb-6">
                Venture to the pristine wilderness of the remote Norwegian Svalbard archipelago, where you'll witness the magnificent Arctic wildlife while staying aboard a luxury expedition vessel. This carefully curated journey offers unparalleled opportunities to observe polar bears—the iconic kings of the Arctic—in their natural habitat.
              </p>
              <p className="text-lg leading-relaxed text-talon-navy mb-6">
                Guided by expert naturalists and wildlife photographers, explore this spectacular wilderness via daily Zodiac excursions that bring you close to glaciers, icebergs, and the diverse wildlife that thrives in this harsh yet beautiful environment. From walruses lounging on ice floes to Arctic foxes patrolling the tundra, each day brings extraordinary wildlife encounters.
              </p>
              <p className="text-lg leading-relaxed text-talon-navy">
                This expedition has been thoughtfully designed to maximize wildlife viewing while minimizing environmental impact. Our partner operator, Abercrombie and Kent, adheres to strict sustainability guidelines, ensuring these pristine ecosystems remain protected for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-talon-green text-white">
        <div className="container">
          <h2 className="section-title text-center text-white mb-16 animate-fade">Journey Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="bg-talon-navy/30 p-8 rounded-sm hover:bg-talon-navy/50 transition-colors duration-300 animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="font-serif text-xl mb-4 text-talon-gold">{highlight.title}</h3>
                <p className="text-talon-ivory/90 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Itinerary and What's Included Section - Reorganized for better visual flow */}
      <section className="py-20 bg-talon-sand/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Itinerary Column */}
            <div>
              <h2 className="section-title mb-10 animate-fade">Expedition Itinerary</h2>
              <div className="max-w-xl">
                <Tabs defaultValue="day-by-day" className="mb-8">
                  <TabsList className="grid w-full grid-cols-1 bg-talon-sand/20">
                    <TabsTrigger value="day-by-day" className="data-[state=active]:bg-talon-gold/20">Day by Day</TabsTrigger>
                  </TabsList>
                  <TabsContent value="day-by-day" className="pt-6">
                    {itinerary.map((item, index) => (
                      <div key={item.day} className="relative animate-fade" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 pt-2">
                            <div className="font-serif text-talon-gold text-xl">{item.day}</div>
                          </div>
                          <div className="flex-grow pb-12">
                            <div className="bg-white p-4 shadow-sm rounded-sm hover:shadow-md transition-shadow duration-300">
                              <h3 className="font-serif text-lg text-talon-green mb-3">{item.title}</h3>
                              <p className="text-talon-navy text-sm">{item.description}</p>
                            </div>
                            {index < itinerary.length - 1 && (
                              <div className="absolute left-12 top-[4.5rem] bottom-0 w-0.5 bg-talon-sand"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* What's Included Column */}
            <div>
              <h2 className="section-title mb-10 animate-fade">What's Included</h2>
              <div className="max-w-xl">
                <div className="grid grid-cols-1 gap-3 animate-fade animate-delay-100">
                  {includedItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-white rounded-sm shadow-sm"
                    >
                      <div className="flex-shrink-0 bg-talon-green rounded-full p-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <p className="text-talon-navy">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Accommodations */}
                <h3 className="font-serif text-2xl text-talon-green mt-12 mb-6 animate-fade animate-delay-200">Luxury Accommodations</h3>
                <div className="space-y-6 animate-fade animate-delay-300">
                  {accommodations.map((accommodation) => (
                    <div key={accommodation.name} className="bg-white p-6 shadow-sm rounded-sm">
                      <h4 className="font-serif text-xl text-talon-green mb-3">{accommodation.name}</h4>
                      <p className="text-talon-navy text-sm">{accommodation.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expedition Ship Gallery */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12 animate-fade">Expedition Ship</h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="relative">
              <CarouselContent>
                {shipImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                          <img 
                            src={image.url} 
                            alt={image.caption} 
                            className="w-full h-full object-cover rounded-sm"
                          />
                        </CardContent>
                      </Card>
                      <p className="text-center mt-4 text-talon-navy">{image.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              <div className="mt-4">
                <CarouselDots />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Conservation Focus */}
      <section className="py-20 bg-talon-green text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-white mb-8 animate-fade">Conservation Focus</h2>
            <p className="text-lg text-talon-ivory/90 mb-8 animate-fade animate-delay-100">
              This journey supports critical research on Arctic wildlife and climate change. A portion of your expedition cost contributes directly to organizations working to protect polar bears and their fragile ecosystem.
            </p>
            <p className="text-lg text-talon-ivory/90 mb-12 animate-fade animate-delay-200">
              Our partner operators adhere to strict guidelines established by the Association of Arctic Expedition Cruise Operators (AECO) to ensure minimal environmental impact and maximum educational value.
            </p>
            <div className="animate-fade animate-delay-300">
              <a href="https://aeco.no/about-us/this-is-aeco/" target="_blank" rel="noopener noreferrer" className="btn-secondary bg-talon-navy/20">
                Learn About Our Conservation Partners
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8 animate-fade">Join the Arctic Expedition</h2>
            <p className="text-lg text-talon-navy mb-12 animate-fade animate-delay-100">
              This extraordinary journey will soon be available for booking through Talon & Tide. Join our waitlist to be among the first to learn when reservations open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade animate-delay-200">
              <Link to="/contact" className="btn-primary group">
                Join the Waitlist
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/experiences" className="btn-secondary">
                Explore More Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArcticExpedition;
