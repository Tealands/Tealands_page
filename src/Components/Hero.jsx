import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import ActionButtons from './ActionButtons';

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
          Software Developer & Game Creator
        </p>
      </div>

      {/* 自己紹介文（背景に埋もれないよう影を少し追加） */}
      <p className="max-w-2xl text-lg text-white/90 leading-relaxed px-4 drop-shadow">
        I build elegant solutions to complex problems. Passionate about clean code, 
        beautiful interfaces, and creating tools that make a difference.
      </p>

      {/* アクションボタン */}
      <ActionButtons />

      <div className="pt-12">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;