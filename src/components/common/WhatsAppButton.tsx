'use client';

import { FaWhatsapp } from 'react-icons/fa';
import TextElement from './TextElement';

const WhatsAppButton = () => {
  const contactNumber = '923174945496';
  const message = 'Hi Waqar, I want to discuss a project.';

  return (
    <div className="group fixed right-6 bottom-6 z-50">
      <a
        href={`https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/40 md:px-5 md:py-3"
      >
        <FaWhatsapp className="size-5 md:size-6.5" />

        {/* Expanding Text */}
        <TextElement className="overflow-hidden whitespace-nowrap text-white transition-all duration-500">
          Let’s chat on WhatsApp
        </TextElement>
      </a>

      {/* Soft Glow Effect */}
      <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-green-500 opacity-30 blur-xl"></div>
    </div>
  );
};

export default WhatsAppButton;
