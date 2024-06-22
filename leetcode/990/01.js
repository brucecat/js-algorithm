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
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    // 26 个英文字母
    var uf = new UF(26);
    // 先让相等的字母形成连通分量
    for (var _i = 0, equations_1 = equations; _i < equations_1.length; _i++) {
        var eq = equations_1[_i];
        if (eq[1] === '=') {
            var x = eq[0];
            var y = eq[3];
            // 'a'.charCodeAt() 为 97
            uf.union(x.charCodeAt(0) - 97, y.charCodeAt(0) - 97);
        }
    }
    // 检查不等关系是否打破相等关系的连通性
    for (var _a = 0, equations_2 = equations; _a < equations_2.length; _a++) {
        var eq = equations_2[_a];
        if (eq[1] === '!') {
            var x = eq[0];
            var y = eq[3];
            // 如果相等关系成立，就是逻辑冲突
            if (uf.connected(x.charCodeAt(0) - 97, y.charCodeAt(0) - 97))
                return false;
        }
    }
    return true;
};
