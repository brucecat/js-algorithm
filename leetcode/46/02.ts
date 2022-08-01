// 还是全排列问题，这一次在`nums` 数组中的元素无重复且可复选的情况下，会有哪些排列？

// 比如输入 `nums = [1,2,3]`，那么这种条件下的全排列共有 3^3 = 27 种：
function permuteRepeat(nums: number[]): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 已经使用的
    const used: boolean[] = new Array(nums.length).fill(false);

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (nums: number[]) => {
        // base case 到达叶子节点
        if (track.length == nums.length) {
            res.push(track.concat());
            return;
        }

        // 回溯算法标准框架
        for (let i = 0; i < nums.length; i++) {
            // 做出选择
            track.push(nums[i]);

            // 进入下一层回溯树
            helper(nums);

            // 撤销选择
            track.pop();
        }
    }

    // 开始主函数
    helper(nums)

    // 返回结果
    return res;
};

