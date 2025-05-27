import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquare, Bot, Languages, Braces, BarChart3, Check } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Waitlist: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    industry: '',
    interests: [] as string[],
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form data to backend
    console.log('Waitlist form data submitted:', formData);
    // Show success message
    setIsSubmitted(true);
    window.scrollTo(0, 0);
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
              Join the Premium AI Waitlist
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Be among the first to experience our advanced AI-powered features when they launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form / Confirmation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form or Confirmation */}
            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-card p-8"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank you for joining our waitlist!
                    </h2>
                    <p className="text-gray-700 mb-4">
                      A member of our team will be in touch with you shortly to discuss your interest in our Premium AI features.
                    </p>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold mr-2 mt-0.5">
                          1
                        </div>
                        <span>You'll receive a confirmation email shortly</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold mr-2 mt-0.5">
                          2
                        </div>
                        <span>We'll keep you updated on our progress</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold mr-2 mt-0.5">
                          3
                        </div>
                        <span>You'll get early access when we launch</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="mb-4">In the meantime, you can still get started with our Basic plan.</p>
                    <Button to="/get-started" variant="primary">
                      Start with Basic Plan ($9.99/month)
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionHeading
                    title="Join the Waitlist"
                    subtitle="Fill out the form below to be notified when our Premium AI features launch"
                  />
                  
                  <div className="bg-white rounded-xl shadow-card p-8">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            WhatsApp Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="+254 700 000 000"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                            Industry *
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            required
                          >
                            <option value="">Select your industry</option>
                            <option value="restaurant">Restaurant & Food</option>
                            <option value="retail">Retail & E-commerce</option>
                            <option value="hospitality">Hospitality & Travel</option>
                            <option value="fashion">Fashion & Apparel</option>
                            <option value="electronics">Electronics & Technology</option>
                            <option value="services">Professional Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Which Premium features are you most interested in? (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="interest-ai"
                              name="interests"
                              value="ai-responses"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="interest-ai">AI-powered responses</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="interest-multilingual"
                              name="interests"
                              value="multilingual"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="interest-multilingual">Multilingual support</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="interest-followup"
                              name="interests"
                              value="smart-followup"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="interest-followup">Smart lead follow-up</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="interest-analytics"
                              name="interests"
                              value="advanced-analytics"
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor="interest-analytics">Advanced analytics</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          What would you like AI to help you with? (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Tell us about your specific needs or challenges..."
                        ></textarea>
                      </div>
                      
                      <Button type="submit" variant="primary" fullWidth>
                        Join the Waitlist
                      </Button>
                    </form>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Premium AI Features */}
            <div>
              <SectionHeading
                title="Coming Soon: Premium AI Features"
                subtitle="Unlock the full potential of AI for your business"
              />
              
              <div className="space-y-6">
                <FeatureCard
                  icon={<Bot size={24} />}
                  title="AI-Powered Chatbot"
                  description="Natural language processing to understand and respond to customer inquiries in a human-like manner, handling complex questions without templates."
                />
                <FeatureCard
                  icon={<Languages size={24} />}
                  title="Multilingual Support"
                  description="Communicate with customers in multiple languages including English, Swahili, and other local languages with natural translations."
                />
                <FeatureCard
                  icon={<MessageSquare size={24} />}
                  title="Smart Lead Follow-up"
                  description="Automatically follow up with potential customers based on their interests and previous interactions to increase conversion rates."
                />
                <FeatureCard
                  icon={<Braces size={24} />}
                  title="Custom Integrations"
                  description="Connect with your existing business systems including inventory management, CRM, and accounting software."
                />
                <FeatureCard
                  icon={<MessageCircle size={24} />}
                  title="Multiple Channel Support"
                  description="Expand beyond WhatsApp to Instagram, SMS, and other communication channels from a single dashboard."
                />
                <FeatureCard
                  icon={<BarChart3 size={24} />}
                  title="Advanced Analytics & Insights"
                  description="Gain deeper insights into customer behavior, conversation patterns, and business performance with AI-powered analytics."
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
            subtitle="Learn more about our upcoming Premium AI features"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-card">
              <FAQItem
                question="When will the Premium AI features be available?"
                answer="We're currently in the final stages of development and testing. We expect to launch our Premium AI features in Q3 2023. By joining the waitlist, you'll be among the first to know when they're ready."
              />
              <FAQItem
                question="How much will the Premium AI plan cost?"
                answer="The Premium AI plan will start at $34.99 per month. We'll also offer annual pricing with a discount. Waitlist members will receive special early adopter pricing."
              />
              <FAQItem
                question="Can I upgrade from Basic to Premium when it launches?"
                answer="Yes! If you're already using our Basic plan, you'll be able to easily upgrade to the Premium AI plan when it launches. Your existing setup and data will transfer seamlessly."
              />
              <FAQItem
                question="Will there be a free trial for Premium AI features?"
                answer="Yes, we plan to offer a 7-day free trial of the Premium AI features when they launch. Waitlist members may receive an extended trial period."
              />
              <FAQItem
                question="What languages will the AI support?"
                answer="At launch, our AI will support English and Swahili. We plan to add more languages based on customer demand, including local African languages."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't wait to automate your business</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While you're waiting for Premium AI features, you can still transform your business with our Basic plan.
          </p>
          <Button to="/get-started" size="lg" variant="white">
            Start with Basic Plan ($9.99/month)
          </Button>
        </div>
      </section>
    </div>
  );
};

// Helper Components
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-card p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-start">
      <div className="p-3 bg-primary-100 text-primary-700 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="ml-4">
          {isOpen ? (
            <svg className="w-5 h-5 text-primary-600\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M19 9l-7 7-7-7"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Waitlist;