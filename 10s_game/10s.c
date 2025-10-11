#include <stdio.h>
#include <time.h>

// 10秒を計測する関数
void measure_10_seconds() {
    printf("Enterキーを押して計測を開始します。\n");
    getchar(); // ユーザーのEnter待ち

    clock_t start = clock();
    printf("10秒経ったと思ったらEnterキーを押してください。\n");
    getchar(); // ユーザーのEnter待ち

    clock_t end = clock();
    double elapsed = (double)(end - start) / CLOCKS_PER_SEC;

    printf("経過時間: %.2f 秒\n", elapsed);
    if (elapsed >= 9.5 && elapsed <= 10.5) {
        printf("ほぼ10秒です！\n");
    } else {
        printf("10秒との差: %.2f 秒\n", elapsed - 10.0);
    }
}

int main() {
    measure_10_seconds();
    return 0;
}