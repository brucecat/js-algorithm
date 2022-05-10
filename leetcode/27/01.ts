function removeElement(nums: number[], val: number): number {
    if (nums.length == 0) {
        return 0;
    }

    let slow = 0, fast = 0;

    while (fast <= nums.length - 1) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    // 数组长度为索引+1
    return slow
};