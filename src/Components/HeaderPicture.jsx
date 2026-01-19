import React, { useContext } from 'react';
// 1. 画像をインポートします。パスはご自身のプロジェクト構成に合わせて調整してください。
// 例: このコンポーネントが src/Components/ にあり、画像が src/assets/ にある場合
import backScreenImage from '../assets/BackScreen.jpg';
import { ScreenContext } from './ScreenContext';

const HeaderPicture = ({ title, subtitle, children }) => {
  const { language, toggleLanguage } = useContext(ScreenContext);

  return (
    <header
      // 2. classNameを変更します。
      // グラデーション(bg-gradient-...)を削除し、画像の配置設定を追加します。
      className="w-full h-[60vh] md:h-[75vh] relative bg-cover bg-center bg-no-repeat"
      // 3. style属性で背景画像を設定します。
      style={{ backgroundImage: `url(${backScreenImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      {/* 言語切り替えボタン */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
        >
          {language === 'ja' ? 'English' : '日本語'}
        </button>
      </div>
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

export default HeaderPicture;