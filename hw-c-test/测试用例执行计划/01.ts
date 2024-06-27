const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  const [n, m] = (await readline()).split(" ").map(Number);

  const features = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    features[i] = parseInt(await readline());
  }

  const cases = [];
  for (let i = 1; i <= m; i++) {
    const priority = (await readline())
      .split(" ")
      .map((id) => features[id - 0]) // id-0是为了将字符串id转为数值id
      .reduce((a, b) => a + b);

    cases.push([priority, i]);
  }

  cases
    .sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]))
    .forEach(([_, id]) => console.log(id)); // forEach入参使用了数组解构语法
})();