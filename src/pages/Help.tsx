import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';

const Help: React.FC = () => {
  const generalFaqs = [
    {
      question: "What is Sasabot?",
      answer: "Sasabot is an AI-powered customer assistant that helps small and medium businesses in Africa automate customer chats, process orders, and receive payments through WhatsApp and other channels."
    },
    {
      question: "How does Sasabot work with WhatsApp?",
      answer: "Sasabot connects to your existing WhatsApp Business account and automates responses to customer inquiries, captures order details, and processes payments - all through the WhatsApp platform that your customers already use."
    },
    {
      question: "Do I need to install any new software?",
      answer: "No, you don't need to install any new software. Sasabot works with your existing WhatsApp Business account, and you can manage everything through our web dashboard."
    },
    {
      question: "Which payment methods does Sasabot support?",
      answer: "Sasabot will soon support MPESA and Airtel Money for payments in Kenya. We're working on adding more payment options including bank transfers and card payments."
    },
    {
      question: "Can I still chat with customers directly?",
      answer: "Absolutely! Sasabot handles routine inquiries automatically, but you can step in at any time to chat directly with customers when needed."
    }
  ];

  const setupFaqs = [
    {
      question: "How long does it take to set up Sasabot?",
      answer: "Most businesses can set up Sasabot in about 5-10 minutes. Our guided onboarding process walks you through connecting your WhatsApp, setting up templates, and configuring payment options."
    },
    {
      question: "Do I need to create a new WhatsApp number?",
      answer: "No, you can use your existing WhatsApp Business number. Sasabot integrates with your current WhatsApp setup so there's no need to change your number or have customers contact a new one."
    },
    {
      question: "How do I set up automated responses?",
      answer: "During onboarding, you'll be guided to create response templates for common questions. You can create as many templates as you need and customize them anytime through your dashboard."
    },
    {
      question: "Can I customize the bot's responses?",
      answer: "Yes, you have full control over all automated responses. You can create custom templates for different scenarios and personalize the language and tone to match your brand."
    }
  ];

  const billingFaqs = [
    {
      question: "How much does Sasabot cost?",
      answer: "Sasabot's Basic plan starts at $9.99 per month with 1 team member included (additional users at $4.99/user/month). We also have a Premium AI plan coming soon starting from $34.99 per month with advanced features. You can view our full pricing details on the Pricing page."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial for you to test all features. If you're not satisfied within the trial period, you can cancel without any charges."
    },
    {
      question: "What payment methods can I use to pay for Sasabot?",
      answer: "You can pay for your Sasabot subscription using credit/debit cards. MPESA and Airtel Money integration is coming soon."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
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
              Help Center
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Find answers to your questions about Sasabot and get the support you need.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full py-4 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <SectionHeading
                title="General Questions"
                subtitle="Basic information about Sasabot"
              />
              <FAQ items={generalFaqs} />
            </div>
            
            <div>
              <SectionHeading
                title="Setup & Configuration"
                subtitle="Getting started with Sasabot"
              />
              <FAQ items={setupFaqs} />
            </div>
            
            <div>
              <SectionHeading
                title="Billing & Pricing"
                subtitle="Questions about plans and payments"
              />
              <FAQ items={billingFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Still Need Help?"
            subtitle="Our support team is ready to assist you"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ContactCard
              title="Chat on WhatsApp"
              description="Get immediate assistance through WhatsApp"
              icon={<MessageCircle size={24} />}
              buttonText="Start Chat"
              buttonLink="https://wa.me/254700000000"
              external
            />
            
            <ContactCard
              title="Email Support"
              description="Send us an email and we'll respond within 24 hours"
              icon={<Mail size={24} />}
              buttonText="Email Us"
              buttonLink="mailto:support@sasabot.com"
              external
            />
            
            <ContactCard
              title="Help Articles"
              description="Browse our detailed knowledge base"
              icon={<Search size={24} />}
              buttonText="View Articles"
              buttonLink="/articles"
            />
          </div>
        </div>
      </section>

      {/* Submit Ticket */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            title="Submit a Support Ticket"
            subtitle="Get personalized help from our team"
            centered
          />
          
          <div className="bg-white rounded-xl shadow-card p-8 mt-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="What is your question about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Please describe your issue in detail"
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" fullWidth>
                Submit Ticket
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Sasabot to grow their sales and improve customer service.
          </p>
          <Button to="/get-started" size="lg" variant="white">
            Get Started for $9.99/month
          </Button>
        </div>
      </section>
    </div>
  );
};

// Helper Component
interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  external?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
  external = false
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
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {external ? (
      <Button href={buttonLink} variant="outline" fullWidth external>
        {buttonText}
      </Button>
    ) : (
      <Button to={buttonLink} variant="outline" fullWidth>
        {buttonText}
      </Button>
    )}
  </motion.div>
);

export default Help;