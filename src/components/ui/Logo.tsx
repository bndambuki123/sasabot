import React from 'react';

interface LogoProps {
  variant?: 'blue' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'blue' }) => {
  const logoUrl = variant === 'white' 
    ? 'https://i.postimg.cc/SsBW5cRM/Sasa-BOT-Logo-X-small.png'
    : 'https://i.postimg.cc/4ydfbcfD/Sasa-BOT-Logo-X-blue-mini.png';

  return (
    <img 
      src={logoUrl} 
      alt="Sasabot Logo" 
      className="h-10 w-auto"
    />
  );
};

export default Logo;