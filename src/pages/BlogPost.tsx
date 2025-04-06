
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Blog post data (this would normally come from an API or CMS)
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
    content: [
      {
        type: 'paragraph',
        text: 'The allure of encountering wildlife in their natural habitats draws millions of travelers each year. Yet, this growing desire for authentic animal experiences comes with profound ethical considerations. As wildlife tourism continues to expand globally, its impact on animal welfare and conservation efforts has come under increasing scrutiny.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        alt: 'Elephants in sanctuary',
        caption: 'Ethical sanctuaries prioritize the wellbeing of animals over tourist experiences'
      },
      {
        type: 'heading',
        text: 'Understanding Ethical Wildlife Tourism'
      },
      {
        type: 'paragraph',
        text: 'Ethical wildlife tourism places the welfare of animals and the conservation of their habitats at its core. It acknowledges that while observing animals can inspire protection, this must never come at the cost of their wellbeing. True ethical encounters are those where animals can behave naturally, free from stress or exploitation.'
      },
      {
        type: 'quote',
        text: 'The most meaningful wildlife experiences are those where we adapt to the animals' world—not where they are forced to adapt to ours.',
        author: 'Dr. Jane Goodall'
      },
      {
        type: 'paragraph',
        text: 'When evaluating wildlife tourism opportunities, consider whether the experience allows animals to engage in natural behaviors within appropriate environments. Ethical operators maintain respectful distances, limit visitor numbers, and prioritize education about conservation challenges.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        alt: 'Photographer documenting wildlife',
        caption: 'Responsible wildlife photography maintains distance and respects natural behaviors'
      },
      {
        type: 'heading',
        text: 'Red Flags in Wildlife Tourism'
      },
      {
        type: 'paragraph',
        text: 'Several practices should immediately raise concerns about the ethical standards of a wildlife experience:'
      },
      {
        type: 'list',
        items: [
          'Direct contact with wild animals, especially predators or endangered species',
          'Unnatural behaviors performed for entertainment (riding, performances, etc.)',
          'Artificial feeding that alters natural foraging patterns',
          'Inappropriate housing conditions that restrict movement or social interaction',
          'Breeding programs without legitimate conservation objectives'
        ]
      },
      {
        type: 'paragraph',
        text: 'These practices often indicate that animal welfare has been compromised for commercial gain—a fundamental violation of ethical tourism principles.'
      },
      {
        type: 'heading',
        text: 'The Positive Impact of Responsible Choices'
      },
      {
        type: 'paragraph',
        text: 'Choosing ethical wildlife experiences creates a virtuous cycle. When travelers support genuinely ethical operators, they strengthen conservation initiatives, create sustainable livelihoods for local communities, and discourage exploitative practices.'
      },
      {
        type: 'paragraph',
        text: 'At Talon & Tide, we meticulously vet each wildlife experience in our portfolio against stringent ethical criteria. We believe that extraordinary animal encounters and ethical practices are not mutually exclusive—in fact, the most memorable experiences often arise when animals are respected in their natural state.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1469041908917-89bc00316a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        alt: 'Sustainable tourism landscape',
        caption: 'Ethical tourism supports conservation and creates sustainable livelihoods'
      },
      {
        type: 'paragraph',
        text: 'By making informed choices about wildlife tourism, travelers become powerful advocates for conservation and animal welfare. Your decisions as a traveler directly influence the trajectory of wildlife tourism—a responsibility we believe is as profound as it is empowering.'
      }
    ]
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
    content: [
      // Similar content structure would be here
    ]
  },
  // Additional blog posts with similar structure
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1');
  
  // Find the current post
  const post = blogPosts.find((post) => post.id === postId);
  
  if (!post) {
    return (
      <Layout>
        <div className="container py-40">
          <h1 className="text-2xl">Post not found</h1>
          <Link to="/blog" className="text-talon-gold hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-talon-navy/90 to-talon-green/70 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay z-0"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className="container relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-talon-ivory mb-8 hover:text-talon-gold transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          
          <div className="max-w-4xl">
            <span className="bg-talon-green text-talon-ivory px-3 py-1 text-xs uppercase tracking-wider inline-block mb-6">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-talon-ivory mb-6 tracking-wide leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-talon-ivory mb-2">
              <div className="flex items-center gap-2">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-8 h-8 rounded-full object-cover border border-talon-ivory/30"
                />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-talon-ivory/50"></div>
              <div className="flex items-center gap-1 text-sm">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-talon-ivory/50"></div>
              <div className="text-sm">{post.date}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-talon-ivory/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {post.content.map((block, index) => {
              // Render content blocks based on their type
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-talon-navy mb-8 leading-relaxed">
                      {block.text}
                    </p>
                  );
                  
                case 'heading':
                  return (
                    <h2 key={index} className="font-serif text-2xl text-talon-green mb-6 mt-12">
                      {block.text}
                    </h2>
                  );
                  
                case 'image':
                  return (
                    <figure key={index} className="my-12 mx-auto">
                      <div className="w-full overflow-hidden">
                        <img 
                          src={block.src} 
                          alt={block.alt} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-sm text-talon-stone italic mt-3 text-center">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                  
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-4 border-talon-gold pl-6 py-1 my-8">
                      <p className="text-talon-navy/90 italic text-lg mb-2">{block.text}</p>
                      {block.author && (
                        <cite className="text-talon-stone text-sm not-italic">— {block.author}</cite>
                      )}
                    </blockquote>
                  );
                  
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-8 space-y-2">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-talon-navy">{item}</li>
                      ))}
                    </ul>
                  );
                  
                default:
                  return null;
              }
            })}
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-talon-sand">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-talon-ivory/60"
                  />
                  <div>
                    <p className="text-sm text-talon-stone mb-1">Written by</p>
                    <p className="font-medium text-talon-green">{post.author}</p>
                  </div>
                </div>
                
                <Link 
                  to="/blog" 
                  className="text-talon-gold flex items-center gap-2 hover:underline"
                >
                  <span>More Articles</span>
                  <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles - Could be added here */}
    </Layout>
  );
};

export default BlogPost;
