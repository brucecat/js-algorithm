// 来自异国的客人
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 输入处理
void (async function () {
  const [k, n, m] = (await readline()).split(" ").map(Number);
  console.log(getResult(k, n, m));
})();

function getResult(k, n, m) {
  // 如果幸运数>=进制基数，比如m=2进制，要找n>=2的幸运数，那么肯定是没有的
  if (n >= m) return 0;

  let count = 0;

  // 除留取余
  while (k > 0) {
    const remain = k % m; // 余数就是m进制的每一位上“位值”

    // 按照m进制的 “位值” 来对比幸运数 n
    if (remain == n) {
      count++;
    }

    k = (k - remain) / m;
  }

  return count;
}

