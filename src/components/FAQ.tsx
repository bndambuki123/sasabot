import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What platforms does SasaBot™ work with?",
      answer: "SasaBot™ integrates with WhatsApp, Facebook Messenger, Instagram DMs, SMS, and more. We're continuously adding support for additional messaging platforms popular in Africa."
    },
    {
      question: "How does payment processing work?",
      answer: "SasaBot™ integrates with popular payment methods across Africa including M-Pesa, Airtel Money, bank transfers, and card payments. When a customer places an order, SasaBot™ automatically generates a secure payment link or instructions based on their preferred payment method."
    },
    {
      question: "Do I need technical skills to set up SasaBot™?",
      answer: "Not at all! SasaBot™ is designed to be easy to set up, even for non-technical users. Our team will help you with the initial configuration, and the platform has an intuitive dashboard for ongoing management."
    },
    {
      question: "Can SasaBot™ handle multiple languages?",
      answer: "Yes, SasaBot™ supports multiple languages including English, Swahili, Sheng, Amharic, and French, making it accessible across different regions of Africa. We're continually adding more language support."
    },
    {
      question: "How much does SasaBot™ cost?",
      answer: "SasaBot™ is currently free for all beta users during our 3-month early access period. As a thank-you, all beta participants will also receive 50% off our official launch pricing—guaranteed. Full pricing details are available on the Join Beta page."
    },
    {
      question: "Can I integrate SasaBot™ with my existing business software?",
      answer: "Yes, SasaBot™ is designed to integrate with popular business management tools, e-commerce platforms, and inventory systems. Our API allows for custom integrations with your existing business software."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about SasaBot™ and how it can help your business
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;