function canPartitionKSubsets(nums: number[], k: number): boolean {
    const sum = nums.reduce((total, cur) => total + cur, 0);

    if (sum % k !== 0) return false;

    // 可装载重量为sum/2的背包，恰好装满
    const len = nums.length;

    const dp = new Array(len + 1).fill(0).map(() => new Array(sum / k + 1).fill(false));

    // 基础情况
    for (let i = 0; i <= len; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= sum / k; j++) {
            const curWeight = nums[i - 1];
            if (curWeight > j) {
                // 根本放不下
                dp[i][j] = dp[i - 1][j];
            } else {
                // 放进背包
                const f1 = dp[i - 1][j - curWeight];

                // 不放进背包
                const f2 = dp[i - 1][j];

                // 是否有一种方案可行
                dp[i][j] = f1 || f2;
            }
        }
    }

    return dp[len][sum / k];
}

// 不行