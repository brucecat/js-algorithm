function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreatArr = getNextGreat(nums2);

    const indexMap = new Map();
    for (let i = 0; i < nums2.length; i++) {
        indexMap.set(nums2[i], i);
    }

    const res = nums1.map((i) => {
        const nums2Index = indexMap.get(i);
        const nextGreatNum2Index = nextGreatArr[nums2Index];

        if (nextGreatNum2Index === -1) {
            return -1;
        }
        return nums2[nextGreatNum2Index];
    });
    return res;
}

const getNextGreat = (nums) => {
    const resultArr = new Array(nums.length).fill(-1);

    // 维护nums2的单调栈
    const stack = [];

    // 初始化
    stack.push(0);

    for (let i = 1; i < nums.length; i++) {
        const curNum = nums[i];

        while (stack.length > 0 && curNum > nums[stack[stack.length - 1]]) {
            // 出栈
            const index = stack.pop();
            resultArr[index] = i;
        }

        // 当前元素入栈
        stack.push(i);
    }

    return resultArr;
};

// // [-1,3,-1]
// const arr = [1, 3, 4, 2];
// const res = nextGreaterElement([4, 1, 2], arr);
// console.log('res: ', res);
