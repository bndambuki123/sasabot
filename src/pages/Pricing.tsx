import React from 'react';
import { Button } from '../components/ui/Button';

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Enterprise Contact Section */}
        <div className="text-center mt-12">
          <Button 
            href="mailto:hi@sasabot.ai" 
            variant="white"
            external
          >
            Contact Us for Enterprise Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;