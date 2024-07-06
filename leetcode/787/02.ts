function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, K: number): number {
    // 将中转站个数转化成边的条数
    const lineNum = K + 1;

    // 备忘录
    // 初始化备忘录，全部填一个特殊值
    const memo = new Array(n).fill(0).map(() => new Array(lineNum + 1).fill(-888));

    const indegree = new Map();

    for (const f of flights) {
        const [from, to, price] = f;
        // 记录谁指向该节点，以及之间的权重
        if (!indegree.has(to)) {
            indegree.set(to, []);
        }
        indegree.get(to).push({
            from,
            price,
        });
    }

    // 定义：从 src 出发，k 步之内到达 s 的最短路径权重
    function dp(s, k) {
        if (s === src) {
            return 0;
        }

        if (k === 0) {
            return -1;
        }

        // 查询备忘录，防止冗余
        if (memo[s][k] !== -888) {
            return memo[s][k];
        }

        // 初始化为最大值，方便等会取最小值
        let res = Number.MAX_VALUE;

        if (indegree.has(s)) {
            // 当 s 有入度节点时，分解为子问题
            for (const { from, price } of indegree.get(s)) {
                // 从 src 到达相邻的入度节点所需的最短路径权重
                const subProblem = dp(from, k - 1);
                // 跳过无解的情况
                if (subProblem !== -1) {
                    res = Math.min(res, subProblem + price);
                }
            }
        }

        // 存入备忘录
        memo[s][k] = res === Number.MAX_VALUE ? -1 : res;
        return memo[s][k];
    }

    return dp(dst, K);
}

const n = 3;
const edges = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
];
const src = 0;
const dst = 2;
const k = 1;

const res = findCheapestPrice(3, edges, 1, 2, 1);
console.log('res: ', res);
