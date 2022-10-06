function runningSum(nums: number[]): number[] {
    const preSumArray: number[] = new Array(nums.length);

    preSumArray[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        preSumArray[i] = preSumArray[i - 1] + nums[i];
    }

    return preSumArray;
}
