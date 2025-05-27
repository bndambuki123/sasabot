import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ steps, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mb-4">
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-100 -translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;