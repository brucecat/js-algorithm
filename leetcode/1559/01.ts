function containsCycle(grid: string[][]): boolean {
    let rowLen = grid.length;   // 行
    let colLen = grid[0].length; // 列


    if (rowLen < 2 || colLen < 2) {
        return false
    }

    let direction = [
        [0, 1],  // 向下
        [0, -1],   // 向上
        [1, 0], // 向右
        [-1, 0]     // 向左
    ]; // in order 1 to 4

    let visited = new Array(rowLen).fill(0).map(el => new Array(colLen).fill(false));



    function bfs(i, j, d1, d2): boolean {
        let minpq = new MinPriorityQueue({ priority: (item) => item[2] })
        minpq.enqueue([i, j, d1, d2])

        while (!minpq.isEmpty()) {
            let [x, y, prevD1, prevD2] = minpq.dequeue()

            if (visited[x][y]) {
                return true
            }

            visited[x][y] = true

            for (let [nextD1, nextD2] of direction) {
                if (nextD1 === -prevD1 && nextD2 === -prevD2) {
                    // not go back
                    continue;
                }

                let xx = x + nextD1;
                let yy = y + nextD2;


                if (xx < 0 || xx >= rowLen || yy < 0 || yy >= rowLen || grid[x][y] !== grid[xx][yy]) {
                    // 如果下一步越界了
                    continue;
                }

                minpq.enqueue([xx, yy, nextD1, nextD2])
            }
        }
        return false
    }

    for (let i = 0; i < rowLen; i++)
        for (let j = 0; j < colLen; j++) {
            if (!visited[i][j] && bfs(i, j, -1, -1)) {
                return true;
            }
        }
    return false;

};

// for each point, detect a cycle using BFS
// find next available position: not go back: prevDirection !== -nextDirection.
// BFS with postion & direction in to queue

