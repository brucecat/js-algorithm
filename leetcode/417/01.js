var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 从边出发，只要有比自己高的点，就往高处走，直到走不了为止。
// 最终返回太平洋和大西洋能走到的点的交集。
// 说明这些点可以流到太平洋和大西洋。
// 下 右 上 左
var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
function pacificAtlantic(heights) {
    var row = heights.length, col = heights[0].length;
    // 特殊情况
    if (row == 0) {
        return [];
    }
    // 能流入太平洋
    var pacificVisited = new Set();
    // 能流入大西洋
    var atlanticVisited = new Set();
    var dfs = function (x, y, visited) {
        // 构建一个点的标识 (1,2) => 1_2
        var point = x + "_" + y;
        if (visited.has(point)) {
            return;
        }
        visited.add(point);
        directions.forEach(function (direction) {
            // 下一个点 (dx, dy)
            var dx = x + direction[0];
            var dy = y + direction[1];
            // 判断是否出界
            var flag1 = dx >= 0 && dx <= row - 1 && dy >= 0 && dy <= col - 1;
            // 判断是否是更高点
            var flag2 = heights[dx][dy] >= heights[x][y];
            if (flag1 && flag2) {
                dfs(dx, dy, visited);
            }
        });
    };
    for (var i = 0; i < row; i++) {
        // 最左边一列点
        dfs(i, 0, pacificVisited);
        // 最右边一列点
        dfs(i, col - 1, atlanticVisited);
    }
    for (var j = 0; j < col; j++) {
        // 最上边一列点
        dfs(0, j, pacificVisited);
        // 最下边一列点
        dfs(row - 1, j, atlanticVisited);
    }
    // 求两个集合的交集
    var intersect = __spreadArrays(pacificVisited).filter(function (x) { return atlanticVisited.has(x); }).map(function (item) {
        return item.split("_").map(function (num) { return parseInt(num); });
    });
    console.log(intersect);
    return intersect;
}
;
var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var pacificAtlantic01 = function (heights) {
    var m = heights.length;
    var n = heights[0].length;
    var pacific = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
    var atlantic = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
    var bfs = function (row, col, ocean) {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        var queue = [];
        queue.push([row, col]);
        while (queue.length) {
            var cell = queue.shift();
            for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
                var dir = dirs_1[_i];
                var newRow = cell[0] + dir[0], newCol = cell[1] + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[cell[0]][cell[1]] && !ocean[newRow][newCol]) {
                    ocean[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }
    };
    for (var i = 0; i < m; i++) {
        bfs(i, 0, pacific);
    }
    for (var j = 1; j < n; j++) {
        bfs(0, j, pacific);
    }
    for (var i = 0; i < m; i++) {
        bfs(i, n - 1, atlantic);
    }
    for (var j = 0; j < n - 1; j++) {
        bfs(m - 1, j, atlantic);
    }
    var result = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                var cell = [];
                cell.push(i);
                cell.push(j);
                result.push(cell);
            }
        }
    }
    return result;
};
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic02 = function (heights) {
    var row = heights.length, col = heights[0].length;
    // 特殊情况
    if (row == 0) {
        return [];
    }
    // 能流入太平洋
    var pacificVisited = new Set();
    // 能流入大西洋
    var atlanticVisited = new Set();
    var dfs = function (x, y, visited) {
        // 构建一个点的标识 (1,2) => 1_2
        var point = x + "_" + y;
        if (visited.has(point)) {
            return;
        }
        visited.add(point);
        directions.forEach(function (direction) {
            // 下一个点 (dx, dy)
            var dx = x + direction[0];
            var dy = y + direction[1];
            // 判断是否出界
            var flag1 = dx >= 0 && dx <= row - 1 && dy >= 0 && dy <= col - 1;
            if (flag1) {
                // 判断是否是更高点
                var flag2 = heights[dx][dy] >= heights[x][y];
                if (flag2) {
                    dfs(dx, dy, visited);
                }
            }
        });
    };
    for (var i = 0; i < row; i++) {
        // 最左边一列点
        dfs(i, 0, pacificVisited);
        // 最右边一列点
        dfs(i, col - 1, atlanticVisited);
    }
    for (var j = 0; j < col; j++) {
        // 最上边一列点
        dfs(0, j, pacificVisited);
        // 最下边一列点
        dfs(row - 1, j, atlanticVisited);
    }
    // 求两个集合的交集
    var intersect = __spreadArrays(pacificVisited).filter(function (x) { return atlanticVisited.has(x); }).map(function (item) {
        return item.split("_").map(function (num) { return parseInt(num); });
    });
    console.log(intersect);
    return intersect;
};
var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var pacificAtlantic = function (heights) {
    m = heights.length;
    n = heights[0].length;
    var pacific = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
    var atlantic = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
    var dfs = function (row, col, ocean) {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        for (var _i = 0, dirs_2 = dirs; _i < dirs_2.length; _i++) {
            var dir = dirs_2[_i];
            var newRow = row + dir[0], newCol = col + dir[1];
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[row][col]) {
                dfs(newRow, newCol, ocean);
            }
        }
    };
    for (var i = 0; i < m; i++) {
        dfs(i, 0, pacific);
    }
    for (var j = 1; j < n; j++) {
        dfs(0, j, pacific);
    }
    for (var i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic);
    }
    for (var j = 0; j < n - 1; j++) {
        dfs(m - 1, j, atlantic);
    }
    var result = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                var cell = [];
                cell.push(i);
                cell.push(j);
                result.push(cell);
            }
        }
    }
    return result;
};
