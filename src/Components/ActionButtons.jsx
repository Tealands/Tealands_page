import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const ActionButtons = () => {
  const context = useContext(ScreenContext);
  console.log("ActionButtons Context:", context);
  const { openSelfIntroductionScreen, openRepositoryScreen } = context || {};

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      {/* メインボタン：アイコンを削除し、テキストのみに変更 */}
      <button
        onClick={() => {
          console.log("Introduce clicked");
          if (openSelfIntroductionScreen) openSelfIntroductionScreen();
          else console.error("openSelfIntroductionScreen is missing");
        }}
        className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-2xl transition-all active:scale-95 flex items-center justify-center"
      >
        Introduce
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* サブボタン：こちらは変更なし */}
      <button
        onClick={() => {
          console.log("Repository clicked");
          if (openRepositoryScreen) openRepositoryScreen();
          else console.error("openRepositoryScreen is missing");
        }}
        className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold transition-all flex items-center gap-2"
      >
        View Repositories
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;