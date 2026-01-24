import React from 'react';
import './App.css';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="flex flex-col items-center relative">
      <Hero />
      <main className="relative z-10 w-full max-w-4xl mx-auto py-12">
      </main>
    </div>
  );
}

export default App;