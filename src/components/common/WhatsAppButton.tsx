"use client";

import { FaWhatsapp } from "react-icons/fa";
import TextElement from "./TextElement";

const WhatsAppButton = () => {
  const contactNumber = "923174945496";
  const message = "Hi Waqar, I want to discuss a project.";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={`https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 md:px-5 py-2 md:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
      >
        <FaWhatsapp className="size-5 md:size-6.5" />

        {/* Expanding Text */}
        <TextElement className="text-white  overflow-hidden whitespace-nowrap transition-all duration-500 ">
          Let’s chat on WhatsApp
        </TextElement>
      </a>

      {/* Soft Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-30 -z-10 animate-pulse"></div>
    </div>
  );
};

export default WhatsAppButton;
