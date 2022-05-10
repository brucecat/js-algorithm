// 主函数，输入邻接表，判断是否是二分图
// 用两种颜色将图中的所有顶点着色，
// 且使得任意一条边的两个端点的颜色都不相同
function isBipartite(graph: number[][]): boolean {
    let n = graph.length
    // 记录图是否符合二分图性质
    let ok: boolean = true;
    // 记录图中节点的颜色，false 和 true 代表两种不同颜色
    let color: boolean[] = new Array(n).fill(false)
    // 记录图中节点是否被访问过
    let visited: boolean[] = new Array(n).fill(false)

    // DFS 遍历框架
    function traverse(graph: number[][], v: number): void {
        // 如果已经确定不是二分图了，就不用浪费时间再递归遍历了
        if (!ok) return

        visited[v] = true

        graph[v].forEach(w => {
            if (!visited[w]) {
                // 相邻节点 w 没有被访问过
                // 那么应该给节点 w 涂上和节点 v 不同的颜色
                color[w] = !color[v];
                // 继续遍历 w
                traverse(graph, w);
            } else {
                // 相邻节点 w 已经被访问过
                // 根据 v 和 w 的颜色判断是否是二分图
                if (color[w] == color[v]) {
                    // 若相同，则此图不是二分图
                    ok = false;
                }
            }
        })
    }

    // 因为图不一定是联通的，可能存在多个子图
    // 所以要把每个节点都作为起点进行一次遍历
    // 如果发现任何一个子图不是二分图，整幅图都不算二分图
    for (let v = 0; v < n; v++) {
        if (!visited[v]) {
            traverse(graph, v);
        }
    }
    return ok;
};

