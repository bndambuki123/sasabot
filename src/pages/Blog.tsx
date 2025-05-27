import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Blog: React.FC = () => {
  const featuredPost = {
    title: "How WhatsApp Business Automation is Transforming African SMEs",
    excerpt: "Discover how small and medium businesses across Africa are leveraging WhatsApp automation to grow sales and improve customer service.",
    date: "May 15, 2024",
    author: "James Mwangi",
    category: "Business Growth",
    image: "https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg",
    slug: "whatsapp-business-automation-african-smes"
  };

  const recentPosts = [
    {
      title: "5 Ways to Increase Sales Through WhatsApp",
      excerpt: "Learn proven strategies to boost your sales and conversions through WhatsApp Business.",
      date: "May 10, 2024",
      author: "Sarah Omondi",
      category: "Marketing",
      image: "https://images.pexels.com/photos/6457555/pexels-photo-6457555.jpeg",
      slug: "increase-sales-through-whatsapp"
    },
    {
      title: "Setting Up Effective WhatsApp Auto-Responses",
      excerpt: "A step-by-step guide to creating auto-responses that engage customers and drive sales.",
      date: "May 5, 2024",
      author: "David Kimani",
      category: "Tutorials",
      image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",
      slug: "effective-whatsapp-auto-responses"
    },
    {
      title: "How Restaurant Owners Can Optimize WhatsApp Ordering",
      excerpt: "Specific strategies for restaurants to streamline order taking and delivery through WhatsApp.",
      date: "April 30, 2024",
      author: "Mary Adhiambo",
      category: "Industry Insights",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      slug: "restaurant-whatsapp-ordering"
    },
    {
      title: "The Future of AI in Customer Service for African Businesses",
      excerpt: "Exploring how AI is changing customer service and what it means for businesses in Africa.",
      date: "April 25, 2024",
      author: "James Mwangi",
      category: "Technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      slug: "ai-customer-service-africa"
    },
    {
      title: "MPESA Integration: Collecting Payments Through WhatsApp",
      excerpt: "How to set up and optimize MPESA payments through your WhatsApp Business account.",
      date: "April 20, 2024",
      author: "Sarah Omondi",
      category: "Tutorials",
      image: "https://images.pexels.com/photos/8353834/pexels-photo-8353834.jpeg",
      slug: "mpesa-whatsapp-integration"
    },
    {
      title: "Success Story: How Fashion Boutique Increased Sales by 45%",
      excerpt: "Case study of Urban Trends Clothing and how they transformed their business with WhatsApp automation.",
      date: "April 15, 2024",
      author: "David Kimani",
      category: "Success Stories",
      image: "https://images.pexels.com/photos/3760763/pexels-photo-3760763.jpeg",
      slug: "fashion-boutique-success-story"
    }
  ];

  const categories = [
    "All Categories",
    "Business Growth",
    "Marketing",
    "Tutorials",
    "Industry Insights",
    "Technology",
    "Success Stories"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sasabot Resources
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Insights, guides, and success stories to help you grow your business with WhatsApp automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary-100 text-primary-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Article"
            subtitle="Our latest insights to help your business grow"
          />
          
          <motion.div 
            className="bg-white rounded-xl shadow-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gray-200">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </span>
                  <span className="inline-flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <Button 
                  to={`/blog/${featuredPost.slug}`} 
                  variant="primary"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recent Articles"
            subtitle="More resources to help your business succeed"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className="inline-flex items-center mr-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <Button 
                      to={`/blog/${post.slug}`} 
                      variant="outline"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/blog/all" variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-800 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and business growth tips delivered straight to your inbox.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button type="submit" variant="white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-primary-200 mt-4 text-center">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Start automating your WhatsApp business communications today.
          </p>
          <Button to="/get-started" size="lg" variant="primary">
            Get Started for $4.99/month
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;