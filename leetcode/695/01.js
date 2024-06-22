function maxAreaOfIsland(grid) {
    // 记录岛屿的最大面积
    var res = 0;
    var m = grid.length, n = grid[0].length;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                // 淹没岛屿，并更新最大岛屿面积
                res = Math.max(res, dfs(grid, i, j));
            }
        }
    }
    return res;
}
// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
function dfs(grid, i, j) {
    var m = grid.length, n = grid[0].length;
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
