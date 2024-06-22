function nextGreaterElement(nums: number[]) {
    let n = nums.length;

    let res = new Array(n);
    let stack = [];

    // 倒着往里放入
    for (let i = n - 1; i >= 0; i--) {
        // 判定个子高矮
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            // 矮个子起开，反正也被挡着了
            stack.pop();
        }

        // nums[i]身后的 next greater number
        res[i] = stack.length == 0 ? -1 : stack[stack.length - 1];

        stack.push(nums[i]);
    }

    return res;
}

// 寻找第i个数右边下一个更大值
const findNextGreaterRight = (nums) => {
    const len = nums.length;
    const res = new Array(len).fill(0);
    const stack = [];
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }

        res[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }
    return res;
};
