import React, { useContext } from 'react';
import HeaderPicture from './HeaderPicture.jsx';
import Repositories from './Repositories.jsx';
import { ScreenContext } from './ScreenContext';

const RepositoryScreen = () => {
    const { language } = useContext(ScreenContext);

    const title = language === 'ja' ? 'リポジトリ' : 'Repositories';

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <HeaderPicture title={title} />
            {/* 必要に応じて共通ヘッダーなどをここに追加 */}
            <div className="p-8 max-w-4xl mx-auto">
                <Repositories />
            </div>
        </div>
    );
};

export default RepositoryScreen;
