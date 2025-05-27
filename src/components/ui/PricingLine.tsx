import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingLineProps {
  feature: string;
  basic: boolean | string;
  premium: boolean | string;
  description?: string;
}

const PricingLine: React.FC<PricingLineProps> = ({
  feature,
  basic,
  premium,
  description
}) => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <X className="h-5 w-5 text-gray-300" />
      );
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <div className="grid grid-cols-12 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="col-span-6 pr-4">
        <p className="text-sm text-gray-900 font-medium">{feature}</p>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <div className="col-span-3 flex items-center justify-center">
        {renderValue(basic)}
      </div>
      <div className="col-span-3 flex items-center justify-center">
        {renderValue(premium)}
      </div>
    </div>
  );
};

export default PricingLine;