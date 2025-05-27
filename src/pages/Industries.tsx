import React from 'react';
import { motion } from 'framer-motion';
import { 
  UtensilsCrossed, 
  Hotel, 
  Smartphone, 
  ShoppingBag,
  ShieldCheck,
  Hammer,
  Truck,
  Flower2,
  Cake,
  BookOpen
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import IndustryCard from '../components/ui/IndustryCard';
import Button from '../components/ui/Button';

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Restaurants & Takeaways",
      icon: <UtensilsCrossed size={24} />,
      description: "Automate food orders, reservations, and delivery requests through WhatsApp.",
      testimonial: "Sasabot responds to bookings while I'm busy in the kitchen. Our order volume increased by 35% in just two months.",
      testimonialAuthor: "James Mwangi, Taste of Nairobi",
      linkTo: "/industries/restaurants"
    },
    {
      title: "Airbnbs & Hospitality",
      icon: <Hotel size={24} />,
      description: "Manage bookings, answer FAQs, and coordinate check-ins seamlessly.",
      testimonial: "Guests love being able to get instant answers about check-in and local recommendations, even when I'm not available.",
      testimonialAuthor: "Lisa Omondi, Nairobi Luxury Stays",
      linkTo: "/industries/hospitality"
    },
    {
      title: "Electronics & Mobile Retail",
      icon: <Smartphone size={24} />,
      description: "Share product catalogs, answer technical questions, and process gadget orders.",
      testimonial: "We close more orders on WhatsApp with less stress. Customers can browse our entire catalog through chat.",
      testimonialAuthor: "David Kimani, TechHub Electronics",
      linkTo: "/industries/electronics"
    },
    {
      title: "Clothing & Apparel",
      icon: <ShoppingBag size={24} />,
      description: "Share fashion catalogs, answer sizing questions, and process clothing orders.",
      testimonial: "Customers ask about sizes and styles at all hours. Sasabot answers their questions instantly, improving our conversion rate.",
      testimonialAuthor: "Sarah Njeri, Urban Styles Boutique",
      linkTo: "/industries/fashion"
    },
    {
      title: "Insurance & Agency Sales",
      icon: <ShieldCheck size={24} />,
      description: "Qualify leads, share policy details, and schedule agent follow-ups automatically.",
      testimonial: "Our agents can focus on closing deals instead of answering basic policy questions. Lead qualification improved by 40%.",
      testimonialAuthor: "Robert Mugo, Protect Insurance Agency",
      linkTo: "/industries/insurance"
    },
    {
      title: "Hardware & Construction",
      icon: <Hammer size={24} />,
      description: "Answer product availability questions and process building material orders.",
      testimonial: "Contractors can check prices and availability 24/7, which has made us their go-to supplier for urgent needs.",
      testimonialAuthor: "Peter Kamau, Kamau Hardware Solutions",
      linkTo: "/industries/hardware"
    },
    {
      title: "Transport & Logistics",
      icon: <Truck size={24} />,
      description: "Coordinate pickups, deliveries, and provide real-time shipment updates.",
      testimonial: "Our customers can track their shipments and request deliveries without calling our busy phone lines.",
      testimonialAuthor: "Grace Muthoni, Swift Deliveries",
      linkTo: "/industries/logistics"
    },
    {
      title: "Florists & Gift Shops",
      icon: <Flower2 size={24} />,
      description: "Take flower orders, customize arrangements, and coordinate deliveries for special occasions.",
      testimonial: "During Valentine's Day, Sasabot handled hundreds of inquiries that we couldn't have managed manually.",
      testimonialAuthor: "Jane Wambui, Bloom Florists",
      linkTo: "/industries/florists"
    },
    {
      title: "Bakeries & Cake Shops",
      icon: <Cake size={24} />,
      description: "Take custom cake orders, share catalogs, and coordinate pickup times.",
      testimonial: "Customers can browse our cake designs and place custom orders at any time. Our staff can focus on baking rather than answering calls.",
      testimonialAuthor: "Mary Adhiambo, Sweet Delights Bakery",
      linkTo: "/industries/bakeries"
    },
    {
      title: "Education & Tutoring",
      icon: <BookOpen size={24} />,
      description: "Answer course inquiries, schedule tutoring sessions, and share learning resources.",
      testimonial: "Parents can get immediate answers about our programs and schedule consultations without waiting for our office hours.",
      testimonialAuthor: "Joseph Ochieng, Excel Learning Center",
      linkTo: "/industries/education"
    }
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
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Sasabot is tailored for the unique needs of different businesses across Kenya and East Africa. Discover how we can help your specific industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 6).map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                icon={industry.icon}
                description={industry.description}
                testimonial={industry.testimonial}
                testimonialAuthor={industry.testimonialAuthor}
                linkTo={industry.linkTo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Restaurants & Food Businesses"
                subtitle="See how Sasabot is transforming the way restaurants handle orders and customer service in Kenya"
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Automated Menu Sharing</h3>
                    <p className="text-gray-600">Send your full menu or daily specials to customers with just one click</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Order Capture</h3>
                    <p className="text-gray-600">Convert customer messages into structured orders with all details included</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Delivery Coordination</h3>
                    <p className="text-gray-600">Manage delivery times and locations through automated chat sequences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">MPESA Payments</h3>
                    <p className="text-gray-600">Collect payments directly through WhatsApp with MPESA integration</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button to="/get-started" variant="primary">
                  Start Your Restaurant Bot
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg" 
                alt="Restaurant using WhatsApp for orders" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="More Industries"
            subtitle="Sasabot works with many other business types across Africa"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industries.slice(6).map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                icon={industry.icon}
                description={industry.description}
                testimonial={industry.testimonial}
                testimonialAuthor={industry.testimonialAuthor}
                linkTo={industry.linkTo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Not seeing your industry? */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Sasabot is flexible and can be customized for almost any business that communicates with customers on WhatsApp.
          </p>
          <Button 
            href="https://wa.me/254700000000" 
            variant="primary"
            external
          >
            Chat with Us About Your Business
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses in your industry already using Sasabot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started for $4.99/month
            </Button>
            <Button to="/testimonials" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Read Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;