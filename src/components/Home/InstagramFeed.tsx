
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80',
    likes: 324,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1510534318579-6cac80f6d702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80',
    likes: 156,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1484494789010-20fc1a011197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80',
    likes: 289,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2559&q=80',
    likes: 412,
  },
];

const InstagramFeed = () => {
  return (
    <section className="pt-20 pb-12">
      <div className="container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-xs text-charcoal/60 mb-3 animate-fade">Follow Us</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 font-serif text-2xl text-midnight hover:text-champagne transition-colors duration-300 animate-fade animate-delay-100"
          >
            <Instagram size={20} />
            @talonandtide
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <a 
              key={post.id} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden animate-fade content-card"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <img 
                src={post.image} 
                alt="Instagram Post" 
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/0 hover:bg-midnight/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-white flex flex-col items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ExternalLink size={24} className="text-champagne" />
                  <div className="text-white flex items-center gap-1">
                    <span className="sr-only">Likes: </span>
                    {post.likes}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
