function combinationSum3(k: number, n: number): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 记录 track 中的路径和
    let trackSum: number = 0;

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (start: number, n: number, k: number) => {
        // base case，找到目标和，记录结果
        if (k == track.length && trackSum == n) {
            // 遍历到了第 k 层，trackSun == n，收集
            res.push(track.concat());
            return;
        }

        // base case，超过目标和，停止向下遍历
        if (trackSum > n) {
            return;
        }

        // 回溯算法标准框架
        for (let i = start; i <= 9; i++) {
            // 选择  
            trackSum += i;
            track.push(i);

            // 递归遍历下一层回溯树
            helper(i + 1, n, k);

            // 撤销选择 nums[i]
            trackSum -= i;
            track.pop();
        }
    }

    // -----------------开始主函数-------------
    helper(1, n, k);
    return res;
};