const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const firstLine = await readline();
    const secondLine = await readline();

    const nums = secondLine.split(' ');
    const res = stackOutInCase(nums);

    res.forEach((item) => {
        console.log(item);
    });
})();

// 穷举所有可能出栈顺序
const stackOutInCase = (items) => {
    let res = [];

    // toIn:还未进入
    // toOut:还未出去
    // track:已经出去的
    const dfs = (toIn, toOut, hadOut) => {
        // 结束的条件
        if (toIn.length === 0 && toOut.length === 0) {
            // 存放结果
            res.push(hadOut.join(''));

            // 结束本次dfs
            return;
        }

        // 从toIn里取出来
        // 1.不进车  从栈尾出车
        let train = toOut.pop();
        if (train) {
            hadOut.push(train);

            // 然后接着遍历
            dfs(toIn.slice(), toOut.slice(), hadOut.slice());

            // 撤销上一步
            toOut.push(train);
            hadOut.pop();
        }

        // 2.只进车，不出车
        train = toIn.shift();
        if (train) {
            toOut.push(train);

            // 然后接着遍历
            dfs(toIn.slice(), toOut.slice(), hadOut.slice());
        }
    };

    dfs(items, [], []);

    res.sort();
    return res.map((item) => {
        return item.split('').join(' ');
    });
};
