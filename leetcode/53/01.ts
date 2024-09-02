function maxSubArray(nums: number[]): number {
    // 以 nums[i] 为结尾的「最大子数组和」为 dp[i]。
    const dp = new Array(nums.length).fill(-Number.MAX_SAFE_INTEGER);

    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    }

    console.log(dp);

    return Math.max(...dp);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const res = maxSubArray(nums);
console.log('res: ', res);
