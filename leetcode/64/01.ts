const maxNum = 200 * 200 + 1;
function minPathSum(grid: number[][]): number {
    const rowNum = grid.length;
    const colNum = grid[0].length;

    const dp = new Array(rowNum + 1).fill(0).map(() => new Array(colNum + 1).fill(maxNum));

    for (let i = 1; i <= rowNum; i++) {
        for (let j = 1; j <= colNum; j++) {
            if (i === 1 && j === 1) {
                dp[1][1] = grid[0][0];
            } else {
                let f1 = dp[i - 1][j];
                let f2 = dp[i][j - 1];
                dp[i][j] = Math.min(f1, f2) + grid[i - 1][j - 1];
            }
        }
    }

    console.log('dp: ', dp);

    return dp[rowNum][colNum];
}

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];
const res = minPathSum(grid);
console.log('res: ', res);
