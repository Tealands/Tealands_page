import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      {/* ステータスバッジ（半透明のガラス風） */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
        <span className="mr-2">✨</span>
        Available for opportunities
      </div>

      {/* メインタイトル（白で視認性を確保） */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          ここは<span className="text-white/90">[しげるのぺージ]</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          Software Developer & Creator
        </p>
      </div>

      {/* 自己紹介文（背景に埋もれないよう影を少し追加） */}
      <p className="max-w-2xl text-lg text-white/90 leading-relaxed px-4 drop-shadow">
        I build elegant solutions to complex problems. Passionate about clean code, 
        beautiful interfaces, and creating tools that make a difference.
      </p>

      {/* アクションボタン */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        {/* メインボタン：夕焼けの反対色である鮮やかな青系で目立たせる */}
        <button
          className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-2xl transition-all active:scale-95 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Get in Touch
        </button>
        
        {/* サブボタン：白の半透明（グラスモーフィズム） */}
        <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
          View Projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>

      <div className="pt-12">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;