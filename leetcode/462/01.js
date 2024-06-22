var minMoves2 = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    var n = nums.length, ret = 0, x = nums[Math.floor(n / 2)];
    for (var i = 0; i < n; i++) {
        ret += Math.abs(nums[i] - x);
    }
    return ret;
};
