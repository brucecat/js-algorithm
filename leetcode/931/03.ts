const maxValue = 100 * 100 + 1;

// 压缩为一维数组 n*2 的长度， 或者是压缩为2个n长度的数组，就不用 n*n的空间占用了
function minFallingPathSum(matrix: number[][]): number {
    const maxColNum = matrix.length;
    if (maxColNum <= 1) {
        return Math.min(...matrix[0]);
    }

    const dp = new Array(2).fill(0).map(() => new Array(maxColNum).fill(maxValue));
    dp[0] = matrix[0].concat();

    // 计算dp数组,从第二行开始迭代
    for (let i = 1; i <= maxColNum - 1; i++) {
        // 开始计算前，初始化dp[1]的值
        dp[1] = dp[1].map(() => maxValue);

        for (let j = 0; j <= maxColNum - 1; j++) {
            const f1 = !(j > maxColNum - 1 || j < 0) ? dp[0][j] + matrix[i][j] : maxValue;
            const f2 = j - 1 >= 0 ? dp[0][j - 1] + matrix[i][j] : maxValue;
            const f3 = j + 1 <= maxColNum - 1 ? dp[0][j + 1] + matrix[i][j] : maxValue;

            dp[1][j] = Math.min(f1, f2, f3);
        }

        // 计算完了，把这一行的dp赋给第0行
        dp[0] = dp[1].concat();
    }

    return Math.min(...dp[1]);
}

const matrix = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
];
const res = minFallingPathSum(matrix);
console.log('res: ', res);
