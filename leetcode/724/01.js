function pivotIndex(nums) {
    var preSumArray = getPreSumArray(nums);
    var checkFunc = function (index) {
        // 计算左边
        var leftSum = index > 0 ? preSumArray[index - 1] : 0;
        // 计算右边
        var rightSum = index < nums.length - 1 ? preSumArray[nums.length - 1] - preSumArray[index] : 0;
        return leftSum == rightSum;
    };
    for (var i = 0; i < nums.length; i++) {
        if (checkFunc(i)) {
            return i;
        }
    }
    return -1;
}
function getPreSumArray(nums) {
    var preSumArray = new Array(nums.length);
    preSumArray[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        preSumArray[i] = preSumArray[i - 1] + nums[i];
    }
    return preSumArray;
}
