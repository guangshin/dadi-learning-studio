"use client";

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hi, I'd like to book a trial class at Da Di Learning Studio!");
  const whatsappUrl = `https://wa.me/6586998667?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-30 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#1da851] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;