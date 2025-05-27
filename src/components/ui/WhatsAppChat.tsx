import React from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  content: string;
  type: 'received' | 'sent';
  time: string;
}

interface WhatsAppChatProps {
  messages: Message[];
  businessName?: string;
  phoneNumber?: string;
  className?: string;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  messages,
  businessName = 'Sasabot Business',
  className = '',
}) => {
  return (
    <motion.div 
      className={`w-full max-w-sm mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Tablet Frame */}
      <div className="relative rounded-[2.5rem] bg-gray-800 p-4 shadow-xl">
        {/* Tablet Details */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl">
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
        </div>
        
        {/* WhatsApp Interface */}
        <div className="overflow-hidden rounded-2xl bg-white">
          {/* Header */}
          <div className="bg-whatsapp text-white p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-whatsapp font-bold text-sm">
                  {businessName.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="ml-3">
                <h3 className="font-semibold">{businessName}</h3>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div 
            className="h-96 overflow-y-auto p-4 space-y-3"
            style={{
              backgroundImage: `url("https://i.postimg.cc/x1ygZ4nv/8c98994518b575bfd8c949e91d20548b.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className={`max-w-[80%] rounded-xl px-3 py-2 ${
                    message.type === 'sent' 
                      ? 'bg-[#dcf8c6] rounded-tr-none' 
                      : 'bg-white rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className="flex justify-between items-center mt-1">
                    {message.type === 'sent' && (
                      <span className="text-[10px] text-gray-500">Powered by SasaBot</span>
                    )}
                    <span className="text-[10px] text-gray-500 ml-auto">{message.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Input field */}
          <div className="bg-[#f0f0f0] p-3 flex items-center">
            <div className="bg-white rounded-full flex-1 flex items-center px-3 py-2">
              <span className="text-gray-400 text-sm">Type a message</span>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="absolute -bottom-4 -left-8 bg-primary-600 text-white px-6 py-2 rounded-full text-base font-medium whitespace-nowrap shadow-lg transform rotate-6">
          All Automated. No human needed!
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppChat;