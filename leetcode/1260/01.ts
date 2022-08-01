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

function shiftGrid(g: number[][], k: number): number[][] {
  const n = g.length, m = g[0].length
  const ans: number[][] = new Array<Array<number>>()
  for (let i = 0; i < n; i++) ans[i] = new Array<number>(m).fill(0)
  for (let i = 0; i < m; i++) {
      let tcol = (i + k) % m, trow = Math.floor(((i + k) / m)) % n, idx = 0
      while (idx != n) ans[(trow++) % n][tcol] = g[idx++][i]
  }
  return ans
};

 