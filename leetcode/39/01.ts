function combinationSum(candidates: number[], target: number): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 记录 track 中的路径和
    let trackSum = 0;

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (nums: number[], start: number, target: number) => {
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
        for (let i = start; i < nums.length; i++) {
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
    }

    // -----------------开始主函数-------------

    if (candidates.length == 0) {
        return res;
    }
    helper(candidates, 0, target);
    return res;
};
