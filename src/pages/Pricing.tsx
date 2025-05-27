import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PricingCard from '../components/ui/PricingCard';
import PricingLine from '../components/ui/PricingLine';
import FAQ from '../components/ui/FAQ';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const basicFeatures = [
    { text: 'WhatsApp auto-responses', included: true },
    { text: 'Order management', included: true },
    { text: 'Manual template setup', included: true },
    { text: 'Self-onboarding', included: true },
    { text: 'MPESA integration (Coming Soon)', included: true },
    { text: 'Email support', included: true },
    { text: 'Up to 1,000 messages/month', included: true },
    { text: '1 team member included', included: true },
    { text: 'Additional users $4.99/user/month', included: true },
    { text: 'AI-powered responses', included: false },
    { text: 'Multi-language support', included: false },
  ];

  const premiumFeatures = [
    { text: 'WhatsApp auto-responses', included: true },
    { text: 'Order management', included: true },
    { text: 'AI-powered chatbot (NLP)', included: true },
    { text: 'Multilingual chat support', included: true },
    { text: 'Smart lead follow-up', included: true },
    { text: 'MPESA & bank integration (Coming Soon)', included: true },
    { text: 'Priority support', included: true },
    { text: 'Unlimited messages', included: true },
    { text: 'Up to 5 team members', included: true },
    { text: 'Custom integration', included: true },
  ];

  const pricingFeatures = [
    {
      feature: 'WhatsApp Integration',
      basic: true,
      premium: true,
      description: 'Connect your WhatsApp Business account'
    },
    {
      feature: 'Monthly Messages',
      basic: '1,000 messages',
      premium: 'Unlimited',
      description: 'Number of automated responses per month'
    },
    {
      feature: 'Team Members',
      basic: '1 user ($4.99/additional user)',
      premium: 'Up to 5 users',
      description: 'Number of team members who can access the dashboard'
    },
    {
      feature: 'MPESA Integration',
      basic: 'Coming Soon',
      premium: 'Coming Soon',
      description: 'Accept payments through MPESA'
    },
    {
      feature: 'Response Templates',
      basic: '10 templates',
      premium: 'Unlimited',
      description: 'Pre-defined responses for common queries'
    },
    {
      feature: 'AI-Powered Responses',
      basic: false,
      premium: true,
      description: 'Natural language understanding and dynamic responses'
    },
    {
      feature: 'Multilingual Support',
      basic: false,
      premium: true,
      description: 'Support for English, Swahili, and other local languages'
    },
    {
      feature: 'Order Management',
      basic: 'Basic tracking',
      premium: 'Advanced system',
      description: 'Track and manage customer orders'
    },
    {
      feature: 'Analytics & Reporting',
      basic: 'Basic metrics',
      premium: 'Advanced insights',
      description: 'Track performance and customer behavior'
    },
    {
      feature: 'Customer Support',
      basic: 'Email support',
      premium: 'Priority support',
      description: '24/7 customer support access'
    }
  ];
  
  const faqItems = [
    {
      question: "How long does it take to set up Sasabot?",
      answer: "Most businesses are up and running within 5-10 minutes. Our onboarding process guides you through connecting your WhatsApp, setting up templates, and configuring payment options."
    },
    {
      question: "Do I need to install any new software?",
      answer: "No, Sasabot works with your existing WhatsApp Business account. There's no need to install any additional software or apps - everything is managed through our web dashboard."
    },
    {
      question: "Can I still chat with customers directly?",
      answer: "Absolutely! Sasabot handles routine inquiries and orders automatically, but you can step in at any time to chat directly with customers when needed."
    },
    {
      question: "How does the MPESA integration work?",
      answer: "MPESA integration is coming soon! Once available, you'll be able to automatically send payment requests and receive confirmations through WhatsApp."
    },
    {
      question: "What if I need more than 1,000 messages per month?",
      answer: "The Basic plan includes 1,000 automated messages per month. If you need more, you can purchase additional message packs or upgrade to the Premium plan which includes unlimited messages."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. We offer a 7-day free trial so you can test all features risk-free."
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Choose the plan that's right for your business. No hidden fees or complicated pricing.
            </p>
          </motion.div>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-lg shadow-sm inline-flex">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  billingCycle === 'monthly' 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  billingCycle === 'annual' 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual <span className="text-xs text-green-600">Save 15%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price={billingCycle === 'monthly' ? '$9.99' : '$101.89'}
              period={billingCycle === 'monthly' ? '/month' : '/year'}
              description="Perfect for small businesses getting started with WhatsApp automation."
              features={basicFeatures}
              ctaText="Get Started"
              ctaLink="/get-started"
            />
            
            <PricingCard
              title="Premium AI"
              price={`From ${billingCycle === 'monthly' ? '$34.99' : '$356.89'}`}
              period={billingCycle === 'monthly' ? '/month' : '/year'}
              description="Advanced AI features for businesses that want to scale their customer service."
              features={premiumFeatures}
              ctaText="Join Waitlist"
              ctaLink="/waitlist"
              popular={true}
              comingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Compare Plans"
            subtitle="A detailed breakdown of what's included in each plan"
            centered
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-200">
              <div className="col-span-6">
                <h3 className="font-semibold text-gray-900">Features</h3>
              </div>
              <div className="col-span-3 text-center">
                <h3 className="font-semibold text-gray-900">Basic</h3>
                <p className="text-sm text-gray-600">${billingCycle === 'monthly' ? '9.99' : '101.89'}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</p>
              </div>
              <div className="col-span-3 text-center">
                <h3 className="font-semibold text-gray-900">Premium AI</h3>
                <p className="text-sm text-gray-600">From ${billingCycle === 'monthly' ? '34.99' : '356.89'}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</p>
              </div>
            </div>

            {/* Feature Lines */}
            <div className="p-4">
              {pricingFeatures.map((feature, index) => (
                <PricingLine
                  key={index}
                  feature={feature.feature}
                  basic={feature.basic}
                  premium={feature.premium}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-800 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
                <p className="text-primary-100 mb-6">
                  For larger businesses or specific requirements, we offer tailored solutions to match your exact needs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                    <span>Custom integrations with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                    <span>Higher message volume</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                    <span>Multiple business numbers</span>
                  </li>
                </ul>
                <Button 
                  href="mailto:hi@sasabot.ai" 
                  variant="white"
                  external
                >
                  Contact Us for Enterprise Pricing
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                  alt="Enterprise team meeting" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Have questions about our pricing? Find answers below."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <FAQ items={faqItems} />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button 
              to="/help" 
              variant="outline"
            >
              Visit our Help Center
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try Sasabot risk-free with our 7-day free trial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started Now
            </Button>
            <Button 
              href="https://wa.me/254762222000" 
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

export default Pricing;