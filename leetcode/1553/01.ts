// 在每个步骤中，从 2 个选项中进行选择： minOranges = 1 + min( (n%2) + f(n/2), (n%3) + f(n/3) ) 其中 f(n) 是最小数字吃n个橙子的天数。

function minDays(n: number): number {
    // dp[i]：吃n个橘子的最小天数
    const dp = new Map([
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 2],
    ]);

    function helper(n: number): number {
        if (dp.has(n)) {
            return dp.get(n);
        }

        // 情况一：吃到2的倍数 然后吃一半
        const f1 = (n % 2) + 1 + helper(Math.floor(n / 2));

        // 情况二：吃到3的倍数
        const f2 = (n % 3) + 1 + helper(Math.floor(n / 3));

        const res = Math.min(f1, f2);
        dp.set(n, res);

        return res;
    }

    return helper(n);
}

const a = 61455274;
const res1 = minDays(a);
console.log('res1: ', res1);
