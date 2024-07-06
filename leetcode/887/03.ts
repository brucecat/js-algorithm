/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
    // m 最多不会超过 N 次（线性扫描）
    let dp = [];
    for (let i = 0; i <= K; i++) {
        dp.push(new Array(N + 1).fill(0));
    }
    // base case:
    // dp[0][..] = 0
    // dp[..][0] = 0
    // JavaScript数组默认初始化为0
    let m = 0;
    while (dp[K][m] < N) {
        m++;
        for (let k = 1; k <= K; k++) {
            dp[k][m] = dp[k][m - 1] + dp[k - 1][m - 1] + 1;
        }
    }
    return m;
};
