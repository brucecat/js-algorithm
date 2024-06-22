function dfs(grid, i, j, sb, dir) {
    var m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n
        || grid[i][j] == 0) {
        return;
    }
    // 前序遍历位置：进入 (i, j)
    grid[i][j] = 0;
    sb += dir + ',';
    dfs(grid, i - 1, j, sb, 1); // 上
    dfs(grid, i + 1, j, sb, 2); // 下
    dfs(grid, i, j - 1, sb, 3); // 左
    dfs(grid, i, j + 1, sb, 4); // 右
    // 后序遍历位置：离开 (i, j)
    sb += -dir + ',';
}
function numDistinctIslands(grid) {
    var m = grid.length, n = grid[0].length;
    // 记录所有岛屿的序列化结果
    var islands = new Set();
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                // 淹掉这个岛屿，同时存储岛屿的序列化结果
                var sb = '';
                // 初始的方向可以随便写，不影响正确性
                dfs(grid, i, j, sb, 666);
                islands.add(sb);
            }
        }
    }
    // 不相同的岛屿数量
    return islands.size;
}
