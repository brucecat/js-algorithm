function combine(n, k) {
    // 设置结果集    
    var res = [];
    // 记录回溯算法的递归路径
    var track = [];
    // 回溯算法核心函数，遍历子集问题的回溯树
    var helper = function (start, n, k) {
        // base case
        if (k == track.length) {
            // 遍历到了第 k 层，收集当前节点的值
            res.push(track.concat());
            return;
        }
        // 回溯算法标准框架
        for (var i = start; i <= n; i++) {
            // 做出选择
            track.push(i);
            // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            helper(i + 1, n, k);
            // 撤销选择
            track.pop();
        }
    };
    // 开始主函数
    helper(1, n, k);
    // 返回结果
    return res;
}
;
