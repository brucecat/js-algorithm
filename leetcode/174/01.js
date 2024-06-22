function calculateMinimumHP(grid) {
    var m = grid.length;
    var n = grid[0].length;
    // 备忘录中都初始化为 -1
    var memo = new Array(m).fill(0).map(function (item) {
        return new Array(n).fill(-1);
    });
    /* 定义：从 (i, j) 到达右下角，需要的初始血量至少是多少 */
    var dp = function (i, j) {
        // base case
        if (i == m - 1 && j == n - 1) {
            return grid[i][j] >= 0 ? 1 : -grid[i][j] + 1;
        }
        if (i == m || j == n) {
            return Number.MAX_VALUE;
        }
        // 避免重复计算
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        // 状态转移逻辑
        var res = Math.min(dp(i, j + 1), dp(i + 1, j)) - grid[i][j];
        // 骑士的生命值至少为 1
        memo[i][j] = res <= 0 ? 1 : res;
        return memo[i][j];
    };
    return dp(0, 0);
}
;
