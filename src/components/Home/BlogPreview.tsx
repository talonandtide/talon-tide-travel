
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
    <section className="py-20 bg-talon-sand/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="section-title animate-fade">Field Notes</h2>
            <p className="max-w-lg text-talon-stone animate-fade animate-delay-100">
              Insights, guides, and stories exploring the intersection of luxury and ethical wildlife encounters.
            </p>
          </div>
          <Link to="/blog" className="btn-secondary mt-4 md:mt-0 animate-fade animate-delay-200">
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="group animate-fade" 
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="bg-white rounded-sm overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-talon-navy/80 text-white text-xs px-3 py-1 rounded-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-talon-stone mb-2">{post.date}</p>
                  <h3 className="font-serif text-xl mb-3 text-talon-green group-hover:text-talon-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-talon-navy mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-talon-gold text-sm">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
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
