function numSubarrayProductLessThanK(nums, k) {
    var left = 0, right = 0;
    // 当前的乘积
    var cur = 1;
    var res = 0;
    // 特殊情况
    if (k <= 1)
        return 0;
    // slide window
    while (right < nums.length) {
        cur *= nums[right];
        while (cur >= k) {
            cur /= nums[left];
            left++;
        }
        res += right - left + 1;
        right++;
    }
    return res;
}
;
