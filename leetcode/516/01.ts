function longestPalindromeSubseq(s: string): number {
    const len = s.length;
    // dp[i][j] 的定义： s[i,j]中，最长回文子序列长度

    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

    for (let i = 0; i <= len - 1; i++) {
        dp[i][i] = 1;
    }

    // 从最后一行开始向上算
    for (let i = len - 2; i >= 0; i--) {
        // 从左往右算
        for (let j = i + 1; j <= len - 1; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    console.log('dp: ', dp);

    return dp[0][len - 1];
}

const s = 'cbbd';
const res = longestPalindromeSubseq(s);
console.log('res: ', res);
