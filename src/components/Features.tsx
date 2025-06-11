import React from 'react';
import { MessageCircle, ShoppingCart, CreditCard, Clock, Phone, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle size={24} />,
      title: "Multi-Channel Support",
      description: "Connect with customers on WhatsApp, Facebook, Instagram, SMS, and more from a single platform."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Order Processing",
      description: "Automatically capture and process orders directly from customer messages with no manual input."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Integration",
      description: "Secure payment processing with support for mobile money, bank transfers, and cards across Africa."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock automated responses and support."
    },
    {
      icon: <Phone size={24} />,
      title: "No App Required",
      description: "Customers interact through platforms they already use - no new app downloads or learning curve."
    },
    {
      icon: <Users size={24} />,
      title: "AI-Powered Support",
      description: "Intelligent responses that understand customer needs and provide accurate information."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Features Designed for African Businesses</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Transform how you communicate with customers and process orders with these powerful capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;