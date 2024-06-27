/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [prefix, suffix] = line.split(",");

  prefix = prefix.replace(/\/+$/, "");
  suffix = suffix.replace(/^\/+/, "");

  console.log(prefix + "/" + suffix);
});
