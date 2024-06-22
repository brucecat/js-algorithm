var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function allPathsSourceTarget(graph) {
    if (graph.length < 1) {
        return [];
    }
    var ans = [];
    /* 图的遍历框架 */
    var traverse = function (cur, path) {
        // 到达终点
        if (cur === graph.length - 1) {
            ans.push(__spreadArrays(path));
            // 可以在这直接 return，但要 removeLast 正确维护 path
            // path.removeLast();
            // return;
            // 不 return 也可以，因为图中不包含环，不会出现无限递归
        }
        // 递归每个相邻节点
        for (var _i = 0, _a = graph[cur]; _i < _a.length; _i++) {
            var val = _a[_i];
            path.push(val);
            traverse(val, path);
            // 从路径移出节点 s
            path.pop();
        }
    };
    traverse(0, [0]);
    return ans;
}
;
// https://leetcode.cn/problems/all-paths-from-source-to-target/solution/jsde-bao-sou-hui-su-he-bfs-by-huangshanh-mg0b/
