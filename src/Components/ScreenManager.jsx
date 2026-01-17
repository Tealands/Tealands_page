import React, { useState, useEffect } from 'react';
import { ScreenContext } from './ScreenContext';
import App from '../App.jsx';
import Banners from './Banners.jsx';
import HeaderPicture from './HeaderPicture.jsx';
import SelfIntroductionScreen from './SelfIntroductionScreen.jsx';
import RepositoryScreen from './RepositoryScreen.jsx';

const ScreenManager = () => {
    console.log("ScreenManager rendered");
    const [currentScreen, setCurrentScreen] = useState('TITLE');

    const openTitleScreen = () => setCurrentScreen('TITLE');
    const openSelfIntroductionScreen = () => setCurrentScreen('SELF_INTRO');
    const openRepositoryScreen = () => setCurrentScreen('REPOSITORY');

    // Expose functions globally for calling from console or other non-react parts if needed,
    // or just to fulfill the "prepare functions" requirement visibly.
    useEffect(() => {
        window.openTitleScreen = openTitleScreen;
        window.openSelfIntroductionScreen = openSelfIntroductionScreen;
        window.openRepositoryScreen = openRepositoryScreen;

        // Cleanup
        return () => {
            delete window.openTitleScreen;
            delete window.openSelfIntroductionScreen;
            delete window.openRepositoryScreen;
        };
    }, []);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'TITLE':
                return (
                    <div className="min-h-screen bg-gray-900">
                        {/* ここでタイトルやサブタイトルを渡します */}
                        <HeaderPicture />
                        <div className="p-4">
                            <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto">
                                <div className="flex-1">
                                    <App />
                                </div>
                                <div className="w-full md:w-80 shrink-0 mt-8 md:mt-0">
                                    <div className="sticky top-4">
                                        <Banners />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'SELF_INTRO':
                return (
                    <div className="min-h-screen bg-gray-900">
                        {/* 必要に応じて共通ヘッダーなどをここに追加 */}
                        <SelfIntroductionScreen />
                        {/* テスト用の戻るボタン */}
                        <button
                            onClick={openTitleScreen}
                            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            タイトルへ戻る
                        </button>
                    </div>
                );
            case 'REPOSITORY':
                return (
                    <div className="min-h-screen bg-gray-900">
                        <RepositoryScreen />
                        {/* テスト用の戻るボタン */}
                        <button
                            onClick={openTitleScreen}
                            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            タイトルへ戻る
                        </button>
                    </div>
                );
            default:
                return <div>Unknown Screen</div>;
        }
    };

    return (
        <ScreenContext.Provider value={{ openTitleScreen, openSelfIntroductionScreen, openRepositoryScreen }}>
            {renderScreen()}
        </ScreenContext.Provider>
    );
};

export default ScreenManager;
