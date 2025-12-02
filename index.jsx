
function App() {
  return (
    <>
      <header>
        <h1>Tealand</h1>
        <nav>
          <ul>
            <li><a href="#portfolio">ポートフォリオ</a></li>
            <li><a href="#for_interviewer">採用担当者の方へ</a></li>
            <li><a href="#related_sites">関連サイト</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="portfolio">
          <h2>ポートフォリオ</h2>
          <ul>
            <li><a href="http://quiz.game.teams.maximum.vc/">サークルのゲーム開発班で作ったサイト</a></li>
            <li><a href="MKDIR/MKDIR.html">ディレクトリ自動生成ツール</a></li>
            <li><a href="Task_Maneger/Task.html">課題管理ツール</a></li>
            <li><a href="Tea-time/index_main.html">個人で作ったゲームサイト</a></li>
          </ul>
        </section>

        <section id="qualifications">
          <h2>保有資格一覧</h2>
          <ul>
            <li>数検2級</li>
            <li>英検2級</li>
            <li>普通自動車免許</li>
            <li>基本情報技術者(挑戦予定)</li>
            <li>応用情報技術者(挑戦予定)</li>
          </ul>
        </section>

        <section id="for_interviewer">
          <h2>面接官の方へ</h2>
          <p><a href="Protect.html">採用担当者用サイト</a>（パスワードが必要です）</p>
        </section>

        <section id="related_sites">
          <h2>関連サイト</h2>
          <a href="https://maximum.vc/">Maximum公式サイト</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Tealand自己紹介ページ</p>
      </footer>
    </>
  );
}

export default App;
