import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const ActionButtons = () => {
  const context = useContext(ScreenContext);
  const { openRelatedPageScreen, openRepositoryScreen } = context || {};

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      {/* メインボタン：アイコンを削除し、テキストのみに変更 */}
      <button
        onClick={() => {
          if (openRelatedPageScreen) openRelatedPageScreen();
        }}
        className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-2xl transition-all active:scale-95 flex items-center justify-center"
      >
        Related Sites
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* サブボタン：こちらは変更なし */}
      <button
        onClick={() => {
          if (openRepositoryScreen) openRepositoryScreen();
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