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
function moveZeroes(nums) {
    // 去除nums中的所有0
    // 返回去除0之后的数组长度
    var p = removeElement(nums, 0);
    // 将p之后的所有元素赋值为0
    for (; p < nums.length; p++) {
        nums[p] = 0;
    }
}
;
