import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  ShoppingCart, 
  CreditCard, 
  BarChart4,
  ArrowRight,
  Bot,
  Globe,
  Zap,
  Check
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import WhatsAppChat from '../components/ui/WhatsAppChat';
import Card from '../components/ui/Card';
import Steps from '../components/ui/Steps';
import TestimonialCard from '../components/ui/TestimonialCard';

const mockMessages = [
  {
    id: 1,
    content: "Hi! I'd like to know more about your AI chatbot service.",
    type: 'received' as const,
    time: '10:30 AM',
  },
  {
    id: 2,
    content: "Welcome to Sasabot! I'm your AI assistant. Our service helps businesses automate customer support and sales on WhatsApp. Would you like to know about our features or pricing?",
    type: 'sent' as const,
    time: '10:31 AM',
  },
  {
    id: 3,
    content: "Tell me about the main features",
    type: 'received' as const,
    time: '10:32 AM',
  },
  {
    id: 4,
    content: "Our key features include:\n\n1. 24/7 automated responses\n2. Order management\n3. Payment collection via MPESA (Coming Soon)\n4. Multi-language support\n5. Analytics dashboard\n\nWould you like to see a demo?",
    type: 'sent' as const,
    time: '10:33 AM',
  }
];

const howItWorksSteps = [
  {
    title: 'Connect WhatsApp',
    description: 'Link your business WhatsApp to Sasabot in minutes',
    icon: <MessageCircle size={24} />,
  },
  {
    title: 'Capture Orders',
    description: 'Automatically process and organize customer orders',
    icon: <ShoppingCart size={24} />,
  },
  {
    title: 'Accept Payments',
    description: 'Receive payments via MPESA and other methods (Coming Soon)',
    icon: <CreditCard size={24} />,
  },
  {
    title: 'Track Results',
    description: 'View insights on sales, response times, and growth',
    icon: <BarChart4 size={24} />,
  },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Automate Your Business on WhatsApp
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Respond faster. Process orders. Get paid. Sasabot automates your customer support, order management and sales via messaging apps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" variant="primary">
                  Start 7-Day Trial
                </Button>
                <Button to="/waitlist" size="lg" variant="outline">
                  Join AI Premium Waitlist
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">5-minute setup</span>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:ml-auto">
              <WhatsAppChat 
                messages={mockMessages} 
                businessName="Sasabot Demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Sasabot?"
            subtitle="Everything you need to automate your business messaging"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Bot className="h-6 w-6" />}
              title="AI-Powered Responses"
              description="Our AI understands customer queries and responds naturally in multiple languages."
            />
            <FeatureCard
              icon={<ShoppingCart className="h-6 w-6" />}
              title="Order Management"
              description="Capture and process orders automatically through WhatsApp chat."
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6" />}
              title="Payment Collection"
              description="Accept MPESA payments directly through WhatsApp conversations (Coming Soon)."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Multi-Language"
              description="Support customers in English, Swahili, and other local languages."
            />
            <FeatureCard
              icon={<BarChart4 className="h-6 w-6" />}
              title="Analytics Dashboard"
              description="Track performance metrics and customer insights in real-time."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Quick Setup"
              description="Get started in minutes with our guided onboarding process."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How Sasabot Works"
            subtitle="Get started in minutes and transform your business communication"
            centered
          />
          
          <Steps steps={howItWorksSteps} />
          
          <div className="text-center mt-12">
            <Button to="/how-it-works" variant="outline">
              Learn more about how it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">
            Trusted by businesses across Kenya
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Retail', 'Hospitality', 'Food', 'Fashion', 'Electronics'].map((industry, index) => (
              <div key={index} className="text-gray-500 font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Join hundreds of businesses already using Sasabot"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Sasabot has transformed our restaurant business. We've increased orders by 30% since we started using it for our WhatsApp orders."
              name="James Mwangi"
              role="Owner"
              company="Taste of Nairobi Restaurant"
              metric="30% increase in orders"
            />
            <TestimonialCard
              quote="My electronics shop now stays open 24/7 on WhatsApp. Customers can browse products and place orders even when I'm asleep."
              name="Sarah Odhiambo"
              role="CEO"
              company="TechHub Electronics"
              metric="24/7 customer service"
            />
            <TestimonialCard
              quote="The automated payment reminders have reduced our unpaid invoices by 50%. I wish I had found Sasabot earlier!"
              name="David Kimani"
              role="Manager"
              company="Savanna Supplies"
              metric="50% reduction in unpaid invoices"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button to="/testimonials" variant="outline">
              Read more success stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Summary Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that's right for your business"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-600">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>WhatsApp auto-responses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Order management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>1 team member (+ $4.99/additional user)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>MPESA integration (Coming Soon)</span>
                  </li>
                </ul>
                <Button to="/get-started" fullWidth>Get Started</Button>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Premium AI</h3>
                <div className="text-3xl font-bold mb-4">From $34.99<span className="text-lg text-gray-600">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>AI-powered chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Multilingual support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Smart lead follow-up</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button to="/waitlist" fullWidth variant="outline">Join Waitlist</Button>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/pricing" variant="outline">
              View full pricing details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of African businesses using Sasabot to grow their sales and improve customer service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started Today
            </Button>
            <Button to="/how-it-works" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card className="p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

export default Home;