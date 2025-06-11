import React from 'react';
import { MessageCircle, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.postimg.cc/WbXRKscc/Sasa-BOT-Logo-X-small.png" 
                alt="SasaBot Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered messaging assistant for African businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Join Beta</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:hi@sasabot.ai" className="text-gray-400 hover:text-white transition-colors">
                  hi@sasabot.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <a href="tel:+254123456789" className="text-gray-400 hover:text-white transition-colors">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} SasaBot™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;