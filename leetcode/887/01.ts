// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

// function superEggDrop(k: number, n: number): number {
//     // const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));

//     // 定义：当前状态为 K 个鸡蛋，面对 N 层楼
//     // dp[k][n]返回这个状态下最少的扔鸡蛋次数
//     const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));

//     // 基础情况

//     // 楼为0时，一律为0个
//     // 蛋大于0且楼为1时，一律为1个
//     for (let i = 0; i <= k; i++) {
//         dp[i][0] = 0;

//         i >= 1 && (dp[i][1] = i);
//     }

//     // 蛋为0个，一律为0个
//     // 蛋为1个，一律为n，（需要线性扫描）
//     for (let i = 1; i <= n; i++) {
//         dp[1][i] = i;
//     }

//     const dpCalculator = (eggNum, height) => {
//         if (eggNum === 1) return height;
//         if (height === 1) return 1;
//         if (height === 0) return 0;

//         // 碎了
//         const f1 = dp[eggNum - 1][height - 1];

//         // 没碎
//         const f2 = dp[eggNum][n - height];

//         return Math.min(f1, f2) + 1;
//     };

//     // 开始计算dp[k][n], 从2蛋2楼开始迭代
//     for (let i = 2; i <= k; i++) {
//         for (let j = 2; j <= n; j++) {
//             dp[i][j] = dpCalculator(i, j);
//         }
//     }

//     console.log('dp: ');
//     console.table(dp);

//     return dp[k][n];
// }

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
        for (let i = 1; i <= N; i++) {
            // 碎了
            const f1 = dp(K - 1, i - 1);

            // 没碎  楼层要从 [N ... i] 算起, 即 dp(2,4) 和  「dp(2, 8) + 4楼没碎」 的情况是同一种(把4楼当做0层来想象)
            const f2 = dp(K, N - i);

            // 最坏情况下的最少扔鸡蛋次数
            const temp = Math.max(f1, f2) + 1;

            // 取所有最坏情况里的最少次数
            res = Math.min(res, temp);
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
