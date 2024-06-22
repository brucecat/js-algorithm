var DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
function cutOffTree(forest) {
    var m = forest.length, n = forest[0].length, trees = new Array();
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (forest[i][j] > 1) {
                trees.push([forest[i][j], i, j]);
            }
        }
    }
    trees.sort(function (a, b) { return a[0] - b[0]; });
    var bfs = function (x1, y1, x2, y2) {
        if (x1 == x2 && y1 == y2) {
            return 0;
        }
        var explored = new Set();
        var queue = new Array(), cost = 0;
        queue.push([x1, y1]);
        while (queue.length > 0) {
            var nxt = new Array();
            for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
                var _a = queue_1[_i], x = _a[0], y = _a[1];
                for (var _b = 0, DIRS_1 = DIRS; _b < DIRS_1.length; _b++) {
                    var _c = DIRS_1[_b], dx = _c[0], dy = _c[1];
                    var nx = x + dx, ny = y + dy;
                    var p = nx * n + ny;
                    if (0 <= nx && nx < m && 0 <= ny && ny < n && forest[nx][ny] > 0 && !explored.has(p)) {
                        if (nx == x2 && ny == y2) {
                            return cost + 1;
                        }
                        explored.add(p);
                        nxt.push([nx, ny]);
                    }
                }
            }
            queue = nxt;
            cost += 1;
        }
        return -1;
    };
    var ans = bfs(0, 0, trees[0][1], trees[0][2]);
    for (var i = 0; i < trees.length - 1; i++) {
        var _a = trees[i], x1 = _a[1], y1 = _a[2], _b = trees[i + 1], x2 = _b[1], y2 = _b[2];
        var res = bfs(x1, y1, x2, y2);
        if (res == -1) {
            return -1;
        }
        ans += res;
    }
    return ans;
}
;
