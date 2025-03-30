
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The Ethics of Wildlife Tourism',
    category: 'Conservation',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    excerpt: 'How to ensure your wildlife encounters contribute positively to conservation efforts and animal welfare.',
  },
  {
    id: 2,
    title: 'Sustainable Luxury: Beyond Greenwashing',
    category: 'Ethical Travel',
    date: 'May 4, 2023',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    excerpt: 'Navigating the complex landscape of truly sustainable luxury accommodations in wildlife destinations.',
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-sandbeige/80">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="section-title animate-fade">Ethical Travel Journal</h2>
            <p className="max-w-lg text-charcoal/80 animate-fade animate-delay-100">
              Insights, guides, and stories exploring the intersection of luxury and ethical wildlife encounters.
            </p>
          </div>
          <Link to="/blog" className="btn-secondary mt-6 md:mt-0 animate-fade animate-delay-200">
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="group animate-fade" 
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="content-card h-full shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-midnight text-white text-xs px-3 py-1 rounded-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs text-charcoal/70 mb-3">{post.date}</p>
                  <h3 className="font-serif text-xl mb-4 text-midnight group-hover:text-talon-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-champagne text-sm group-hover:text-midnight transition-colors duration-300">
                    Read More
                    <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
