const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
function cutOffTree(forest: number[][]): number {
    const m = forest.length, n = forest[0].length, trees = new Array()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (forest[i][j] > 1) {
                trees.push([forest[i][j], i, j])
            }
        }
    }
    trees.sort((a, b) => a[0] - b[0])

    const bfs = (x1: number, y1: number, x2: number, y2: number): number => {
        if (x1 == x2 && y1 == y2) {
            return 0
        }
        const explored = new Set()
        let queue = new Array(), cost = 0
        queue.push([x1, y1])
        while (queue.length > 0) {
            let nxt = new Array()
            for (const [x, y] of queue) {
                for (const [dx, dy] of DIRS) {
                    const nx = x + dx, ny = y + dy
                    const p = nx * n + ny
                    if (0 <= nx && nx < m && 0 <= ny && ny < n && forest[nx][ny] > 0 && !explored.has(p)) {
                        if (nx == x2 && ny == y2) {
                            return cost + 1
                        }
                        explored.add(p)
                        nxt.push([nx, ny])
                    }
                }
            }
            queue = nxt
            cost += 1
        }
        return -1
    }

    let ans = bfs(0, 0, trees[0][1], trees[0][2])
    for (let i = 0; i < trees.length - 1; i++) {
        const [, x1, y1] = trees[i], [, x2, y2] = trees[i + 1]
        const res = bfs(x1, y1, x2, y2)
        if (res == -1) {
            return -1
        }
        ans += res
    }
    return ans
};
