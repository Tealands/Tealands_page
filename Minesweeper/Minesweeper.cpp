#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <iomanip>
#include <string>
#include <algorithm>
#include <limits> // numeric_limits for input handling

using namespace std;

// 定数定義
const int SIZE = 7;
enum class CellState { CLOSED, OPENED, FLAGGED };
const char MINE_CHAR = '*';
const char CLOSED_CHAR = '#';
const char FLAGGED_CHAR = 'F';

// セル（マス）の情報を保持する構造体
struct Cell {
    bool hasMine = false;
    int neighborMines = 0; // 周囲の地雷数
    CellState state = CellState::CLOSED;
};

// マインスイーパーの盤面を管理するクラス
class Board {
private:
    vector<vector<Cell>> grid;
    int totalMines;
    int safeCellsToOpen; // 開くべき安全なマスの数
    int minesHitCount = 0; // 新規: 地雷を踏んだ回数
    int flagsCount = 0;    // 新規: 現在設置されている旗の数

    // 周囲の地雷数を計算する
    void calculateNeighborMines(int r, int c) {
        if (grid[r][c].hasMine) return;

        int count = 0;
        for (int dr = -1; dr <= 1; ++dr) {
            for (int dc = -1; dc <= 1; ++dc) {
                if (dr == 0 && dc == 0) continue;
                int nr = r + dr;
                int nc = c + dc;

                if (nr >= 0 && nr < SIZE && nc >= 0 && nc < SIZE && grid[nr][nc].hasMine) {
                    count++;
                }
            }
        }
        grid[r][c].neighborMines = count;
    }

    // 周囲のマスを再帰的に開く (0のマスを開けたとき)
    void recursiveOpen(int r, int c) {
        if (r < 0 || r >= SIZE || c < 0 || c >= SIZE || grid[r][c].state != CellState::CLOSED) {
            return;
        }

        grid[r][c].state = CellState::OPENED;
        safeCellsToOpen--; // 開いたマスの数を減らす

        // 旗が立っていたら、旗の数を減らす
        if (grid[r][c].state == CellState::FLAGGED) {
            flagsCount--;
        }

        if (grid[r][c].neighborMines == 0) {
            for (int dr = -1; dr <= 1; ++dr) {
                for (int dc = -1; dc <= 1; ++dc) {
                    // 自分自身を除外
                    if (dr == 0 && dc == 0) continue;
                    recursiveOpen(r + dr, c + dc);
                }
            }
        }
    }

public:
    Board(int mines) : totalMines(mines) {
        grid.assign(SIZE, vector<Cell>(SIZE));
        safeCellsToOpen = SIZE * SIZE - mines;
        minesHitCount = 0;
        flagsCount = 0;
        srand(time(0));
    }

    // 地雷を配置し、周囲の地雷数を計算する
    void initializeBoard(int initialR, int initialC) {
        // 最初の操作マスには地雷を置かないようにする
        int placedMines = 0;
        while (placedMines < totalMines) {
            int r = rand() % SIZE;
            int c = rand() % SIZE;
            if (!grid[r][c].hasMine && (r != initialR || c != initialC)) {
                grid[r][c].hasMine = true;
                placedMines++;
            }
        }

        // 周囲の地雷数を計算
        for (int r = 0; r < SIZE; ++r) {
            for (int c = 0; c < SIZE; ++c) {
                calculateNeighborMines(r, c);
            }
        }
    }

    // 盤面と統計情報を表示する
    void display(bool showMines = false) const {
        // 新規: 統計情報の表示
        cout << "🚩 残り地雷数: " << totalMines - flagsCount 
             << " / 旗の数: " << flagsCount 
             << " / 💥 踏んだ回数: " << minesHitCount << endl;
        cout << "---------------------------------" << endl;
        
        cout << "  ";
        for (int c = 0; c < SIZE; ++c) {
            cout << (char)('A' + c) << " "; // A B C ...
        }
        cout << endl;

        for (int r = 0; r < SIZE; ++r) {
            cout << r + 1 << " "; // 1 2 3 ...

            for (int c = 0; c < SIZE; ++c) {
                const Cell& cell = grid[r][c];

                if (cell.state == CellState::OPENED) {
                    if (cell.hasMine) {
                        cout << MINE_CHAR << " "; // 地雷を踏んだ場合
                    } else if (cell.neighborMines > 0) {
                        cout << cell.neighborMines << " ";
                    } else {
                        cout << "  "; // 0の場合は空白
                    }
                } else if (cell.state == CellState::FLAGGED) {
                    cout << FLAGGED_CHAR << " ";
                } else { // CLOSED
                    if (showMines && cell.hasMine) {
                        cout << MINE_CHAR << " "; // ゲームオーバー時に地雷を表示
                    } else {
                        cout << CLOSED_CHAR << " ";
                    }
                }
            }
            cout << endl;
        }
    }

    // マスを開ける操作
    void openCell(int r, int c, bool firstMove) {
        if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return;

        // 最初の操作の場合は地雷を配置
        if (firstMove) {
            initializeBoard(r, c);
        }

        Cell& cell = grid[r][c];

        if (cell.state == CellState::OPENED) {
            cout << "既に開かれているマスです。" << endl;
            return;
        } 
        
        if (cell.state == CellState::FLAGGED) {
            cout << "旗が立てられています。旗を解除してから開いてください。" << endl;
            return;
        }

        if (cell.hasMine) {
            // 地雷を踏んだが、ゲームは続行
            cell.state = CellState::OPENED; 
            minesHitCount++; // 新規: カウントを増やす
            cout << "\n💥 地雷を踏みました！しかしゲームは続行します。💥" << endl;
            return;
        }

        // 周囲が0の場合は再帰的に開く
        recursiveOpen(r, c);
    }

