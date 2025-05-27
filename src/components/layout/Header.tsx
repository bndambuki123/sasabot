import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo variant={scrolled ? 'blue' : 'blue'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-3 py-2 rounded-md transition-colors text-gray-700 hover:text-primary-700 flex items-center"
            >
              Menu
              {isMenuOpen ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm ${
                      isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/how-it-works" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm ${
                      isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </NavLink>
                <NavLink 
                  to="/pricing" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm ${
                      isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </NavLink>
                <NavLink 
                  to="/industries" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm ${
                      isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </NavLink>
                <NavLink 
                  to="/help" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm ${
                      isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help
                </NavLink>
              </div>
            )}
          </div>
          
          <div className="ml-4">
            <Link
              to="/get-started"
              className="inline-flex items-center bg-primary-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-primary-800 transition"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-primary-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              Industries
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
              onClick={closeMenu}
            >
              Help
            </NavLink>
            <Link
              to="/get-started"
              className="block mt-4 bg-primary-700 text-white px-4 py-3 rounded-lg font-medium text-center shadow-sm hover:bg-primary-800 transition"
              onClick={closeMenu}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;