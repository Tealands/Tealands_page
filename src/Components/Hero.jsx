import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import ActionButtons from './ActionButtons';
import snowManIcon from '../assets/SnowMan1.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      {/* ステータスバッジ（半透明のガラス風） */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
        <span className="mr-2">✨</span>
        Hello World !
      </div>

      {/* メインタイトル（白で視認性を確保） */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          <span className="text-white/90">Shiger's website</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          Software Developer & Game Creator
        </p>
      </div>

      {/*アイコン画像*/}
      <div className="relative">
        <img 
          src={snowManIcon} 
          alt="Shiger Icon" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-xl"
        />
      </div>

      {/* 自己紹介文（背景に埋もれないよう影を少し追加） */}
      <p className="max-w-2xl text-lg text-white/90 leading-relaxed px-4 drop-shadow">
        I am Shiger, a university student passionate about software development and game creation.
        I enjoy exploring new technologies and turning ideas into reality through code.
        Welcome to my personal website where I share my projects and experiences.
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