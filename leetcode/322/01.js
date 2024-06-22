function coinChange(coins, amount) {
    // 数组大小为 amount + 1，初始值也为 amount + 1
    var dp = new Array(amount + 1);
    dp.fill(amount + 1, 0, amount + 1);
    // base case
    dp[0] = 0;
    // 外层 for 循环在遍历所有状态的所有取值
    for (var i = 0; i < dp.length; i++) {
        // 内层 for 循环在求所有选择的最小值
        for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
            var coin = coins_1[_i];
            // 子问题无解，跳过
            if (i - coin < 0)
                continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount];
}
;
