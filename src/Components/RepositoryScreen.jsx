import React from 'react';
import HeaderPicture from './HeaderPicture.jsx';
import Repositories from './Repositories.jsx';

const RepositoryScreen = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <HeaderPicture title="Repositories" />
            {/* 必要に応じて共通ヘッダーなどをここに追加 */}
            <div className="p-8 max-w-4xl mx-auto">
                <Repositories />
            </div>
        </div>
    );
};

export default RepositoryScreen;
