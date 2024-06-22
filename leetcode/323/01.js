function countComponents(n, edges) {
    var uf = new UF(n);
    // 将每个节点进行连通
    edges.forEach(function (e) {
        uf.union(e[0], e[1]);
    });
    // 返回连通分量的个数
    return uf.getCount();
}
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
