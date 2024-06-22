function removeElement(nums, val) {
    if (nums.length == 0) {
        return 0;
    }
    var slow = 0, fast = 0;
    while (fast <= nums.length - 1) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    // 数组长度为索引+1
    return slow;
}
;
