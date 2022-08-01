function subsetsWithDup(nums: number[]): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (nums: number[], start: number) => {
        // 前序位置，每个节点的值都是一个子集
        res.push(track.concat());

        // 回溯算法标准框架
        for (let i = start; i < nums.length; i++) {
            // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }

            track.push(nums[i]);
            helper(nums, i + 1);
            track.pop();
        }
    }

    // 开始主函数
    // 先排序，让相同的元素靠在一起
    nums.sort()
    helper(nums, 0)

    // 返回结果
    return res;
};
