function permute(nums) {
    // 1. 设置结果集
    var result = [];
    // 2. 回溯
    var recursion = function (path, set) {
        // 2.1 设置回溯终止条件
        if (path.length === nums.length) {
            // 2.1.1 推入结果集
            result.push(path.concat());
            // 2.1.2 终止递归
            return;
        }
        // 2.2 遍历数组
        for (var i = 0; i < nums.length; i++) {
            // 2.2.1 必须是不存在 set 中的坐标
            if (!set.has(i)) {
                // 2.2.2 本地递归条件（用完记得删除）
                path.push(nums[i]);
                set.add(i);
                // 2.2.3 进一步递归
                recursion(path, set);
                // 2.2.4 回溯：撤回 2.2.2 的操作
                path.pop();
                set["delete"](i);
            }
        }
    };
    recursion([], new Set());
    // 3. 返回结果
    return result;
}
;
