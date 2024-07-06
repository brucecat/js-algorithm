// A、B两个人玩抢7游戏，游戏规则为：

// A先报一个起始数字 X（10 ≤ 起始数字 ≤ 10000），B报下一个数字 Y （X - Y < 3），A再报一个数字 Z（Y - Z < 3），以此类推，直到其中一个抢到7，抢到7即为胜者；

// 在B赢得比赛的情况下，一共有多少种组合？

// 动态规划求解
const getResult = (initialNUm) => {
    const dpA = new Array(initialNUm + 2).fill(0);
    const dpB = new Array(initialNUm + 2).fill(0);

    dpA[initialNUm] = 1;
    dpB[initialNUm] = 0;

    for (let i = initialNUm - 1; i >= 7; i--) {
        dpB[i] = dpA[i + 1] + dpA[i + 2];

        dpA[i] = dpB[i + 1] + dpB[i + 2];
    }

    console.log('dpA: ', dpA);
    console.log('dpB: ', dpB);

    const res = dpB[7]

    return res;
};


const res = getResult(10)
console.log('res: ', res);
