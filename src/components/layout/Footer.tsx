import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered business assistant that helps SMEs in Africa automate customer interactions, process orders, and receive payments via messaging apps.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/SasaBot_AI" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="X (formerly Twitter)"
              >
                <img 
                  src="https://i.ibb.co/7Jh097M3/x-logo.png" 
                  alt="X logo" 
                  className="w-4 h-5"
                />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/sasabot.ai/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transition">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:hi@sasabot.ai" className="text-gray-400 hover:text-white transition">
                  Email Support
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/254762222000" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white flex items-center transition"
                >
                  WhatsApp Support
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a href="mailto:hi@sasabot.ai" className="text-gray-400 hover:text-white transition">
                  hi@sasabot.ai
                </a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="mr-2 h-5 w-5 text-gray-400" />
                <a 
                  href="https://wa.me/254762222000" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  +254 762 222 000
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/get-started"
                className="inline-flex items-center bg-primary-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-primary-800 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sasabot. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;