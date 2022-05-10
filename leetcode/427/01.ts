/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */
// 画递归树很容易发现每层都是 (1 / 4) n^2 的复杂度，共 logn 层，根节点是 n^2 ，所以是 O(n^2 + n^2 logn) = O(n^2logn)
// 递归（前缀和优化）
// 使用前缀和优化「判断全 0 和全 1」的操作：
// 对矩阵 grid 求前缀和数组 sum，
// 对于一个「以左上角为 (a, b)，右下角为 (c, d)」的子矩阵而言，
// 其所包含的格子总数为 tot=(c−a+1)∗(d−b+1) 个，
// 当且仅当矩阵和为 0 或 tot 时，矩阵全 0 或 1。

function construct(grid: number[][]): Node | null {
    const n = grid.length
    if (n < 1) {
        return null
    }

    // 维护一个二维数组 存储前缀和
    // preSum[i][j] 代表 grid[0][0] 到 grid[i-1][j-1]所有格子的数值总和
    const preSum = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + grid[i - 1][j - 1];
        }
    }

    function getSum(x1: number, y1: number, x2: number, y2: number): number {
        return preSum[x2][y2] - preSum[x1 - 1][y2] -
            preSum[x2][y1 - 1] + preSum[x1 - 1][y1 - 1];
    }

    //　矩阵左上角坐标、右下角坐标
    function dfs(x1: number, y1: number, x2: number, y2: number): Node | null {
        const len: number = x2 - x1 + 1
        const sum: number = getSum(x1, y1, x2, y2);
        if (sum === 0 || sum === len * len)
            return new Node(sum === 0 ? false : true, true); //矩阵值相同
        let m = len / 2;
        // 递归四块
        let res = new Node(false, false,
            dfs(x1, y1, x1 + m - 1, y1 + m - 1),
            dfs(x1, y1 + m, x1 + m - 1, y2),
            dfs(x1 + m, y1, x2, y1 + m - 1),
            dfs(x1 + m, y1 + m, x2, y2)
        );
        return res
    }

    return dfs(1, 1, n, n);
}


// Node dfs(int a, int b, int c, int d) {
//     int cur = sum[c + 1][d + 1] - sum[a][d + 1] - sum[c + 1][b] + sum[a][b];
//     int dx = c - a + 1, dy = d - b + 1, tot = dx * dy;
//     if (cur == 0 || cur == tot) return new Node(g[a][b] == 1, true);
//     Node root = new Node(g[a][b] == 1, false);
//     root.topLeft = dfs(a, b, a + dx / 2 - 1, b + dy / 2 - 1); 
//     root.topRight = dfs(a, b + dy / 2, a + dx / 2 - 1, d);
//     root.bottomLeft = dfs(a + dx / 2, b, c, b + dy / 2 - 1);
//     root.bottomRight = dfs(a + dx / 2, b + dy / 2, c, d);
//     return root;
// }



var construct01 = function (grid) {
    const n = grid.length;
    const s = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // 预处理前缀和
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= n; j++)
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + grid[i - 1][j - 1];

    function getSum(x1, y1, x2, y2) {
        return s[x2][y2] - s[x1 - 1][y2] - s[x2][y1 - 1] + s[x1 - 1][y1 - 1];
    }

    function dfs(x1, y1, x2, y2) { //矩阵左上角坐标、右下角坐标
        const len = x2 - x1 + 1, sum = getSum(x1, y1, x2, y2);
        if (sum === 0 || sum === len * len) return new Node(!!sum, true); //矩阵值相同
        let m = len / 2;
        // 递归四块
        return node = new Node(0, false,
            dfs(x1, y1, x1 + m - 1, y1 + m - 1),
            dfs(x1, y1 + m, x1 + m - 1, y2),
            dfs(x1 + m, y1, x2, y1 + m - 1),
            dfs(x1 + m, y1 + m, x2, y2)
        );
    }

    return dfs(1, 1, n, n);
};