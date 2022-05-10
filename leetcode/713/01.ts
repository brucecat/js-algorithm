function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let left = 0, right = 0;

    // 当前的乘积
    let cur = 1
    let res = 0;

    // 特殊情况
    if (k <= 1) return 0;

    // slide window
    while (right < nums.length) {
        cur *= nums[right]

        while (cur >= k) {
            cur /= nums[left]
            left++
        }

        res += right - left + 1
        
        right++
    }
    return res
};
