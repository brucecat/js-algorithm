
function allPathsSourceTarget(graph: number[][]): number[][] {
    if (graph.length < 1) {
        return []
    }
    const ans = [];

    /* 图的遍历框架 */
    const traverse = (cur: number, path: number[]) => {

        // 到达终点
        if (cur === graph.length - 1) {
            ans.push([...path]);
            // 可以在这直接 return，但要 removeLast 正确维护 path
            // path.removeLast();
            // return;
            // 不 return 也可以，因为图中不包含环，不会出现无限递归
        }
        // 递归每个相邻节点
        for (const val of graph[cur]) {
            path.push(val);
            traverse(val, path);

            // 从路径移出节点 s
            path.pop();
        }
    }


    traverse(0, [0])

    return ans
};

// https://leetcode.cn/problems/all-paths-from-source-to-target/solution/jsde-bao-sou-hui-su-he-bfs-by-huangshanh-mg0b/

