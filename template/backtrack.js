function backtrack(nums, start) {
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
    backtrack(nums, 0);
    // 返回结果
    return res;
}
// 形式一、元素无重不可复选，即 nums 中的元素都是唯一的，每个元素最多只能被使用一次，backtrack 核心代码如下：
/* 组合/子集问题回溯算法框架 */
function backtrack(nums, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 做选择
        track.push(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}
/* 排列问题回溯算法框架 */
function backtrack(nums) {
    for (var i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.push(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.removeLast();
        used[i] = false;
    }
}
// 形式二、元素可重不可复选，即 nums 中的元素可以存在重复，每个元素最多只能被使用一次，其关键在于排序和剪枝，backtrack 核心代码如下：
nums.sort();
/* 组合/子集问题回溯算法框架 */
function backtrack(nums, let, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 剪枝逻辑，跳过值相同的相邻树枝
        if (i > start && nums[i] == nums[i - 1]) {
            continue;
        }
        // 做选择
        track.push(nums[i]);
        // 注意参数
        backtrack(nums, i + 1);
        // 撤销选择
        track.removeLast();
    }
}
nums.sort();
/* 排列问题回溯算法框架 */
function backtrack(nums) {
    for (var i = 0; i < nums.length; i++) {
        // 剪枝逻辑
        if (used[i]) {
            continue;
        }
        // 剪枝逻辑，固定相同的元素在排列中的相对位置
        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }
        // 做选择
        used[i] = true;
        track.push(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.removeLast();
        used[i] = false;
    }
}
// 形式三、元素无重可复选，即 nums 中的元素都是唯一的，每个元素可以被使用若干次，只要删掉去重逻辑即可，backtrack 核心代码如下：
/* 组合/子集问题回溯算法框架 */
function backtrack(nums, let, start) {
    // 回溯算法标准框架
    for (var i = start; i < nums.length; i++) {
        // 做选择
        track.push(nums[i]);
        // 注意参数
        backtrack(nums, i);
        // 撤销选择
        track.removeLast();
    }
}
/* 排列问题回溯算法框架 */
function backtrack(nums) {
    for (var i = 0; i < nums.length; i++) {
        // 做选择
        track.push(nums[i]);
        backtrack(nums);
        // 撤销选择
        track.removeLast();
    }
}
