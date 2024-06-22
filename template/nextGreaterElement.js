function nextGreaterElement(nums) {
    var n = nums.length;
    var res = new Array(n);
    var stack = [];
    // 倒着往里放入
    for (var i = n - 1; i >= 0; i--) {
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
