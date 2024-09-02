function nextGreaterElements(nums: number[]): number[] {
    const len = nums.length;
    const stack = [];
    const resultArr = new Array(len).fill(-1);

    for (let i = 0; i <= 2 * len - 1; i++) {
        let curI = i % len;
        const curNum = nums[curI];

        while (stack.length > 0 && curNum > nums[stack[stack.length - 1]]) {
            // 出栈
            const curIndex = stack.pop();

            if (resultArr[curIndex] === -1) resultArr[curIndex] = curI;
        }

        // 当前元素入栈
        stack.push(curI);
    }

    return resultArr.map((i) => {
        if (i === -1) return -1;
        return nums[i];
    });
}

const nums = [1, 2, 3, 4, 3];
// [2,3,4,-1,4]

const res = nextGreaterElements(nums);
console.log('res: ', res);
