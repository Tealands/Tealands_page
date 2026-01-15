import React from 'react';

const HeaderPicture = ({ title, subtitle, children }) => {
  return (
    <header
      className="w-full h-[60vh] md:h-[75vh] bg-gradient-to-br from-blue-900 to-purple-900 relative"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="space-y-4">
          {title && (
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80 font-light">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;