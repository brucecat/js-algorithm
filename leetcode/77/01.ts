function combine(n: number, k: number): number[][] {
    // 设置结果集    
    const res: number[][] = [];

    // 记录回溯算法的递归路径
    const track: number[] = [];

    // 回溯算法核心函数，遍历子集问题的回溯树
    const helper = (start: number, n: number, k: number) => {
        // base case
        if (k == track.length) {
            // 遍历到了第 k 层，收集当前节点的值
            res.push(track.concat());
            return;
        }

        // 回溯算法标准框架
        for (let i = start; i <= n; i++) {
            // 做出选择
            track.push(i)

            // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            helper(i + 1, n, k);

            // 撤销选择
            track.pop();
        }
    }

    // 开始主函数
    helper(1, n, k)

    // 返回结果
    return res;
};