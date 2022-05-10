// class State {
//     constructor(x, y, effortFromStart) {
//         this.x = x
//         this.y = y
//         this.effortFromStart = effortFromStart
//     }
// }
// State用一个三元组表示[x,y,effortFromStart]

// 方向数组，上下左右的坐标偏移量
const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]

// Dijkstra 算法，计算 (0, 0) 到 (m - 1, n - 1) 的最小体力消耗
function minimumEffortPath(heights) {
    let row = heights.length, col = heights[0].length

    // 特殊情况
    if (row == 0) {
        return -1
    }

    // 定义：从 (0, 0) 到 (i, j) 的最小体力消耗是 effortTo[i][j]
    // dp table 初始化为正无穷
    let effortTo = new Array(row)
    for (let i = 0; i < row; i++) {
        effortTo[i] = new Array(col).fill(Number.MAX_VALUE)
    }


    // base case，起点到起点的最小消耗就是 0
    effortTo[0][0] = 0;

    // 优先级队列，effortFromStart 较小的排在队头
    const compare = (a, b) => a[2] - b[2];
    let pq = new MinPriorityQueue({ compare });

    // 返回坐标 (x, y) 的上下左右相邻坐标
    function neighborList(x, y) {
        // 存储相邻节点
        let res = [];

        // 上下左右看
        for (let direction of directions) {
            let dx = x + direction[0]
            let dy = y + direction[1]
            if (dx >= row || dx < 0 || dy >= col || dy < 0) {
                // 索引越界
                continue;
            }
            res.push([dx, dy])
        }
        return res
    }

    // 从起点 (0, 0) 开始进行 BFS
    pq.enqueue([0, 0, 0]);

    // 循环
    while (!pq.isEmpty()) {
        let curState = pq.dequeue()
        let curX = curState[0];
        let curY = curState[1];
        let curEffortFromStart = curState[2];

        // 到达终点提前结束
        if (curX == row - 1 && curY == col - 1) {
            return curEffortFromStart;
        }

        // 
        if (curEffortFromStart > effortTo[curX][curY]) {
            continue;
        }

        // 将 (curX, curY) 的相邻坐标装入队列
        neighborList(curX, curY).forEach(neighbor => {
            let nextX = neighbor[0];
            let nextY = neighbor[1];

            // 计算从 (curX, curY) 达到 (nextX, nextY) 的消耗
            let effortToNextNode = Math.max(
                effortTo[curX][curY],
                Math.abs(heights[curX][curY] - heights[nextX][nextY])
            );


            // 更新 dp table
            if (effortTo[nextX][nextY] > effortToNextNode) {
                effortTo[nextX][nextY] = effortToNextNode;
                pq.enqueue([nextX, nextY, effortToNextNode]);
            }
        })
    }
    // 正常情况不会达到这个 return
    return -1;
};

