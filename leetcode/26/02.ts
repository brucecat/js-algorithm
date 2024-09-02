function removeDuplicates(nums: number[]): number {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            left++;

            nums[left] = nums[right]
        }

        right++;
    }

    return nums
}
