function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const res = new Array(n);
    const stack: number[] = [];

    // 倒着往里放入
    for (let i = n - 1; i >= 0; i--) {
        // 判定个子高矮
        while (stack.length > 0 && stack[stack.length - 1] >= prices[i]) {
            // 高个子走开
            stack.pop();
        }

        // nums[i]身后的 next greater number
        if (stack.length == 0) {
            // 如果没有next greater number，就等于它自己
            res[i] = prices[i];
        } else {
            // 等于最终价
            res[i] = prices[i] - stack[stack.length - 1];
        }
        // res[i] = stack.length == 0 ? prices[i] : stack[stack.length - 1];

        stack.push(prices[i]);
    }

    return res;
}
