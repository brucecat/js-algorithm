/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const nums = line.split(" ").map(Number);
  console.log(getResult(nums));
});

function getResult(nums) {
  const count = {};

  // 统计各数字出现次数
  for (let num of nums) {
    count[num] = (count[num] ?? 0) + 1;
  }

  // 获取最大出现次数
  const max = Math.max(...Object.values(count));

  // 将众数挑选出来
  const mode = [];
  for (let k in count) {
    if (count[k] == max) mode.push(parseInt(k));
  }

  // 众数升序
  mode.sort((a, b) => a - b);

  // 中位数取值
  const mid = Math.floor(mode.length / 2);
  if (mode.length % 2 == 0) {
    // 偶数个数时，取中间两个位置的平均值
    return Math.floor((mode[mid] + mode[mid - 1]) / 2);
  } else {
    // 奇数个数时，取中间位置的值
    return mode[mid];
  }
}
