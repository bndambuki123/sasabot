import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  ShoppingCart, 
  CreditCard, 
  BarChart4,
  Instagram,
  MessageSquare,
  User,
  Settings,
  Smartphone,
  Store,
  FileText
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HowItWorks: React.FC = () => {
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
              How Sasabot Works
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover how Sasabot transforms your WhatsApp into a powerful business tool for customer service, sales, and payments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Your WhatsApp, Supercharged"
                subtitle="Sasabot connects to your existing business WhatsApp number to automate responses, capture orders, and process payments - all without changing your workflow."
              />
              <div className="space-y-4">
                <Feature 
                  icon={<MessageCircle />}
                  title="No New Apps to Download"
                  description="Keep using WhatsApp - we work behind the scenes to enhance your existing setup."
                />
                <Feature 
                  icon={<User />}
                  title="Maintain Your Personal Touch"
                  description="Step in anytime to chat directly with customers when needed."
                />
                <Feature 
                  icon={<Settings />}
                  title="Easy Setup"
                  description="Get running in less than 5 minutes with our guided onboarding process."
                />
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg" 
                alt="Business owner using WhatsApp" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Automated WhatsApp Responses"
            subtitle="Never miss a customer message again, even when you're busy or offline"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<MessageSquare size={24} />}
              title="Custom Response Templates"
              description="Create personalized response templates for FAQs, greetings, and product information."
            />
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="24/7 Availability"
              description="Respond to customers at any time of day or night, even when you're offline."
            />
            <FeatureCard
              icon={<User size={24} />}
              title="Human Handover"
              description="Seamlessly transition to live agent support when complex questions arise."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Order Capture & Management"
            subtitle="Turn conversations into structured orders that are easy to track and fulfill"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<ShoppingCart size={24} />}
              title="Automated Order Forms"
              description="Guide customers through ordering with interactive forms that collect all needed information."
            />
            <FeatureCard
              icon={<Store size={24} />}
              title="Product Catalog"
              description="Upload your products once and easily share them via WhatsApp when customers inquire."
            />
            <FeatureCard
              icon={<FileText size={24} />}
              title="Order History"
              description="Keep track of all customer orders in one place with status updates and history."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Payment Integration"
            subtitle="Make it easy for customers to pay you directly through WhatsApp"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<CreditCard size={24} />}
              title="MPESA Integration"
              description="Send automated MPESA payment requests and receive instant confirmation."
            />
            <FeatureCard
              icon={<MessageCircle size={24} />}
              title="Payment Reminders"
              description="Automatically follow up on unpaid invoices to improve cash flow."
            />
            <FeatureCard
              icon={<BarChart4 size={24} />}
              title="Payment Analytics"
              description="Track your revenue, popular products, and payment conversion rates."
            />
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Coming Soon: More Channels"
            subtitle="We're expanding beyond WhatsApp to help you reach customers wherever they are"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ComingSoonCard
              icon={<Instagram size={24} />}
              title="Instagram Integration"
              description="Manage Instagram DMs and comments through the same Sasabot dashboard."
            />
            <ComingSoonCard
              icon={<MessageSquare size={24} />}
              title="SMS Automation"
              description="Reach customers who prefer text messages with the same powerful features."
            />
            <ComingSoonCard
              icon={<Smartphone size={24} />}
              title="Mobile App"
              description="Manage your business communications on the go with our dedicated app."
            />
          </div>
        </div>
      </section>

      {/* Setup Process Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Getting Started is Simple"
            subtitle="Be up and running in less than 5 minutes with our easy setup process"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start automating your WhatsApp business communications today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started for $4.99/month
            </Button>
            <Button to="/pricing" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              View All Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => (
  <motion.div 
    className="flex items-start"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-2 bg-primary-100 text-primary-700 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <Card>
    <div className="p-6">
      <div className="p-3 bg-primary-100 text-primary-700 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

const ComingSoonCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <Card>
    <div className="p-6">
      <div className="p-3 bg-primary-100 text-primary-700 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <div className="flex items-center mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="ml-2 bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
          Coming Soon
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

const Timeline: React.FC = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and select your plan",
    },
    {
      title: "Connect WhatsApp",
      description: "Link your business WhatsApp number to Sasabot",
    },
    {
      title: "Configure Templates",
      description: "Set up your automated responses and order forms",
    },
    {
      title: "Add Payment Details",
      description: "Connect your MPESA or other payment methods",
    },
    {
      title: "Go Live",
      description: "Start receiving and automatically processing customer messages",
    }
  ];

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col items-center mr-4">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-primary-200 my-1"></div>
            )}
          </div>
          <div className="pt-2 pb-8">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HowItWorks;