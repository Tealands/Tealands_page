import React from 'react';
import './App.css';
import Hero from './Components/Hero';

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center p-4 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('../../keep_out/BackScreen.jpg')` 
      }}
    >
      {/* 背景を少し暗くして文字を読みやすくするオーバーレイ */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default App;
