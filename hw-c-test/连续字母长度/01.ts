// 给定一个字符串，只包含大写字母，求在包含同一字母的子串中，长度第 k 长的子串的长度，相同字母只取最长的那个子串。

/* JavaScript Node ACM模式 控制台输入获取 */
// const { count } = require("console");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const lines = [];
// rl.on("line", (line) => {
//   lines.push(line);

//   if (lines.length === 2) {
//     console.log(getResult(lines[0], lines[1]));
//     lines.length = 0;
//   }
// });

/* 算法逻辑 */
function getResult(s, k) {
    if (k <= 0) return -1;

    s += '0';
    console.log('s: ', s);

    let count = {};

    let b = s[0];
    let len = 1;

    for (let i = 1; i < s.length; i++) {
        const c = s[i];

        if (b == c) {
            len++;
        } else {
            if (count[b] == undefined || count[b] < len) {
                count[b] = len;
            }
            len = 1;
            b = c;
        }
    }

    const arr = Object.values(count);

    console.log('count: ', count);

    if (k > arr.length) {
        return -1;
    } else {
        arr.sort((a: any, b: any) => b - a);
        return arr[k - 1];
    }
}

const a = 'AAAAHHHBBCDHHHH';
const b = 3;

const res = getResult(a, b);
console.log('res: ', res);
