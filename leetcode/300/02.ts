function lengthOfLIS(nums: number[]): number {
    const len = nums.length;

    // dp[i]表示以i为结尾的数字的最大递增子序列
    const dp = new Array(len).fill(1);

    // 从左往右算
    // 目前为止的最大值
    let curMax = 1;
    for (let i = 0; i <= len - 1; i++) {
        for (let j = i - 1; j >= 0; j--) {
            // 寻找【0,j】中比nums[i]小的数
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                curMax = Math.max(dp[i], curMax);
                console.log('curMax: ', curMax);
            }
        }
    }

    console.log('dp: ', dp);
    return Math.max(...dp);
}

const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
const res = lengthOfLIS(nums);
console.log('res: ', res);
