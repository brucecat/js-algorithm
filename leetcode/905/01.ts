function sortArrayByParity(nums: number[]): number[] {
    if (nums.length < 2) {
        return nums
    }

    let right = nums.length - 1, left = 0;

    // 左右指针
    while (right > left) {
        if (nums[right] % 2 == 0) {
            // 如果是偶数，就换到数组前端

            // 从左到右找到左边第一个奇数
            while (nums[left] % 2 == 0) {
                left++
            }

            if (left > right) break
            [nums[left], nums[right]] = [nums[right], nums[left]]
        }

        // 从右向左找第一个偶数
        right--
    }

    return nums

};
function sortArrayByParity01(nums: number[]): number[] {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        // 找奇数
        while (left < right && nums[left] % 2 == 0) left++;
        // 找偶数
        while (left < right && nums[right] % 2 == 1) right--;

        [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    return nums;
}
