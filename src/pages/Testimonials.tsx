import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, PlayCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Sasabot has transformed our restaurant business. We've increased orders by 30% since we started using it for our WhatsApp orders.",
      name: "James Mwangi",
      role: "Owner",
      company: "Taste of Nairobi Restaurant",
      metric: "30% increase in orders",
      industry: "Restaurant",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      quote: "My electronics shop now stays open 24/7 on WhatsApp. Customers can browse products and place orders even when I'm asleep.",
      name: "Sarah Odhiambo",
      role: "CEO",
      company: "TechHub Electronics",
      metric: "24/7 customer service",
      industry: "Electronics",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      quote: "The automated payment reminders have reduced our unpaid invoices by 50%. I wish I had found Sasabot earlier!",
      name: "David Kimani",
      role: "Manager",
      company: "Savanna Supplies",
      metric: "50% reduction in unpaid invoices",
      industry: "Wholesale",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      quote: "Our customers love being able to book appointments through WhatsApp. It's saved us hours of phone calls each day.",
      name: "Mary Adhiambo",
      role: "Founder",
      company: "Glow Beauty Salon",
      metric: "4 hours saved daily",
      industry: "Beauty",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      quote: "Managing our Airbnb inquiries through Sasabot has been a game-changer. We never miss a booking opportunity now.",
      name: "John Kariuki",
      role: "Property Manager",
      company: "Nairobi City Stays",
      metric: "100% inquiry response rate",
      industry: "Hospitality",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      quote: "As a small fashion boutique, we couldn't afford a full-time customer service team. Sasabot gives us enterprise-level service at a fraction of the cost.",
      name: "Grace Wanjiku",
      role: "Owner",
      company: "Urban Trends Clothing",
      metric: "75% cost savings vs. hiring staff",
      industry: "Fashion",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  const featuredTestimonial = {
    quote: "Before Sasabot, I was missing customer orders when I was busy in the kitchen or with deliveries. Now our WhatsApp is always responsive, and we've seen a 45% increase in order volume within just three months of using the service.",
    name: "Peter Njoroge",
    role: "Owner",
    company: "Pete's Pizza Place",
    metric: "45% increase in sales",
    industry: "Restaurant",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  };

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
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              See how businesses across Kenya are transforming their operations with Sasabot's WhatsApp automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div className="text-white">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-12 w-12 text-primary-300 mb-6 opacity-50" />
                  <p className="text-xl md:text-2xl font-medium mb-8">
                    {featuredTestimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={featuredTestimonial.image} 
                      alt={featuredTestimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-xl">{featuredTestimonial.name}</h4>
                      <p className="text-primary-200">
                        {featuredTestimonial.role}, {featuredTestimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                    {featuredTestimonial.metric}
                  </div>
                </div>
              </div>
              <div className="relative lg:h-auto">
                <img 
                  src="https://images.pexels.com/photos/5920770/pexels-photo-5920770.jpeg" 
                  alt="Restaurant owner using WhatsApp for business" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button 
                    className="p-3 bg-white rounded-full text-primary-700 hover:text-primary-800 transition-colors"
                    aria-label="Play video"
                  >
                    <PlayCircle size={64} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Hear from businesses of all sizes across different industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                metric={testimonial.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results by Industry */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Results by Industry"
            subtitle="See the impact Sasabot has had across different business types"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <IndustryResultCard
              industry="Restaurants"
              businesses="75+"
              metric="35% average increase in orders"
              icon={
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              }
            />
            <IndustryResultCard
              industry="Retail"
              businesses="120+"
              metric="4 hours saved daily on customer service"
              icon={
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
              }
            />
            <IndustryResultCard
              industry="Hospitality"
              businesses="50+"
              metric="98% customer inquiry response rate"
              icon={
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              }
            />
            <IndustryResultCard
              industry="Services"
              businesses="90+"
              metric="45% increase in booking conversions"
              icon={
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join hundreds of successful businesses</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the same results for your business with Sasabot's powerful WhatsApp automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started for $4.99/month
            </Button>
            <Button 
              href="https://wa.me/254700000000" 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-primary-700"
              external
            >
              Chat with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component
interface IndustryResultCardProps {
  industry: string;
  businesses: string;
  metric: string;
  icon: React.ReactNode;
}

const IndustryResultCard: React.FC<IndustryResultCardProps> = ({
  industry,
  businesses,
  metric,
  icon
}) => (
  <motion.div 
    className="bg-white rounded-xl shadow-card p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-700 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{industry}</h3>
    <p className="text-gray-500 mb-4">{businesses} businesses</p>
    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block font-medium">
      {metric}
    </div>
  </motion.div>
);

export default Testimonials;