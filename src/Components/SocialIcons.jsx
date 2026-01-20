import React from 'react';
import { Github, X, Instagram, Youtube } from 'lucide-react';

const SocialIcons = () => {
  const icons = [
    { icon: <Github size={24} />, href: "https://github.com/Tealands", label: "GitHub" },
    { icon: <X size={24} />, href: "https://x.com/yeah_hi0525", label: "X" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/catapult0525shiger/", label: "Instagram" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@%E3%81%97%E3%81%92%E3%82%8B%E3%81%AE%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB", label: "YouTube" }
  ];

  return (
    <div className="flex items-center gap-8">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white/60 hover:text-white transition-all transform hover:scale-110"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;