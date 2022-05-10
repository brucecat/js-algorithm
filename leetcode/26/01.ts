
function removeDuplicates(nums: number[]): number {
    if (nums.length == 0) {
        return 0;
    }

    let slow = 0, fast = 0;

    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++;

            // 维护nums[0, slow]无重复
            nums[slow] = nums[fast]
        }
        fast++
    }

    // 数组长度为索引+1
    return slow + 1
};