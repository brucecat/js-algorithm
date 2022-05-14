class UF {
    // 连通分量个数
    private count: number;

    // 存储每个节点的父节点
    private parent: number[];

    // n 为图中节点的个数
    constructor(n: number) {
        this.count = n;
        this.parent = new Array(n)
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    // 将节点 p 和节点 q 连通
    public union(p: number, q: number) {
        let rootP = this.find(p)
        let rootQ = this.find(q)

        if (rootP == rootQ) {
            return
        }

        this.parent[rootQ] = rootP

        // 两个连通分量合并成一个连通分量
        this.count--;
    }

    // 判断节点p和节点q是否联通
    public connected(p: number, q: number) {
        let rootP = this.find(p);
        let rootQ = this.find(q)
        return rootP == rootQ
    }

    // 压缩
    public find(x: number): number {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // 返回图中的连通分量个数
    public getCount(): number {
        return this.count
    }
}
