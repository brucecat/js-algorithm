function allPathsSourceTarget(graph: number[][]): number[][] {
    const res: number[][] = [];

    const N = graph.length - 1;

    const helper = (node: number, path: number[]) => {
        path.push(node);

        // 到结尾了
        if (node === N) {
            res.push(path.concat());

            path.pop();
            return;
        }

        // 做选择
        for (let t of graph[node]) {
            helper(t, path);
        }
        
        // 撤回选择
        path.pop();
    };

    helper(0, []);

    return res;
}

// const graph = [[1,2],[3],[3],[]]

const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
const res = allPathsSourceTarget(graph);
console.log('res: ', res);
