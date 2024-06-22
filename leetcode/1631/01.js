var State = /** @class */ (function () {
    function State(x, y, effortFromStart) {
        this.x = x;
        this.y = y;
        this.effortFromStart = effortFromStart;
    }
    return State;
}());
// 方向数组，上下左右的坐标偏移量
var directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
// Dijkstra 算法，计算 (0, 0) 到 (m - 1, n - 1) 的最小体力消耗
function minimumEffortPath(heights) {
    var row = heights.length, col = heights[0].length;
    // 定义：从 (0, 0) 到 (i, j) 的最小体力消耗是 effortTo[i][j]
    // dp table 初始化为正无穷
    var effortTo = new Array(row).fill(new Array(col).fill(Number.MAX_VALUE));
    // base case，起点到起点的最小消耗就是 0
    effortTo[0][0] = 0;
    // 优先级队列，effortFromStart 较小的排在前面
    var pq = new PriorityQueue(function (a, b) {
        return a.effortFromStart - b.effortFromStart;
    });
    // 返回坐标 (x, y) 的上下左右相邻坐标
    function neighborList(x, y) {
        // 存储相邻节点
        var res = [];
        // 上下左右看
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var direction = directions_1[_i];
            var dx = x + direction[0];
            var dy = y + direction[1];
            if (dx >= row || dx < 0 || dy >= col || dy < 0) {
                // 索引越界
                continue;
            }
            res.push([dx, dy]);
        }
        return res;
    }
    // 从起点 (0, 0) 开始进行 BFS
    pq.enqueue(new State(0, 0, 0));
    var _loop_1 = function () {
        var curState = pq.dequeue();
        var curX = curState.x;
        var curY = curState.y;
        var curEffortFromStart = curState.effortFromStart;
        // 到达终点提前结束
        if (curX == row - 1 && curY == col - 1) {
            return { value: curEffortFromStart };
        }
        // 
        if (curEffortFromStart > effortTo[curX][curY]) {
            return "continue";
        }
        // 将 (curX, curY) 的相邻坐标装入队列
        neighborList(curX, curY).forEach(function (neighbor) {
            var nextX = neighbor[0];
            var nextY = neighbor[1];
            // 计算从 (curX, curY) 达到 (nextX, nextY) 的消耗
            var effortToNextNode = Math.max(effortTo[curX][curY], Math.abs(heights[curX][curY] - heights[nextX][nextY]));
            // 更新 dp table
            if (effortTo[nextX][nextY] > effortToNextNode) {
                effortTo[nextX][nextY] = effortToNextNode;
                pq.enqueue(new State(nextX, nextY, effortToNextNode));
            }
        });
    };
    while (!pq.isEmpty()) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // 正常情况不会达到这个 return
    return -1;
}
;
