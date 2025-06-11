import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BetaSignupForm from '../components/BetaSignup';

const BetaSignup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-32">
        <BetaSignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default BetaSignup;