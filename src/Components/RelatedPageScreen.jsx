import React, { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const RelatedPageScreen = () => {
    const { language } = useContext(ScreenContext);

    const title = language === 'ja' ? '関連リンク' : 'Related Links';

    const getText = (key) => {
        const texts = {
            ja: {
                saitamaUniv: '埼玉大学ホームページ',
                saitamaDesc: '埼玉大学は私の大学であり、近年ではIT(情報技術)教育にも力を入れております。',
                maximumHome: 'Maximumホームページ',
                maximumDesc: 'Maximumは私が所属するプログラミングサークルで、競技プログラミングやwebを使った開発を行います。',
                maximumX: 'MaximumのX（旧Twitter）',
                maximumXDesc: 'Maximumの公式Xアカウントです。サークルの活動内容やイベント情報などを発信しています。',
                SGPHP: 'SGPホームページ',
                SGPHPDesc: 'SGPは私の所属するもう一つのゲーム開発サークルで、Unityを使ったゲーム制作の勉強をしています。',
                YouthBaddy: 'Youth Baddyについて(Note)',
                YouthBaddyDesc: 'Youth Baddyは私が参加している大学生向けのキャリアサークルです。OB・OG訪問や企業研究会などを通じて、将来のキャリア形成を考える活動をしています。',
            },
            en: {
                saitamaUniv: 'Saitama University Homepage',
                saitamaDesc: 'Saitama University is my university, and in recent years, it has been focusing on IT (Information Technology) education.',
                maximumHome: 'Maximum Homepage',
                maximumDesc: 'Maximum is the programming club I belong to, where we do competitive programming and web development.',
                maximumX: 'Maximum\'s X (formerly Twitter)',
                maximumXDesc: 'This is Maximum\'s official X account. We post about club activities and event information.',
                SGPHP: 'SGP Homepage',
                SGPHPDesc: 'SGP is also the club I belong to, where we study game development with Unity.',
                YouthBaddy: 'About Youth Baddy(Note)',
                YouthBaddyDesc: 'Youth Baddy is a career circle for university students that I participate in. Through OB/OG visits and company research sessions, we engage in activities to think about future career development.',
            }
        };
        return texts[language][key];
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="w-full h-[60vh] md:h-[75vh] relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
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
                                {getText('saitamaUniv')}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('saitamaDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://maximum.vc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {getText('maximumHome')}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('maximumDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://x.com/Maximum03400346"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {getText('maximumX')}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('maximumXDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://saitamasgp.wixsite.com/sgp-homepage/single-post/sgp%E3%81%AE%E7%B4%B9%E4%BB%8B"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {getText('SGPHP')}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('SGPHPDesc')}</span>
                        </li>
                        <li>
                            <a
                                href="https://note.com/su_careerbuddy/n/n76383de997ae"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                {getText('YouthBaddy')}
                            </a>
                            <br></br>
                            <span className="text-gray-400">{getText('YouthBaddyDesc')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RelatedPageScreen;
