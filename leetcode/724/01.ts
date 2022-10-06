function pivotIndex(nums: number[]): number {
    const preSumArray = getPreSumArray(nums);

    const checkFunc = (index) => {
        // 计算左边
        const leftSum = index > 0 ? preSumArray[index - 1] : 0;

        // 计算右边
        const rightSum = index < nums.length - 1 ? preSumArray[nums.length - 1] - preSumArray[index] : 0;

        return leftSum == rightSum;
    };

    for (let i = 0; i < nums.length; i++) {
        if (checkFunc(i)) {
            return i;
        }
    }

    return -1;
}

function getPreSumArray(nums: number[]): number[] {
    const preSumArray: number[] = new Array(nums.length);

    preSumArray[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        preSumArray[i] = preSumArray[i - 1] + nums[i];
    }

    return preSumArray;
}
