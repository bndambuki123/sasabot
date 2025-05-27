import React from 'react';
import Card from './Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  testimonial?: string;
  testimonialAuthor?: string;
  linkTo?: string;
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  icon,
  description,
  testimonial,
  testimonialAuthor,
  linkTo,
  className = '',
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary-100 text-primary-700 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-4">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        {testimonial && (
          <blockquote className="border-l-4 border-primary-300 pl-4 italic text-gray-600 my-4">
            "{testimonial}"
            {testimonialAuthor && (
              <footer className="text-sm text-gray-500 mt-1 not-italic">
                — {testimonialAuthor}
              </footer>
            )}
          </blockquote>
        )}
        
        {linkTo && (
          <Link 
            to={linkTo} 
            className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 mt-2"
          >
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default IndustryCard;