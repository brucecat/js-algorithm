/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    var ok = true;
    // 图节点编号从 1 开始
    var color = new Array(n + 1).fill(false);
    var visited = new Array(n + 1).fill(false);
    var buildGraph = function (n, dislikes) {
        // 图节点编号为 1...n
        var graph = new Array(n + 1).fill(0).map(function () { return new Array(); });
        for (var _i = 0, dislikes_1 = dislikes; _i < dislikes_1.length; _i++) {
            var edge = dislikes_1[_i];
            var v = edge[1];
            var w = edge[0];
            // 「无向图」相当于「双向图」
            // v -> w
            graph[v].push(w);
            // w -> v
            graph[w].push(v);
        }
        return graph;
    };
    var traverse = function (graph, v) {
        if (!ok)
            return;
        visited[v] = true;
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var w = _a[_i];
            if (!visited[w]) {
                /**
                 * 相邻节点 w 没有被访问过
                 * 那么应该给节点 w 涂上和节点 v 不同的颜色
                 */
                color[w] = !color[v];
                // 继续遍历 w
                traverse(graph, w);
            }
            else {
                /**
                 * 相邻节点 w 已经被访问过
                 * 根据 v 和 w 的颜色判断是否是二分图
                 */
                if (color[w] == color[v])
                    ok = false;
            }
        }
    };
    // 转化成邻接表表示图结构
    var graph = buildGraph(n, dislikes);
    for (var i = 1; i <= n; i++) {
        if (!visited[i])
            traverse(graph, i);
    }
    return ok;
};
