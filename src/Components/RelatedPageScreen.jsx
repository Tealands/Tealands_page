import React from 'react';
import HeaderPicture from './HeaderPicture.jsx';

const RelatedPageScreen = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <HeaderPicture title="Related Links" />
            <div className="flex-1 py-12">
                <div className="w-full max-w-4xl mx-auto px-4">
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://maximum.vc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                埼玉大学ホームページ
                            </a>
                            <br></br>
                            <span className="text-gray-400">埼玉大学は私の大学であり、近年ではIT(情報技術)教育にも力を入れております。</span>
                        </li>
                        <li>
                            <a
                                href="https://maximum.vc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Maximumホームページ
                            </a>
                            <br></br>
                            <span className="text-gray-400">Maximumは私が所属するプログラミングサークルで、<br></br>
                                競技プログラミングやwebを使った開発を行います。</span>
                        </li>
                        <li>
                            <a
                                href="https://x.com/Maximum03400346"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                MaximumのX（旧Twitter）
                            </a>
                            <br></br>
                            <span className="text-gray-400">Maximumの公式Xアカウントです。<br></br>
                                サークルの活動内容やイベント情報などを発信しています。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RelatedPageScreen;
