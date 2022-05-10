// 从边出发，只要有比自己高的点，就往高处走，直到走不了为止。
// 最终返回太平洋和大西洋能走到的点的交集。
// 说明这些点可以流到太平洋和大西洋。
// 下 右 上 左
const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
function pacificAtlantic(heights: number[][]): number[][] {
    let row = heights.length, col = heights[0].length

    // 特殊情况
    if (row == 0) {
        return []
    }

    // 能流入太平洋
    let pacificVisited = new Set()

    // 能流入大西洋
    let atlanticVisited = new Set()

    let dfs = function (x, y, visited) {
        // 构建一个点的标识 (1,2) => 1_2
        let point = `${x}_${y}`
        if (visited.has(point)) {
            return
        }

        visited.add(point)

        directions.forEach((direction) => {
            // 下一个点 (dx, dy)
            let dx = x + direction[0]
            let dy = y + direction[1]

            // 判断是否出界
            let flag1 = dx >= 0 && dx <= row - 1 && dy >= 0 && dy <= col - 1

            // 判断是否是更高点
            let flag2 = heights[dx][dy] >= heights[x][y]
            if (flag1 && flag2) {
                dfs(dx, dy, visited)
            }
        })
    }

    for (let i = 0; i < row; i++) {
        // 最左边一列点
        dfs(i, 0, pacificVisited)

        // 最右边一列点
        dfs(i, col - 1, atlanticVisited)
    }

    for (let j = 0; j < col; j++) {
        // 最上边一列点
        dfs(0, j, pacificVisited)

        // 最下边一列点
        dfs(row - 1, j, atlanticVisited)
    }

    // 求两个集合的交集
    let intersect: number[][] = [...pacificVisited].filter((x: string): boolean => atlanticVisited.has(x)).map(
        (item: string): number[] => {
            return item.split("_").map(
                (num: string): number => parseInt(num)
            )
        })

    console.log(intersect);

    return intersect
};




const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var pacificAtlantic01 = function (heights) {
    let m = heights.length;
    let n = heights[0].length;
    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const bfs = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        const queue = [];
        queue.push([row, col]);
        while (queue.length) {
            const cell = queue.shift();
            for (const dir of dirs) {
                const newRow = cell[0] + dir[0], newCol = cell[1] + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[cell[0]][cell[1]] && !ocean[newRow][newCol]) {
                    ocean[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }
    };

    for (let i = 0; i < m; i++) {
        bfs(i, 0, pacific);
    }
    for (let j = 1; j < n; j++) {
        bfs(0, j, pacific);
    }
    for (let i = 0; i < m; i++) {
        bfs(i, n - 1, atlantic);
    }
    for (let j = 0; j < n - 1; j++) {
        bfs(m - 1, j, atlantic);
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                const cell = [];
                cell.push(i);
                cell.push(j);
                result.push(cell);
            }
        }
    }
    return result;
}




/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic02 = function (heights) {
    let row = heights.length, col = heights[0].length

    // 特殊情况
    if (row == 0) {
        return []
    }

    // 能流入太平洋
    let pacificVisited = new Set()

    // 能流入大西洋
    let atlanticVisited = new Set()

    let dfs = function (x, y, visited) {
        // 构建一个点的标识 (1,2) => 1_2
        let point = `${x}_${y}`
        if (visited.has(point)) {
            return
        }

        visited.add(point)

        directions.forEach((direction) => {
            // 下一个点 (dx, dy)
            let dx = x + direction[0]
            let dy = y + direction[1]

            // 判断是否出界
            let flag1 = dx >= 0 && dx <= row - 1 && dy >= 0 && dy <= col - 1

            if (flag1) {
                // 判断是否是更高点
                let flag2 = heights[dx][dy] >= heights[x][y]

                if (flag2) {
                    dfs(dx, dy, visited)
                }
            }
        })
    }

    for (let i = 0; i < row; i++) {
        // 最左边一列点
        dfs(i, 0, pacificVisited)

        // 最右边一列点
        dfs(i, col - 1, atlanticVisited)
    }

    for (let j = 0; j < col; j++) {
        // 最上边一列点
        dfs(0, j, pacificVisited)

        // 最下边一列点
        dfs(row - 1, j, atlanticVisited)
    }

    // 求两个集合的交集
    let intersect = [...pacificVisited].filter((x) => atlanticVisited.has(x)).map(
        item => {
            return item.split("_").map(
                num => parseInt(num)
            )
        }
    )

    console.log(intersect);

    return intersect
};


const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var pacificAtlantic = function(heights) {
    m = heights.length;
    n = heights[0].length;
    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const dfs = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        for (const dir of dirs) {
            const newRow = row + dir[0], newCol = col + dir[1];
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[row][col]) {
                dfs(newRow, newCol, ocean);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
    }
    for (let j = 1; j < n; j++) {
        dfs(0, j, pacific);
    }
    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic);
    }
    for (let j = 0; j < n - 1; j++) {
        dfs(m - 1, j, atlantic);
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                const cell = [];
                cell.push(i);
                cell.push(j);
                result.push(cell);
            }
        }
    }
    return result;
}