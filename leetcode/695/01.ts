function maxAreaOfIsland(grid: number[][]): number {
    // 记录岛屿的最大面积
    let res = 0;
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                // 淹没岛屿，并更新最大岛屿面积
                res = Math.max(res, dfs(grid, i, j));
            }
        }
    }
    return res;
}

// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
function dfs(grid: number[][], i: number, j: number) {
    let m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        // 超出索引边界
        return 0;
    }
    if (grid[i][j] == 0) {
        // 已经是海水了
        return 0;
    }
    // 将 (i, j) 变成海水
    grid[i][j] = 0;

    return dfs(grid, i + 1, j)
        + dfs(grid, i, j + 1)
        + dfs(grid, i - 1, j)
        + dfs(grid, i, j - 1) + 1;
}