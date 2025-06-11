import React from 'react';
import { MessageSquare, Check, CircleDollarSign, HandCoins } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Custom Multiplatform Chatbots",
      description: "Deploy AI chatbots on WhatsApp, Facebook, Instagram, SMS, and more. Tailored to your business, available 24/7.",
      color: "bg-primary-600",
      image: "https://i.postimg.cc/zfr0xbYd/How-Artificial-Intelligence-Is-Making-Chatbots-Better-For-Businesses-Recovered.png"
    },
    
    {
      icon: <Check className="h-10 w-10 text-white" />,
      title: "Multilingual AI-Powered Response",
      description: "AI that understands informal, real-world conversations across English, Swahili, French, Sheng, and more.",
      color: "bg-secondary-600",
      image: "https://i.postimg.cc/dt03gfdp/Multilingual-support1.png"
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-white" />,
      title: "Automated order and payment processing",
      description: "Automatically capture orders and trigger payment prompts via MPESA.",
      color: "bg-accent-600",
      image: "https://i.postimg.cc/y69CGrQf/Automatic-order-processing1.png"
    },
    {
      icon: <HandCoins className="h-10 w-10 text-white" />,
      title: "Business Analytics",
      description: "Track sales, customer trends, and order volumes in real time. Make smarter decisions with clear insights.",
      color: "bg-success-600",
      image: "https://i.postimg.cc/T3qTyHM7/business-analytics.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How SasaBot™ Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A seamless experience for both you and your customers from first contact to completed transaction
          </p>
        </div>
        
        <div className="relative">
          {/* Connect line */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-1'}`}>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                
                <div className={`flex items-center justify-center my-6 md:my-0 ${index % 2 === 0 ? '' : 'md:order-0'}`}>
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg z-10`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-0' : 'md:pr-16 md:text-right'}`}>
                  <div className="h-64 overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;