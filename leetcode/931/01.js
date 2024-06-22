function minFallingPathSum(matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    var MAX = 100 * 100 + 1;
    var m = matrix.length;
    var n = matrix[0].length;
    var dp = new Array(m + 1);
    dp[0] = new Array(n + 2).fill(0);
    for (var i = 1; i < dp.length; i++) {
        if (dp[i] === undefined) {
            dp[i] = new Array(n + 2).fill(MAX);
        }
        for (var j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i - 1][j - 1];
        }
    }
    return Math.min.apply(Math, dp[dp.length - 1]);
}
;
