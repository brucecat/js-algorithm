const maxValue = 100 * 100 + 1;

function minFallingPathSum(matrix: number[][]): number {
    const maxColNum = matrix.length;

    // 到达 matrix[cow][col]的路径最小和
    const dpCalculator = (row, col) => {
        if (row === 0) {
            return matrix[0][col];
        }

        // debugger
        const f1 = !(col > maxColNum - 1 || col < 0) ? dp[row - 1][col] + matrix[row][col] : maxValue
        const f2 = col - 1 >= 0 ? dp[row - 1][col - 1] + matrix[row][col] : maxValue
        const f3 = col + 1 <= maxColNum - 1 ? dp[row - 1][col + 1] + matrix[row][col] : maxValue

        return Math.min(f1, f2, f3);
    };

    const dp = new Array(maxColNum).fill(0).map(() => new Array(maxColNum).fill(Number.MAX_VALUE));

    // 计算dp数组
    for (let i = 0; i <= maxColNum - 1; i++) {
        for (let j = 0; j <= maxColNum - 1; j++) {
            dp[i][j] = dpCalculator(i, j);
        }
    }

    return Math.min(...dp[maxColNum - 1]);
}

const matrix = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
];
const res = minFallingPathSum(matrix);
console.log('res: ', res);
