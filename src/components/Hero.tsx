import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Founder Spots Banner */}
            <Link to="/pricing" className="inline-block mb-8" data-aos="fade-down">
              <div className="bg-orange-100 px-5 py-2 rounded-full hover:bg-orange-200 transition-colors">
                <span className="text-orange-800 font-medium text-sm">
                  🔥 Only 50 founder spots remaining - Lock in 50% off forever!
                </span>
              </div>
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight" data-aos="fade-up">
              SasaBot: Behind every great customer experience, everywhere.
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Automate enquiries, orders and payments on WhatsApp, Instagram & SMS—without writing code. <span className="text-primary-600 font-semibold">Hakuna hassle!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
              <Link 
                to="/beta-signup" 
                className="btn-primary bg-gradient-sunset flex items-center justify-center group"
              >
                Join free 3-month beta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="#how-it-works" 
                className="btn-secondary flex items-center justify-center"
              >
                See how it works
                <MessageSquare className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Chat Screenshot */}
          <div className="max-w-[1000px] w-full mx-auto lg:ml-auto lg:mr-[-100px]" data-aos="fade-up" data-aos-delay="300">
            <div className="relative p-8">
              <img 
                src="https://i.postimg.cc/zvgh49q0/Untitled-design-2.png"
                alt="Chat Screenshots"
                className="w-full h-auto rounded-3xl shadow-[0_35px_80px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-sunset rounded-full opacity-20 blur-[100px]"></div>
              <div className="absolute -left-24 -top-24 w-96 h-96 bg-secondary-500 rounded-full opacity-10 blur-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;