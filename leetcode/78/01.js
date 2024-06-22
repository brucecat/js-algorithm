function subsets(nums) {
    // 设置结果集    
    var res = [];
    // 记录回溯算法的递归路径
    var track = [];
    // 回溯算法核心函数，遍历子集问题的回溯树
    var helper = function (nums, start) {
        // 前序位置，每个节点的值都是一个子集
        res.push(track.concat());
        // 回溯算法标准框架
        for (var i = start; i < nums.length; i++) {
            // 做出选择
            track.push(nums[i]);
            // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            helper(nums, i + 1);
            // 撤销选择
            track.pop();
        }
    };
    // 开始主函数
    helper(nums, 0);
    // 返回结果
    return res;
}
;
