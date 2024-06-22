var UF = /** @class */ (function () {
    // n 为图中节点的个数
    function UF(n) {
        this.count = n;
        this.parent = new Array(n);
        for (var i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }
    // 将节点 p 和节点 q 连通
    UF.prototype.union = function (p, q) {
        var rootP = this.find(p);
        var rootQ = this.find(q);
        if (rootP == rootQ) {
            return;
        }
        this.parent[rootQ] = rootP;
        // 两个连通分量合并成一个连通分量
        this.count--;
    };
    // 判断节点p和节点q是否联通
    UF.prototype.connected = function (p, q) {
        var rootP = this.find(p);
        var rootQ = this.find(q);
        return rootP == rootQ;
    };
    // 压缩
    UF.prototype.find = function (x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    };
    // 返回图中的连通分量个数
    UF.prototype.getCount = function () {
        return this.count;
    };
    return UF;
}());
