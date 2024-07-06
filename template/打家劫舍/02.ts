function rob(nums: number[]): number {
    const len = nums.length;
    if (len <= 1) return nums[0];

    // 两种情况
    // 要么选[1,n-1]区间
    // 要么选[2,n]区间

    const dp1 = new Array(len).fill(-1);
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);

    const dp2 = new Array(len).fill(-1);
    dp2[1] = nums[1];
    dp2[2] = Math.max(nums[1], nums[2]);

    // 计算闭区间 [start,end] 的最优结果
    const dpFunc = (start, end, memo) => {
        for (let i = start; i <= end; i++) {
            // 偷这间房
            const f1 = memo[i - 2] + nums[i];

            // 不偷这间房
            const f2 = memo[i - 1];

            memo[i] = Math.max(f1, f2);
        }

        return memo[end];
    };

    const res1 = dpFunc(0 + 2, len - 2, dp1);
    const res2 = dpFunc(1 + 2, len - 1, dp2);

    // 返回结果
    return Math.max(res1, res2);
}

const nums = [1, 2, 3, 1];
const res = rob(nums);
console.log('final res: ', res);
