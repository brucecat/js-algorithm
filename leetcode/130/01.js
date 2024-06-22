var UF = /** @class */ (function () {
    function UF(n) {
        // 一开始互不连通
        this.count = n;
        // 父节点指针初始指向自己
        this.parent = new Array(n);
        this.size = new Array(n);
        for (var i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    /* 返回某个节点 x 的根节点 */
    UF.prototype.find = function (x) {
        // 根节点的 parent[x] == x
        while (this.parent[x] !== x) {
            // 进行路径压缩
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    };
    /* 将 p 和 q 连接 */
    UF.prototype.union = function (p, q) {
        // 如果某两个节点被连通，则让其中的（任意）
        // 一个节点的根节点接到另一个节点的根节点上
        var rootP = this.find(p);
        var rootQ = this.find(q);
        if (rootP === rootQ)
            return;
        // 小树接到大树下面，较平衡
        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }
        else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        this.count--; // 两个分量合二为一
    };
    /* 判断 p 和 q 是否连通 */
    UF.prototype.connected = function (p, q) {
        var rootP = this.find(p);
        var rootQ = this.find(q);
        return rootP === rootQ;
    };
    ;
    /* 返回图中有多少个连通分量 */
    UF.prototype.getCount = function () {
        return this.count;
    };
    ;
    return UF;
}());
/**
 * @param {[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length === 0)
        return;
    var m = board.length;
    var n = board[0].length;
    // 给 dummy 留一个额外位置
    var uf = new UF(m * n + 1);
    var dummy = m * n;
    // 将首列和末列的 O 与 dummy 连通
    for (var i = 0; i < m; i++) {
        if (board[i][0] === 'O')
            uf.union(i * n, dummy);
        if (board[i][n - 1] === 'O')
            uf.union(i * n + n - 1, dummy);
    }
    // 将首行和末行的 O 与 dummy 连通
    for (var j = 0; j < n; j++) {
        if (board[0][j] === 'O')
            uf.union(j, dummy);
        if (board[m - 1][j] === 'O')
            uf.union(n * (m - 1) + j, dummy);
    }
    // 方向数组 d 是上下左右搜索的常用手法
    var d = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    for (var i = 1; i < m - 1; i++)
        for (var j = 1; j < n - 1; j++)
            if (board[i][j] === 'O')
                // 将此 O 与上下左右的 O 连通
                for (var k = 0; k < 4; k++) {
                    var x = i + d[k][0];
                    var y = j + d[k][1];
                    if (board[x][y] === 'O')
                        uf.union(x * n + y, i * n + j);
                }
    // 所有不和 dummy 连通的 O，都要被替换
    for (var i = 1; i < m - 1; i++)
        for (var j = 1; j < n - 1; j++)
            if (!uf.connected(dummy, i * n + j))
                board[i][j] = 'X';
};
