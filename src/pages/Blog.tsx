
import React from 'react';
import Layout from '@/components/Layout/Layout';
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
    author: 'Lindsay Parker',
    authorImage: 'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Sustainable Luxury: Beyond Greenwashing',
    category: 'Ethical Travel',
    date: 'May 4, 2023',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    excerpt: 'Navigating the complex landscape of truly sustainable luxury accommodations in wildlife destinations.',
    author: 'Lindsay Parker',
    authorImage: 'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Conservation Success Stories: From the Field',
    category: 'Conservation',
    date: 'April 20, 2023',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    excerpt: 'Inspiring examples of wildlife tourism initiatives that are making a tangible difference for endangered species.',
    author: 'Michael Thompson',
    authorImage: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '8 min read',
  },
  {
    id: 4,
    title: 'Wildlife Photography: Ethical Practices',
    category: 'Travel Tips',
    date: 'March 12, 2023',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    excerpt: 'How to capture stunning wildlife images while respecting animal welfare and natural behaviors.',
    author: 'Sarah Chen',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'The Rise of Regenerative Travel',
    category: 'Industry Trends',
    date: 'February 28, 2023',
    image: 'https://images.unsplash.com/photo-1469041908917-89bc00316a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    excerpt: 'How the travel industry is moving beyond sustainability to actively regenerate ecosystems and communities.',
    author: 'Lindsay Parker',
    authorImage: 'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Behind the Scenes: Ethical Wildlife Sanctuaries',
    category: 'Experiences',
    date: 'January 15, 2023',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    excerpt: "What truly makes a wildlife sanctuary ethical? An insider's perspective on the standards that matter.",
    author: 'David Russo',
    authorImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    readTime: '10 min read',
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-talon-sand/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-talon-green mb-6 animate-fade-in">Ethical Travel Journal</h1>
            <p className="text-lg text-talon-navy/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Insights, guides, and stories exploring the intersection of luxury and ethical wildlife encounters.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 order-2 lg:order-1 animate-fade">
              <div className="bg-white p-8 h-full flex flex-col">
                <span className="bg-talon-gold/20 text-talon-gold px-3 py-1 text-xs uppercase tracking-wide inline-block mb-4 w-max">Featured</span>
                <h2 className="font-serif text-3xl mb-4 text-talon-green">{blogPosts[0].title}</h2>
                <p className="text-sm text-talon-stone mb-2">{blogPosts[0].date} • {blogPosts[0].readTime}</p>
                <p className="mb-6 text-talon-navy flex-grow">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={blogPosts[0].authorImage} 
                      alt={blogPosts[0].author} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm text-talon-green">{blogPosts[0].author}</span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`} className="text-talon-gold flex items-center gap-1 text-sm hover:underline">
                    Read more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2 animate-fade animate-delay-100">
              <div className="relative h-full min-h-[300px]">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-talon-green text-white text-xs px-3 py-1 uppercase">
                  {blogPosts[0].category}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id} 
                className="group animate-fade" 
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-white rounded-sm overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-talon-green text-white text-xs px-3 py-1 uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-talon-stone mb-2">{post.date} • {post.readTime}</p>
                    <h3 className="font-serif text-xl mb-3 text-talon-green group-hover:text-talon-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-talon-navy mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src={post.authorImage} 
                          alt={post.author} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-xs text-talon-green">{post.author}</span>
                      </div>
                      <div className="flex items-center text-talon-gold text-sm">
                        Read More
                        <ArrowRight size={14} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
