// let S = 8 * 8 * 8 * 8, K = 1000
// let f:any[][] = new Array(S).map(item => new Array(K)) // mouse : 0 / cat : 1
// let g:string[] = [];
// let n, m, a, b, tx, ty;
// let dirs:number[][] = [[1, 0], [-1, 0], [ 0, 1], [ 0, -1 ]
// function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
// };
// // mouse : (x, y) / cat : (p, q)
// function dfs( x,  y,  p,  q,  k) {
//     let state = (x << 9) | (y << 6) | (p << 3) | q;
//     if (k == K - 1) return f[state][k] = 1;
//     if (x == p && y == q) return f[state][k] = 1;
//     if (x == tx && y == ty) return f[state][k] = 0;
//     if (p == tx && q == ty) return f[state][k] = 1;
//     if (f[state][k] != -1) return f[state][k];
//     if (k % 2 == 0) { // mouse
//         for (let di of dirs) {
//             for (let i = 0; i <= b; i++) {
//             let nx = x + di[0] * i, ny = y + di[1] * i;
//             if (nx < 0 || nx >= n || ny < 0 || ny >= m) break;
//             if (g[nx][ny] == '#') break;
//             if (dfs(nx, ny, p, q, k + 1) == 0) return f[state][k] = 0;
//         }
//     }
//     return f[state][k] = 1;
// } else { // cat
//     for (let  di of dirs) {
//         for (let i = 0; i <= a; i++) {
//         let np = p + di[0] * i, nq = q + di[1] * i;
//         if (np < 0 || np >= n || nq < 0 || nq >= m) break;
//         if (g[np][nq] == '#') break;
//         if (dfs(x, y, np, nq, k + 1) == 1) return f[state][k] = 1;
//     }
// }
// return f[state][k] = 0;
//         }
//     }
//     public boolean canMouseWin(String[] grid, let catJump, let mouseJump) {
//     g = grid;
//     n = g.length; m = g[0].length(); a = catJump; b = mouseJump;
//     for (let i = 0; i < S; i++) Arrays.fill(f[i], -1);
//     let x = 0, y = 0, p = 0, q = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (g[i].charAt(j) == 'M') {
//                 x = i; y = j;
//             } else if (g[i].charAt(j) == 'C') {
//                 p = i; q = j;
//             } else if (g[i].charAt(j) == 'F') {
//                 tx = i; ty = j;
//             }
//         }
//     }
//     return dfs(x, y, p, q, 0) == 0;
// }
