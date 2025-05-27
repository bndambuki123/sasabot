import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/254762222000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="https://i.ibb.co/9mMZgg10/CITYPNG-COM-HD-Wtsp-Wa-Whatsapp-Logo-Icon-Sign-Symbol-Illustration-PNG-Image-2000x2000.png" 
        alt="WhatsApp" 
        className="w-7 h-7"
      />
    </motion.a>
  );
};

export default WhatsAppButton;