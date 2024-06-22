function containsCycle(grid) {
    var rowLen = grid.length; // 行
    var colLen = grid[0].length; // 列
    if (rowLen < 2 || colLen < 2) {
        return false;
    }
    var direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0] // 向左
    ]; // in order 1 to 4
    var visited = new Array(rowLen).fill(0).map(function (el) { return new Array(colLen).fill(false); });
    function bfs(i, j, d1, d2) {
        var minpq = new MinPriorityQueue({ priority: function (item) { return item[2]; } });
        minpq.enqueue([i, j, d1, d2]);
        while (!minpq.isEmpty()) {
            var _a = minpq.dequeue(), x = _a[0], y = _a[1], prevD1 = _a[2], prevD2 = _a[3];
            if (visited[x][y]) {
                return true;
            }
            visited[x][y] = true;
            for (var _i = 0, direction_1 = direction; _i < direction_1.length; _i++) {
                var _b = direction_1[_i], nextD1 = _b[0], nextD2 = _b[1];
                if (nextD1 === -prevD1 && nextD2 === -prevD2) {
                    // not go back
                    continue;
                }
                var xx = x + nextD1;
                var yy = y + nextD2;
                if (xx < 0 || xx >= rowLen || yy < 0 || yy >= rowLen || grid[x][y] !== grid[xx][yy]) {
                    // 如果下一步越界了
                    continue;
                }
                minpq.enqueue([xx, yy, nextD1, nextD2]);
            }
        }
        return false;
    }
    for (var i = 0; i < rowLen; i++)
        for (var j = 0; j < colLen; j++) {
            if (!visited[i][j] && bfs(i, j, -1, -1)) {
                return true;
            }
        }
    return false;
}
;
// for each point, detect a cycle using BFS
// find next available position: not go back: prevDirection !== -nextDirection.
// BFS with postion & direction in to queue
