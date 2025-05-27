import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  external?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  fullWidth = false,
  external = false,
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all';
  
  const variantStyles = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 shadow-sm',
    secondary: 'bg-whatsapp text-white hover:bg-opacity-90 shadow-sm',
    outline: 'border border-primary-700 text-primary-700 hover:bg-primary-50',
    white: 'bg-white text-primary-900 hover:bg-gray-100 shadow-sm',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a 
          href={href} 
          className={buttonStyles}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;