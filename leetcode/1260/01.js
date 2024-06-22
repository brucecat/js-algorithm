// class Node {
//   val:
//   next: any
//   constructor(val){
//   }
// }
// // 构建 有环的 链表
// const buildCircle = () => {
//   return;
// };
function shiftGrid(g, k) {
    var n = g.length, m = g[0].length;
    var ans = new Array();
    for (var i = 0; i < n; i++)
        ans[i] = new Array(m).fill(0);
    for (var i = 0; i < m; i++) {
        var tcol = (i + k) % m, trow = Math.floor(((i + k) / m)) % n, idx = 0;
        while (idx != n)
            ans[(trow++) % n][tcol] = g[idx++][i];
    }
    return ans;
}
;
