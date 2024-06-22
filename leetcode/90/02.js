function subsetsWithDup(nums) {
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
            // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            track.push(nums[i]);
            helper(nums, i + 1);
            track.pop();
        }
    };
    // 开始主函数
    // 先排序，让相同的元素靠在一起
    nums.sort();
    helper(nums, 0);
    // 返回结果
    return res;
}
;
