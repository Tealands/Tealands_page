// 100未満の素数リスト
const primesfrom20to100 = [
     23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 39, 97,
];
const primesUnder20 = [
2, 3, 5, 7, 11, 13, 17, 19,
]

// HTML要素を取得
const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const factorInput = document.getElementById("factorInput");

let targetNumber;
let correctFactors;

// ランダムな3つの素数を選び、その積を表示する関数
function generateQuestion() {
    // 3つのランダムな素数を選ぶ
    const factors = [];
    while (factors.length < 2) {
        const randomPrime = primesfrom20to100[Math.floor(Math.random() * primesfrom20to100.length)];
        if (!factors.includes(randomPrime)) {
            factors.push(randomPrime);
        }
    } 
    const randomPrime = primesUnder20[Math.floor(Math.random() * primesUnder20.length)];
    if (!factors.includes(randomPrime)) {
        factors.push(randomPrime);
    }

    // 3つの素数の積を計算
    targetNumber = factors.reduce((acc, val) => acc * val, 1);

    // 正解となる因数の組み合わせを保存
    correctFactors = factors.sort((a, b) => a - b);

    // 問題を表示
    questionElement.innerText = `因数分解してください: ${targetNumber}`;
    resultElement.innerText = "";
    factorInput.value = "";
}

// 答えをチェックする関数
function checkAnswer() {
    // ユーザーの入力を取得し、数値に変換
    const userFactor = parseInt(factorInput.value);

    // 入力が数値かつ正しい素因数であるかを確認
    if (isNaN(userFactor)) {
        resultElement.innerText = "素因数を入力してください。";
        return;
    }
    if (targetNumber % userFactor !== 0 || !correctFactors.includes(userFactor)) {
        resultElement.innerText = `不正解です。${userFactor}は素因数ではありません。`;
        resultElement.style.color = "red";
        return;
    }

    // 正解の場合
    targetNumber /= userFactor;
    correctFactors.splice(correctFactors.indexOf(userFactor), 1);
    resultElement.innerText = `${userFactor}は正解です！次は ${targetNumber} を因数分解してください。`;
    resultElement.style.color = "green";
    factorInput.value = "";

    // 全ての素因数が答えられた場合
    if (targetNumber === 1) {
        resultElement.innerText = "おめでとうございます！すべての因数を正しく答えました！";
        resultElement.style.color = "blue";
    }
}

// ページ読み込み時に最初の問題を生成
window.onload = generateQuestion;
