function numEnclaves(grid) {
    var m = grid.length, n = grid[0].length;
    // 淹掉靠边的陆地
    for (var i = 0; i < m; i++) {
        dfs(grid, i, 0);
        dfs(grid, i, n - 1);
    }
    for (var j = 0; j < n; j++) {
        dfs(grid, 0, j);
        dfs(grid, m - 1, j);
    }
    // 数一数剩下的陆地
    var res = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                res += 1;
            }
        }
    }
    return res;
}
// 和之前的实现类似
function dfs(grid, i, j) {
    var m = grid.length, n = grid[0].length;
    // 超出索引
    if (i < 0 || j < 0 || i >= m || j >= n) {
        return;
    }
    if (grid[i][j] == 0) {
        // 已经是海水了
        return;
    }
    // 将 (i, j) 变成海水
    grid[i][j] = 0;
    // 淹没上下左右的陆地
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
}
