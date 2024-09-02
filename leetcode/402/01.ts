function removeKdigits(num: string, k: number): string {}

// 右侧下一个更小元素
const findNextSmaller = (nums: number[]) => {
    const len = nums.length;
    const stack = [];
    const resultArr = new Array(len).fill(-1);

    for (let i = 0; i < len; i++) {
        const curVal = nums[i];

        // 1、栈顶元素小于当前元素：
        // 2、栈顶元素不小于当前元素：
        while (stack.length > 0 && stack[stack.length - 1] < curVal) {
            stack.pop();
        }

        if (stack.length > 0) {
            // 遗留下来的是左侧比当前元素大的
            resultArr[i] = stack[stack.length - 1];
        }

        // 当前元素入栈
        stack.push(curVal);
    }
};
