import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "Owner",
      company: "Lagos Fresh Market",
      quote: "SasaBot has transformed how we handle orders. Our customers love being able to order via WhatsApp, and we've seen a 40% increase in sales since implementing it.",
      image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Daniel Kamau",
      role: "Founder",
      company: "Nairobi Tech Solutions",
      quote: "As a small business owner, I couldn't afford to hire customer service staff. With SasaBot, I can provide 24/7 support to my clients without breaking the bank.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Zainab Mohammed",
      role: "CEO",
      company: "Accra Fashion House",
      quote: "The payment integration is seamless. Our customers can now browse our catalog on Instagram, place orders, and pay - all without leaving their chat. It's revolutionary!",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Businesses Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from African business owners who are already using SasaBot to transform their operations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="absolute -top-6 -left-6 text-primary-600">
              <Quote size={48} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="w-32 h-32 mx-auto md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3">
                <blockquote className="italic text-gray-700 text-lg mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</span>
                  <span className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevSlide} 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={nextSlide} 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;