    // 旗を立てる/解除する操作
    void toggleFlag(int r, int c) {
        if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return;

        Cell& cell = grid[r][c];

        if (cell.state == CellState::OPENED) {
            cout << "既に開かれたマスには旗を立てられません。" << endl;
            return;
        }

        if (cell.state == CellState::CLOSED) {
            cell.state = CellState::FLAGGED;
            flagsCount++; // 新規: カウントを増やす
            cout << "旗を立てました。" << endl;
        } else if (cell.state == CellState::FLAGGED) {
            cell.state = CellState::CLOSED;
            flagsCount--; // 新規: カウントを減らす
            cout << "旗を解除しました。" << endl;
        }
    }

    // ゲームクリアの判定
    bool checkWin() const {
        return safeCellsToOpen == 0;
    }
};

// --- 関数による画面遷移管理 ---

// ルール説明画面
void showRules() {
    cout << "\n======================== ルール説明 ========================" << endl;
    cout << "7x7の盤面のうちいくつかの地雷が隠れています。" << endl;
    cout << "開いたときに表示されている数は、そのマスに隣接している地雷の数です。" << endl;
    cout << "もし周囲に地雷が一つもない場合は連鎖オープンといい周囲が全て公開されます。" << endl;
    cout << "例えば「A5 O」を入力して4と表示されたら、それは縦横斜めの隣接する8マスのうち4つに地雷が隠れているということです。" << endl;
    cout << "地雷を踏んだ回数がなるべく少なくなるように、すべての安全マスを開いてください。" << endl;
    cout << "------------------------------------------------------------" << endl;
    cout << "O: Open (開ける) / F: Flag (旗を立てる)" << endl;
    cout << "============================================================\n" << endl;
    cout << "ENTERキーを押すとホーム画面に戻ります...";
    cin.ignore(numeric_limits<streamsize>::max(), '\n'); // ENTER待ち
    cin.get();
}

// ホーム画面
void showHome(int& selectedMines) {
    int choice = 0;
    while (choice < 1 || choice > 5) { // 選択肢を5まで増やす
        cout << "============= マインスイーパー =============" << endl;
        cout << "1. 簡単 (地雷 7個)" << endl;
        cout << "2. 普通 (地雷 14個)" << endl;
        cout << "3. 難しい (地雷 21個)" << endl;
        cout << "4. ルール説明" << endl; 
        cout << "5. 終了" << endl;
        cout << "選択してください (1-5): ";

        if (!(cin >> choice)) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            continue;
        }

        switch (choice) {
            case 1: selectedMines = 7; return;
            case 2: selectedMines = 14; return;
            case 3: selectedMines = 21; return;
            case 4: showRules(); return; // ルール説明画面へ
            case 5: exit(0);
            default: cout << "無効な入力です。1から5の数字を入力してください。" << endl;
        }
    }
}

// ゲーム画面（メインループ）
void runGame(int mines,int MinesHitCount) {
    Board board(mines);
    bool isGameWin = false;
    bool firstMove = true;

    cout << "============= ゲーム開始 (地雷: " << mines << "個) =============" << endl;

    while (!isGameWin) {
        cout << "\n--- 現在の盤面 ---" << endl;
        board.display();
        cout << "------------------" << endl;

        string inputCoord, inputOperation;
        cout << "操作を入力してください (例: A1 O, C4 F): ";
        
        // 入力処理の改良 (文字列全体を読み込む)
        cin.ignore(numeric_limits<streamsize>::max(), '\n'); 
        if (!(cin >> inputCoord >> inputOperation)) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "不正な入力形式です。" << endl;
            continue;
        }

        // 座標の解析 (例: A1 -> r=0, c=0)
        if (inputCoord.length() != 2) {
            cout << "座標の形式が不正です (例: A1)。" << endl;
            continue;
        }
        int c = toupper(inputCoord[0]) - 'A';
        int r = inputCoord[1] - '1';

        // 座標の範囲チェック
        if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) {
            cout << "座標が盤面の範囲外です (A1-G7)。" << endl;
            continue;
        }

        // 操作の実行
        char op = toupper(inputOperation[0]);
        if (op == 'O') {
            board.openCell(r, c, firstMove);
            firstMove = false;
            if (board.checkWin()) {
                isGameWin = true;
            }
        } else if (op == 'F') {
            board.toggleFlag(r, c);
        } else {
            cout << "無効な操作です。O (Open) または F (Flag) を入力してください。" << endl;
        }
    }

    // ゲームクリア時の処理
    cout << "\n==============================================" << endl;
    if (isGameWin) {
        cout << "!!! CONGRATULATIONS !!!" << endl;
        cout << "全ての安全なマスを開けました！ゲームクリアです！" << endl;
        cout << "--- 最終盤面 ---" << endl;
        board.display();
    }
    cout << "==============================================\n" << endl;
    cout << "ホーム画面に戻ります..." << endl;
}

// メイン関数 (画面遷移の制御)
int main() {
    // コンソールクリア用の仮コード
    auto clearConsole = []() {
        #ifdef _WIN32
            system("cls");
        #else
            // UNIX/Linux/macOS
            cout << "\033[2J\033[1;1H"; 
            // system("clear"); 
        #endif
    };
    int MinesHitCount;
    while (true) {
        clearConsole();
        int selectedMines = 0;
        showHome(selectedMines); // 難易度を選択（またはルール説明へ）

        if (selectedMines > 0) {
            clearConsole();
            runGame(selectedMines,MinesHitCount); // ゲーム実行
            cout << "続行するにはENTERキーを押してください...";
            cin.get();
        }
    }

    return 0;
}