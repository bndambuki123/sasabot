import React from 'react';
import Card from './Card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
  metric?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  image,
  className = '',
  metric,
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <Quote className="h-8 w-8 text-primary-500 mb-4 opacity-30" />
        <p className="text-gray-700 mb-6">{quote}</p>
        
        {metric && (
          <div className="mb-4 bg-primary-50 text-primary-800 px-4 py-2 rounded-lg inline-block">
            <p className="font-semibold">{metric}</p>
          </div>
        )}
        
        <div className="flex items-center">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-4">
              <span className="font-semibold text-lg">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;