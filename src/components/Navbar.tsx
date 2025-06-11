import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://i.postimg.cc/pX5QZFP8/Sasa-BOT-Logo-X-blue-mini.png" 
              alt="SasaBot Logo"
              className="h-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How it Works</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
          <Link to="/pricing" className="nav-link">Join Beta</Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('features')} className="mobile-nav-link">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="mobile-nav-link">How it Works</button>
            <button onClick={() => scrollToSection('faq')} className="mobile-nav-link">FAQ</button>
            <Link to="/pricing" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Join Beta</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;