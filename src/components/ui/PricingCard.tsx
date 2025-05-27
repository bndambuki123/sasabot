import React from 'react';
import Card from './Card';
import Button from './Button';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  comingSoon?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = '/month',
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
  comingSoon = false,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {popular && (
        <div className="absolute -left-2 -top-2 z-10">
          <div className="bg-primary-500 text-white px-8 py-1 text-sm font-medium transform -rotate-12 shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      <Card 
        className={`${popular ? 'border-2 border-primary-500' : ''}`}
        hover={false}
      >
        {comingSoon && (
          <div className="absolute top-4 right-4">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
              Coming Soon
            </span>
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold">{price}</span>
            {period && <span className="text-gray-600">{period}</span>}
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mr-2" />
                )}
                <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          
          <Button
            variant={popular ? 'secondary' : 'primary'}
            to={ctaLink}
            fullWidth
            disabled={comingSoon}
          >
            {ctaText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;