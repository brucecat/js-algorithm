function canFinish(numCourses, prerequisites) {
    // 记录一次 traverse 递归经过的节点
    var onPath = new Array(numCourses).fill(false);
    // 记录遍历过的节点，防止走回头路
    var visited = new Array(numCourses).fill(false);
    // 记录图中是否有环
    var hasCycle = false;
    // 构建图
    var graph = buildGraph(numCourses, prerequisites);
    // DFS 遍历框架
    function traverse(graph, v) {
        // 出现环
        if (onPath[v]) {
            hasCycle = true;
        }
        if (visited[v] || hasCycle) {
            // 如果已经找到了环，也不用再遍历了
            return;
        }
        // 前序遍历代码位置
        visited[v] = true;
        onPath[v] = true;
        graph[v].forEach(function (w) {
            traverse(graph, w);
        });
        // 后序遍历代码位置
        onPath[v] = false;
    }
    // 遍历图中的所有节点
    for (var i = 0; i < numCourses; i++) {
        traverse(graph, i);
    }
    // 只要没有循环依赖可以完成所有课程
    return !hasCycle;
}
;
// 建图函数
function buildGraph(n, prerequisites) {
    // 图节点编号为 1...n
    var graph = new Array(n + 1).fill(0);
    for (var i = 0; i <= n; i++) {
        graph[i] = [];
    }
    prerequisites.forEach(function (edge) {
        var from = edge[1];
        var to = edge[0];
        // 「无向图」相当于「双向图」
        // v -> w
        // graph[v].push(w);
        // // w -> v
        // graph[w].push(v);
        // 修完课程 from 才能修课程 to
        // 在图中添加一条从 from 指向 to 的有向边
        graph[from].push(to);
    });
    // console.log(graph);
    return graph;
}
