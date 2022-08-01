

function minDistance(word1: string, word2: string): number {
    const m = word1.length, n = word2.length;

    // 初始化一个数组
    const dp = new Array(Math.max(m, n) + 1)

    // dp[0...n]的初始值
    for (let j = 0; j <= n; j++)
        dp[j] = j;

    // dp[j] = min(dp[j-1], pre, dp[j]) + 1
    for (let i = 1; i <= m; i++) {
        let temp = dp[0];
        // 相当于初始化
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            // pre 相当于之前的 dp[i-1][j-1]
            let pre = temp;
            temp = dp[j];
            // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
            if (word1[i - 1] === word2[j - 1]) {
                dp[j] = pre;
            } else {
                dp[j] = Math.min(Math.min(dp[j - 1], pre), dp[j]) + 1;
            }
        }
    }

    return dp[n];


};