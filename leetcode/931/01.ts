function minFallingPathSum(matrix: number[][]): number {
    if (matrix.length === 0) {
        return 0
    }
    const MAX = 100 * 100 + 1
    const m = matrix.length
    const n = matrix[0].length
    const dp = new Array(m + 1)
    dp[0] = new Array(n + 2).fill(0)
    for (let i = 1; i < dp.length; i++) {
        if (dp[i] === undefined) {
            dp[i] = new Array(n + 2).fill(MAX)
        }
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i - 1][j - 1]
        }
    }
    return Math.min(...dp[dp.length - 1])
};