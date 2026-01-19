import React from 'react';
import { Github, X, Instagram, Youtube } from 'lucide-react';

const SocialIcons = () => {
  const icons = [
    { icon: <Github size={24} />, href: "https://github.com/Tealands", label: "GitHub" },
    { icon: <X size={24} />, href: "https://x.com/yeah_hi0525", label: "X" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/catapult0525shiger/", label: "Instagram" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/channel/UCkm6Z3ZjDEJBW0R_XNRzHug", label: "YouTube" }
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