function runningSum(nums) {
    var preSumArray = new Array(nums.length);
    preSumArray[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        preSumArray[i] = preSumArray[i - 1] + nums[i];
    }
    return preSumArray;
}
