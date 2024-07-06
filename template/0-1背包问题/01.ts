// 背包问题的通常形式为：有N件物品和一个最多能背重量为W 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。
// 求解将哪些物品装入背包里物品价值总和最大。0-1背包和完全背包的区别就在于物品能否重复拿取。

const getResult = (weightList, valueList, capacity) => {
    const len = weightList.length;

    const dp = new Array(len + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
    console.log('dp: ', dp);

    for (let i = 1; i <= len; i++) {
        for (let w = 1; w <= capacity; w++) {
            // 第i个物品的重量
            const curWeight = weightList[i - 1];
            if (w < curWeight) {
                // 这种情况只能选择不装入背包
                dp[i][w] = dp[i - 1][w];
            } else {
                // 装入背包
                const f1 = dp[i - 1][w - curWeight] + valueList[i - 1];

                // 不装入背包
                const f2 = dp[i - 1][w];
                dp[i][w] = Math.max(f1, f2);
            }
        }
    }

    console.log('dp: ', dp);

    return dp[len][capacity];
};

const wt = [2, 1, 3];
const vals = [4, 2, 3];
const res = getResult(wt, vals, 4);
console.log('res: ', res);
xzaq