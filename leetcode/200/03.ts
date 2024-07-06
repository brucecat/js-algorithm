// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

// 主函数，计算岛屿数量
var numIslands = function(grid) {
  let res = 0;
  let m = grid.length, n = grid[0].length;
  // 遍历 grid
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
              // 每发现一个岛屿，岛屿数量加一
              res++;
              // 然后使用 DFS 将岛屿淹了
              dfs(grid, i, j);
          }
      }
  }
  return res;
};

// 从 (i, j) 开始，将与之相邻的陆地都变成海水
var dfs = function(grid, i, j) {
  let m = grid.length, n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n) {
      // 超出索引边界
      return;
  }
  if (grid[i][j] === '0') {
      // 已经是海水了
      return;
  }
  // 将 (i, j) 变成海水
  grid[i][j] = '0';
  // 淹没上下左右的陆地
  dfs(grid, i + 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
};
// 详细解析参见：
// https://labuladong.online/algo/slug.html?slug=number-of-islands
