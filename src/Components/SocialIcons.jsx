import React from 'react';
import { Github, X, Mail } from 'lucide-react';

const SocialIcons = () => {
  const icons = [
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <X size={24} />, href: "#", label: "X" },
    { icon: <Mail size={24} />, href: "#", label: "Email" },
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