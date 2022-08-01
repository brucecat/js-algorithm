function subsetsWithDup(nums: number[]): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 已经使用的
    const used: boolean[] = new Array(nums.length).fill(false);

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (nums: number[]) => {
        // base case
        if (track.length == nums.length) {
            res.push(track.concat());
            return;
        }

        // 回溯算法标准框架
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            // 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }

            // 做出选择
            track.push(nums[i]);
            used[i] = true;


            helper(nums);

            // 撤销选择
            track.pop();
            used[i] = false;
        }
    }

    // 开始主函数
    // 先排序，让相同的元素靠在一起
    nums.sort()
    helper(nums)

    // 返回结果
    return res;
};