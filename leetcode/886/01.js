function possibleBipartition(n, dislikes) {
    // 转化成邻接表表示图结构
    var graph = buildGraph(n, dislikes);
    return isBipartite(graph);
    // return true
}
;
// 建图函数
function buildGraph(n, dislikes) {
    // 图节点编号为 1...n
    var graph = new Array(n + 1).fill(0);
    for (var i = 0; i <= n; i++) {
        graph[i] = [];
    }
    dislikes.forEach(function (edge) {
        var v = edge[1];
        var w = edge[0];
        // 「无向图」相当于「双向图」
        // v -> w
        graph[v].push(w);
        // w -> v
        graph[w].push(v);
    });
    console.log(graph);
    return graph;
}
// 输入邻接表，判断是否是二分图
// 用两种颜色将图中的所有顶点着色，
// 且使得任意一条边的两个端点的颜色都不相同
function isBipartite(graph) {
    var n = graph.length;
    // 记录图是否符合二分图性质
    var ok = true;
    // 记录图中节点的颜色，false 和 true 代表两种不同颜色
    var color = new Array(n).fill(false);
    // 记录图中节点是否被访问过
    var visited = new Array(n).fill(false);
    // DFS 遍历框架
    function traverse(graph, v) {
        // 如果已经确定不是二分图了，就不用浪费时间再递归遍历了
        if (!ok)
            return;
        visited[v] = true;
        graph[v].forEach(function (w) {
            if (!visited[w]) {
                // 相邻节点 w 没有被访问过
                // 那么应该给节点 w 涂上和节点 v 不同的颜色
                color[w] = !color[v];
                // 继续遍历 w
                traverse(graph, w);
            }
            else {
                // 相邻节点 w 已经被访问过
                // 根据 v 和 w 的颜色判断是否是二分图
                if (color[w] == color[v]) {
                    // 若相同，则此图不是二分图
                    ok = false;
                }
            }
        });
    }
    // 因为图不一定是联通的，可能存在多个子图
    // 所以要把每个节点都作为起点进行一次遍历
    // 如果发现任何一个子图不是二分图，整幅图都不算二分图
    for (var v = 0; v < n; v++) {
        if (!visited[v]) {
            traverse(graph, v);
        }
    }
    return ok;
}
;
