function superEggDrop(k: number, n: number): number {
    const memo = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(-1));

    // 定义：当前状态为 K 个鸡蛋，面对 N 层楼
    // dp[k][n]返回这个状态下最少的扔鸡蛋次数

    /**
     * @param {number} K 鸡蛋数
     * @param {number} N 楼层数
     * @return {number} 最少扔鸡蛋次数
     */
    const dp = (K: number, N: number): number => {
        // 基础情况
        // 蛋为1，一律为N
        if (K === 1) return N;

        // 楼为0，一律为0
        if (N === 0) return 0;

        // 蛋大于0且楼为1，一律为1
        if (K >= 1 && N === 1) return 1;

        // 如果计算过了，直接返回结果
        if (memo[K][N] !== -1) return memo[K][N];

        // 开始计算,从一楼开始
        let res = Number.MAX_VALUE;

        let left = 1;
        let right = N;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            // 鸡蛋在第 mid 层碎了和没碎两种情况
            //  +1 ：在第 mid 楼扔了一次
            const broken = dp(K - 1, mid - 1);
            const not_broken = dp(K, N - mid);

            if (broken > not_broken) {
                // 楼高了
                right = mid - 1;
                res = Math.min(res, broken + 1);
            } else {
                // 没碎，楼低了
                left = mid + 1;
                res = Math.min(res, not_broken + 1);
            }
        }

        memo[K][N] = res;

        return res;
    };

    // 返回从K个鸡蛋开始在N层楼中计算所需的最少扔鸡蛋数
    const res = dp(k, n);

    console.table(memo);

    return res;
}

const res = superEggDrop(3, 14);
console.log('res: ', res);
