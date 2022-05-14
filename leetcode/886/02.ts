/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    let ok = true;
    // 图节点编号从 1 开始
    let color = new Array(n + 1).fill(false);
    let visited = new Array(n + 1).fill(false);
    const buildGraph = (n, dislikes) => {
        // 图节点编号为 1...n
        let graph = new Array(n + 1).fill(0).map(() => new Array());
        for (let edge of dislikes) {
            let v = edge[1];
            let w = edge[0];
            // 「无向图」相当于「双向图」
            // v -> w
            graph[v].push(w);
            // w -> v
            graph[w].push(v);
        }
        return graph;
    };
    const traverse = (graph, v) => {
        if (!ok) return;
        visited[v] = true;
        for (let w of graph[v]) {
            if (!visited[w]) {
                /**
                 * 相邻节点 w 没有被访问过
                 * 那么应该给节点 w 涂上和节点 v 不同的颜色
                 */
                color[w] = !color[v];
                // 继续遍历 w
                traverse(graph, w);
            } else {
                /**
                 * 相邻节点 w 已经被访问过
                 * 根据 v 和 w 的颜色判断是否是二分图
                 */
                if (color[w] == color[v]) ok = false;
            }
        }
    };

    // 转化成邻接表表示图结构
    const graph = buildGraph(n, dislikes);
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) traverse(graph, i);
    }
    return ok;
};
