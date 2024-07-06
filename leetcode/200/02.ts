// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

function numIslands(grid: string[][]): number {
    let res = 0;
    const rowNum = grid.length;
    const colNum = grid[0].length;

    // DFS做法: 找到 (i,j)连接的1，全部标记为0
    const dfs = (i, j) => {
        if (i < 0 || i >= rowNum || j < 0 || j >= colNum) {
            return;
        }

        if (grid[i][j] === '1') {
            grid[i][j] = '0';

            // 上
            dfs(i - 1, j);

            // 下
            dfs(i + 1, j);

            // 左
            dfs(i, j - 1);

            // 右
            dfs(i, j + 1);
        }

        return;
    };

    for (let i = 0; i <= rowNum - 1; i++) {
        for (let j = 0; j <= colNum - 1; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                res++;
            }
        }
    }

    console.log('grid: ', grid);
    return res;
}

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

const res = numIslands(grid);
console.log('res: ', res);
