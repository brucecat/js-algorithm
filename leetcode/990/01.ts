class UF {
    // 记录连通分量
    count;

    // 节点 x 的根节点是 parent[x]
    parent;

    // 记录树的“重量”
    size;

    constructor(n) {

        // 一开始互不连通
        this.count = n;

        // 父节点指针初始指向自己
        this.parent = new Array(n);

        this.size = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    /* 返回某个节点 x 的根节点 */
    find(x) {
        // 根节点的 parent[x] == x
        while (this.parent[x] !== x) {
            // 进行路径压缩
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    /* 将 p 和 q 连接 */
    union(p, q) {
        // 如果某两个节点被连通，则让其中的（任意）
        // 一个节点的根节点接到另一个节点的根节点上
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;

        // 小树接到大树下面，较平衡
        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }

        this.count--; // 两个分量合二为一
    }

    /* 判断 p 和 q 是否连通 */
    connected(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        return rootP === rootQ;
    };

    /* 返回图中有多少个连通分量 */
    getCount() {
        return this.count;
    };
}
/**
 * @param {string[]} equations
 * @return {boolean}
 */
let equationsPossible = function (equations) {
    // 26 个英文字母
    let uf = new UF(26);
    // 先让相等的字母形成连通分量
    for (let eq of equations) {
        if (eq[1] === '=') {
            let x = eq[0];
            let y = eq[3];

            // 'a'.charCodeAt() 为 97
            uf.union(x.charCodeAt(0) - 97, y.charCodeAt(0) - 97);
        }
    }
    // 检查不等关系是否打破相等关系的连通性
    for (let eq of equations) {
        if (eq[1] === '!') {
            let x = eq[0];
            let y = eq[3];
            // 如果相等关系成立，就是逻辑冲突
            if (uf.connected(x.charCodeAt(0) - 97, y.charCodeAt(0) - 97))
                return false;
        }
    }
    return true;
};