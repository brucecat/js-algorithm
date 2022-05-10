function subarraySum(nums: number[], k: number): number {
    let len = nums.length

    // 维护一个前缀和数组
    let preSum: number[] = new Array(len + 1);
    preSum[0] = 0
    for (let i = 1; i < len + 1; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
    }

    let res: number = 0

    // 穷举所有子数组
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            // ⼦数组 nums[j,i-1] 的元素和
            if (preSum[i] - preSum[j] == k)
                res++
        }
    }

    return res
};

// 优化的思路是：我直接记录下有⼏个preSum[j]和preSum[i] - k相等，
// 直接更新结果，就避免了内层 的for循环。
// 我们可以⽤哈希表，在记录前缀和的同时记录该前缀和出现的次数


function subarraySum01(nums: number[], k: number): number {
    let len = nums.length

    // map：前缀和 -> 该前缀和出 的次数
    let preSum: Map<number, number> = new Map();

    preSum.set(0, 1)

    let res = 0, sum0_i = 0
    for (let i = 0; i < len; i++) {
        sum0_i += nums[i]

        // 我们想找的前缀和 nums[0..j]
        let sum0_j = sum0_i - k

        // 如前⾯有目标前缀和，则直接更新答案
        if (preSum.has(sum0_j)) {
            res += preSum.get(sum0_j)
        }

        // 把前缀和nums[0..i]加入记录出现次数
        preSum.set(sum0_i, (preSum.get(sum0_i) ?? 0) + 1)
    }

    return res

};

 