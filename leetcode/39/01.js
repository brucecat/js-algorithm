function combinationSum(candidates, target) {
    // 设置结果集    
    var res = [];
    // 记录回溯算法的递归路径
    var track = [];
    // 记录 track 中的路径和
    var trackSum = 0;
    // 回溯算法核心函数，遍历子集问题的回溯树
    var helper = function (nums, start, target) {
        // base case，找到目标和，记录结果
        if (trackSum == target) {
            res.push(track.concat());
            return;
        }
        // base case，超过目标和，停止向下遍历
        if (trackSum > target) {
            return;
        }
        // 回溯算法标准框架
        for (var i = start; i < nums.length; i++) {
            // 选择 nums[i]
            trackSum += nums[i];
            track.push(nums[i]);
            // 递归遍历下一层回溯树
            // 同一元素可重复使用，注意参数
            helper(nums, i, target);
            // 撤销选择 nums[i]
            trackSum -= nums[i];
            track.pop();
        }
    };
    // -----------------开始主函数-------------
    if (candidates.length == 0) {
        return res;
    }
    helper(candidates, 0, target);
    return res;
}
;
