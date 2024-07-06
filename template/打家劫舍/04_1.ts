function findMinSumSubarray(nums, k) {
    if (nums.length < k) return []; // 如果数组长度小于k，无法选择k个数

    let n = nums.length;
    let dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(Infinity));

    // 初始化dp数组
    dp[0][1] = nums[0]; // 选择第一个数

    // 填充dp数组
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= Math.min(i + 1, k); j++) {
            // 不选择当前数
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1] + nums[i]);
            // 选择当前数，但需要满足不相邻的条件
            if (j > 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 1] + nums[i]);
            }
        }
    }

    // 回溯找到选择的k个数
    let result = [];
    for (let i = n - 1, count = k; count > 0; count--) {
        if (dp[i][k] !== dp[i - 1][k]) {
            result.unshift(nums[i]);
            i--;
        }
    }

    return result;
}

// 使用示例
const nums = [2, 7, 9, 3, 1, 5];
const k = 3;
console.log(findMinSumSubarray(nums, k)); // 输出选择的k个数，使得max最小
