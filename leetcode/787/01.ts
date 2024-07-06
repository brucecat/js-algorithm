function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // 维护邻接表
    const graph = {};
    flights.forEach((flight) => {
        const from = flight[0];

        if (!graph[from]) {
            graph[from] = [];
        }

        const item = {
            to: flight[1],
            cost: flight[2],
        };

        graph[from].push(item);
    });
    console.log('graph: ', graph);

    // minCostList[i] 从源点src出发的情况下，到达节点i的最小花费
    const minCostList = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    minCostList[src] = 0;

    let curMap: any = {};
    curMap[src] = 0

    console.log('Object.entries(curMap): ', Object.entries(curMap));

    // 走 k +1 步的条件下...
    for (let i = 0; i <= k; i++) {
        const nextMap = {};

        // 遍历当前节点
        Object.entries(curMap).forEach(([from, preCost]) => {
            const lines = graph[from];
            for (let line of lines) {
                const to = line.to;
                const curCost = line.cost;
                minCostList[to] = Math.min(minCostList[to], preCost + curCost);

                nextMap[to] = Math.min(nextMap[to] ?? Number.MAX_SAFE_INTEGER, preCost + curCost)
            }
        });
        curMap = nextMap;
    }

    return minCostList[dst] === Number.MAX_SAFE_INTEGER ? -1 : minCostList[dst];
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

// const pq = new PriorityQueue();
