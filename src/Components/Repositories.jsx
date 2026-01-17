import React from 'react';


const RepositoriesScreen = () => {
    return (
        <>
            <div className="flex-1 py-12">
                <div className="w-full max-w-4xl mx-auto px-4">
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://quiz.game.teams.maximum.vc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Maximum Quiz
                            </a>
                            <br></br>
                            <span className="text-gray-400">私たちがチームで開発したプログラミングに関するクイズサイトです。</span>
                        </li>
                        <li>
                            <a
                                href="Repositries/Task_Maneger/Task.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                ソート付きTodo
                            </a>
                            <br></br>
                            <span className="text-gray-400">私が個人で開発したソート機能付きTodoサイトです。<br></br>
                                ローカルファイルにデータを保存し、そこからデータを復元することもできます。</span>
                        </li>
                        <li>
                            <a
                                href="/Repositories/NumberPlace/NumberPlace.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline text-xl"
                            >
                                Number Place
                            </a>
                            <br></br>
                            <span className="text-gray-400">ナンプレ（数独）ゲームです。クリアすると...</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default RepositoriesScreen;
