/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // bfs
    const target = graph.length - 1;
    let stack = [[0, '0']];
    const ans = [];
    while (stack.length) {
        const temp = [];
        let len = stack.length;
        while (len--) {
            const cur = stack.pop();
            if (cur[0] === target) { // 收割结果
                ans.push(cur[1].split(','));
            }
            for (const to of graph[cur[0]]) {
                temp.push([to, cur[1] + ',' + to]); // 入栈的同时，用逗号拼接形成路径
            }
        }
        stack = temp;
    }
    return ans;
};


/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // dfs爆搜
    const target = graph.length - 1;
    const dfs = (path, to) => {
        path.push(to);
        if (to === target) {
            ans.push([...path]);
            return;
        }
        for (const value of graph[to]) {
            dfs([...path], value);
        }
    }
    const ans = [];
    dfs([], 0);
    return ans;
};


/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // 回溯
    const ans = [];
    const dfs = (cur, path) => {
        if (cur === graph.length - 1) {
            ans.push([...path]);
        }
        for (const val of graph[cur]) {
            path.push(val);
            dfs(val, path);
            path.pop();
        }
    }
    dfs(0, [0]);
    return ans;
};
